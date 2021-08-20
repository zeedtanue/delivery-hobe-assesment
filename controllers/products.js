const Product = require('../models/products')
const Warehouse = require('../models/warehouse')
const Order = require('../models/orders')

const errorMsg = require('../lib/messages').error
const successMsg= require('../lib/messages').success

const mongoose = require('mongoose')

exports.postNewProduct= async(req,res)=>{
    try {
        const newProduct = new Product(req.body)
        await newProduct.save()

        res.status(201).json(successMsg.product_created)
    } catch (error) {
        res.status(500).json(errorMsg.internal)
        
    }
}

exports.getProducts = async(req,res)=>{
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json(errorMsg.internal)
    }
}

exports.getOneProduct = async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json(errorMsg.internal)
    }
}
exports.updateProduct = async(req,res)=>{
    try {
        await Product.findOneAndUpdate(req.params.id, req.body)
        res.status(200).json('product has been updated')
    } catch (error) {
        res.status(500).json(errorMsg.internal)
        
    }
}

exports.deleteProduct = async(req,res) =>{
    try {
        const deletedProduct = await Product.findOneAndDelete(req.params.id)
        res.status(200).json(deletedProduct)
    } catch (error) {
        res.status(500).json(errorMsg.internal)
        
    }
}

exports.getFiltered = async(req, res)=>{
    try {
        let filteredProduct = await Warehouse.find(req.query).populate('products.product','name description price')
        const response= filteredProduct.map(docs=>{
            return docs.products
        })
        return res.status(200).json(response)
    } catch (error) {
        console.log(error)
        return res.status(500).json(errorMsg.internal)
        
    }
}

exports.searchTerm = async(req,res)=>{
    try {
        const searchResult = await Product.find({
            $or:[
                {name:{$regex: req.query.search, $options: "i"}},
                {description:{$regex: req.query.search, $options: "i"}}
            ]
        })
        if(searchResult.length==0) return res.status(200).json(errorMsg.doesnt_match)
        else return res.status(200).json(searchResult)
    } catch (error) {
        return res.status(500).json(errorMsg.internal)

        
    }
}
exports.makeOrder = async(req,res)=>{
    const warehouseID= req.params.warehouseID
    const productID = req.params.productID
    const body = req.body
    try {
        const warehouse = await Warehouse.findById(warehouseID)
        let product = {}
        warehouse.products.forEach(element => {
            if(element.product==productID){
                product = element
            }
        });
        if(warehouse==null) return res.status(400).json('invalid id')
        if(product.stock_quantity<body.order_quantity) return res.status(400).json('not enough product')
        let order = new Order({
            product     :   productID,
            warehouse   :   warehouseID,
            address     :   body.address,
            order_quantity: body.order_quantity
        })
            await order.save()
            await Warehouse.updateOne(
                {_id: req.params.warehouseID, "products.product":productID},
                {$inc:{"products.$.stock_quantity":-body.order_quantity}}
            )
        return res.status(201).json(order)

        
    } catch (error) {
        console.log(error)
        return res.status(500).json(errorMsg.internal)
        
    }
}

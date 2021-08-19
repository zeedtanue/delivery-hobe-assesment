const Product = require('../models/products')

const errorMsg = require('../lib/messages').error
const successMsg= require('../lib/messages').success


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
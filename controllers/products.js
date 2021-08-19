const Product = require('../models/products')

exports.postNewProduct= async(req,res)=>{
    try {
        const newProduct = new Product(req.body)
        const newProductData= await newProduct.save()

        res.status(201).json(newProductData)
    } catch (error) {
        res.status(500).json(error)
        
    }
}

exports.getProducts = async(req,res)=>{
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(200).json(error)
    }
}
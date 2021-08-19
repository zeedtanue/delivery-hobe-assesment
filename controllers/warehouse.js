const Warehouse = require('../models/warehouse')
const errorMsg = require('../lib/messages').error
const successMsg= require('../lib/messages').success

exports.postWarehouse = async(req,res)=>{
    try {
        let newWarehouse = new Warehouse(req.body)
        await newWarehouse.save()
        return res.status(201).json(successMsg.warehouse_created)
    } catch (error) {
        return res.status(500).json(errorMsg.internal)
    }
}

exports.getAllWarehouses = async(req,res)=>{
    try {
        let warehouses = await Warehouse.find()
        return res.status(200).json(warehouses)
    } catch (error) {
        return res.status(500).json(errorMsg.internal)
        
    }
}

exports.getWarehouse = async(req,res)=>{
    try {
        let warehouse= await Warehouse.findById(req.params.id).populate('products.product')
        return res.status(200).json(warehouse)
    } catch (error) {
        return res.status(500).json(errorMsg.internal)        
    }
}

exports.addProducts = async(req,res)=>{
    try {
         await Warehouse.updateOne(
            {_id:req.params.warehouseID},
            {
                $push:{
                    products:{
                        product         :   req.params.productID,
                        sourcing_price  :   req.body.sourcing_price,
                        warehouse_stock :   req.body.warehouse_stock
                    }
                }
            }
        )
        return res.status(201).json(successMsg.product_added)
    } catch (error) {
        return res.status(500).json(errorMsg.internal)          
    }
}
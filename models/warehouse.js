const mongoose = require('mongoose')

const addressSchema = mongoose.Schema({
    street  :   {type:String},
    city    :   {type:String},
    zip     :   {type:Number}

})
const productSchema = mongoose.Schema({
    product         :   {type:mongoose.Schema.Types.ObjectId, ref:'product'},
    sourcing_price  :   {type:Number, default:0},
    warehouse_stock :   {type:Boolean,default:true}
})

const warehouseSchema = mongoose.Schema({
    name        :   {type:String, required:true},
    address     :   {addressSchema},
    area        :   {type:String, required:true},
    product     :   [productSchema],
})
module.exports = mongoose.model('warehouse', warehouseSchema, 'warehouses')

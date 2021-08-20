const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    product         :   {type:mongoose.Schema.Types.ObjectId, ref:'product'},
    warehouse         :   {type:mongoose.Schema.Types.ObjectId, ref:'warehouse'},
    address         :   {type:String},
    order_quantity  :   {type:Number, default:1}           
    },
    { timestamps : { 
        createdAt   : 'created_at',
        updatedAt   : 'updated_at' 
        }
    }
    );

module.exports = mongoose.model('order', orderSchema, 'orders')
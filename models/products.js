const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name        :      { type: String, required:true },
    description :      { type: String, required:true } ,
    price       :      { type: Number, default:0 },
    quantity    :      { type: Number, default:1},
    stock       :      { type: Boolean, default:true}   
    },
    { timestamps : { 
        createdAt   : 'created_at',
        updatedAt   : 'updated_at' 
        }
    }
    );

module.exports = mongoose.model('product', productSchema, 'products')
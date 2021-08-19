var express = require('express');
var router = express.Router();


const { postNewProduct, getProducts } = require('../controllers/products');


router.get('/', getProducts);


router.post('/new', postNewProduct)


module.exports = router;

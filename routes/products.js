var express = require('express');
var router = express.Router();


const { postNewProduct, getProducts, updateProduct } = require('../controllers/products');


router.get('/', getProducts);


router.post('/new', postNewProduct)

router.put('/:id', updateProduct)

module.exports = router;

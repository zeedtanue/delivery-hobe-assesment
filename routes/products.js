var express = require('express');
var router = express.Router();


const { postNewProduct,
        getProducts,
        updateProduct, 
        deleteProduct, 
        getOneProduct } = require('../controllers/products');


router.get('/', getProducts);


router.post('/new', postNewProduct)
router.get('/:id', getOneProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router;

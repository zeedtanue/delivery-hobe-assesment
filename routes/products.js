var express = require('express');
var router = express.Router();


const { postNewProduct,
        getProducts,
        updateProduct, 
        deleteProduct, 
        getOneProduct, 
        getFiltered} = require('../controllers/products');


router.get('/', getProducts);
//filter product by area or warehouse by query
  //in query it can go both warehouse and area or either of them
router.get('/filter', getFiltered)


router.post('/new', postNewProduct)
router.get('/:id', getOneProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)


module.exports = router;

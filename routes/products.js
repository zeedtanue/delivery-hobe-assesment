var express = require('express');
var router = express.Router();


const { postNewProduct,
        getProducts,
        updateProduct, 
        deleteProduct, 
        getOneProduct, 
        getFiltered,
        searchTerm,
        makeOrder} = require('../controllers/products');


router.get('/', getProducts);
//filter product by area or warehouse by query
  //in query it can go both warehouse and area or either of them
router.get('/filter', getFiltered)

//search term by query using both name and description
  //put ?search=termforsearch as params
router.get('/search', searchTerm)


router.post('/checkout/:warehouseID/:productID', makeOrder)

router.post('/new', postNewProduct)
router.get('/:id', getOneProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)


module.exports = router;

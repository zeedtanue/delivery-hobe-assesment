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

/**
 * @openapi
 * /api/products:
 *   get:
 *     description: Get All Products!
 *     responses:
 *       200:
 *         description: Returns an array with all the products.
 */
router.get('/', getProducts);


/**
 * @openapi
 * /api/products/filter:
 *   get:    
 *     description: Filter products by warehouse and area! Can be searched by both warehouse name and warehouse area or either of them.
 *     parameters:
 *     - name: name
 *       description: name of the warehouse, try with East Warehouse
 *       in: query
 *        type:string
 *     - area: area
 *       description: Area of the warehouse, try Mohakhali/Tejgaon
 *       in: query
 *        type:string
 *     responses:
 *       200:
 *         description: Returns an array with products with sourcing pricce and stock quantity and stock status.
 */


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

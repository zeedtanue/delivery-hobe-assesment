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
 *     - name: area
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


/**
 * @openapi
 * /api/products/searchProduct:
 *   get:    
 *     description: Search products by name or description. 
 *     parameters:
 *     - in: query
 *       name: search
 *       description: Search term you want to use. get something from the product list to test
 *        type:string
 *        required:true
 *     responses:
 *       200:
 *         description: Returns an array with all the products that matches with the search term.
 */

//search term by query using both name and description
  //put ?search=termforsearch as query
router.get('/searchProduct', searchTerm)

/**
 * @openapi
 * /api/products/checkout/{:warehouseID}/{:productID}:
 *   post:    
 *     description: Checkout route for a customers. decrese warehouse stock 
 *     parameters:
 *     - name: warehouseID
 *       description: Warehouse id of selected warehouse
 *       in: path
 *        type:string
 *        required:true
 *     - name: productID
 *       description: product id of selected product from warehouse
 *       in: path
 *        type:string
 *        required:true
 *     responses:
 *       200:
 *         description: Returns an object with order details.
 */

router.post('/checkout/:warehouseID/:productID', makeOrder)


/**
 * @openapi
 * /api/products/new:
 *   post:    
 *     description: Adding new product 
 *     parameters:
 *     - name: name
 *       description: name of the product
 *       in: path
 *        type:string
 *        required:true
 *     - name: description
 *       description: description of the product
 *       in: path
 *        type:string
 *        required:true
 *     - name: price
 *       description: price of the product
 *       in: path
 *        type:number
 *        required:true
 *     - name: quantity
 *       description: quantity of the product
 *       in: path
 *        type:number
 *        required:true
 *     - name: stock
 *       description: stock status of the product
 *       in: path
 *        type:boolean
 *        required:true
 * 
 * 
 *     responses:
 *       200:
 *         description: Procuct successfully created .
 */
router.post('/new', postNewProduct)
router.get('/:id', getOneProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)


module.exports = router;

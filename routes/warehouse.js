var express = require('express');
var router = express.Router();

const { 
    postWarehouse, 
    getAllWarehouses, 
    getWarehouse, 
    addProducts, 
    noStock,
    restock} = require('../controllers/warehouse');


router.get('/', getAllWarehouses);
router.get('/:id', getWarehouse)
router.post('/new', postWarehouse);
router.put('/addProduct/:warehouseID/:productID', addProducts)

router.put('/no_stock/:warehouseID/:productID', noStock)
router.put('/restock/:warehouseID/:productID', restock)



module.exports = router;
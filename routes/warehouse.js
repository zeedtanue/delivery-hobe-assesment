var express = require('express');
var router = express.Router();

const { 
    postWarehouse, 
    getAllWarehouses, 
    getWarehouse, 
    addProducts } = require('../controllers/warehouse');


router.get('/', getAllWarehouses);
router.get('/:id', getWarehouse)
router.post('/new', postWarehouse);
router.put('/addProduct/:warehouseID/:productID', addProducts)


module.exports = router;
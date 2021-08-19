var express = require('express');
const { postWarehouse, getAllWarehouses, getWarehouse } = require('../controllers/warehouse');
var router = express.Router();


router.get('/', getAllWarehouses);
router.get('/:id', getWarehouse)
router.post('/new', postWarehouse);

module.exports = router;
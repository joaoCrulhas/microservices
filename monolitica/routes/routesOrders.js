const express = require('express');
const router = express.Router();
const OrdersController = require('../controllers/OrdersController.js');

router.get('/', OrdersController.index);
router.get('/:id', OrdersController.show);
router.post('/', OrdersController.store);
router.put('/:id', OrdersController.update)

module.exports = router;
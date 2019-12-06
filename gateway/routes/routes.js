const express = require('express');
const router = express.Router();
const GatewayController = require('../controllers/GatewayController.js');

// Home page route.
router.get('/orders', GatewayController.getOrders)
router.get('/orders/:id', GatewayController.getOrder)
router.post('/orders', GatewayController.storeOrder)

router.get('/books', GatewayController.getBooks)
router.get('/books/:id', GatewayController.getBook)
router.post('/books', GatewayController.storeBook)

router.get('/customers', GatewayController.getCustomers)
router.get('/customers/:id', GatewayController.getCustomer)
router.post('/customers', GatewayController.storeCustomer)



module.exports = router;
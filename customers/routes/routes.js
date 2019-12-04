const express = require('express');
const router = express.Router();
const CustomersController = require('../controllers/CustomersController');

// Home page route.
router.get('/', CustomersController.index)
router.get('/:id', CustomersController.show)
router.post('/', CustomersController.store)
router.put('/:id', CustomersController.update)

module.exports = router;
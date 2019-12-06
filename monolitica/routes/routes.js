const express = require('express');
const router = express.Router();
const BooksController = require('../controllers/BooksController.js');

router.get('/', BooksController.index);
router.get('/:id', BooksController.show);
router.post('/', BooksController.store);
router.put('/:id', BooksController.update)

module.exports = router;
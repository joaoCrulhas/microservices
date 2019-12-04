const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    author: {
        type: String
    },
    title: {
        type: String
    }
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
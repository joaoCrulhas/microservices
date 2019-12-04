const { models } = require('../models/index.js')

exports.update = (req, res, next) => {
    const { id } = req.params
    const updateBody = req.body;

    const filter = { _id: id }
    models.Book.findOneAndUpdate(filter, updateBody, { new:true } , (error, book) => {
        if(error) {
            res.json({
                error: true,
                msg: "error to update a book"
            });
        }
        res.json({
            book
        });
    })

}

exports.store = async (req, res, next) => {
    const { author, title } = req.body;
    const book = new models.Book({
        author,
        title
    });
    await book.save((error, doc) => {
        if (error) {
            res.json({
                error: true,
                msg: 'error to create new book'
            })
        }
        res.json({
            msg: 'Book created!',
            book: doc
        })
    })
}

exports.index = (req, res, next) => {
    const books = models.Book.find((error, books)=>{
        if (error) {
            res.json({
                error: true
            });
        }
        res.json({
            books
        });
    })

}

exports.show = (req, res, next) => {
    const { id } = req.params
    const books = models.Book.findById(id, (error, book) => {
        res.json({
            book
        });
    });
}

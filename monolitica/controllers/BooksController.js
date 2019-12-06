const { books } = require('../data/data.js');

exports.update = (req, res, next) => {
    res.json({
        msg: "Nao implementado"
    }, 400)   
}

exports.store = async (req, res, next) => {
    books.push({
        nome: req.body.titulo,
        id: books.length,
    });
    res.json({
        msg: "Book created!",
        nome: req.body.titulo,
        id: books.length,
   })
}

exports.index = (req, res, next) => {
    
    res.json({
        books
    })
}

exports.show = (req, res, next) => {
    const book = books.find( book => book.id == req.params.id);
    res.json({
        book
    });
}

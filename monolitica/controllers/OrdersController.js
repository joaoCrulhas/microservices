const { orders, books, customers } = require('../data/data.js');

exports.update = (req, res, next) => {
    res.json({
        msg: "Nao implementado"
    }, 400)   
}

exports.store = async (req, res, next) => {
    const { book_id, customer_id } = req.body;
    const customer = customers.find(customer => customer.id == customer_id)
    const book = books.find(book => book.id == book_id)
    const newOrder = {
        id: (orders.length + 1 ),
        book,
        customer,
    }
    orders.push(newOrder);
    res.json({
        newOrder
    })
}

exports.index = (req, res, next) => {
    res.json({
        orders
    })
}

exports.show = (req, res, next) => {
    const order = orders.find( order => order.id == req.params.id);
    res.json({
        order
    });
}

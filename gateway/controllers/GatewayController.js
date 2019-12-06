const axios = require('axios');

exports.getOrders = async (req, res, next) => {
    const  ordersServicee  = await axios.get('http://127.0.0.1:4575/orders');
    const { orders } = ordersServicee.data;
    res.json({
        orders
    })
}

exports.getOrder = async (req, res, next) => {
    const  ordersServicee  = await axios.get('http://127.0.0.1:4575/orders/'+req.params.id);
    const { BookID, CustomerID } = ordersServicee.data.order;
    const book = await axios.get('http://127.0.0.1:4560/books/'+ BookID);
    const customer = await axios.get(`http://127.0.0.1:4800/customers/${CustomerID}`);
    res.json({
        msg: "update",
        book: book.data.book,
        customer: customer.data.customer,
    })
}

exports.storeOrder = async (req, res, next) => {
    const { BookID, CustomerID, initialDate, deliveryDate } = req.body
    const request = {BookID, CustomerID, initialDate, deliveryDate};
    const orderResponse = await axios.post('http://127.0.0.1:4575/orders', request)
    const {data} = orderResponse;
    res.json({
        data
    });
}

exports.getBooks = async (req, res, next) => {
    const books = await axios.get('http://127.0.0.1:4560/books');
    const { data } = books
    const b = data.books
    res.json({
        books: b
    });

}


exports.getBook = async (req, res, next) => {
    const book = await axios.get('http://127.0.0.1:4560/books/'+ req.params.id);
    const { data } = book
    const b = data.book
    res.json({
        book: b
    });
}

exports.storeBook = async (req, res, next) => {
    const newBook = {
        author: req.body.author,
        title: req.body.title,
    }
    const books = await axios.post('http://127.0.0.1:4560/books', newBook);
    const { data } = books;
    res.json({
        response: data
    });
}



exports.getCustomers = async (req, res, next) => {
    const {data} = await axios.get(`http://127.0.0.1:4800/customers`);
    console.log(data);
    res.json({
        data
    });
}


exports.getCustomer = async (req, res, next) => {
    const {data} = await axios.get(`http://127.0.0.1:4800/customers/${req.params.id}`);
    console.log(data);
    res.json({
        data
    });

}

exports.storeCustomer = async (req, res, next) => {
    const newCustomer = {
        name: req.body.name,
    }
    const customer = await axios.post('http://127.0.0.1:4800/customers', newCustomer);
    const { data } = customer;
    res.json({
        response: data
    });
}
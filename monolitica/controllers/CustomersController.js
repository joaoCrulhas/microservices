const { customers } = require('../data/data.js');

exports.update = (req, res, next) => {
    res.json({
        msg: "Nao implementado"
    }, 400)   
}

exports.store = async (req, res, next) => {
    customers.push({
        nome: req.body.nome,
        id: (customers.length+1),
    });

    res.json({
        customers,
   })
}

exports.index = (req, res, next) => {
    
    res.json({
        customers
    })
}

exports.show = (req, res, next) => {
    const customer = customers.find( customer => customer.id == req.params.id);
    res.json({
        customer
    });
}

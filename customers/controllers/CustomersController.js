const { read, readByID, createCustomer } = require('../database/FileService.js');

exports.update = (req, res, next) => {
    res.json({
        msg: "update"
    })
}



exports.index = async (req, res, next) => {
    const customers = await read();
    res.json({
        customers
    })
}

exports.show = (req, res, next) => {
    const customer = readByID(req.params.id);
    res.json({
        customer
    });
}
exports.store = async (req, res, next) => {
    createCustomer(req.body);
    res.json({
        msg: 'Customer created'
    })
}

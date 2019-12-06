const { models } = require('../models/index.js')
const mongose = require('mongoose');
const axios = require('axios');

exports.update = (req, res, next) => {
    res.json({
        msg: 'sai fora'
    });
}

exports.store = async (req, res, next) => {
    const newOrder = {
        BookID: mongose.Types.ObjectId(req.body.BookID),
        CustomerID: req.body.CustomerID,
        initialDate: req.body.initialDate,
        deliveryDate: req.body.deliveryDate
    };
    const order = new models.Order(newOrder);
    await order.save((error, doc) => {
        if (error) {
            res.json({
                error: true,
                msg: 'error to create new order'
            })
        }
        res.json({
            msg: 'order created!',
            order: doc
        })
    })
}

exports.index = async (req, res, next) => {
    const orders = await models.Order.find();
    res.json({
        orders
    });
}

exports.show = async (req, res, next) => {
    const { id } = req.params;
    const order = await models.Order.findById({_id : id});
    const { BookID, CustomerID, initialDate, deliveryDate } = order
    const orderComplete = {
        CustomerID,        
        BookID,
        initialDate,
        deliveryDate,
    }
    
    res.json({
        order: orderComplete
    });
}

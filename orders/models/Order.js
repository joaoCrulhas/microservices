const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    BookID: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
    CustomerID: {
        type: Number,
        required: true,
    },
    initialDate: {
        type: Date,
        required: true,
    },
    deliveryDate: {
        type: Date,
        required: true,
    }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
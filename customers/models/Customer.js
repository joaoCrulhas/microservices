const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
    name: {
        type: String
    }
});
const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
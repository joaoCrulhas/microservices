const mongoose = require('mongoose');
const Order = require('./Order.js');
const { DATABASE_URL_ORDER } = require("../../env.js");

const connectDb = () => mongoose.connect(DATABASE_URL_ORDER, { useFindAndModify:false, useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('DB Connected')
});

const models = { Order };

module.exports = {
    connectDb,
    models
}

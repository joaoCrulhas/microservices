const mongoose = require('mongoose');
const Customer = require('./Customer');
const { DATABASE_URL_CUSTOMER } = require("../../env.js");

const connectDb = () => mongoose.connect(DATABASE_URL_CUSTOMER, { useFindAndModify:false, useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('DB Connected')
});

const models = { Customer };

module.exports = {
    connectDb,
    models
}

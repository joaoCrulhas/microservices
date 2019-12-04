const mongoose = require('mongoose');
const Book = require('./Books.js');
const { DATABASE_URL } = require("../../env.js");
const connectDb = () => mongoose.connect(DATABASE_URL, { useFindAndModify:false, useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('DB Connected')
});

const models = { Book };
// export { connectDb };
// export default models;

module.exports = {
    connectDb,
    models
}

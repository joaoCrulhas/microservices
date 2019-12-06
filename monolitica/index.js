const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');
const routesCustomers = require('./routes/routesCustomers.js');
const routesOrders = require('./routes/routesOrders.js');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/books', routes);
app.use('/customers', routesCustomers);
app.use('/orders', routesOrders);


app.listen(4318, () =>
    console.log(`port 4318!`),
);
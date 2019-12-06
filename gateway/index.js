const express = require('express');
const app = express();
const routes = require('./routes/routes.js');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/gateway', routes);

app.listen(4577, () =>
    console.log(`port 4577!`),
);

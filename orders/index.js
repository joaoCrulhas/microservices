const express = require('express');
const app = express();
const routes = require('./routes/routes.js');
const { connectDb } = require('./models/index.js');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/orders', routes);

connectDb().then(async () => {
  app.listen(4575, () =>
    console.log(`port 4575!`),
  );
});
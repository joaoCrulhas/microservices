const express = require('express');
const app = express();
const routes = require('./routes/routes.js');
const { connectDb } = require('./models/index.js');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/books', routes);

connectDb().then(async () => {
    app.listen(4560, () =>
      console.log(`port 4560!`),
    );
  });


// app.listen(4560, () => {
//     console.log('Running port 4560')
// });
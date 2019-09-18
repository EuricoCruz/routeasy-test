require('dotenv').config();
const express = require('express');

const app = express();

const mongoose = require('mongoose');

const path = require('path');

const bodyParser = require('body-parser');

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then((sucess) => {
    console.log(
      `Connected to Mongo! Database name: "${sucess.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err);
});

const app_name = require('./package.json').name;
const debug = require('debug')(
  `${app_name}:${path.basename(__filename).split('.')[0]}`
);

// Body-parser Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

const deliveryRoutes = require('./routes/deliveryRoutes')
app.use('/', deliveryRoutes);

app.listen(process.env.PORT, () => console.log(`server is running on port ${process.env.PORT}`));
module.exports = app;

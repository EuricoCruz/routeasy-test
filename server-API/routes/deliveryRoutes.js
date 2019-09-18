const express = require('express');

const deliveryRoutes = express.Router();

const mongoose = require("mongoose");

const Delivery = require('../models/Delivery');

deliveryRoutes.get('/', (req, res) => {
  res.send('Api rodando na porta 5000');
});

module.exports = deliveryRoutes;

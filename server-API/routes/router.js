const express = require('express');

const router = express.Router();

const mongoose = require("mongoose");

const Delivery = require('../models/Delivery');

router.get('/', (req, res) => {
  res.send('Api rodando na porta 5000');
});

router.get('/deliveries', (req, res) => {
  Delivery.find()
    .then((allDeliveries) => {
      res.json(allDeliveries);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.post('/deliveries', (req, res) => {
  const {nome, peso, endereco} = req.body;
  Delivery.create({ nome, peso, endereco })
    .then((delivery) => {
      res.status(200).json({ message: 'Delivery created successfuly' });
    })
    .catch(err => res.status(400).json(err));
});

module.exports = router;

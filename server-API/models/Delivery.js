const mongoose = require('mongoose');

const { Schema } = mongoose;

const DeliverySchema = new Schema({

  nome: { type: String, required: true },
  peso: { type: String, required: true },
  endereco: {
    logradouro: String,
    numero: Number,
    bairro: String,
    complemento: String,
    cidade: String,
    estado: String,
    pais: String,
    geolocalizacao: {
      latitude: Number,
      longitude: Number,
    },
  },
}, {
  timestamps: true,
});

const Delivery = mongoose.model('Delivery', DeliverySchema);

module.exports = Delivery;

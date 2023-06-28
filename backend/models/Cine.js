const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cineSchema = new Schema({
  nombre: String,
  direccion: String,
  telefono: String,
  precios: {
    diaEspectador: Number,
    diaJubilado: Number,
    festivos: Number,
    carnetEstudiante: Number,
  },
});

const Cine = mongoose.model('Cine', cineSchema);

module.exports = Cine;
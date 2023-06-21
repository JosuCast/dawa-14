const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const peliculaSchema = new Schema({
  titulo: String,
  director: String,
  protagonistas: [String],
  genero: String,
  clasificacion: String,
});

const Pelicula = mongoose.model('Pelicula', peliculaSchema);

module.exports = Pelicula;
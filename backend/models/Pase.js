const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paseSchema = new Schema({
  cine: {
    type: Schema.Types.ObjectId,
    ref: 'Cine',
  },
  pelicula: {
    type: Schema.Types.ObjectId,
    ref: 'Pelicula',
  },
  horario: String,
});

const Pase = mongoose.model('Pase', paseSchema);

module.exports = Pase;
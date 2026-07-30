const { Schema, model } = require('mongoose');
 
const DronSchema = new Schema({
  marca: String,
  modelo: String,
  tipo: String,
  autonomiaMinutos: Number,
  alcanceMetros: Number,
  pesoGramos: Number,
  tieneCamara: Boolean
});
const Dron = model('Dron', DronSchema);
 
module.exports = Dron;
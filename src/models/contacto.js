const { Schema, model } = require('mongoose');

const contactoSchema = new Schema({
    nombre: { type: String },
    telefono: { type: String },
    correo: { type: String },
    status: { type: Number, default: 1 }
});

module.exports = model('contactos', contactoSchema);
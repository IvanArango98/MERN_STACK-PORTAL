const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Curso = new Schema({
nombre: {type : String, required : true, max: 60},
correo_usuario: {type : String, required : true, max: 60},
jornada: {type : String, required : true, max: 60},
seccion: {type : String, required : true, max: 60},
modalidad: {type : String, required : true, max: 60},
});

module.exports = mongoose.model("Curso",Curso);
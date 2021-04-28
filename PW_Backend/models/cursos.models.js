const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Curso = new Schema({
ciclo: {type : String, default:"Interciclo - 2021", max: 60},
nombre: {type : String, required : true, max: 60},
correo_usuario: {type : String, required : true, max: 60},
jornada: {type : String, required : true, max: 60},
seccion: {type : String, required : true, max: 60},
modalidad: {type : String, required : true, max: 60},
});

module.exports = mongoose.model("Curso",Curso);

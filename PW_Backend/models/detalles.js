const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Curso = new Schema({
ciclo: {type : String, default:"Interciclo - 2021", max: 60},
nombre: {type : String, required : true, max: 60,unique:true},
jornada: {type : Array, required : true, max: 60},
seccion: {type : Array, required : true, max: 60},
modalidad: {type : String, required : true, max: 60},
});

module.exports = mongoose.model("detalles",Curso);

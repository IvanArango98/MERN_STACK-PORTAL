const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Curso = new Schema({
ciclo: {type : String, default:"Interciclo - 2021", max: 60},
nombre: {type : Array, required : true, max: 60},
carrera: {type: String, require:true,unique: true}
});

module.exports = mongoose.model("CursoDisponibles",Curso);

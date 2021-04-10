const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContenidoCurso = new Schema({
ciclo: {type : String, default:"Primer Ciclo - 2021", max: 60},
nombre: {type : String, max: 60},
});

module.exports = mongoose.model("ContenidoCurso",ContenidoCurso);

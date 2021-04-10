const mongoose = require("mongoose");
const { appConfig } = require('../config')
const Schema = mongoose.Schema;
// const autoIncrement = require('mongoose-auto-increment');

// var connection = mongoose.createConnection("mongodb://localhost:27017/PaginaWeb1");
// autoIncrement.initialize(connection);

const CrearUsuariosSchema = new Schema({
nombre: {type : String, required : true, max: 60},
apellido: {type : String, required : true, max: 40},
mail: {type : String, required : true, max: 70, unique: true},
pass: {type : String, required : true, max: 130},
FechaNacimiento: {type : Date, required : true},
imgUrl: String
}
)


CrearUsuariosSchema.methods.setImgUrl = function setImgUrl (filename) {
    const { host, port } = appConfig
    this.imgUrl = `${host}:${port}/public/${filename}`
  }

module.exports = mongoose.model("CrearUsuarios",CrearUsuariosSchema);
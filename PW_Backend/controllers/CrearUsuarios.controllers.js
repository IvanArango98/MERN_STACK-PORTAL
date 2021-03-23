const crypto = require("crypto");
const EmailValidator = require("email-validator");
const fs = require('file-system'); 
const CrearUsuario = require('../models/CrearUsuarios.models');
const jwt = require("jsonwebtoken")

let response = {
    msg: "",
    exito:  false
}

exports.login = function(req, res, next) {

  let hashedPass = crypto.createHash("sha512").update(req.body.pass).digest("hex");

  CrearUsuario.findOne( { mail: req.body.mail, pass: hashedPass  }, function(error, usuario) {
   let response = {
       token: null 
   }
   if(usuario !== null){
       response.token = jwt.sign({
          id: usuario._id,
          mail: usuario.mail
       }, "1234", { expiresIn: "12h"} )
   }

   res.json(response);
   
  })
}

exports.create = function(req,res)
{  
  let crearUsuario = new CrearUsuario(
  {    
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    mail: req.body.mail,
    pass: crypto.createHash("sha512").update(req.body.pass).digest("hex"),
    FechaNacimiento: req.body.FechaNacimiento,
    URL_PHOTO: `./storage/imgs/${req.body.mail}.jpg`    
  })
  
  crearUsuario.save(function(err) 
  {

    if (req.file) {
      const { filename } = req.file
      crearUsuario.setImgUrl(filename)
    }
    
    if(err) {
      console.error(err), 
      response.exito = false, 
      response.msg = "Error al guardar el usuario"
      res.json(response)
      return;
    }
            
    response.exito = true, 
    response.msg = "El usuario se guardo correctamente"
    res.json(response)    

    })
}

exports.find = function(req,res)
{
  CrearUsuario.find(function(err,crearUsuario)
  {
    res.json(crearUsuario)
  });
}

exports.findOne = function(req,res)
{
  CrearUsuario.findOne({_id: req.params.id},function(err,crearUsuario)
  {
    res.json(crearUsuario)
  })
}

exports.update = function(req, res)
{  
  
  let crearUsuario = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    mail: req.body.mail,
    pass: crypto.createHash("sha512").update(req.body.pass).digest("hex"),
    FechaNacimiento: req.body.FechaNacimiento,
    URL_PHOTO: `./storage/imgs/${req.body.mail}.jpg`
  }

  CrearUsuario.findByIdAndUpdate(req.params.id, {$set: crearUsuario} ,function(err){    

    if(err) {
      console.error(err) 
      response.exito = false
      response.msg = "Error al modificar el usuario"
      res.json(response)
      return;
    }
        
    response.exito = true, 
    response.msg = "El usuario se modificó correctamente"
    res.json(response)
    

  } )

}

exports.remove = function(req,res){
  
  CrearUsuario.findByIdAndRemove( { _id: req.params.id}, function(err){

    //fs.unLinkSync(`./storage/imgs/${mail}.jpg`)

    if(err){
      console.error(err) 
      response.exito = false
      response.msg = "Error al eliminar el usuario"
      res.json(response)
      return;
    }    
  
    response.exito = true, 
    response.msg = "El usuario se eliminó correctamente"
    res.json(response)
  })
}
const crypto = require("crypto");
const CrearUsuario = require('../models/CrearUsuarios.models');
const jwt = require("jsonwebtoken")
const fs = require('fs');
const { findOne } = require("../models/CrearUsuarios.models");

let response = {
    msg: "",
    exito:  false
}

exports.login = function(req, res, next) {

  let hashedPass = crypto.createHash("sha512").update(req.body.pass).digest("hex");

  CrearUsuario.findOne( { mail: req.body.mail, pass: hashedPass  }, function(error, mail) {
   let response = {
       token: null 
   }
   if(mail !== null){
       response.token = jwt.sign({
          id: mail._id,
          mail: mail.mail
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
    // imgUrl: `http://localhost:4000/public/${req.body.mail}.jpg`,
    imgUrl: `http://portal-url-back.herokuapp.com/public/${req.body.mail}.jpg`,
    carrera: req.body.carrera    
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
    URL_PHOTO: `./storage/imgs/${req.body.mail}.jpg`,
    carrera:req.body.carrera
  }

  function getmail(req,res)
  {
    CrearUsuario.findOne({_id: req.params.id},function(err,crearUsuario)
    {
      res.json(crearUsuario)
    })
  }
  
  CrearUsuario.findByIdAndUpdate(req.params.id, {$set: crearUsuario} ,function(err){    
    
    try
    {       
    
    if(err) {
      console.error(err) 
      response.exito = false
      response.msg = "Error al modificar el usuario"
      res.json(response)
      return;
    }
    else
        {   
            
    //fs.unlinkSync(`./storage/imgs/${req.params.id}.jpg`) 
    response.exito = true, 
    response.msg = "El usuario se modificó correctamente"
    res.json(response)

    if (req.params.file) {
      const { filename } = req.params.file
      crearUsuario.setImgUrl(filename)
    }
  }
  }
  catch
  {
    response.msg = "Error"
    res.json(response)
  }
  } )
}

exports.remove = function(req,res){
  
  CrearUsuario.findByIdAndRemove( { _id: req.params.id}, function(err){    
     try
     {   
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
  }
  catch
  {
    response.exito = true, 
    response.msg = "Error"
    res.json(response)
  }
  })
}
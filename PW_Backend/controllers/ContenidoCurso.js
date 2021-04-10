const crypto = require("crypto");
const Curso = require('../models/ContenidoCurso');

let response = {
    msg: "",
    exito:  false
}


exports.create = function(req,res)
{  
  let curso = new Curso(
  {            
    nombre: req.body.nombre
  })

  
  curso.save(function(err) 
  {   
    
    if(err) {
      console.error(err), 
      response.exito = false, 
      response.msg = "Error al guardar el curso"
      res.json(response)
      return;
    }
            
    response.exito = true, 
    response.msg = "El curso se guardo correctamente"
    res.json(response)    

    })
}

exports.find = function(req,res)
{
    Curso.find(function(err,curso)
  {
    res.json(curso)
  });
}

exports.findOne = function(req,res)
{
  Curso.findOne({_id: req.params.id},function(err,curso)
  {
    res.json(curso)
  })
}

exports.update = function(req, res)
{  
  
  let curso = {
    nombre: req.body.nombre    
  }

  Curso.findByIdAndUpdate(req.params.id, {$set: curso} ,function(err){    

    if(err) {
      console.error(err) 
      response.exito = false
      response.msg = "Error al modificar el curso"
      res.json(response)
      return;
    }
        
    response.exito = true, 
    response.msg = "El curso se modificó correctamente"
    res.json(response)
    

  } )

}

exports.remove = function(req,res){
  
  Curso.findByIdAndRemove( { _id: req.params.id}, function(err){

    //fs.unLinkSync(`./storage/imgs/${mail}.jpg`)

    if(err){
      console.error(err) 
      response.exito = false
      response.msg = "Error al eliminar el curso"
      res.json(response)
      return;
    }    
  
    response.exito = true, 
    response.msg = "El curso se eliminó correctamente"
    res.json(response)
  })
}
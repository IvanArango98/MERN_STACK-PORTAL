const Curso = require('../models/cursos.models');

let response = {
    msg: "",
    exito:  false
}


exports.create = function(req,res)
{  
  let curso = new Curso(
  {            
    nombre: req.body.nombre,
    correo_usuario: req.body.correo_usuario,
    jornada: req.body.jornada,
    seccion: req.body.seccion,
    modalidad: req.body.modalidad,    
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
    response.msg = "El curso se asignó correctamente"
    res.json(response)    

    })
}

exports.find = function(req,res)
{
    Curso.find({"correo_usuario": req.params.correo_usuario}, function(err,curso)    
    {
      res.json(curso)
    })        
}

function getCursos(req,res)
{
    Curso.find(function(err,curso)    
    {
      res.json(curso)
    })        
}

exports.getCursos = getCursos;

exports.findOne = function(req,res)
{
  Curso.findOne({correo_usuario: req.params.correo_usuario},function(err,curso)
  {    
    res.json(curso)    
  })  
}


exports.update = function(req, res)
{  
  
  let curso = {
    nombre: req.body.nombre,
    correo_usuario: req.body.correo_usuario,
    jornada: req.body.jornada,
    seccion: req.body.seccion,
    modalidad: req.body.modalidad,  
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
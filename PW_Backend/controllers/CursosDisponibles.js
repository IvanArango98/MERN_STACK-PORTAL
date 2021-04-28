const Curso = require('../models/CursosDisponibles');

let response = {
    msg: "",
    exito:  false
}


exports.create = function(req,res)
{  
  let curso = new Curso(
  {            
    nombre: req.body.nombre,
    carrera: req.body.carrera 
  })
  
  if(curso.carrera === "Ingeniería en informatica y sistemas" || curso.carrera === "Ingeniería Industrial" || curso.carrera === "Medicina" || curso.carrera === "Derecho")
  {
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
  else{
    response.exito = false, 
    response.msg = "Curso invalido"
    res.json(response)
    return;
  }

}

exports.find = function(req,res)
{
    Curso.find({"carrera": req.params.carrera}, function(err,curso)    
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


exports.update = function(req, res)
{  
  
  let curso = {
    nombre: req.body.nombre,
    carrera: req.body.nombre
  }

  Curso.findByIdAndUpdate(req.params.id, {$set: curso} ,function(err){    

    if(err) {
      console.error(err) 
      response.exito = false
      response.msg = "Error al agregar el curso"
      res.json(response)
      return;
    }
        
    response.exito = true, 
    response.msg = "El curso se agregó correctamente"
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

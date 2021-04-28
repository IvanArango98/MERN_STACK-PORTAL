
const Curso = require('../models/detalles');

let response = {
    msg: "",
    exito:  false
}


exports.create = function(req,res)
{  
  let curso = new Curso(
  {            
    nombre: req.body.nombre,    
    jornada: req.body.jornada,
    seccion: req.body.seccion,
    modalidad: req.body.modalidad
  })
  
  var myarray = [
    "Tesís II", "Procesador Penal II", "CFI Estrategias de Investigación",
    "Biología II", "Quimica V", "CFI Juventud y Vida Saludable",
    "Análisis y Diseño II", "CFI Ética Social","Ingeniería y Desarrollo Sostenible","CFI Sociedad Incluyente y Economía",
    "Teoría de Sistemas", "Matemática II", "Álgebra Lineal"
  ]

  var myarray2 = [
    "Matutina", "Vespertina"
  ]

  var myarray3 = [
    "1", "2", "3","4" 
  ]
  
  if( myarray.includes(curso.nombre) === true)
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
    Curso.find({"nombre": req.params.nombre}, function(err,curso)    
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
    jornada: req.body.jornada,
    seccion: req.body.seccion,
    modalidad: req.body.modalidad
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

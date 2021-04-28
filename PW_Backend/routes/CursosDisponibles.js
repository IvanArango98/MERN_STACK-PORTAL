const express = require("express")
const router = express.Router()
const Curso = require("../controllers/CursosDisponibles")
var cors = require('cors')

router.post("/" ,Curso.create)
router.get("/:carrera",Curso.find)
router.put("/:id",Curso.update)
router.delete("/:id",Curso.remove)
router.get("/",Curso.getCursos)


module.exports = router
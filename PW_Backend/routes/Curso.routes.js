const express = require("express")
const router = express.Router()
const Curso = require("../controllers/Curso.controllers")
var cors = require('cors')

router.post("/" ,Curso.create)
router.get("/",Curso.find)
router.get("/:correo_usuario",Curso.findOne)
router.put("/:id",Curso.update)
router.delete("/:id",Curso.remove)


module.exports = router
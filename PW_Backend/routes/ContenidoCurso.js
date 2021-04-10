const express = require("express")
const router = express.Router()
const Curso = require("../controllers/ContenidoCurso")

router.post("/" ,Curso.create)
router.get("/",Curso.find)
router.get("/:id",Curso.findOne)
router.put("/:id",Curso.update)
router.delete("/:id",Curso.remove)

module.exports = router
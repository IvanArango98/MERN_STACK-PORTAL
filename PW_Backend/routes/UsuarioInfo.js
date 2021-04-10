const express = require("express")
const router = express.Router()
const UsuarioController = require("../controllers/CrearUsuarios.controllers")


router.get("/",UsuarioController.find)
router.get("/:id",UsuarioController.findOne)
router.put("/:id",UsuarioController.update)
router.delete("/:id",UsuarioController.remove)

module.exports = router
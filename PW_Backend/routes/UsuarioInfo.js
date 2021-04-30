const express = require("express")
const router = express.Router()
const UsuarioController = require("../controllers/CrearUsuarios.controllers")
const upload = require('../libs/storaje')

router.get("/",UsuarioController.find)
router.get("/:id",UsuarioController.findOne)
router.put("/:id", upload.single('image'),UsuarioController.update)
router.delete("/:id",UsuarioController.remove)

module.exports = router
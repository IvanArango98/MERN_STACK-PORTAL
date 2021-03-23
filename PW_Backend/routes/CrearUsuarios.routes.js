const express = require("express")
const router = express.Router()
const UsuarioController = require("../controllers/CrearUsuarios.controllers")
const upload = require('../libs/storaje')

router.post("/", upload.single('image') ,UsuarioController.create)
router.get("/",UsuarioController.find)
router.get("/:id",UsuarioController.findOne)
router.put("/:id",UsuarioController.update)
router.delete("/:id",UsuarioController.remove)
router.post("/login", UsuarioController.login)

module.exports = router
const express = require("express")
const router = express.Router()
const UsuarioController = require("../controllers/CrearUsuarios.controllers")
const upload = require('../libs/storaje')

router.post("/", upload.single('image') ,UsuarioController.create)



module.exports = router
const express = require("express")
const router = express.Router()
const UsuarioController = require("../controllers/CrearUsuarios.controllers")


router.post("/", UsuarioController.login)

module.exports = router
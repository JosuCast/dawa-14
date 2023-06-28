//Rutas producto
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//api/usuario
router.post('/register', userController.crearUsuario);
router.post('/login', userController.obtenerUsuario);

module.exports = router;
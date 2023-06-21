//Rutas pelicula
const express = require('express');
const router = express.Router();
const peliculaController = require('../controllers/peliculaController');

router.get('/',peliculaController.getPelicula);
router.post('/',peliculaController.postPelicula);
module.exports = router;
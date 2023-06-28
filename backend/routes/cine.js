//Rutas cine
const express = require('express');
const router = express.Router();
const cineController = require('../controllers/cineController');

router.get('/',cineController.getCine);
router.post('/',cineController.postCine);
router.get('/:id',cineController.editCine);
router.put('/:id', cineController.actualizarCine);
router.delete('/:id',cineController.eliminarCine);
module.exports = router;
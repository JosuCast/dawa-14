//Rutas cine
const express = require('express');
const router = express.Router();
const cineController = require('../controllers/cineController');

router.get('/',cineController.getCine);
router.post('/',cineController.postCine);

module.exports = router;
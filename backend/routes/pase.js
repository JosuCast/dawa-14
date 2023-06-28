//Rutas pase
const express = require('express');
const router = express.Router();
const paseController = require('../controllers/paseController');

router.get('/',paseController.getPase);
router.post('/',paseController.postPase);
module.exports = router;
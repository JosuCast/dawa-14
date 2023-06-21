const express = require('express');
const router = express.Router();
const pdfMake = require('pdfmake/build/pdfmake');
const pdfFonts = require('pdfmake/build/vfs_fonts');
pdfMake.vfs = pdfFonts.pdfMake.vfs;
const Pase = require('../models/Pase');
const pdfController = require('../controllers/pdfController');

router.get('/pasa',pdfController.generarPDf);

module.exports = router;

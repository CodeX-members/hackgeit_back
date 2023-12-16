var express = require('express');
var router = express.Router();
var Seuil = require('../controllers/SeuilController');
/* GET home page. */
router.get('/', Seuil.seuilController);

module.exports = router;
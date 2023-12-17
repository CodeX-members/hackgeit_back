var express = require('express');
var router = express.Router();
var set = require('../controllers/Switch');
/* GET home page. */
router.post('/', set.switchDevice);

module.exports = router;
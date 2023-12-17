var express = require('express');
var router = express.Router();
var get = require('../controllers/verifyDeviceStatus.js');
/* GET home page. */
router.get('/', get.verifyDeviceStatus);

module.exports = router;
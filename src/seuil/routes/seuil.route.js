var express = require('express');
var router = express.Router();
var get = require('../controllers/VerifyDeviceStatus.js');
/* GET home page. */
router.get('/', get.verifyDeviceStatus);

module.exports = router;
require('dotenv').config();
const device = require('../services/changeState')


async function switchDevice(req, res) {
    data = await device.changeState(req.body['switch_status'])
    res.json(data)
}

module.exports = {
    switchDevice
}
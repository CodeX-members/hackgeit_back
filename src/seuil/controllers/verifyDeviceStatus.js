require('dotenv').config();

var get = require('../services/seuil');
const req_time = process.env.TIMING_GET_DEVICE_STATUS;

interval = 0;
timeout = 0;

async function verifyDeviceStatus(req, res) {
    
    // Set an interval to call get.seuil() every 10 seconds
    interval = setInterval(async () => {
        const data = await get.seuil();
        console.log(interval + ': ');
        console.log(data);
    }, req_time);

    setTimeout(()=>{clearTime()},timeout);

    res.json('ok');
}

function clearTime(){
    clearInterval(interval);
    console.log('Ended');
}

module.exports = {
    verifyDeviceStatus
};
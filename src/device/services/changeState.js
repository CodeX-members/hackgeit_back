require('dotenv').config();
const fetch = require('node-fetch'); // we use node-fetch@2 to call api
const make = require('../models/device_switch.model')
const apiUrl = `${process.env.BOULOU_API_URL}/boulou_switch_device`;
const developerId = process.env.DEVELOPER_ID;
const email = process.env.DEV_EMAIL;
const deviceId = process.env.DEVICE_ID;

async function changeState(switch_value) {
    let reqBody = {
        developerId: developerId,
        email: email,
        deviceId: deviceId,
        switch_status: switch_value
    }

    // console.log('====================================');
    // console.log(switch_value)
    // console.log('====================================');

    try {
        const response = await fetch(
            apiUrl,
            {
                method: 'POST',
                body: JSON.stringify(reqBody),
                headers: { 'Content-Type': 'application/json' }
            });
        return await response.json();
    } catch (error) {
        console.error('Error calling API:', error.message);
        return await ('Internal Server Error');
    }

    return await reqBody;
}

module.exports = {
    changeState
}
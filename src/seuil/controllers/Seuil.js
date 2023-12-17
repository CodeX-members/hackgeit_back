require('dotenv').config();
const fetch = require('node-fetch'); // we use node-fetch@2 to call api
const url = `${process.env.BOULOU_API_URL}/boulou_check_deviceStatus`;
const developerId = process.env.DEVELOPER_ID;
const email = process.env.DEV_EMAIL;
const deviceId = process.env.DEVICE_ID;


async function seuil(req, res, next) {
    const apiUrl = new URL(url);
    apiUrl.searchParams.append('developerId', developerId);
    apiUrl.searchParams.append('email', email);
    apiUrl.searchParams.append('deviceId', deviceId);

    try {
        const response = await fetch(
            apiUrl,
            {
                method: 'get',
                headers: { 'Content-Type': 'application/json' }
            });
        return await response.json();
        // res.json(data);
    } catch (error) {
        console.error('Error calling API:', error.message);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    seuil
};
require('dotenv').config();

var get = require('../services/seuil');
const req_time = process.env.TIMING_GET_DEVICE_STATUS;

interval = 0;
timeout = 10000;

var request = null;
var response = null;

async function verifyDeviceStatus(req, res) {
    request = req;
    response = res;
    try {
        const data = await get.seuil();
        console.log(data);
        // Appeler à nouveau callGetSeuilRecursively après que la réponse soit reçue
        setTimeout(()=>{verifyDeviceStatus(request, response)}, req_time);
    } catch (error) {
        console.error('Erreur lors de l’appel à get.seuil :', error);
        // Vous pouvez ajouter une logique de gestion d'erreur ici
        // Par exemple, un délai avant de réessayer
        setTimeout((req, res)=>{verifyDeviceStatus(request, response)}, req_time);
    }
    //response.json('ok');
}

function getSeui(){
    clearInterval(interval);
    console.log('Ended');
}

module.exports = {
    verifyDeviceStatus
};
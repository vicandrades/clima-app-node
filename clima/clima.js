const axios = require('axios');

const getClima = async(lat, lng) => {

    const appid = 'fa95c460a7a9ed6523dbb1fea8c53231';

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=fa95c460a7a9ed6523dbb1fea8c53231&units=metric`);

    if (resp.data.cod != 200) {
        throw new Error(`Ha ocurrido un error consultando la latitud ${lat} y longitud ${lng}, codigo de error ${resp.data.cod}, mensaje de error ${resp.data.message}`);
    }

    return resp.data.main.temp;

}

module.exports = {
    getClima
}
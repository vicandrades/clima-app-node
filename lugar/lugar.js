const axios = require('axios');


const getLugarLatlng = async(direccion) => {

    const appid = 'fa95c460a7a9ed6523dbb1fea8c53231';
    const encodedUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=${appid}`
            //headers: {'X-Custom-Header': 'foobar'}
    });

    const resp = await instance.get();

    if (resp.data.cod != 200) {
        throw new Error(`Ha ocurrido un error consultando la direccion ${direccion}, codigo de error ${resp.data.cod}, mensaje de error ${resp.data.message}`);
    }

    const data = resp.data;
    const coordenadas = data.coord;
    const lugar = data.name;
    const lng = coordenadas.lon;
    const lat = coordenadas.lat;

    return {
        lugar,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatlng
}
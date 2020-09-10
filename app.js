const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtner el clima',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {
    if (!direccion) {
        throw new Error('direccion no puede ser nula');
    }
    try {
        const coordenadas = await lugar.getLugarLatlng(direccion);
        const temp = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return `El clima de ${direccion} es de ${temp}.`;
    } catch (error) {
        console.log('error no se pudo determinar el clima', error);
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);
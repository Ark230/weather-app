const argv = require("yargs").options({
  direccion: {
    alias: "d",
    demand: true,
    desc: "Dirección de la ciudad para obtener el clima"
  }
}).argv;

const place = require('./place/place');
const weather = require('./place/weather');



//place.getPlaceLatLongitude(argv.direccion).then((r)=> console.log(r)).catch((e) => console.log(e));

//weather.getWeather(40.750000, -74.000000).then((r) => console.log(r)).catch((e) => console.log(e));

const getInfo = async (direccion) =>{
    const coords = await place.getPlaceLatLongitude(direccion);
    
    const weatherResult = await weather.getWeather(coords.latitude, coords.longitude);
    if(weatherResult === 'undefined') throw new Error(`No se puede determinar el clima para ${direccion}`);
    return weatherResult;
}


getInfo(argv.direccion).then((r) => console.log(`La temperatura de ${argv.direccion} es de ${r} °C `)).catch((e) => console.log(e));
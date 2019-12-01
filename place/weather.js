const axios = require('axios');


const getWeather = async (lat, lon) =>{

    const resp = await axios.get(`
    https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ce6f35b4b9a8b8bc6faee88fb6c40995&units=metric`);

    return resp.data.main.temp;
}


module.exports = {
    getWeather

}
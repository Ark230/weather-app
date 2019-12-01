const axios = require("axios");

const getPlaceLatLongitude = async direccion => {
  /*Esta función permite convertir el String en un parámetro válido para ser insertado por url
convirtiendo los carácteres espceciales, por ejemplo
"Nueva York" --> Nueva%20York
*/
  const encodedUrl = encodeURI(direccion);
  console.log(encodedUrl);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direccion}`,
    headers: {
      "x-rapidapi-key": "fa9dba72e4mshe5abcb36185a10ep1ba97bjsn010ed4fb5db6"
    }
  });

  const resp = await instance.get();

  if (resp.data.Results.length == 0)
    throw new Error(`No hay resultados para la dirección ${direccion}`);

  const data = resp.data.Results[0];
  const address = data.name;
  const latitude = data.lat;
  const longitude = data.lon;

  return {
    address,
    latitude,
    longitude
  };
};

module.exports = {
  getPlaceLatLongitude
};

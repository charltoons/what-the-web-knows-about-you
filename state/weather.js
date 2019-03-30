import qs from "qs";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const makeRequest = async state => {
  const params = qs.stringify({
    lat: state.ip.lat,
    lon: state.ip.lon,
    appid: publicRuntimeConfig.env.OPEN_WEATHER_MAP_API_KEY
  });
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?${params}`;

  const response = await fetch(apiUrl);
  const weather = await response.json();
  state.weather = weather;
  state.emit("change", state);
};

const weather = state => {
  if (state.weather !== undefined) return state.weather;
  if (state.ip === undefined || state.ip === null) return state.weather;
  state.weather = null;
  makeRequest(state);
};

export default weather;

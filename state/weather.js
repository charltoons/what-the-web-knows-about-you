import api from "../lib/api";

const makeRequest = async state => {
  state.weather = await api("/weather", {
    lat: state.ip.lat,
    lon: state.ip.lon
  });
  state.emit("change", state);
};

const weather = state => {
  // weather requires a lat/lng which comes from IP
  if (state.weather !== undefined) return state.weather;
  if (state.ip === undefined || state.ip === null) return state.weather;
  state.weather = null;
  makeRequest(state);
};

export default weather;

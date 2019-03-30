const qs = require("query-string");
const makeRequest = async state => {
  const params = qs.stringify({
    lat: state.ip.lat,
    lon: state.ip.lon
  });
  const apiUrl = `/weather?${params}`;

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

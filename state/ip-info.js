import api from "../lib/api";

const makeRequest = async state => {
  const response = await api("/ip");
  state.ip = response;
  state.emit("change", state);
};

const ipInfo = state => {
  if (state.ip !== undefined) return state.ip;
  else {
    // prevents another request
    state.ip = null;
    makeRequest(state);
  }
};

export default ipInfo;

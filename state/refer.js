import api from "../lib/api";

const makeRequest = async state => {
  const params = {
    r: document.refer
  };
  if (process.env.referOverride) {
    params.r = process.env.referOverride;
  }
  state.referrer = await api("/refer", params);
  state.emit("change", state);
};

const refer = state => {
  if (state.referrer !== undefined) return state.referrer;
  else {
    // prevents another request
    state.referrer = null;
    makeRequest(state);
  }
};

export default refer;

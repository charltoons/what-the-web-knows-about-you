const makeRequest = async state => {
  const apiUrl = `/ip`;

  const response = await fetch(apiUrl);

  if (response.status === 200) {
    const ipInfo = await response.json();
    state.ip = ipInfo;
    state.emit("change", state);
    return;
  }

  console.warn("Error with IP info.");
  state.ip = null;
  // state.emit("change", state);
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

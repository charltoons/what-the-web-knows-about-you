import qs from "query-string";

const api = async (path, params) => {
  let apiUrl = process.env.apiHost ? process.env.apiHost : "";
  apiUrl += path;
  apiUrl += params ? "?" + qs.stringify(params) : "";

  const response = await fetch(apiUrl);

  if (response.status === 200) {
    const data = await response.json();
    console.log("API Response: ", data);
    return data;
  }

  return null;
};

export default api;

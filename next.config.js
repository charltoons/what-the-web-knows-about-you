require("dotenv").config();
module.exports = {
  target: "serverless",
  serverRuntimeConfig: {
    // mySecret: "secret"
  },
  publicRuntimeConfig: {
    staticFolder: "/static",
    env: {
      OPEN_WEATHER_MAP_API_KEY: process.env.OPEN_WEATHER_MAP_API_KEY
    }
  }
};

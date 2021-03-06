require("dotenv").config();
const fetch = require("isomorphic-unfetch");
const qs = require("query-string");
const { parse } = require("url");

module.exports = async (req, res) => {
  const { query } = parse(req.url, true);

  query.appid = process.env.OPEN_WEATHER_MAP_API_KEY;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?${qs.stringify(query)}`
  );
  const weather = await response.json();

  if (process.env.NODE_ENV !== "production") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  }
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(weather));
};

const fetch = require("isomorphic-unfetch");
const { parse } = require("url");

module.exports = async (req, res) => {
  let ipAddress = req.headers["x-forwarded-for"];
  if (!ipAddress) {
    ipAddress = req.connection.remoteAddress;
  }
  if (process.env.NODE_ENV !== "production") {
    // ipAddress = '167.160.203.69'
    ipAddress = "74.73.146.44";
  }

  const response = await fetch(`http://ip-api.com/json/${ipAddress}`);
  const ipInfo = await response.json();

  if (process.env.NODE_ENV !== "production") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  }

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(ipInfo));
};

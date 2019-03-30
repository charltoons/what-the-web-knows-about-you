const fetch = require("isomorphic-unfetch");
const { parse } = require("url");

module.exports = (req, res) => {
  const { query } = parse(req.url, true);
  const { name = "World" } = query;
  res.end(`Hello ${name}!`);
};

module.exports = async (req, res) => {
  let ipAddress = req.headers["x-forwarded-for"];
  if (!ipAddress) {
    ipAddress = req.connection.remoteAddress;
  }
  if (req.url.indexOf("debug") !== -1) {
    // ipAddress = '167.160.203.69'
    ipAddress = "74.73.146.44";
  }

  const response = await fetch(`http://ip-api.com/json/${ipAddress}`);
  const ipInfo = await response.json();

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(ipInfo));
};

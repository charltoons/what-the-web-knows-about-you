module.exports = (req, res) => {
  let ipAddress = req.headers["x-forwarded-for"];
  if (!ipAddress) {
    ipAddress = req.connection.remoteAddress;
  }
  if (req.url.indexOf("debug") !== -1) {
    // ipAddress = '167.160.203.69'
    ipAddress = "74.73.146.44";
  }
  return {
    ip: ipAddress
  };
};

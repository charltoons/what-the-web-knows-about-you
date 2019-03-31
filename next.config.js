require("dotenv").config();
module.exports = {
  target: "serverless",
  env: {
    apiHost: process.env.API_HOSTNAME,
    nodeEnv: process.env.NODE_ENV,
    referOverride: process.env.REFER_OVERRIDE,
    fbAppId: process.env.FB_APP_ID
  }
};

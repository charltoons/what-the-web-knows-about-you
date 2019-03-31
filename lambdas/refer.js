const fetch = require("isomorphic-unfetch");
const qs = require("query-string");
const { parse } = require("url");
const cheerio = require("cheerio");

module.exports = async (req, res) => {
  const { query } = parse(req.url, true);
  let refer = query.r;

  console.log(refer);
  const response = await fetch(refer);
  const referrerHTML = await response.text();
  const $ = cheerio.load(referrerHTML);
  const title = $("title").text();

  if (process.env.NODE_ENV !== "production") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  }
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      title
    })
  );
};

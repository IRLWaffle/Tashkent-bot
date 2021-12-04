require("dotenv").config();

const apiKey = process.env.TENOR_API_KEY;
const Tenor = require("tenorjs").client({
  Key: apiKey,
  Filter: "off",
  Locale: "en_US",
  MediaFilter: "basic",
  DateFormat: "D/MM/YYYY - H:mm:ss A",
});

module.exports = Tenor;

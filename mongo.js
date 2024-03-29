const mongoose = require("mongoose");
require("dotenv").config();

module.exports = async () => {
  await mongoose.connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return mongoose;
};

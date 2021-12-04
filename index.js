console.clear();
const Client = require("./Structures/Client");
const client = new Client();
require("dotenv").config();
client.start(process.env.TOKEN);

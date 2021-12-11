const Event = require("../Structures/Event");
const dotenv = require("dotenv");
const prefix1 = "T!";
const prefix2 = "t!";

module.exports = new Event("messageCreate", (client, message) => {
  let prefixUsed;
  if (message.content.startsWith(prefix1)) {
    prefixUsed = prefix1;
  } else if (message.content.startsWith(prefix2)) {
    prefixUsed = prefix2;
  } else return;

  const args = message.content.substring(prefixUsed.length).split(/ +/);

  const command = client.commands.find((cmd) => cmd.name === args[0]);
  if (!command) return message.channel.send("Not a valid command");

  command.run(message, args, client);
});

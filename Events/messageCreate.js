const Event = require("../Structures/Event");
const dotenv = require("dotenv");
dotenv.config();
const prefix1 = "T!";
const prefix2 = "t!";

module.exports = new Event("messageCreate", (client, message) => {
  if (
    !message.content.startsWith(prefix1) ||
    !message.content.startsWith(prefix2)
  )
    return;

  const args = message.content.substring(prefix1.length).split(/ +/);

  const command = client.commands.find((cmd) => cmd.name === args[0]);
  if (!command) return message.channel.send("Not a valid command");

  command.run(message, args, client);
});

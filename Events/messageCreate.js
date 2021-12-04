const Event = require("../Structures/Event");
const dotenv = require("dotenv");
dotenv.config();

module.exports = new Event("messageCreate", (client, message) => {
  if (!message.content.startsWith(process.env.PREFIX)) return;

  const args = message.content.substring(process.env.PREFIX.length).split(/ +/);

  const command = client.commands.find((cmd) => cmd.name === args[0]);
  if (!command) return message.channel.send("Not a valid command");

  command.run(message, args, client);
});

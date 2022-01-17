const Command = require("../../Structures/Command");

module.exports = new Command({
  name: "scream",
  description: "AAAAAAAAAAAAAAAAAAAAAAAA",
  run: (message, args, client) => {
    const screamMsg = `${message.author.username}: ***AAAAAAAAAAAAAAAAAAAAAAAAAA***`;
    message.channel.send(screamMsg);
  },
});

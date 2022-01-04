const Command = require("../../Structures/Command");
const { soyultro } = require("soyultro");
const Discord = require("discord.js");

module.exports = new Command({
  name: "test",
  description: "testing command (current test is for better gif searching)",
  run: async (message, args, client) => {
    const gif = soyultro("kiss");
    const embed = new Discord.MessageEmbed().setImage(gif);
    message.channel.send("kiss");
    message.channel.send({ embeds: [embed] });
  },
});

const Command = require("../../Structures/Command");
const { getTop5Pumpkins } = require("../../Structures/DatabaseFunctions");
const DiscordJs = require("discord.js");

module.exports = new Command({
  name: "pumpkinboard",
  description: "leaderboard for pumpkin event",
  run: async (message, args, client) => {
    const idArray = [];
    const guildId = message.guild.id;
    const results = await getTop5Pumpkins(guildId);
    const pumpkinEmbed = new DiscordJs.MessageEmbed()
      .setTitle("Pumpkin board")
      .setColor("#d6680e");

    for (let i = 0; i < results.length; i++) {
      idArray.push(results[i].userId);
    }
    for (let i = 0; i < idArray.length; i++) {
      let user = await message.guild.members.fetch(idArray[i]);

      pumpkinEmbed.addField(`${user.user.username}`, `${results[i].pumpkins}`);
    }
    message.channel.send({ embeds: [pumpkinEmbed] });
  },
});

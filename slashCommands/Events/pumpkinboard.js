const { getTop5Pumpkins } = require("../../Structures/DatabaseFunctions");
const DiscordJs = require("discord.js");

module.exports = {
  name: "pumpkinboard",
  description: "This command sends the leaderboard of the event Hallokissmass",
  run: async (client, interaction, args) => {
    const idArray = [];
    const guildId = interaction.guild.id;
    const results = await getTop5Pumpkins(guildId);
    const pumpkinEmbed = new DiscordJs.MessageEmbed()
      .setTitle("Pumpkin board")
      .setColor("#d6680e");
    //push the result id's into an array
    for (let i = 0; i < results.length; i++) {
      idArray.push(results[i].userId);
    }
    //fetch data from each user by using the id and adding a field to the embed
    for (let i = 0; i < idArray.length; i++) {
      let user = await interaction.guild.members.fetch(idArray[i]);

      pumpkinEmbed.addField(`${user.user.username}`, `${results[i].pumpkins}`);
    }
    interaction.followUp({ embeds: [pumpkinEmbed] });
  },
};

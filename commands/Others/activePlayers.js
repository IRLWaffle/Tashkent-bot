const Command = require("../../Structures/Command");
const Member = require("../../Schemas/memberSchema");
const Discord = require("discord.js");

module.exports = new Command({
  name: "activePlayers",
  description: "the players who have participated in the event",
  run: async (message, args, client) => {
    const embed = new Discord.MessageEmbed()
      .setTitle("**The people that participated in the merry kissmas event")
      .setColor("ORANGE");
    const members = await Member.find.memberPumpkin({
      guildId: message.guild.id,
    });
    const userId = [];
    for (let i = 0; i < members.length; i++) {
      userId.push(members[i].userId);
    }
    for (let i = 0; i < userId.length; i++) {
      let user = await message.guild.members.fetch(idArray[i]);
      embed.addField(`${user.user.username}`);
    }
    message.channel.send({ embeds: [embed] });
  },
});

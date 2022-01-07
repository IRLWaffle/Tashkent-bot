const Command = require("../Structures/Command");
const MemberSchema = require("../Schemas/memberSchema");
const Discord = require("discord.js");
const mongo = require("../mongo");

module.exports = new Command({
  name: "activePlayers",
  description: "the players who have participated in the event",
  run: async (message, args, client) => {
    const embed = new Discord.MessageEmbed()
      .setTitle("**The people that participated in the merry kissmas event**")
      .setColor("ORANGE");

    let members;

    await mongo().then(async (mongoose) => {
      try {
        members = await MemberSchema.memberPumpkin.find({
          guildId: message.guild.id,
        });
      } catch (err) {
        console.log(err);
      }
    });

    const userId = [];
    for (let i = 0; i < members.length; i++) {
      if (members[i.pumpkins === 0]) continue;
      userId.push(members[i].userId);
    }
    for (let i = 0; i < userId.length; i++) {
      let user = await message.guild.members.fetch(userId[i]);
      embed.addField(`${user.user.username} `, "a");
    }
    message.channel.send({ embeds: [embed] });
  },
});

const Command = require("../../Structures/Command");
const { getPumpkins } = require("../../Structures/DatabaseFunctions");

module.exports = new Command({
  name: "getPumpkins",
  description: "Gives the amount of pumpkins the member has",
  run: async (message, args, client) => {
    const tagged = message.mentions.users.first() || message.author;
    const taggedId = tagged.id;
    const guildId = message.guild.id;
    const pumpkins = await getPumpkins(guildId, taggedId);

    message.reply(`The user has ${pumpkins} pumpkins`);
  },
});

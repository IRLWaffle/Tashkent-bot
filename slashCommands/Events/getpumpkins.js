const { getPumpkins } = require("../../Structures/DatabaseFunctions");

module.exports = {
  name: "getpumpkins",
  description: "Returns the amount of pumpkins the mentioned user has",
  options: [
    {
      name: "user",
      description: "the user you want to know the number of pumpkins of",
      type: "USER",
      required: true,
    },
  ],
  run: async (client, interaction, args) => {
    const [userId] = args;
    const guildId = interaction.guild.id;
    const pumpkins = await getPumpkins(guildId, userId);
    interaction.followUp({ content: `The user has ${pumpkins} pumpkins` });
  },
};

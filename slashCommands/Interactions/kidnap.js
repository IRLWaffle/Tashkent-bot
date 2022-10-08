const discord = require("discord.js");

module.exports = {
  name: "kidnap",
  description: "kidnap someone",
  options: [
    {
      type: "MENTIONABLE",
      name: "member",
      description: "the member you want to kidnap",
      required: true,
    },
  ],
  run: async (client, interaction, args) => {
    let gif =
      "https://cdn.discordapp.com/attachments/893210671385280525/1028330525221457971/i-gonna-take-you-home-higurashi.gif";
    const [arg] = args;
    const taggedId = arg
      .split("")
      .filter((num) => !isNaN(num))
      .join("");
    const taggedMember = interaction.guild.members.cache.get(taggedId);
    if (taggedMember.user.username === "Tashkent") {
      return interaction.followUp("DON'T TOUCH ME COMRADE!!!");
    } else if (
      taggedMember.user.username === interaction.member.user.username
    ) {
      return interaction.followUp("You cannot kidnap yourself, comrade....");
    }
    const embed = new discord.MessageEmbed()
      .setColor("DARK_PURPLE")
      .setTitle(
        `**${interaction.member.user.username} kidnaps ${taggedMember.user.username}**`
      )
      .setImage(gif);
    interaction.followUp({ embeds: [embed] });
  },
};

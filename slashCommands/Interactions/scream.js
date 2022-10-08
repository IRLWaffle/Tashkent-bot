module.exports = {
  name: "scream",
  description: "AAAAAAAAAAAA",
  run: (client, interaction, args) => {
    const screamMsg = `${interaction.member.user.username}: ***AAAAAAAAAAAAAAAAAAAAAAAAAA***`;
    interaction.followUp(screamMsg);
  },
};

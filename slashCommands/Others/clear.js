module.exports = {
  name: "clear",
  description: "slash command to delete an amount of messages",
  options: [
    {
      type: "NUMBER",
      name: "amount",
      description: "deleted amount",
      required: true,
    },
  ],
  run: async (client, interaction, args) => {
    //get the amount of messages to delete

    if (!interaction.member.permissions.has("ADMINISTRATOR"))
      return interaction.editReply({ content: "You cannot use this command" });
    let [amount] = args;
    if (amount < 1) {
      return interaction.editReply({
        content: "Please enter an amount bigger than 0",
      });
    }
    // delete the initial reply
    await interaction.deleteReply();

    // fetching messages and how many messages will be deleted
    const { size } = await interaction.channel.bulkDelete(amount, true);

    interaction.channel.send(`Deleted ${size} message(s)`);
  },
};

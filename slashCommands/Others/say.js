module.exports = {
  name: "say",
  description: "sending a message to a channel (ADMINS ONLY)",
  options: [
    {
      name: "channel",
      description: "channel for the message to be sent in",
      type: "CHANNEL",
      required: true,
    },
    {
      name: "message",
      description: "message to be sent",
      required: true,
      type: "STRING",
    },
  ],
  run: (client, interaction, args) => {
    if (!interaction.member.permissions.has("ADMINISTRATOR"))
      return interaction.editReply({ content: "You cannot use this command" });
    const [channel, message] = args;
    const channelToSend = interaction.guild.channels.cache.get(channel);
    if (!channelToSend.isText())
      return interaction.editReply({ content: "Enter a text channel" });
    else channelToSend.send(message);
    interaction.editReply("Message sent!");
    setTimeout(() => {
      interaction.deleteReply();
    }, 3000);
  },
};

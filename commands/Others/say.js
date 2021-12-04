const Command = require("../../Structures/Command");

module.exports = new Command({
  name: "say",
  description: "send a message to a channel",
  run: (message, args, client) => {
    if (!message.member.permissions.has("ADMINISTRATOR"))
      //error message
      return interaction.channel.send({
        content: "You cannot use this command",
      });
    if (!args[1]) message.channel.send("Please enter a channel");

    //get the channel id and channel
    let channelId = args[1]
      .split("")
      .filter((num) => !isNaN(num))
      .join("");
    const channelToSend = message.guild.channels.cache.get(channelId);

    //checking if the channel is falsy
    if (channelToSend === undefined) {
      const [, ...messageToSend] = args;
      message.delete().catch(console.error);
      return message.channel.send({ content: messageToSend.join(" ") });
    }

    if (!channelToSend.isText())
      return message.channel.send("Please enter a text channel");

    //checking if there is a message as argument
    if (!args[2]) message.channel.send("`Tk!say <channel tag> <message>`");
    const [, , ...messageToSend] = args;
    channelToSend.send({ content: messageToSend.join(" ") });
    message.delete().catch(console.error);
  },
});

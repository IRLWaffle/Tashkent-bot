const Event = require("../Structures/Event");

module.exports = new Event("messageCreate", async (client, message) => {
  if (message.channel.type === "DM") {
    if (message.author.bot || message.author.id === "228584918446374912")
      return;
    const content = message.content;
    const creator = await client.users.fetch("228584918446374912", false);
    const messageToSend = `${content} \n Message sent by ${message.author.username}#${message.author.discriminator} on ${message.createdAt}`;
    creator.send({ content: messageToSend });
  }
});

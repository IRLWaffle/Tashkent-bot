const Command = require("../../Structures/Command");
const { removeDoc } = require("../../Structures/DatabaseFunctions");

module.exports = new Command({
  name: "removeDocument",
  description:
    "this command removes a document of a user from the database (CREATOR ONLY)",
  run: async (message, args, client) => {
    if (message.author.id !== "228584918446374912") return;
    const targetId = message.mentions.users.first().id;
    const guildId = message.guild.id;
    await removeDoc(guildId, targetId);
    message.channel.send("Document successfully deleted");
  },
});

const Event = require("../Structures/Event");
const { removeDoc } = require("../Structures/DatabaseFunctions");

module.exports = new Event("guildMemberRemove", async (client, member) => {
  const leaveMessage = `Oh, comrade ${member.user.username} has left. I see...shame, more vodka for the rest of us then.`;
  const guildId = member.guild.id;
  const userId = member.id;
  const leaveChannel = member.guild.channels.cache.find(
    (name) => name.name === "sacrifices"
  );
  await removeDoc(guildId, userId);
  leaveChannel.send({ content: leaveMessage });
});

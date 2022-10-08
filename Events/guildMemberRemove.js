const Event = require("../Structures/Event");

module.exports = new Event("guildMemberRemove", (client, member) => {
  console.log("a");
  const leaveMessage = `Oh, comrade ${member.user.username} has left. I see...shame, more vodka for the rest of us then.`;
  const leaveChannel = member.guild.channels.cache.find(
    (name) => name.name === "departures"
  );
  leaveChannel.send({ content: leaveMessage });
});

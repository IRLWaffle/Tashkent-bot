const Event = require("../Structures/Event");

module.exports = new Event("guildMemberAdd", async (client, member) => {
  const userId = member.id;
  const welcomeMessage = `Welcome to the Emporium <@${userId}>, hope you like it here dear comrade.`;
  const roleToAdd = member.guild.roles.cache.find(
    (role) => (role.name = "Comrades")
  );
  const welcomeChannel = member.guild.channels.cache.find(
    (name) => name.name === "arrivals"
  );
  await member.roles.add(roleToAdd);
  welcomeChannel.send({ content: welcomeMessage });
});

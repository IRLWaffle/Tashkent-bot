const Event = require("../Structures/Event");

module.exports = new Event("messageCreate", (client, message) => {
  //get the guild
  const guild = client.guilds.cache.get("591799970542256171");

  //get the holo emote from the guild
  const emote = guild.emojis.cache.find((emote) => emote.name === "praiseHolo");

  //check if message starts with the emote
  if (message.content.startsWith(emote)) {
    //react to the massage with the emote
    message.react(emote);
  }
});

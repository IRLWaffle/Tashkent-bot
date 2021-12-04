const Command = require("../../Structures/Command");
module.exports = new Command({
  name: "cookie",
  description: "give someone a cookie",
  run: async (message, args, client) => {
    if (!args[1]) {
      const errMsg = await message.channel.send(
        "What are you doing dear comrade..? Tag someone."
      );
      return setTimeout(() => {
        errMsg.delete();
        message.delete();
      }, 5000);
    } else {
      const taggedId = args[1]
        .split("")
        .filter((num) => !isNaN(num))
        .join("");
      const taggedMember = message.guild.members.cache.get(taggedId);
      if (taggedMember === undefined) {
        const errMsg = await message.channel.send(
          "What are you doing dear comrade..? Tag someone."
        );
        return setTimeout(() => {
          errMsg.delete();
        }, 6000);
      }
      const responses = [
        `${message.author.username} handed ${taggedMember.user.username}, Ура! 🍪`,
        `What is it? Oh ${message.author.username} has a cookie for ${taggedMember.user.username} 🍪`,
      ];
      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];
      message.channel.send({ content: randomResponse });
    }
  },
});

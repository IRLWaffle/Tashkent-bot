const Command = require("../../Structures/Command");
const discord = require("discord.js");
const Tenor = require("../../Structures/Tenor");

module.exports = new Command({
  name: "bonk",
  description: "bonks someone",
  run: async (message, args, client) => {
    let gifArry = [];
    let randomGif;
    if (!args[1]) {
      const errMsg = await message.channel.send(
        "What are you doing dear comrade..? Tag someone."
      );
      return setTimeout(() => {
        errMsg.delete();
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
      } else if (taggedMember.user.username === "Tashkent") {
        return message.channel.send("Bonk yourself, horny comrade");
      } else if (taggedMember.user.username === message.author.username) {
        return message.channel.send(
          "You're that horny that you're bonking yourself?"
        );
      }
      Tenor.Search.Query("bonk", "20")
        .then((res) =>
          res.forEach(async (post) => {
            await gifArry.push(post.url);
          })
        )
        .catch((err) => {
          console.log(err);
          return message.channel.send("There was been an error");
        });
      setTimeout(() => {
        randomGif = gifArry[Math.floor(Math.random() * gifArry.length)];
        message.channel
          .send(
            `${message.author.username} bonked ${taggedMember.user.username}`
          )
          .then(() => message.channel.send(randomGif));
      }, 2000);
    }
  },
});

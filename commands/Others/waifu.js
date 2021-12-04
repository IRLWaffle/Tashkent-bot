const Command = require("../../Structures/Command");
const Tenor = require("../../Structures/Tenor");

module.exports = new Command({
  name: "waifu",
  description: "this sends a gif of holo",
  run: async (message, args, client) => {
    let gifArry = [];
    let randomGif;
    let firstMessage = await message.channel.send("Wait.");
    const timeOutMessage = (content, time) => {
      setTimeout(() => {
        firstMessage.edit(content);
      }, time);
    };
    timeOutMessage("Wait..", 500);
    timeOutMessage("Wait...", 1000);
    Tenor.Search.Query("holo anime wolf-and-spice", "50")
      .then((res) => {
        res.forEach(async (post) => {
          await gifArry.push(post.url);
        });
      })
      .catch((err) => {
        console.log(err);
        return firstMessage.edit("There was been an error");
      });
    const emoteSearch = (emoteName) => {
      return message.guild.emojis.cache.find(
        (emote) => emote.name === emoteName
      );
    };

    setTimeout(async () => {
      randomGif = gifArry[Math.floor(Math.random() * gifArry.length)];
      firstMessage.edit("PRAISE HOLO");
      const gifMessage = await message.channel.send(randomGif);
      gifMessage
        .react(emoteSearch("meowpraise"))
        .then(() => gifMessage.react(emoteSearch("meowmelt")))
        .then(() => {
          gifMessage.react(emoteSearch("praiseHolo"));
        });
    }, 2500);
  },
});

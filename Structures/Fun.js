const rga = require("random-gif-api");
const DiscordJs = require("discord.js");
const animeGif = require("anime-images-api");
const api = new animeGif();

const functionWithoutHug = async (action, actionName, args, message) => {
  // return await rga.action;
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
    }
    const image = await action;
    if (taggedMember.user.username === "Tashkent") {
      message.channel.send("Stay away!");
    } else if (taggedMember.user.username === message.author.username) {
      message.channel.send("Do you need me for anything, dear comrade?");
    } else {
      const embed = new DiscordJs.MessageEmbed()
        .setColor("DARK_PURPLE")
        .setTitle(
          `**${message.author.username} ${actionName} ${taggedMember.user.username}**`
        )
        .setImage(image);
      message.channel.send({ embeds: [embed] });
    }
  }
};

const interactionsBetweenMembers = async (action, args, message) => {
  if (action === "lick") {
    const lickAction = await rga.lick();
    functionWithoutHug(lickAction, "licks", args, message);
  } else if (action === "pat") {
    const patAction = await rga.pat();
    functionWithoutHug(patAction, "pats", args, message);
  } else if (action === "cuddle") {
    const cuddleAction = await rga.cuddle();
    functionWithoutHug(cuddleAction, "cuddles", args, message);
  } else if (action === "kiss") {
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
      }
      let { image } = await api.sfw.kiss();
      if (taggedMember.user.username === "Tashkent") {
        return message.channel.send("Y-You're a dangerous comrade..");
      } else if (taggedMember.user.username === message.author.username) {
        return message.channel.send(
          "Do you need me for anything, dear comrade?"
        );
      } else {
        const embed = new DiscordJs.MessageEmbed()
          .setColor("DARK_PURPLE")
          .setTitle(
            `**${message.author.username} kisses ${taggedMember.user.username}**`
          )
          .setImage(image);
        message.channel.send({ embeds: [embed] });
      }
    }
  } else if (action === "poke") {
    const pokeAction = await rga.poke();
    functionWithoutHug(pokeAction, "pokes", args, message);
  } else if (action === "hug") {
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
      }
      let { image } = await api.sfw.hug();
      if (taggedMember.user.username === "Tashkent") {
        return message.channel.send(
          "Hugs? Is there anything that looks interesting?"
        );
      } else if (taggedMember.user.username === message.author.username) {
        return message.channel.send(
          "Do you need me for anything, dear comrade?"
        );
      } else {
        const embed = new DiscordJs.MessageEmbed()
          .setColor("DARK_PURPLE")
          .setTitle(
            `**${message.author.username} hugs ${taggedMember.user.username}**`
          )
          .setImage(image);
        message.channel.send({ embeds: [embed] });
      }
    }
  }
};

module.exports = { functionWithoutHug, interactionsBetweenMembers };

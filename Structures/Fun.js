const DiscordJs = require("discord.js");
const { soyultro } = require("soyultro");

const funFunction = async (action, args, message) => {
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
    let actionName = action;
    if (action.endsWith("s")) {
      actionName += "es";
    } else {
      actionName += "s";
    }
    const image = soyultro(action);
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

const funSelfInteraction = async (action, args, message) => {
  const image = soyultro(action);
  const embed = new DiscordJs.MessageEmbed()
    .setColor("DARK_PURPLE")
    .setTitle(`**${message.author.username}** ${action + "s"}`)
    .setImage(image);
  message.channel.send({ embeds: [embed] });
};

const interactionsBetweenMembers = async (action, args, message) => {
  if (action === "lick") {
    funFunction("lick", args, message);
  } else if (action === "pat") {
    funFunction("pat", args, message);
  } else if (action === "cuddle") {
    funFunction("cuddle", args, message);
  } else if (action === "kiss") {
    funFunction("kiss", args, message);
  } else if (action === "poke") {
    funFunction("poke", args, message);
  } else if (action === "hug") {
    funFunction("hug", args, message);
  } else if (action === "shoot") {
    funFunction("shoot", args, message);
  } else if (action === "nuzzle") {
    funFunction("nuzzle", args, message);
  } else if (action === "kill") {
    funFunction("kill", args, message);
  }
};

const selfInteraction = async (action, args, message) => {
  if (action === "smug") {
    funSelfInteraction("smug", args, message);
  } else if (action === "cringe") {
    funSelfInteraction("cringe", args, message);
  }
};

module.exports = { interactionsBetweenMembers, selfInteraction };

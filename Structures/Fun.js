const DiscordJs = require("discord.js");
const generateGif = require("./findGif");

const funFunction = async (action, args, interaction) => {
  // if (!args[1]) {
  //   const errMsg = await interaction.followUp(
  //     "What are you doing dear comrade..? Tag someone."
  //   );
  //   return setTimeout(() => {
  //     errMsg.delete();
  //   }, 5000);
  // } else {
  const [arg] = args;

  const taggedId = arg
    .split("")
    .filter((num) => !isNaN(num))
    .join("");
  const taggedMember = interaction.guild.members.cache.get(taggedId);
  if (taggedMember === undefined) {
    const errMsg = await interaction.followUp(
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
  const image = await generateGif(action);
  if (taggedMember.user.username === "Tashkent") {
    interaction.followUp("Stay away!");
  } else if (taggedMember.user.username === interaction.member.user.username) {
    interaction.followUp("Do you need me for anything, dear comrade?");
  } else {
    const embed = new DiscordJs.MessageEmbed()
      .setColor("DARK_PURPLE")
      .setTitle(
        `**${interaction.member.user.username} ${actionName} ${taggedMember.user.username}**`
      )
      .setImage(image);
    interaction.followUp({ embeds: [embed] });
  }
};

const funSelfInteraction = async (action, args, interaction) => {
  const image = soyultro(action);
  const embed = new DiscordJs.MessageEmbed()
    .setColor("DARK_PURPLE")
    .setTitle(`**${interaction.member.username}** ${action + "s"}`)
    .setImage(image);
  interaction.followUp({ embeds: [embed] });
};

const interactionsBetweenMembers = async (action, args, interaction) => {
  if (action === "lick") {
    funFunction("lick", args, interaction);
  } else if (action === "pat") {
    funFunction("pat", args, interaction);
  } else if (action === "cuddle") {
    funFunction("cuddle", args, interaction);
  } else if (action === "kiss") {
    funFunction("kiss", args, interaction);
  } else if (action === "poke") {
    funFunction("poke", args, interaction);
  } else if (action === "hug") {
    funFunction("hug", args, interaction);
  } else if (action === "shoot") {
    funFunction("shoot", args, interaction);
  } else if (action === "nuzzle") {
    funFunction("nuzzle", args, mesinteractionsage);
  } else if (action === "kill") {
    funFunction("kill", args, interaction);
  }
};

const selfInteraction = async (action, args, interaction) => {
  if (action === "smug") {
    funSelfInteraction("smug", args, interaction);
  } else if (action === "cringe") {
    funSelfInteraction("cringe", args, interaction);
  }
};

module.exports = { interactionsBetweenMembers, selfInteraction };

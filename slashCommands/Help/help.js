const DiscordJs = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "help",
  description: "shows all bot slash commands",
  options: [
    {
      name: "command",
      description: "details about a command",
      type: "STRING",
      required: false,
    },
  ],
  run: (client, interaction, args) => {
    const [commandToFind] = args;
    const dirNames = [];
    const embed = new DiscordJs.MessageEmbed()
      .setColor("DARK_PURPLE")
      .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }));
    if (!commandToFind) {
      embed
        .setTitle("Slash Commands")
        .setFooter(
          "To get details about any command: /help <command name> \nT!help for normal commands"
        );
      fs.readdirSync("./slashCommands")
        .filter((name) => name !== "Help")
        .forEach((name) => dirNames.push(name));

      const stringLoop = (array) => {
        let string = "";
        for (let i = 0; i < array.length; i++) {
          string += `${array[i].slice(0, -3)} \n`;
        }
        return string;
      };
      for (let i = 0; i < dirNames.length; i++) {
        let fileArray = [];
        fs.readdirSync(`./slashCommands/${dirNames[i]}`)
          .filter((file) => file.endsWith(".js"))
          .forEach((file) => fileArray.push(file));

        embed.addField(`${dirNames[i]}`, `${stringLoop(fileArray)}`, false);
        fileArray = [];
      }
    } else {
      const commandDetails = client.slashCommands.find(
        (cmd) => cmd.name === commandToFind
      );
      if (!commandDetails)
        return interaction.followUp(
          "`/help <command name>`, in order to get command details"
        );
      embed.setTitle(`${commandDetails.name}`);
      embed.setDescription(`${commandDetails.description}`);
    }
    interaction.followUp({ embeds: [embed] });
  },
};

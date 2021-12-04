const Command = require("../../Structures/Command");
const DiscordJs = require("discord.js");
const fs = require("fs");

module.exports = new Command({
  name: "help",
  description: "shows all the bot commands",
  run: (message, args, client) => {
    const dirNames = [];
    const embed = new DiscordJs.MessageEmbed()
      .setColor("DARK_PURPLE")
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }));

    //if there isn't a first argument, it will show all the commands in an embed
    if (!args[1]) {
      embed
        .setTitle("Commands")
        .setFooter(
          `To get details about any command: T!help <command name> \n /help for slash commands \n Command used by ${message.author.username}`
        );
      // getting all the folder names
      fs.readdirSync("./commands")
        .filter((name) => name !== "Help")
        .forEach((name) => dirNames.push(name));

      // putting all the commands into one string
      const stringLoop = (array) => {
        let string = "";
        for (let i = 0; i < array.length; i++) {
          string += `${array[i].slice(0, -3)} \n`;
        }
        return string;
      };

      //getting all the command names and adding them to the embed
      for (let i = 0; i < dirNames.length; i++) {
        let fileArray = [];
        fs.readdirSync(`./commands/${dirNames[i]}`)
          .filter((file) => file.endsWith(".js"))
          .forEach((file) => fileArray.push(file));

        embed.addField(`${dirNames[i]}`, `${stringLoop(fileArray)}`, false);
        fileArray = [];
      }

      //if there is an argument, it will show the details of the command
    } else {
      const commandDetails = client.commands.find(
        (cmd) => cmd.name === args[1]
      );
      if (!commandDetails)
        return message.channel.send(
          "`Tk!help <command name>`, in order to get command details"
        );
      embed.setTitle(`${commandDetails.name}`);
      embed.setDescription(`${commandDetails.description}`);
    }
    message.channel.send({ embeds: [embed] });
  },
});

const DiscordJs = require("discord.js");
const Command = require("./Command");
const fs = require("fs");
const Event = require("./Event.js");

class Client extends DiscordJs.Client {
  constructor() {
    super({ intents: [13903], partials: ["MESSAGE", "CHANNEL", "REACTION"] });
    /**
     * @type {DiscordJs.Collection<string, Command>}
     * @type {DiscordJs.Collection<string, Command>}
     */
    //commands collections
    this.commands = new DiscordJs.Collection();
    this.slashCommands = new DiscordJs.Collection();
    this.arrayOfSlashCommands = [];
    this.commandFolders = [];
    this.slashCommandFolders = [];
  }

  start(token) {
    // load all legacy commands commands
    this.getFoldersForCommands("commands", this.commandFolders);
    this.commandFolders.forEach((folderName) => this.setCommands(folderName));

    //load events
    fs.readdirSync("./Events")
      .filter((file) => file.endsWith(".js"))
      .forEach((file) => {
        /**
         * @type {Event}
         */
        const event = require(`../Events/${file}`);
        this.on(event.event, event.run.bind(null, this));
      });

    //load slash commands
    this.getFoldersForCommands("slashCommands", this.slashCommandFolders);
    this.slashCommandFolders.forEach((folderName) =>
      this.setSlashCommand(folderName)
    );

    this.on("ready", () => {
      //load slash commands to the test servers
      const testServers = ["893210671385280522"];
      testServers.forEach((server) => {
        this.guilds.cache.get(server).commands.set(this.arrayOfSlashCommands);
      });

      //setting the status
      this.user.setActivity("dear comrade", { type: "WATCHING" });

      //log that the bot is online
      console.log("online");
    });
    //login
    this.login(token);
  }

  //helper function to set commands to the client
  setCommands(folderName) {
    fs.readdirSync(`./commands/${folderName}`)
      .filter((file) => file.endsWith(".js"))
      .forEach((file) => {
        /**
         * @type {Command}
         */
        const command = require(`../commands/${folderName}/${file}`);
        this.commands.set(command.name, command);
      });
  }

  //helper function to set slash commands to the client
  setSlashCommand(folderName) {
    fs.readdirSync(`./slashCommands/${folderName}`)
      .filter((file) => file.endsWith(".js"))
      .forEach((file) => {
        const slashCommand = require(`../slashCommands/${folderName}/${file}`);
        this.slashCommands.set(slashCommand.name, slashCommand);
        this.arrayOfSlashCommands.push(slashCommand);
      });
  }

  //helper function to get all folders for the commands
  getFoldersForCommands(folderName, array) {
    fs.readdirSync(`./${folderName}`).forEach((folder) => {
      array.push(folder);
    });
  }
}
module.exports = Client;

const DiscordJs = require("discord.js");
const Client = require("./Client");
/**
 *
 * @param {DiscordJs.Message | DiscordJs.Interaction} message
 * @param {String[]} args
 * @param {Client} client
 */

const RunFunction = (message, args, client) => {};

class Command {
  /**
   * @typedef {{name: string, description: string, run: RunFunction}} CommandOptions
   * @param {CommandOptions} options
   */
  constructor(options) {
    this.name = options.name;
    this.description = options.description;
    this.run = options.run;
  }
}

module.exports = Command;

const DiscordJs = require("discord.js");
const Client = require("./Client.js");

/**
 * @template {keyof DiscordJs.ClientEvents} K
 * @param {Client} client
 * @param  {DiscordJs.ClientEvents[K]} eventArgs
 */
const RunFunction = (client, ...eventArgs) => {};
/**
 * @template {keyof DiscordJs.ClientEvents} K
 */
class Event {
  /**
   *
   * @param {K} event
   * @param {RunFunction<K>} RunFunction
   */
  constructor(event, RunFunction) {
    this.event = event;
    this.run = RunFunction;
  }
}

module.exports = Event;

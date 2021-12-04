const Command = require("../../Structures/Command");
const { interactionsBetweenMembers } = require("../../Structures/Fun");
const rga = require("random-gif-api");

module.exports = new Command({
  name: "pat",
  description: "this command pats someone",
  run: async (message, args, client) => {
    interactionsBetweenMembers("pat", args, message);
  },
});

const Command = require("../../Structures/Command");
const { interactionsBetweenMembers } = require("../../Structures/Fun");

module.exports = new Command({
  name: "cuddle",
  description: "cuddle someone",
  run: async (message, args, client) => {
    interactionsBetweenMembers("cuddle", args, message);
  },
});

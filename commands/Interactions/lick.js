const Command = require("../../Structures/Command");
const { interactionsBetweenMembers } = require("../../Structures/Fun");

module.exports = new Command({
  name: "lick",
  description: "lick someone",
  run: async (message, args, client) => {
    interactionsBetweenMembers("lick", args, message);
  },
});

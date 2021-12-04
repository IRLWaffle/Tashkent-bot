const Command = require("../../Structures/Command");
const { interactionsBetweenMembers } = require("../../Structures/Fun");

module.exports = new Command({
  name: "poke",
  description: "poke someone",
  run: async (message, args, client) => {
    interactionsBetweenMembers("poke", args, message);
  },
});

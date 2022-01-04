const Command = require("../../Structures/Command");
const { selfInteraction } = require("../../Structures/Fun");

module.exports = new Command({
  name: "cringe",
  description: "this command pats someone",
  run: async (message, args, client) => {
    selfInteraction("cringe", args, message);
  },
});

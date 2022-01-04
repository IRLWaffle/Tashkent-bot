const Command = require("../../Structures/Command");
const { selfInteraction } = require("../../Structures/Fun");

module.exports = new Command({
  name: "smug",
  description: "this command pats someone",
  run: async (message, args, client) => {
    selfInteraction("smug", args, message);
  },
});

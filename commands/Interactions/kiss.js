const Command = require("../../Structures/Command");
const { interactionsBetweenMembers } = require("../../Structures/Fun");

module.exports = new Command({
  name: "kiss",
  description: "kiss someone",
  run: async (message, args, client) => {
    interactionsBetweenMembers("kiss", args, message);
  },
});

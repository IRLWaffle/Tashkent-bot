const Command = require("../../Structures/Command");
const { interactionsBetweenMembers } = require("../../Structures/Fun");

module.exports = new Command({
  name: "hug",
  description: "give someone a hug",
  run: async (message, args, client) => {
    interactionsBetweenMembers("hug", args, message);
  },
});

const Command = require("../../Structures/Command");
const { interactionsBetweenMembers } = require("../../Structures/Fun");

module.exports = new Command({
  name: "kill",
  description: "this command pats someone",
  run: async (message, args, client) => {
    interactionsBetweenMembers("kill", args, message);
  },
});

const { interactionsBetweenMembers } = require("../../Structures/Fun");

module.exports = {
  name: "kill",
  description: "Kill someone!",
  options: [
    {
      type: "MENTIONABLE",
      name: "member",
      description: "the member you want to kill",
      required: true,
    },
  ],
  run: async (client, interaction, args) => {
    interactionsBetweenMembers("kill", args, interaction);
  },
};

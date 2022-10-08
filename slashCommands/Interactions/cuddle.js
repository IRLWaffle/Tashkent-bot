const { interactionsBetweenMembers } = require("../../Structures/Fun");

module.exports = {
  name: "cuddle",
  description: "Cuddle someone!",
  options: [
    {
      type: "MENTIONABLE",
      name: "member",
      description: "the member you want to cuddle",
      required: true,
    },
  ],
  run: async (client, interaction, args) => {
    interactionsBetweenMembers("cuddle", args, interaction);
  },
};

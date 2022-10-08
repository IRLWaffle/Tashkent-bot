const { interactionsBetweenMembers } = require("../../Structures/Fun");

module.exports = {
  name: "kiss",
  description: "Kiss someone!",
  options: [
    {
      type: "MENTIONABLE",
      name: "member",
      description: "the member you want to kiss",
      required: true,
    },
  ],
  run: async (client, interaction, args) => {
    interactionsBetweenMembers("kiss", args, interaction);
  },
};

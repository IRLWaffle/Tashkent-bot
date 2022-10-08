const { interactionsBetweenMembers } = require("../../Structures/Fun");

module.exports = {
  name: "hug",
  description: "Hug someone!",
  options: [
    {
      type: "MENTIONABLE",
      name: "member",
      description: "the member you want to hug",
      required: true,
    },
  ],
  run: async (client, interaction, args) => {
    interactionsBetweenMembers("hug", args, interaction);
  },
};

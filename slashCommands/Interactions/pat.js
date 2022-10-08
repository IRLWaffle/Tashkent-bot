const { interactionsBetweenMembers } = require("../../Structures/Fun");

module.exports = {
  name: "pat",
  description: "Pat someone!",
  options: [
    {
      type: "MENTIONABLE",
      name: "member",
      description: "the member you want to pat",
      required: true,
    },
  ],
  run: async (client, interaction, args) => {
    interactionsBetweenMembers("pat", args, interaction);
  },
};

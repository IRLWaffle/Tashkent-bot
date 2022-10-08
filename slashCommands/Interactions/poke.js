const { interactionsBetweenMembers } = require("../../Structures/Fun");

module.exports = {
  name: "poke",
  description: "Poke someone!",
  options: [
    {
      type: "MENTIONABLE",
      name: "member",
      description: "the member you want to poke",
      required: true,
    },
  ],
  run: async (client, interaction, args) => {
    interactionsBetweenMembers("poke", args, interaction);
  },
};

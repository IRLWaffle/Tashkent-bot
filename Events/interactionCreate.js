const Event = require("../Structures/Event");

module.exports = new Event("interactionCreate", async (client, interaction) => {
  if (interaction.isCommand()) {
    await interaction.deferReply({ ephemeral: false }).catch(() => {});
    const command = client.slashCommands.get(interaction.commandName);
    if (!command)
      return interaction.followUp({ content: "An error has occurred" });
    const args = [];
    for (let option of interaction.options.data) {
      if (option.type === "SUB_COMMAND") {
        if (option.name) args.push(option.name);
        option.options?.forEach((suOption) => {
          if (subOption.value) args.push(subOption.value);
        });
      } else if (option.value) args.push(option.value);
    }
    interaction.member = interaction.guild.members.cache.get(
      interaction.user.id
    );
    command.run(client, interaction, args);
  }
});

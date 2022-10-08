const Tenor = require("../../Structures/Tenor");

module.exports = {
  name: "bonk",
  description: "bonks someone",
  options: [
    {
      type: "MENTIONABLE",
      name: "member",
      description: "the member you want to bite",
      required: true,
    },
  ],
  run: async (client, interaction, args) => {
    let gifArry = [];
    let randomGif;
    const [arg] = args;
    const taggedId = arg
      .split("")
      .filter((num) => !isNaN(num))
      .join("");
    const taggedMember = interaction.guild.members.cache.get(taggedId);
    if (taggedMember.user.username === "Tashkent") {
      return interaction.followUp("Bonk yourself, horny comrade");
    } else if (
      taggedMember.user.username === interaction.member.user.username
    ) {
      return interaction.followUp(
        "You're that horny that you're bonking yourself?"
      );
    }
    Tenor.Search.Query("bonk", "20")
      .then((res) =>
        res.forEach(async (post) => {
          await gifArry.push(post.url);
        })
      )
      .catch((err) => {
        console.log(err);
        interaction.followUp("There was been an error");
        return;
      });
    setTimeout(() => {
      randomGif = gifArry[Math.floor(Math.random() * gifArry.length)];
      interaction
        .followUp(
          `${interaction.member.user.username} bonks ${taggedMember.user.username}`
        )
        .then(() => interaction.followUp(randomGif));
    }, 2000);
  },
};

const Event = require("../Structures/Event");

module.exports = new Event("messageCreate", (client, message) => {
  const PartReplies = ["I am", "I'm"];
  const words = message.content.split(/ +/);
  if (
    message.author.bot ||
    message.content.toLowerCase() === "im" ||
    message.content.toLowerCase() === "i'm"
  )
    return;
  if (words[0].toLowerCase() === "im" || words[0].toLowerCase() === `i'm`) {
    //gets the message, splits it into an array without any spaces, removes the first item and joins them together
    const messageDad = message.content.split(/ +/).splice(1).join(" ");
    const randomIm =
      PartReplies[Math.floor(Math.random() * PartReplies.length)];
    message.reply({ content: `Hi ${messageDad}, ${randomIm} Tashkent` });
  }
});

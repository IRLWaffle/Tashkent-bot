const Event = require("../Structures/Event");
const {
  increasePumpkinsOnReact,
  falseOnEventEnd,
  getReactState,
} = require("../Structures/DatabaseFunctions");

module.exports = new Event("ready", async (client) => {
  const idOfReacted = [];
  const arrayOfEmotes = [
    "Pumpkin",
    "PumpSanta",
    "PumpLight",
    "PumpWreath",
    "PumpIcicle",
  ];
  let pumpkinsToIncrease;

  //getting the guild
  const guildId = "591799970542256171";
  const guild = client.guilds.cache.get(guildId);

  // getting the channel
  const channel = guild.channels.cache.find(
    (channel) => channel.name === "lounge"
  );

  // calculating the time
  const second = 1000;
  const minute = second * 60;
  const hours = minute * 60;

  const maxHour = hours * 3;
  const minHour = hours * 2;

  const maxMinute = minute * 2;
  const minMinute = minute;

  let randomTimeToAppear =
    Math.floor(Math.random() * (maxHour - minHour + 1)) + minHour;

  console.log("first random time", randomTimeToAppear);

  const sendEmoteAndDelete = async () => {
    // getting random times
    randomTimeToAppear =
      Math.floor(Math.random() * (maxHour - minHour + 1)) + minHour;
    console.log("interval time", randomTimeToAppear);
    const randomTimeToReact =
      Math.floor(Math.random() * (maxMinute - minMinute + 1)) + minMinute;
    console.log("time to react", randomTimeToReact);

    // getting the emote
    const randomEmoteName =
      arrayOfEmotes[Math.floor(Math.random() * arrayOfEmotes.length)];
    const emote = guild.emojis.cache.find(
      (emote) => emote.name === randomEmoteName
    );

    // checking which pumpkin was sent
    if (randomEmoteName === arrayOfEmotes[0]) pumpkinsToIncrease = 1;
    if (randomEmoteName === arrayOfEmotes[1]) pumpkinsToIncrease = 3;
    if (randomEmoteName === arrayOfEmotes[2]) pumpkinsToIncrease = 3;
    if (randomEmoteName === arrayOfEmotes[3]) pumpkinsToIncrease = 5;
    if (randomEmoteName === arrayOfEmotes[4]) pumpkinsToIncrease = 5;

    //sending the random emote and reacting to it

    const randomEmote = await channel.send({ content: `${emote}` });
    randomEmote.react(emote);

    // filter function for the collector allowing everyone except for tashkent to react
    const filter = async (reaction, user) => {
      const result = await getReactState(guildId, user.id);
      return user.id !== "892871093315051551" && !result;
    };

    // creating the collector
    const collector = randomEmote.createReactionCollector({
      filter,
      max: 10,
      time: randomTimeToReact,
    });

    // logic for whenever someone reacts
    collector.on("collect", async (reaction, user) => {
      await increasePumpkinsOnReact(guildId, user.id, pumpkinsToIncrease);
      idOfReacted.push(user.id);
    });

    // delete the message after the time ends
    collector.on("end", async (collected) => {
      randomEmote.delete();
      for (let i = 0; i < idOfReacted.length; i++) {
        await falseOnEventEnd(guildId, idOfReacted[i]);
      }
    });
  };

  setInterval(sendEmoteAndDelete, randomTimeToAppear);
});

const endpoints = [
  {
    url: "https://nekos.life/api/v2/img/",
    identifier: "url",
    endpoints: ["baka", "cuddle", "slap", "bully", "poke"],
  },
  {
    url: "https://waifu.pics/api/sfw/",
    identifier: "url",
    endpoints: [
      "blush",
      "dance",
      "bite",
      "wink",
      "bonk",
      "hug",
      "kiss",
      "pat",
      "happy",
      "kill",
      "highfive",
      "wave",
      "cry",
      "smile",
      "kick",
      "yeet",
      "cringe",
      "glomp",
    ],
  },
  //   {
  //     url: "https://nekobot.xyz/api/image?type=",
  //     identifier: "message",
  //     endpoints: [
  //       "cosplay",
  //       "hentai",
  //       "ass",
  //       "pgif",
  //       "swimsuit",
  //       "thigh",
  //       "hass",
  //       "boobs",
  //       "hboobs",
  //       "pussy",
  //       "paizuri",
  //       "pantsu",
  //       "lewdneko",
  //       "feet",
  //       "hyuri",
  //       "hthigh",
  //       "hmidriff",
  //       "anal",
  //       "nakadashi",
  //       "blowjob",
  //       "gonewild",
  //       "hkitsune",
  //       "tentacle",
  //       "4k",
  //       "kanna",
  //       "hentai_anal",
  //       "food",
  //       "neko",
  //       "holo",
  //       "pee",
  //       "kemonomimi",
  //       "coffee",
  //       "yaoi",
  //       "futa",
  //       "gah",
  //     ],
  //   },
  {
    url: "https://anime-reactions.uzairashraf.dev/api/reactions/random?category=",
    identifier: "reaction",
    endpoints: ["confused", "sad", "thinking", "yes"],
  },
  {
    url: "https://nekoapi.vanillank2006.repl.co/api/action/",
    identifier: "url",
    endpoints: [
      "camp",
      "cook",
      "cuddle",
      "cure",
      "draw",
      "drive",
      "eat",
      "explosion",
      "feed",
      "hug",
      "kickbut",
      "kill",
      "kiss",
      "pat",
      "peek",
      "playing",
      "poke",
      "punch",
      "run",
      "sape",
      "shot",
      "sip",
      "slap",
      "sleep",
      "spank",
      "stare",
      "tickle",
      "travel",
      "work",
    ],
  },
  // CatBoy: [
  //     "https://api.catboys.com/img",
  //     "url",
  //     "catboy"
  // ]
];

const apiData = {
  Catboy: {
    url: "https://api.catboys.com/img",
    result: "url",
  },
  NekoApi: {
    url: "https://nekoapi.vanillank2006.repl.co/api/action/",
    result: "url",
  },
  AnimeReaction: {
    url: "https://anime-reactions.uzairashraf.dev/api/reactions/random?category=",
    result: "reaction",
  },
  NekoBot: {
    url: "https://nekobot.xyz/api/image?type=",
    result: "message",
  },
  WaifuPicsSfw: {
    url: "https://waifu.pics/api/sfw/",
    result: "url",
  },
  NekoLife: {
    url: "https://nekos.life/api/v2/img/",
    result: "url",
  },
};

module.exports = endpoints;

const mongoose = require("mongoose");
const reqString = {
  type: String,
  required: true,
};
const reqNumber = {
  type: Number,
  required: true,
};

const memberPumpkinSchema = mongoose.Schema(
  {
    guildId: reqString,
    userId: reqString,
    pumpkins: reqNumber,
    reacted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamp: true }
);

const memberLevelSchema = mongoose.Schema({
  guildId: reqString,
  userId: reqString,
  level: reqNumber,
  experience: reqNumber,
});

module.exports.memberPumpkin = mongoose.model("User", memberPumpkinSchema);
module.exports.memberLevel = mongoose.model(
  "UsersExperience",
  memberLevelSchema
);

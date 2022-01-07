const mongo = require("../mongo");
const MemberSchema = require("../Schemas/memberSchema");

const removeDoc = async (guildId, userId) => {
  await mongo().then(async (mongoose) => {
    try {
      //finding a document and deleting it
      await MemberSchema.memberPumpkin.findOneAndDelete({ guildId, userId });
    } catch (err) {
      console.log(err);
    } finally {
      mongoose.connection.close();
    }
  });
};

module.exports = {
  removeDoc,
};

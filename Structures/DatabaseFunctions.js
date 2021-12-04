const mongo = require("../mongo");
const MemberSchema = require("../Schemas/memberSchema");

const getPumpkins = async (guildId, userId) => {
  return await mongo().then(async (mongoose) => {
    try {
      // finding user
      const result = await MemberSchema.memberPumpkin.findOne({
        guildId,
        userId,
      });
      if (result) {
        return result.pumpkins;
      } else {
        await new MemberSchema.memberPumpkin({
          guildId,
          userId,
          pumpkins: 0,
        }).save();
      }
      return 0;
    } catch (err) {
      console.log(err);
    } finally {
      mongoose.connection.close();
    }
  });
};

const increasePumpkinsOnReact = async (guildId, userId, pumpkins) => {
  await mongo().then(async (mongoose) => {
    try {
      if (userId === "892871093315051551") return;
      //finding user and updating
      const result = await MemberSchema.memberPumpkin.findOneAndUpdate(
        {
          guildId,
          userId,
        },
        {
          guildId,
          userId,
          $inc: {
            pumpkins,
          },
          reacted: true,
        },
        { upsert: true, new: true }
      );
    } catch (err) {
      console.log(err);
    } finally {
      mongoose.connection.close();
    }
  });
};

const falseOnEventEnd = async (guildId, userId) => {
  await mongo().then(async (mongoose) => {
    try {
      if (userId === "892871093315051551") return;
      await MemberSchema.memberPumpkin.findOneAndUpdate(
        {
          guildId,
          userId,
        },
        {
          reacted: false,
        },
        {
          new: true,
        }
      );
    } catch (err) {
      console.log(err);
    } finally {
      mongoose.connection.close();
    }
  });
};

const getReactState = async (guildId, userId) => {
  return await mongo().then(async (mongoose) => {
    try {
      if (userId === "892871093315051551") return;
      //finding user
      const result = await MemberSchema.memberPumpkin.findOne({
        guildId,
        userId,
      });

      //checking if there is a result
      if (result) return result.reacted;
      else {
        // inserting document
        await new MemberSchema.memberPumpkin({
          guildId,
          userId,
          pumpkins: 0,
        }).save();
      }

      return 0;
    } catch (err) {
      console.log(err);
    }
  });
};

const getTop5Pumpkins = async (guildId) => {
  return mongo().then(async (mongoose) => {
    try {
      // searching for top 5
      const results = await MemberSchema.memberPumpkin
        .find({
          guildId,
        })
        .sort({
          pumpkins: -1,
        })
        .limit(5);

      return results;
    } catch (err) {
      console.log(err);
    } finally {
      mongoose.connection.close();
    }
  });
};

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
  getPumpkins,
  increasePumpkinsOnReact,
  falseOnEventEnd,
  getReactState,
  getTop5Pumpkins,
  removeDoc,
};

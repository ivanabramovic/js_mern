const mongo = require("mongoose");
const config = require("config");
const db = config.get("dbURL");

const connectDB = async () => {
  try {
    await mongo.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });

    console.log("Mongo connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

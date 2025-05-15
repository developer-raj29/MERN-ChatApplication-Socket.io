const mongoose = require("mongoose");
require("dotenv").config();

const connect = async (req, res) => {
  await mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => console.log("Mongo DataBase is connected successfully"))
    .catch((error) => {
      console.error("DataBase connect failed", error);
      process.exit(1);
    });
};

module.exports = connect;

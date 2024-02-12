const dotenv = require("dotenv");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
dotenv.config({ path: ".env" });
const db = mongoose.connect(process.env.DB, {});

// Check connection
const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "DB connection error:"));
connection.once("open", () => {
  console.log("DB connection established successfully");
});

module.exports = db;
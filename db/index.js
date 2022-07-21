const mongoose = require("mongoose");

let MONGODB_URI = "mongodb+srv://cluster0.cvjaw0c.mongodb.net/plantsDatabase";

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((e) => {
    console.error("Connection Error", e.message);
  });

const db = mongoose.connection;

module.exports = db;

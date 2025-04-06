const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email: String,
    password: String,
    aboutMe: String,
    address: {
      street: String,
      city: String,
      state: String,
      zip: String,
    },
    birthdate: Date,
  })
);

module.exports = User;

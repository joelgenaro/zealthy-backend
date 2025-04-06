const mongoose = require("mongoose");

const AdminConfig = mongoose.model(
  "AdminConfig",
  new mongoose.Schema({
    page2: [String],
    page3: [String],
  })
);

module.exports = AdminConfig;

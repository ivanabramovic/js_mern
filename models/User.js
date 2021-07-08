const mongoose = require("mongoose");

const userShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    requuired: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = User = mongoose.model("user", userShema);

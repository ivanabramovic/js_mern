const express = require("express");
const router = express.Router();
const db = require("mongoose");

const spiritsShema = new db.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = Spirits = db.model("spirits", spiritsShema);

const express = require("express");
const router = express.Router();
const db = require("mongoose");
const config = require("config");

const Spirit = require("../models/Spirits");

function reducePrice(name) {
  let reducedPrice = 0;

  let spirit = Spirit.findOne({ name });
  let price = spirit.price;

  if (spirit) {
    reducedPrice = price * 0.1;
  } else {
    return "Product does not exist";
  }
  console.log(reducedPrice);

  return reducedPrice;
}

module.exports = reducePrice;

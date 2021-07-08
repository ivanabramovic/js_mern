const express = require("express");
const router = express.Router();
const db = require("mongoose");
const config = require("config");

const Spirit = require("../models/Spirits");

router.post("/", async (req, res) => {
  const { name, quantity, price } = req.body;

  let spirit = await Spirit.findOne({ name });
  if (spirit) {
    return res.status(400).json({ msg: "Spirit already exists in database." });
  }
  spirit = new Spirit({
    name,
    quantity,
    price,
  });

  await spirit.save();

  let NAME = spirit.name;

  res.status(200).send(`Spirit ${NAME} saved to database.`);
});

module.exports = router;

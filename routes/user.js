const express = require("express");
const router = express.Router();
const config = require("config");
const { check, validationResult } = require("express-validator/check");

const User = require("../models/User");

router.get("/", async (req, res) => {
  try {
    return res.status(200).send("It works");
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ msg: "Server error" });
  }
});

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Provide valid email").isEmail(),
    check("password", "Password is requred").not().isEmpty(),
  ],
  async (req, res) => {
    const { name, password, email } = req.body;

    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ errors: [{ msg: "User exists" }] });
      }

      user = new User({
        name,
        password,
        email,
      });

      await user.save();
    } catch (err) {
      res.status(500).send("Server error");
    }

    res.send("User entered.");
  }
);

module.exports = router;

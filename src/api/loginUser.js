const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const router = express.Router();

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  fullname: {
    type: String,
  },
  password: {
    type: String,
  },
  orgId: {
    type: Number,
  },
  phoneNumber: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.modelNames().includes("User")
  ? mongoose.model("User")
  : mongoose.model("User", userSchema);

router.post("/", async (req, res) => {
  const body = req.body;
  const { password, email } = body;

  console.log({ password, email });

  if (!password || !email || !email.includes("@")) {
    return res.json({ message: "Input Password and Email Address" });
  }

  try {
    await mongoose.connect(
      `mongodb+srv://exxcelservicess:wZeldsSl8BfSgy1Z@cluster0.qxcsr2b.mongodb.net/bento?retryWrites=true&w=majority`
    );

    const registeredUser = await User.findOne({ email: email });


    if (!registeredUser) {
      return res.json({ message: "Incorrect Email Address" });
    }

    const userLogon = bcrypt.compareSync(password, registeredUser.password);

    if (!userLogon) {
        return res.json({ message: "Incorrect Password" });
      }

    if (userLogon) {
      return res.status(201).json({
        message: "Authenticated Successfully",
        message1: registeredUser
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "Authenticated Failed",
    });
  }
});

module.exports = router;

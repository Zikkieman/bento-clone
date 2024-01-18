const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const router = express.Router();
const saltRounds = 10;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  displayName: {
    type: String,
  },
  country: {
    type: String,
  },
  password: {
    type: String,
  },
  company: {
    type: String,
  },
  number: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.models.User ?? mongoose.model("User", userSchema);

router.post("/", async (req, res) => {
  const signUpInfo = req.body;
  const { companyName, country, number, displayName, email, password } =
    signUpInfo;

  if ((!companyName, !country, !number, !displayName, !email, !password)) {
    return res.json({ message: "Kindly fill necessary fields" });
  }

  if (email && !email.includes("@")) {
    return res.json({ message: "Invalid Email address" });
  }

  try {
    await mongoose.connect(
      `mongodb+srv://exxcelservicess:wZeldsSl8BfSgy1Z@cluster0.qxcsr2b.mongodb.net/bento?retryWrites=true&w=majority`
    );

    const registeredNumber = await User.findOne({ number: number });
    if (registeredNumber) {
      return res.json({ message: "Phone Number Already Exists" });
    }

    const registeredEmail = await User.findOne({ email: email });
    if (registeredEmail) {
      return res.json({ message: "Email Already Exists" });
    }

    const createPassword = bcrypt.hashSync(password, saltRounds);

    if (createPassword) {
      try {
        const newUser = await new User({
          email: email,
          password: createPassword,
          displayName: displayName,
          number: number,
          company: companyName,
          country: country,
          date: new Date().toLocaleString().toString(),
        });
        await newUser.save();
        return res.status(201).json({
          message: "Successfully Registered",
        });
      } catch (error) {
        console.log(error);
        return res.status(400).json({
          message: "Registration Failed",
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

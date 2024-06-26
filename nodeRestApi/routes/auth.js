const router = require("express").Router();
const User = require("../models/User");

const bcrypt = require("bcrypt");
router.post("/register", async (req, res) => {
  try {
    // generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create new user
    const newuser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    //save new user and respond
    const user = await newuser.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

// login

router.post("/login", async (req, res) => {
  try {
    // Await the user retrieval
    const user = await User.findOne({ email: req.body.email });

    // Check if the user exists
    if (!user) {
      return res.status(404).json("User not found");
    }

    // Compare the provided password with the stored hash
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    // If the password is invalid, return an error
    if (!validPassword) {
      return res.status(400).json("Wrong password");
    }

    // If everything is fine, return the user (or a success message)
    res.status(200).json(user); // It's better to return the user or a success message
  } catch (err) {
    console.log(err);
    res.status(500).json("An error occurred");
  }
});

module.exports = router;

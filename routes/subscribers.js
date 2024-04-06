const express = require("express");
const router = express.Router();

const Subscribe = require("../models/subscribe");

router.post("/register", async (req, res) => {
  try {
    // Extract data from the request body
    const { name, gender, email } = req.body;

    // Create a new subscriber object
    const subscribe = new Subscribe({
      name,
      gender,
      email,
    });

    // Save the subscriber to the database
    const savedSubscribe = await subscribe.save();

    // Send the saved subscriber as the response
    res.status(201).send(savedSubscribe);
  } catch (error) {
    // Log the error to the console
    console.error("Error saving subscriber:", error);

    // Check if the error is due to duplicate key violation
    if (error.code === 11000 && error.keyPattern.email) {
      return res.status(400).send("Email address is already registered");
    }

    // Handle other types of errors
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

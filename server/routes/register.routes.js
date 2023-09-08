const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
   
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {

    console.error('Registration failed', error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

module.exports = router;

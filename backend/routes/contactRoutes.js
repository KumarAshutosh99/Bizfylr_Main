// backend/routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // We'll create this model next

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    // Basic validation (add more if needed)
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Save to MongoDB
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    res.status(201).json({ message: 'Message received successfully!' });
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

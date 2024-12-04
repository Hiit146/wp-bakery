const express = require('express');
const Customer = require('../models/Customer');

const router = express.Router();

// Create new customer order
router.post('/order', async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).json(customer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

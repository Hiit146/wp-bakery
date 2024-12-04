const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    zip: String,
  },
  orderDetails: Array,  // Array of products purchased
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;

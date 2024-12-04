const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  stock: Number,
  imageUrl: String,  // URL of the product image
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const productRoutes = require('./routes/productRoutes');
const customerRoutes = require('./routes/customerRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, '../checkout/build')));
// Routes
app.use('/api', productRoutes);
app.use('/api', customerRoutes);

// Serve the HTML homepage for root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../checkout/build', 'bakeryhome.html'));
});

// Handle React routing for other routes
app.get(['/checkout','/gallery','/aboutus'], (req, res) => {
  res.sendFile(path.join(__dirname, '../checkout/build', 'index.html'));
});

// Catch-all route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../checkout/build', 'bakeryhome.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.log('Error connecting to MongoDB Atlas:', err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

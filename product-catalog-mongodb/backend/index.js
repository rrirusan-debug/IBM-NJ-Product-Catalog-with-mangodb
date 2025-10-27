const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const productsRouter = require('./routes/products');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productsRouter);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/product_catalog';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> {
    console.log('MongoDB connected');
    app.listen(PORT, ()=> console.log('Server running on port', PORT));
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
  });

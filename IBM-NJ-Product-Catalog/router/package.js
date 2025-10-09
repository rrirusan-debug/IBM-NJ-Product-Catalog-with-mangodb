const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Product Schema
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    price: Number,
    location: String // Location field
});
const Product = mongoose.model('Product', productSchema);

// GET all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST new product
router.post('/', async (req, res) => {
    const product = new Product(req.body);
    try {
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;


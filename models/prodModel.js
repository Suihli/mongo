// models/prodModel.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    description: { type: String, required: true },
    prix: { type: Number, required: true },
    images: [{ type: String }] // Array of strings for image URLs
});

// Exporter le modèle de produit
module.exports = mongoose.model('Produit', ProductSchema);

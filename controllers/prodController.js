// controllers/prodController.js
const Produit = require('../models/prodModel');

// Ajouter un produit
exports.addProduct = async (req, res) => {
    const { nom, description, prix } = req.body;

    // Validation des données
    if (!nom || !description || typeof prix !== 'number') {
        return res.status(400).json({ message: "Veuillez fournir toutes les informations requises (nom, description, prix)." });
    }

    const nouveauProduit = new Produit({ nom, description, prix });
    
    try {
        const savedProduct = await nouveauProduit.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Supprimer un produit
exports.deleteProduct = async (req, res) => {
    try {
        const result = await Produit.findByIdAndDelete(req.params.id);
        if (!result) return res.status(404).json({ message: "Produit non trouvé." });
        res.status(200).json({ message: "Produit supprimé", result });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Mettre à jour un produit
exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Produit.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ message: "Produit non trouvé." });
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Obtenir un produit par ID
exports.getProduct = async (req, res) => {
    try {
        const product = await Produit.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Produit non trouvé." });
        res.status(200).json(product);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

// Obtenir tous les produits
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Produit.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

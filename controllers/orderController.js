// controllers/orderController.js
const Commande = require('../models/orderModel');
const Produit = require('../models/prodModel');

// Ajouter une commande
exports.addOrder = async (req, res) => {
    try {
        const commande = new Commande(req.body);
        const savedOrder = await commande.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtenir toutes les commandes
exports.getAllOrders = async (req, res) => {
    try {
        const commandes = await Commande.find().populate('produits.produit');
        res.status(200).json(commandes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtenir une commande par ID
exports.getOrder = async (req, res) => {
    try {
        const commande = await Commande.findById(req.params.id).populate('produits.produit');
        res.status(200).json(commande);
    } catch (error) {
        res.status(404).json({ message: 'Commande non trouvée' });
    }
};

// Supprimer une commande par ID
exports.deleteOrder = async (req, res) => {
    try {
        await Commande.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Commande supprimée avec succès' });
    } catch (error) {
        res.status(404).json({ message: 'Commande non trouvée' });
    }
};

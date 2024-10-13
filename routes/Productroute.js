// routes/Productroute.js
const express = require('express');
const router = express.Router();
const prodController = require('../controllers/prodController');

// Définir les routes pour les produits
router.post('/', prodController.addProduct);           // Ajouter un produit
router.delete('/:id', prodController.deleteProduct);   // Supprimer un produit par ID
router.put('/:id', prodController.updateProduct);      // Mettre à jour un produit par ID
router.get('/:id', prodController.getProduct);         // Obtenir un produit par ID
router.get('/', prodController.getAllProducts);        // Obtenir tous les produits

// Exporter le routeur
module.exports = router;

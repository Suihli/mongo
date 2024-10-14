// routes/Orderroute.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Définir les routes pour les commandes
router.post('/', orderController.addOrder);           // Ajouter une commande
router.get('/', orderController.getAllOrders);        // Obtenir toutes les commandes
router.get('/:id', orderController.getOrder);         // Obtenir une commande par ID
router.delete('/:id', orderController.deleteOrder);   // Supprimer une commande par ID

// Exporter le routeur
module.exports = router;
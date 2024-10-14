const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    client: { type: String, required: true },
    produits: [{
        produitId: { type: mongoose.Schema.Types.ObjectId, ref: 'Produit' },
        quantite: { type: Number, required: true }
    }]
});

module.exports = mongoose.model('Commande', OrderSchema);

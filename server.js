// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/Productroute');
const orderRoutes = require('./routes/Orderroute');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/nom_de_votre_bdd', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connecté à MongoDB'))
.catch(err => console.error('Erreur de connexion à MongoDB', err));

// Utilisation des routes de produits et commandes
app.use('/api/produits', productRoutes);
app.use('/api/commandes', orderRoutes); // Vérifiez que cette ligne est bien présente

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});

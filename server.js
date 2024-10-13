const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/Productroute');

const app = express();
const PORT = 8080;

// Middleware pour analyser le corps des requêtes JSON
app.use(bodyParser.json());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/nom_de_votre_base_de_donnees', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connecté à MongoDB'))
.catch(err => console.error('Erreur de connexion à MongoDB', err));

// Utilisation des routes de produits
app.use('/api/produits', productRoutes);

// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const Livre = require('./model/livre');
require('./database'); // Import connexion MongoDB

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

/* --- ROUTES CRUD --- */

// Ajouter un livre
app.post('/livres', async (req, res) => {
    try {
        const livre = new Livre(req.body);
        await livre.save();
        res.status(201).json({ message: 'Livre ajouté avec succès', livre });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de l\'ajout du livre', error: err });
    }
});

// Obtenir tous les livres
app.get('/livres', async (req, res) => {
    try {
        const livres = await Livre.find();
        res.status(200).json(livres);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des livres', error: err });
    }
});

// Mettre à jour un livre
app.put('/livres/:id', async (req, res) => {
    try {
        const livre = await Livre.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!livre) return res.status(404).json({ message: 'Livre non trouvé' });

        res.status(200).json({ message: 'Livre mis à jour', livre });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour', error: err });
    }
});

// Supprimer un livre
app.delete('/livres/:id', async (req, res) => {
    try {
        const livre = await Livre.findByIdAndDelete(req.params.id);

        if (!livre) return res.status(404).json({ message: 'Livre non trouvé' });

        res.status(200).json({ message: 'Livre supprimé' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la suppression', error: err });
    }
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});

// Importation du module http
import http from 'http';

// Définition du port
const PORT = 3000;

// Création du serveur
const serveur = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bonjour depuis mon serveur Node.js (avec nodemon) - Test automatique');
});

// Écoute sur le port défini
serveur.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});

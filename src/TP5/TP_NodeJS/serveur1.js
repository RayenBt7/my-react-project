import http from 'http';
import fs from 'fs';

// Définition du port
const PORT = 8081;

// Création du serveur
const serveur = http.createServer((req, res) => {
  // Lecture du fichier data.txt
  fs.readFile('src/TP5/TP_NodeJS/data.txt', 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Erreur lors de la lecture du fichier');
      return;
    }

    // Génération de la page HTML
    const html = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Serveur Node.js</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        h1 { color: #333; }
        p { line-height: 1.6; }
        footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #ccc; color: #666; }
    </style>
</head>
<body>
    <h1>Bienvenue sur mon serveur Node.js</h1>
    <p>${data.replace(/\n/g, '<br>')}</p>
    <footer>
        <p>Serveur créé avec Node.js - TP5</p>
    </footer>
</body>
</html>`;

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  });
});

// Écoute sur le port défini
serveur.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});

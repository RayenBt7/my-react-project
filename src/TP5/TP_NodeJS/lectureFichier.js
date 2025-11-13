import fs from 'fs';
// Lecture de fichier
fs.readFile('src/TP5/TP_NodeJS/data.txt', 'utf8', (err, data) => {
  if (err) {
	console.error('Erreur de lecture :', err);
	return;
  }
  console.log('Contenu du fichier :', data);

  // Écriture dans un nouveau fichier
  fs.writeFile('src/TP5/TP_NodeJS/copie.txt', data + '\nCopie créée avec Node.js', (err) => {
	if (err) {
	  console.error('Erreur d\'écriture :', err);
	  return;
	}
	console.log('Copie créée avec succès !');
  });
});

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('public'));

let tasks = [
  { id: 1, title: 'Apprendre Express', done: false },
  { id: 2, title: 'Créer une application de démonstration', done: false },
];

app.get('/', (req, res) => res.render('index', { user: 'Rayen' }));
app.get('/tasks', (req, res) => res.render('tasks', { tasks }));
app.get('/about', (req, res) => res.render('about'));
app.get('/contact', (req, res) => res.render('contact'));

app.get('/api/tasks', (req, res) => res.json(tasks));
app.post('/api/tasks', (req, res) => {
  if (!req.body.title || req.body.title.trim() === '') {
    return res.status(400).json({ error: "Le titre de la tâche est requis" });
  }
  const newTask = { id: tasks.length + 1, title: req.body.title, done: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`));

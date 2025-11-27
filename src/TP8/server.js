const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Task = require("./model/Task"); // Assure-toi que le chemin est correct

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connexion à MongoDB (plus besoin des options useNewUrlParser/useUnifiedTopology)
mongoose
  .connect("mongodb://localhost:27017/todoApp") // Ajouter port 27017 et nom DB
  .then(() => console.log("✅ Connecté à MongoDB"))
  .catch((err) => console.error("❌ Erreur MongoDB :", err));

// Routes
// Récupérer toutes les tâches
app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Ajouter une tâche
app.post("/tasks", async (req, res) => {
  const { title } = req.body;
  const newTask = new Task({ title });
  await newTask.save();
  res.status(201).json(newTask);
});

// Supprimer une tâche
app.delete("/tasks/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Tâche supprimée" });
});

// Marquer une tâche comme terminée
app.put("/tasks/:id", async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(
    req.params.id,
    { completed: req.body.completed },
    { new: true }
  );
  res.json(updatedTask);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

import React, { useState, useEffect } from "react";
import axios from "axios";
import AddTask from "./AddTask";

import { Bienvenue, Compteur, Formulaire, ListeCourses } from "./TP3";
import {
  ToDoApp,
  AppTP,
  Time,
  UserProvider,
  UserProfile,
  UserList,
  Notifications,
  NotificationCounter,
} from "./TP4";

import "./App.css";
import HomePage from "./testPage/homePage.jsx";

function App() {
  // State pour les tâches MongoDB
  const [tasks, setTasks] = useState([]);

  // Récupération des tâches depuis le backend Express
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/tasks")
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Erreur récupération tâches :", error));
  }, []);

  // Rafraîchir la liste quand une nouvelle tâche est ajoutée
  const handleTaskAdded = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Supprimer une tâche
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/tasks/${id}`)
      .then(() => setTasks((prev) => prev.filter((task) => task._id !== id)))
      .catch((error) => console.error("Erreur suppression :", error));
  };

  // Marquer une tâche comme terminée
  const toggleComplete = (id, completed) => {
    axios
      .put(`http://localhost:5000/api/tasks/${id}`, { completed: !completed })
      .then((res) =>
        setTasks((prev) =>
          prev.map((task) => (task._id === id ? res.data : task))
        )
      )
      .catch((error) => console.error("Erreur mise à jour :", error));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      {/* Composants existants */}
      <Bienvenue nom="Rayen" />
      <Compteur />
      <Formulaire />
      <ListeCourses />
      <hr />

      <ToDoApp />
      <Time />

      <UserProvider>
        <UserProfile />
        <Notifications />
        <NotificationCounter />
      </UserProvider>

      <UserList />
      <HomePage />

      <hr />
      <h1>🟢 Exercices Node.js - TP5</h1>
      <h2>Check in folder TP5</h2>

      {/* Section MongoDB */}
      <hr />
      <h1>📌 Tâches depuis MongoDB - TP8</h1>

      {/* Ajouter une nouvelle tâche */}
      <AddTask onTaskAdded={handleTaskAdded} />

      {/* Affichage de la liste */}
      {tasks.length === 0 ? (
        <p>Aucune tâche trouvée</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((task) => (
            <li key={task._id} style={{ marginBottom: "10px" }}>
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  marginRight: "10px",
                }}
              >
                {task.title}
              </span>
              <button onClick={() => toggleComplete(task._id, task.completed)}>
                {task.completed ? "❌ Annuler" : "✔️ Terminer"}
              </button>
              <button
                onClick={() => handleDelete(task._id)}
                style={{ marginLeft: "5px" }}
              >
                🗑️ Supprimer
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

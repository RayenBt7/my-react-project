import React, { useState } from "react";
import './App.css';
import TodoApp from './ToDoApp';

function Bienvenue({ nom }) {
  return <h2>Bienvenue, {nom} !</h2>;
}

function Compteur() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Compteur : {count}</h2>
      <button onClick={() => setCount(count + 1)}>➕ Incrémenter</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>➖ Décrémenter</button>
    </div>
  );
}

function Formulaire() {
  const [nom, setNom] = useState("");
  const handleClick = () => {
    if (nom.trim() === "") {
      alert("Veuillez entrer un nom !");
    } else {
      alert(`Bonjour, ${nom} !`);
    }
  };
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Formulaire - Gestion des événements 🖱️</h2>
      <input
        type="text"
        placeholder="Entrez votre nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        style={{ padding: "8px", borderRadius: "5px", width: "200px" }}
      />
      <button onClick={handleClick} style={{ marginLeft: "10px", padding: "8px 12px" }}>Dire bonjour 👋</button>
    </div>
  );
}

function ListeCourses() {
  const [articles, setArticles] = useState([]);
  const [nouvelArticle, setNouvelArticle] = useState("");
  const ajouterArticle = () => {
    if (nouvelArticle.trim() !== "") {
      setArticles([...articles, nouvelArticle]);
      setNouvelArticle("");
    }
  };
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Liste de courses 🛒</h2>
      <input
        type="text"
        placeholder="Ajouter un article"
        value={nouvelArticle}
        onChange={(e) => setNouvelArticle(e.target.value)}
        style={{ padding: "8px", borderRadius: "5px", width: "200px" }}
      />
      <button onClick={ajouterArticle} style={{ marginLeft: "10px", padding: "8px 12px" }}>Ajouter</button>
      <ul style={{ textAlign: "left", marginTop: "15px" }}>
        {articles.map((article, index) => (
          <li key={index}>{article}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>📘 Exercices React de base</h1>
      <Bienvenue nom="Rayen" />
      <Compteur />
      <Formulaire />
      <ListeCourses />
      <TodoApp />
    </div>
  );
}

export default App;

import React, { useState, createContext, useContext, useEffect } from "react";
import "./App.css";
import TodoApp from "./ToDoApp";
import Time from "./Time";
import UserList from "./UserList";

// -----------------------------
// 🌗 CONTEXTE DU THÈME
// -----------------------------
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const styles = {
    backgroundColor: theme === "light" ? "#f0f0f0" : "#222",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    borderRadius: "10px",
    transition: "all 0.3s ease",
  };
  return (
    <div style={styles}>
      <p>
        Thème actuel : <strong>{theme}</strong>
      </p>
      <button onClick={toggleTheme}>Changer le thème</button>
    </div>
  );
}

// -----------------------------
// 🧠 COMPOSANTS DE BASE
// -----------------------------
function Bienvenue({ nom }) {
  return <h2>Bienvenue, {nom} !</h2>;
}

function Compteur() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Compteur : {count}</h2>
      <button onClick={() => setCount(count + 1)}>➕ Incrémenter</button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ marginLeft: "10px" }}
      >
        ➖ Décrémenter
      </button>
    </div>
  );
}

function Formulaire() {
  const [nom, setNom] = useState("");
  const handleClick = () => {
    if (nom.trim() === "") alert("Veuillez entrer un nom !");
    else alert(`Bonjour, ${nom} !`);
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
      <button
        onClick={handleClick}
        style={{ marginLeft: "10px", padding: "8px 12px" }}
      >
        Dire bonjour 👋
      </button>
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
      <button
        onClick={ajouterArticle}
        style={{ marginLeft: "10px", padding: "8px 12px" }}
      >
        Ajouter
      </button>
      <ul style={{ textAlign: "left", marginTop: "15px" }}>
        {articles.map((article, index) => (
          <li key={index}>{article}</li>
        ))}
      </ul>
    </div>
  );
}

// -----------------------------
// 🔥 TP : PROFIL + NOTIFICATIONS
// -----------------------------
const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "Alice", connected: true });
  const toggleConnection = () =>
    setUser((prev) => ({ ...prev, connected: !prev.connected }));
  return (
    <UserContext.Provider value={{ user, toggleConnection }}>
      {children}
    </UserContext.Provider>
  );
}

function UserProfile() {
  const { user, toggleConnection } = useContext(UserContext);
  return (
    <div style={{ marginBottom: 20 }}>
      <h2>Profil utilisateur</h2>
      <p>Nom : {user.name}</p>
      <p>Status : {user.connected ? "Connecté ✅" : "Déconnecté ❌"}</p>
      <button onClick={toggleConnection}>
        {user.connected ? "Se déconnecter" : "Se connecter"}
      </button>
    </div>
  );
}

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifications([
        "Bienvenue dans l'application !",
        "Nouveau message reçu",
        "Mise à jour disponible",
      ]);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <p>Chargement des notifications...</p>;

  return (
    <div>
      <h3>Notifications</h3>
      <ul>
        {notifications.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

function NotificationCounter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ marginTop: 20 }}>
      <p>Notifications lues : {count}</p>
      <button onClick={() => setCount(count + 1)}>Marquer comme lue</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: 10 }}>
        Réinitialiser
      </button>
    </div>
  );
}

// -----------------------------
// 🧩 APP PRINCIPALE
// -----------------------------
function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <div>
        <h1>Exercice useEffect</h1>
        <Time />
      </div>

      <ThemeProvider>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Exercice useContext</h1>
          <ThemeToggle />
        </div>
      </ThemeProvider>

      <div>
        <h1>TP - Appel API avec useEffect</h1>
        <UserList />
      </div>

      {/* 🔥 Nouvelle section : TP Profil + Notifications */}
      <UserProvider>
        <div style={{ marginTop: "50px" }}>
          <h1>TP - Profil Utilisateur et Notifications</h1>
          <UserProfile />
          <Notifications />
          <NotificationCounter />
        </div>
      </UserProvider>

      <h1>Exercices React de base</h1>
      <Bienvenue nom="Rayen" />
      <Compteur />
      <Formulaire />
      <ListeCourses />
      <TodoApp />
    </div>
  );
}

export default App;


import "./App.css";
import { Bienvenue, Compteur, Formulaire, ListeCourses } from './TP3';
import { ToDoApp, Time, UserProvider, UserProfile, UserList, Notifications, NotificationCounter } from "./TP4";



// -----------------------------
// 🌗 CONTEXTE DU THÈME
// -----------------------------


// -----------------------------
// 🧠 COMPOSANTS DE BASE
// -----------------------------
  


// -----------------------------
// 🔥 TP : PROFIL + NOTIFICATIONS
// -----------------------------

// -----------------------------
// 🧩 APP PRINCIPALE
// -----------------------------
function App() {
  return (

    <div style={{ textAlign: "center", marginTop: "30px" }}>



      <h1>Exercices React de base - TP3 -</h1>
      <Bienvenue nom="Rayen_bt" />
      <Compteur />
      <Formulaire />
      <ListeCourses />
      <hr />
      <h1>Exercices React avancés - TP4 -</h1>
      <ToDoApp />
      <Time />
      <UserProvider>
        <UserProfile />
        <UserList />
        <Notifications />
        <NotificationCounter />
      </UserProvider>
      <hr />
      <h1>Exercices React avancés - TP5 -</h1>
     


    </div>
  );
}

export default App;

import { Bienvenue, Compteur, Formulaire, ListeCourses } from './TP3';
import { ToDoApp, AppTP, Time, UserProvider, UserProfile, UserList, Notifications, NotificationCounter } from './TP4';
import './App.css';
import HomePage from './testPage/homePage.jsx';
import Image from 'next/image.js';


function App() {


  return (

    <div style={{ textAlign: "center", marginTop: "30px" }}>
      
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
      <link  href="testPage" />
      /*link to the test page*/
      <HomePage></HomePage>
      
      
      <hr />
      <h1>🟢 Exercices Node.js - TP5</h1>
      <h2>check in folder TP5 </h2>
      {/* TP5 components are Node.js scripts, not React components, so they can't be rendered in JSX */}
    </div>
  );
}

export default App;

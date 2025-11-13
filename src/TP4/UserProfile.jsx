import React, { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

function UserProfile() {
  const { user, toggleConnection } = useContext(UserContext);

  return (
    <div style={{ marginBottom: "30px" }}>
      <h2>Profil Utilisateur 👤</h2>
      <p>
        Nom : <strong>{user.name}</strong>
      </p>
      <p>
        Statut :{" "}
        <strong style={{ color: user.connected ? "green" : "red" }}>
          {user.connected ? "Connecté" : "Déconnecté"}
        </strong>
      </p>
      <button onClick={toggleConnection}>
        {user.connected ? "Se déconnecter" : "Se connecter"}
      </button>
    </div>
  );
}

export default UserProfile;

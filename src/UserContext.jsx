import React, { createContext, useState } from "react";

// Création du contexte utilisateur
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Rayen",
    connected: false,
  });

  // Fonction pour changer le statut de connexion
  const toggleConnection = () => {
    setUser((prevUser) => ({
      ...prevUser,
      connected: !prevUser.connected,
    }));
  };

  return (
    <UserContext.Provider value={{ user, toggleConnection }}>
      {children}
    </UserContext.Provider>
  );
}

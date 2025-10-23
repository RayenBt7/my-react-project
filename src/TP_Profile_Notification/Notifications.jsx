import React, { useState, useEffect } from "react";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Chargement simulé avec useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifications([
        "Nouveau message reçu 📩",
        "Mise à jour du profil réussie ✅",
        "Ami ajouté 👥",
      ]);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <p>Chargement des notifications...</p>;

  return (
    <div style={{ marginBottom: "30px" }}>
      <h2>Notifications 🔔</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {notifications.map((notif, index) => (
          <li key={index}>✅ {notif}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;

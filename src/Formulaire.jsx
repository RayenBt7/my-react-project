import { useState } from "react";

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
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Exercice 3 - Gestion des événements 🖱️</h2>

      
      <input
        type="text"
        placeholder="Entrez votre nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        style={{ padding: "8px", borderRadius: "5px", width: "200px" }}
      />

      {/* 4️⃣ Bouton pour afficher le message */}
      <button
        onClick={handleClick}
        style={{ marginLeft: "10px", padding: "8px 12px" }}
      >
        Dire bonjour 👋
      </button>
    </div>
  );
}

export default Formulaire;

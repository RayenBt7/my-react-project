import { useState } from "react";

function Compteur() {
  // Déclaration de l'état (state) du compteur
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
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

export default Compteur;

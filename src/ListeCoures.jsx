import { useState } from "react";

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

export default ListeCourses;

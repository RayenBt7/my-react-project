import React, { useState } from "react";
import axios from "axios";

function AddTask({ onTaskAdded }) {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (!title) return;
    axios.post("http://localhost:5000/tasks", { title })
      .then(res => {
        onTaskAdded(res.data);
        setTitle("");
      });
  };

  return (
    <div>
      <input 
        type="text" 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        placeholder="Ajouter une tâche" 
      />
      <button onClick={handleAdd}>Ajouter</button>
    </div>
  );
}

export default AddTask;

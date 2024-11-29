import React, { useState } from "react";

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();
    
    const Tasks = {
      id: Date.now(),
      description: description,
      completed: false,
    };

    setDescription("");
  };

  return (
    /*TODO: add a form to add a new task*/
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Task..."
        onChange={(e) => setDescription(e.target.value)} 
        value={description}
        required
      />
      <button type="submit">Add Task</button>
    </form>
      );
    };

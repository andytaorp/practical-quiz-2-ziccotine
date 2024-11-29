import React, { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";

function App() {
  const [Tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    // TODO: write code to add a new task
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleToggleTask = (id) => {
    // TODO: write code to toggle a task's status
    setTasks((prevTasks) => prevTasks.map((Tasks) => Tasks.id === id ? { ...Tasks, completed: !Tasks.completed } : Tasks));
  };

  const handleDeleteTask = (id) => {
    // TODO: write code to delete a task
    setTasks((prevTasks) => prevTasks.filter((Tasks) => Tasks.id !== id));
  };

  return (
    <div className="app">
      <h1>Task Tracker</h1>
      {/*TODO: add a form to add a new task*/}
      <Form handleAddItem={handleAddTask} />
      <TaskList
        Tasks={Tasks}
        handleDeleteTask={handleDeleteTask}
        handleToggleTask={handleToggleTask}
      />
      {/*TODO: add a list of tasks*/}
      
    </div>
  );
}

export default App;

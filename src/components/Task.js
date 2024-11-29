import React from "react";

/**
 * TODO: implement the Task component
 * @function Task
 * @returns {React.Component} A <li> containing the task description and a checkbox to toggle completion
 */

export default function Task( Task, handleDeleteTask, handleToggleTask ) {
    return (
        <li>
          <input
            type="checkbox"
            checked={Task.completed}
            onChange={() => handleToggleTask(Task.id)}
          />
          <p
            style={{
              textDecoration: Task.completed ? "line-through" : "none",
            }}
          >
            {Task.description}
          </p>
          <button onClick={() => handleDeleteTask(Task.id)}>delete</button>
        </li>
      );
    }

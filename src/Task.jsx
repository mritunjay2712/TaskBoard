import React from 'react';
import './Task.css';


const Task = ({ task, deleteTask, editTask }) => {
  return (
    <div className="task">
      <div class="title-priority">
        <h3>{task.title}</h3>
        <p id="title-priority">{task.priority}</p>
      </div>
      <h2>{task.description}</h2>
      <p>@{task.assignee}</p>
      <div class="task-buttons-container">
      <button class="NormalBtn task-Btn" onClick={() => editTask(task)}>Edit</button>
      <button class="NormalBtn task-Btn" id="del-Btn" onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
      
    </div>
  );
};

export default Task;

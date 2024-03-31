import React from 'react';
import Task from './Task';
import './TaskColumn.css';

const TaskColumn = ({ status, tasks, deleteTask, editTask }) => {
  return (
    <div className={`task-column task-column-${status.toLowerCase()}`}>
      <h2 className={`status-heading status-heading-${status.toLowerCase()}`}>{status.toUpperCase()}</h2>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
};

export default TaskColumn;

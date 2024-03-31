import React from 'react';
import TaskColumn from './TaskColumn';
import './TaskBoard.css';

const TaskBoard = ({ tasks, deleteTask, editTask }) => {
  const statuses = ['Pending', 'In Progress', 'Completed', 'Deployed', 'Deferred'];

  return (
    <div className="task-board">
      {statuses.map(status => (
        <TaskColumn
          key={status}
          status={status}
          tasks={tasks.filter(task => task.status === status)}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
};

export default TaskBoard;

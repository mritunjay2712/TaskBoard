
import React, { useState } from 'react';
import TaskBoard from './TaskBoard';
import TaskForm from './TaskForm';
import './App.css';



const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [sortKey, setSortKey] = useState('priority'); // Added for sorting

  const addOrUpdateTask = (task) => {
    if (currentTask) {
      setTasks(tasks.map(t => (t.id === currentTask.id ? { ...task, id: currentTask.id } : t)));
    } else {
      setTasks([...tasks, { ...task, id: Date.now(), startDate: task.startDate, endDate: task.endDate }]);
    }
    setShowForm(false);
    setCurrentTask(null);
  };

  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId && task.status !== 'Completed'));
  };

  const handleEditInitiation = (task) => {
    setCurrentTask(task);
    setShowForm(true);
  };

  // Function to sort tasks
  const sortTasks = (tasks) => {
    return tasks.sort((a, b) => {
      if (sortKey === 'priority') {
        return a.priority.localeCompare(b.priority);
      } else if (sortKey === 'startDate') {
        return new Date(a.startDate) - new Date(b.startDate);
      } else if (sortKey === 'endDate') {
        return new Date(a.endDate) - new Date(b.endDate);
      }
      return 0;
    });
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Task Board</h1>
        <button class="NormalBtn" onClick={() => {
          setCurrentTask(null);
          setShowForm(true);
        }}>Add New Task</button>
        {/* Dropdown to select sort criteria */}
        <select class="NormalBtn" onChange={(e) => setSortKey(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="startDate">Start Date</option>
          <option value="endDate">End Date</option>
        </select>
      </header>
      {showForm && (
        <div className="form-modal">
          <TaskForm
            currentTask={currentTask}
            saveTask={addOrUpdateTask}
            closeForm={() => setShowForm(false)}
          />
        </div>
      )}
      {/* Pass sorted tasks to TaskBoard */}
      <TaskBoard
        tasks={sortTasks([...tasks])}
        deleteTask={deleteTask}
        editTask={handleEditInitiation}
      />
    </div>
  );
};

export default App;

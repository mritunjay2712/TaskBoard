
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './TaskForm.css';

const TaskForm = ({ saveTask, closeForm, currentTask }) => {
  const [formState, setFormState] = useState({
    id: currentTask ? currentTask.id : null,
    title: currentTask ? currentTask.title : '',
    description: currentTask ? currentTask.description : '',
    status: currentTask ? currentTask.status : 'Pending',
    assignee: currentTask ? currentTask.assignee : '',
    priority: currentTask ? currentTask.priority : 'P0',
    startDate: currentTask ? new Date(currentTask.startDate) : new Date(),
    endDate: currentTask ? new Date(currentTask.endDate) : new Date(),
  });

  useEffect(() => {
    if (currentTask) {
      setFormState(currentTask);
    }
  }, [currentTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.title || !formState.description) {
      alert('Title and description are required.');
      return;
    }
    saveTask(formState);
    closeForm();
  };

  return (
    <div className="task-form-container">
      <form onSubmit={handleSubmit} className="task-form">
        <label htmlFor="startDate">Start Date</label>
        <DatePicker
          selected={formState.startDate}
          onChange={(date) => setFormState({ ...formState, startDate: date })}
        />

        <label htmlFor="endDate">End Date</label>
        <DatePicker
          selected={formState.endDate}
          onChange={(date) => setFormState({ ...formState, endDate: date })}
        />
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formState.title}
          onChange={handleChange}
          placeholder="Enter task title"
          required
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formState.description}
          onChange={handleChange}
          placeholder="Enter task description"
          required
        />

        <label htmlFor="status">Status</label>
        <select
          id="status"
          name="status"
          value={formState.status}
          onChange={handleChange}
          required
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Deferred">Deferred</option>
          <option value="Deployed">Deployed</option>
        </select>

        <label htmlFor="assignee">Assignee</label>
        <input
          type="text"
          id="assignee"
          name="assignee"
          value={formState.assignee}
          onChange={handleChange}
          placeholder="Enter assignee name"
        />

        <label htmlFor="priority">Priority</label>
        <select
          id="priority"
          name="priority"
          value={formState.priority}
          onChange={handleChange}
          required
        >
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
        </select>
        <div className="task-form-actions">
          <button type="submit" className="save-btn NormalBtn">Save Task</button>
          <button type="button" onClick={closeForm} className="cancel-btn NormalBtn">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;

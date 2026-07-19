import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    onAddTask({
      title: title.trim(),
      description: description.trim(),
      priority,
    });

    setTitle('');
    setDescription('');
    setPriority('medium');
  };

  return (
    // Replaced inline styling blocks with clean layout-specific classes
    <form onSubmit={handleSubmit} className="form-card">
      <h3>Create a New Task</h3>
      
      <div className="input-group">
        <label htmlFor="title-field">Task Title (required)</label>
        <input
          id="title-field"
          type="text"
          placeholder="Enter task name..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
        />
      </div>
      
      <div className="input-group">
        <label htmlFor="desc-field">Task Description</label>
        <textarea
          id="desc-field"
          placeholder="Enter description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-input"
          style={{ minHeight: '60px', resize: 'vertical' }} // Kept native box height inline
        />
      </div>

      <div className="input-group">
        <label htmlFor="prio-select">Select Priority Level:</label>
        <select 
          id="prio-select"
          value={priority} 
          onChange={(e) => setPriority(e.target.value)} 
          className="form-input"
          style={{ cursor: 'pointer' }}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </div>
      
      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
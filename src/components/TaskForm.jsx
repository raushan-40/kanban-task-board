import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // Local state initialized to medium priority
  const [priority, setPriority] = useState('medium');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    onAddTask({
      title: title.trim(),
      description: description.trim(),
      priority, // Pass priority up to the parent
    });

    setTitle('');
    setDescription('');
    setPriority('medium'); // Reset dropdown back to default medium
  };

  const formStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '1.5rem',
    maxWidth: '500px',
    margin: '0 auto 2rem auto',
    boxShadow: '0 1px 3px rgba(9, 30, 66, 0.25)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  };

  const inputStyle = {
    padding: '0.6rem',
    borderRadius: '4px',
    border: '1px solid #dfe1e6',
    fontSize: '0.9rem',
    fontFamily: 'sans-serif',
  };

  const selectStyle = {
    ...inputStyle,
    cursor: 'pointer',
    backgroundColor: '#fafbfc',
  };

  const buttonStyle = {
    backgroundColor: '#0052cc',
    color: '#ffffff',
    padding: '0.6rem',
    borderRadius: '4px',
    border: 'none',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '0.9rem',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h3 style={{ margin: 0, color: '#172b4d' }}>Create a New Task</h3>
      
      <input
        type="text"
        placeholder="Task Title (required)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />
      
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ ...inputStyle, minHeight: '60px', resize: 'vertical' }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
        <label style={{ fontSize: '0.8rem', color: '#5e6c84', fontWeight: '600' }}>
          Select Priority Level:
        </label>
        <select 
          value={priority} 
          onChange={(e) => setPriority(e.target.value)} 
          style={selectStyle}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </div>
      
      <button type="submit" style={buttonStyle}>
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
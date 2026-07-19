import { useState } from 'react';

function TaskForm({ onAddTask }) {
  // Local states to handle controlled inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ignore empty or whitespace-only titles
    if (!title.trim()) return;

    // Send the structured input values to the parent handler
    onAddTask({
      title: title.trim(),
      description: description.trim(),
    });

    // Reset local form state
    setTitle('');
    setDescription('');
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
      
      <button type="submit" style={buttonStyle}>
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
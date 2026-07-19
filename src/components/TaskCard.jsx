function TaskCard({ task, onDeleteTask }) {
  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '6px',
    padding: '1rem',
    boxShadow: '0 1px 3px rgba(9, 30, 66, 0.25)',
    borderBottom: '1px solid #ddd',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  };

  const titleStyle = {
    margin: 0,
    color: '#172b4d',
    fontSize: '1rem',
    fontWeight: '600',
  };

  const descriptionStyle = {
    margin: 0,
    color: '#5e6c84',
    fontSize: '0.85rem',
    lineHeight: '1.4',
  };

  const buttonStyle = {
    alignSelf: 'flex-end',
    backgroundColor: '#ffebe6',
    color: '#de350b',
    border: 'none',
    borderRadius: '4px',
    padding: '0.4rem 0.8rem',
    fontSize: '0.75rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  };

  return (
    <div style={cardStyle}>
      <h4 style={titleStyle}>{task.title}</h4>
      {task.description && <p style={descriptionStyle}>{task.description}</p>}
      
      {/* Clicking trigger starts bubbling of task id */}
      <button 
        style={buttonStyle} 
        onClick={() => onDeleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;
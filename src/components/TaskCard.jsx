function TaskCard({ task, onDeleteTask, onMoveTask }) {
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

  const actionsContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '0.5rem',
    gap: '0.5rem',
  };

  const moveButtonStyle = {
    backgroundColor: '#e6f4ff',
    color: '#0052cc',
    border: 'none',
    borderRadius: '4px',
    padding: '0.4rem 0.8rem',
    fontSize: '0.75rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  };

  const deleteButtonStyle = {
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
      
      <div style={actionsContainerStyle}>
        {/* Conditional rendering based on task status */}
        {task.status === 'todo' && (
          <button 
            style={moveButtonStyle} 
            onClick={() => onMoveTask(task.id, 'in-progress')}
          >
            Start →
          </button>
        )}
        
        {task.status === 'in-progress' && (
          <button 
            style={moveButtonStyle} 
            onClick={() => onMoveTask(task.id, 'done')}
          >
            Complete →
          </button>
        )}
        
        {task.status === 'done' && (
          <button 
            style={{ ...moveButtonStyle, backgroundColor: '#f4f5f7', color: '#42526e' }} 
            onClick={() => onMoveTask(task.id, 'in-progress')}
          >
            ← Reopen
          </button>
        )}

        <button 
          style={deleteButtonStyle} 
          onClick={() => onDeleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
import { useState } from 'react';

function TaskCard({ 
  task, 
  onDeleteTask, 
  onMoveTask, 
  isEditing, 
  onStartEdit, 
  onCancelEdit, 
  onSaveTask 
}) {
  const [draftTitle, setDraftTitle] = useState(task.title);

  const handleSave = () => {
    if (!draftTitle.trim()) return;
    onSaveTask(task.id, draftTitle);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setDraftTitle(task.title);
      onCancelEdit();
    }
  };

  const handleCancelClick = () => {
    setDraftTitle(task.title);
    onCancelEdit();
  };

  // Helper utility function to match priority values to theme border colors
  const getPriorityBorderColor = (priority) => {
    switch (priority) {
      case 'high':
        return '#de350b'; // Red
      case 'medium':
        return '#ffab00'; // Yellow/Amber
      case 'low':
        return '#36b37e'; // Green
      default:
        return '#dfe1e6';
    }
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '6px',
    padding: '1rem',
    boxShadow: '0 1px 3px rgba(9, 30, 66, 0.25)',
    borderBottom: '1px solid #ddd',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    // Apply a prominent, professional left accent border using calculated color
    borderLeft: `5px solid ${getPriorityBorderColor(task.priority)}`,
  };

  const titleStyle = {
    margin: 0,
    color: '#172b4d',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    padding: '0.2rem 0',
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

  const editInputStyle = {
    width: '100%',
    padding: '0.4rem',
    borderRadius: '4px',
    border: '2px solid #4c9aff',
    fontSize: '1rem',
    fontWeight: '600',
    fontFamily: 'sans-serif',
    boxSizing: 'border-box',
  };

  const editButtonsContainerStyle = {
    display: 'flex',
    gap: '0.4rem',
    alignSelf: 'flex-end',
    marginTop: '0.4rem',
  };

  const editActionButtonStyle = {
    padding: '0.3rem 0.6rem',
    borderRadius: '4px',
    border: 'none',
    fontSize: '0.75rem',
    fontWeight: '600',
    cursor: 'pointer',
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
  };

  return (
    <div style={cardStyle}>
      {isEditing ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
          <input 
            type="text"
            value={draftTitle}
            onChange={(e) => setDraftTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            style={editInputStyle}
            autoFocus
          />
          <div style={editButtonsContainerStyle}>
            <button 
              style={{ ...editActionButtonStyle, backgroundColor: '#0052cc', color: '#fff' }}
              onClick={handleSave}
            >
              Save
            </button>
            <button 
              style={{ ...editActionButtonStyle, backgroundColor: '#f4f5f7', color: '#42526e' }}
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <h4 
          style={titleStyle} 
          onClick={() => onStartEdit(task.id)}
          title="Click to edit task name"
        >
          {task.title}
        </h4>
      )}

      {task.description && <p style={descriptionStyle}>{task.description}</p>}
      
      {!isEditing && (
        <div style={actionsContainerStyle}>
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
      )}
    </div>
  );
}

export default TaskCard;
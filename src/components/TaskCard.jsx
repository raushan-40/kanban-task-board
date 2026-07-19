import { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';

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

  const { 
    attributes, 
    listeners, 
    setNodeRef, 
    transform,
    isDragging 
  } = useDraggable({
    id: task.id,
    disabled: isEditing,
  });

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

  // Only dynamic dnd-kit properties remain inline
  const dndStyle = {
    transform: transform 
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)` 
      : undefined,
    zIndex: isDragging ? 999 : undefined,
    cursor: isEditing ? 'default' : 'grab',
    transition: transform ? undefined : 'transform 0.15s ease',
  };

  // Removed all unused style object constants from the bottom of this file
  return (
    <div 
      ref={setNodeRef} 
      style={dndStyle} 
      className={`task-card prio-${task.priority} ${isDragging ? 'is-dragging' : ''}`}
      {...listeners} 
      {...attributes}
    >
      {isEditing ? (
        <div className="edit-container">
          <input 
            type="text"
            value={draftTitle}
            onChange={(e) => setDraftTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            className="edit-input"
            autoFocus
          />
          <div className="edit-actions">
            <button 
              className="btn btn-sm btn-primary"
              onClick={handleSave}
            >
              Save
            </button>
            <button 
              className="btn btn-sm btn-secondary"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <h4 
          onClick={() => onStartEdit(task.id)}
          title="Click to edit task name"
        >
          {task.title}
        </h4>
      )}

      {task.description && <p>{task.description}</p>}
      
      {!isEditing && (
        <div className="task-actions">
          {task.status === 'todo' && (
            <button 
              className="btn btn-sm btn-secondary"
              onClick={() => onMoveTask(task.id, 'in-progress')}
            >
              Start →
            </button>
          )}
          
          {task.status === 'in-progress' && (
            <button 
              className="btn btn-sm btn-secondary"
              onClick={() => onMoveTask(task.id, 'done')}
            >
              Complete →
            </button>
          )}
          
          {task.status === 'done' && (
            <button 
              className="btn btn-sm btn-secondary"
              onClick={() => onMoveTask(task.id, 'in-progress')}
            >
              ← Reopen
            </button>
          )}

          <button 
            className="btn btn-sm btn-danger"
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
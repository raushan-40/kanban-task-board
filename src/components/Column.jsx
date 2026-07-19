// Imported useDroppable hook
import { useDroppable } from '@dnd-kit/core';
import TaskCard from './TaskCard';

function Column({ 
  status, // Destructured column status
  title, 
  tasks, 
  onDeleteTask, 
  onMoveTask, 
  editingTaskId, 
  onStartEdit, 
  onCancelEdit, 
  onSaveTask 
}) {
  // 1. Initialize Column as a droppable container mapping its ID to status
  const { setNodeRef, isOver } = useDroppable({
    id: status,
  });

  const columnStyle = {
    flex: 1,
    // Provide a subtle highlight background color when a task is hovered over the column
    backgroundColor: isOver ? '#dfe1e6' : '#ebecf0',
    borderRadius: '8px',
    padding: '1rem',
    minWidth: '280px',
    minHeight: '500px',
    display: 'flex',
    flexDirection: 'column',
    transition: 'background-color 0.2s ease',
  };

  const listContainerStyle = {
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    flexGrow: 1,
  };

  const emptyPlaceholderStyle = {
    flexGrow: 1,
    border: '2px dashed #b0b0b0',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#7a869a',
    fontSize: '0.9rem',
    minHeight: '100px',
  };

  return (
    // Bind ref to allow dnd-kit to observe this element's bounds
    <section ref={setNodeRef} style={columnStyle}>
      <h3 style={{ color: '#172b4d', margin: 0 }}>
        {title} ({tasks.length})
      </h3>

      <div style={listContainerStyle}>
        {tasks.length === 0 ? (
          <div style={emptyPlaceholderStyle}>No tasks yet</div>
        ) : (
          tasks.map((task) => (
            <TaskCard 
              key={task.id} 
              task={task} 
              onDeleteTask={onDeleteTask} 
              onMoveTask={onMoveTask} 
              isEditing={editingTaskId === task.id}
              onStartEdit={onStartEdit}
              onCancelEdit={onCancelEdit}
              onSaveTask={onSaveTask}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default Column;
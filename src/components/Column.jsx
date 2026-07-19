import { useDroppable } from '@dnd-kit/core';
import TaskCard from './TaskCard';

function Column({ 
  status,
  title, 
  tasks, 
  onDeleteTask, 
  onMoveTask, 
  editingTaskId, 
  onStartEdit, 
  onCancelEdit, 
  onSaveTask 
}) {
  const { setNodeRef, isOver } = useDroppable({
    id: status,
  });

  return (
    // Dynamically append the is-over class on hover for rich, CSS-powered highlight transitions
    <section 
      ref={setNodeRef} 
      className={`kanban-column ${isOver ? 'is-over' : ''}`}
    >
      <div className="column-header">
        <h3>{title}</h3>
        <span className="column-count">{tasks.length}</span>
      </div>

      <div className="task-list">
        {tasks.length === 0 ? (
          <div className="empty-placeholder">No tasks yet</div>
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
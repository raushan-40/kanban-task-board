import Column from './Column';

function Board({ 
  tasks, 
  onDeleteTask, 
  onMoveTask, 
  editingTaskId, 
  onStartEdit, 
  onCancelEdit, 
  onSaveTask 
}) {
  const boardStyle = {
    display: 'flex',
    gap: '1.5rem',
    padding: '1.5rem',
    overflowX: 'auto',
    alignItems: 'flex-start',
  };

  const todoTasks = tasks.filter((task) => task.status === 'todo');
  const inProgressTasks = tasks.filter((task) => task.status === 'in-progress');
  const doneTasks = tasks.filter((task) => task.status === 'done');

  return (
    <div style={boardStyle}>
      <Column 
        title="To Do" 
        tasks={todoTasks} 
        onDeleteTask={onDeleteTask} 
        onMoveTask={onMoveTask} 
        editingTaskId={editingTaskId}
        onStartEdit={onStartEdit}
        onCancelEdit={onCancelEdit}
        onSaveTask={onSaveTask}
      />
      <Column 
        title="In Progress" 
        tasks={inProgressTasks} 
        onDeleteTask={onDeleteTask} 
        onMoveTask={onMoveTask} 
        editingTaskId={editingTaskId}
        onStartEdit={onStartEdit}
        onCancelEdit={onCancelEdit}
        onSaveTask={onSaveTask}
      />
      <Column 
        title="Done" 
        tasks={doneTasks} 
        onDeleteTask={onDeleteTask} 
        onMoveTask={onMoveTask} 
        editingTaskId={editingTaskId}
        onStartEdit={onStartEdit}
        onCancelEdit={onCancelEdit}
        onSaveTask={onSaveTask}
      />
    </div>
  );
}

export default Board;
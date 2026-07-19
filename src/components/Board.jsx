import Column from './Column';

function Board({ tasks, onDeleteTask, onMoveTask }) {
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
      {/* Propagating onMoveTask downwards */}
      <Column 
        title="To Do" 
        tasks={todoTasks} 
        onDeleteTask={onDeleteTask} 
        onMoveTask={onMoveTask} 
      />
      <Column 
        title="In Progress" 
        tasks={inProgressTasks} 
        onDeleteTask={onDeleteTask} 
        onMoveTask={onMoveTask} 
      />
      <Column 
        title="Done" 
        tasks={doneTasks} 
        onDeleteTask={onDeleteTask} 
        onMoveTask={onMoveTask} 
      />
    </div>
  );
}

export default Board;
import Column from './Column';

function Board({ tasks, onDeleteTask }) {
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
      {/* Passing onDeleteTask down to each Column */}
      <Column title="To Do" tasks={todoTasks} onDeleteTask={onDeleteTask} />
      <Column title="In Progress" tasks={inProgressTasks} onDeleteTask={onDeleteTask} />
      <Column title="Done" tasks={doneTasks} onDeleteTask={onDeleteTask} />
    </div>
  );
}

export default Board;
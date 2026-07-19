import Column from './Column';

function Board({ tasks }) {
  const boardStyle = {
    display: 'flex',
    gap: '1.5rem',
    padding: '1.5rem',
    overflowX: 'auto',
    alignItems: 'flex-start',
  };

  // Filtering tasks before passing them to the columns
  const todoTasks = tasks.filter((task) => task.status === 'todo');
  const inProgressTasks = tasks.filter((task) => task.status === 'in-progress');
  const doneTasks = tasks.filter((task) => task.status === 'done');

  return (
    <div style={boardStyle}>
      <Column title="To Do" tasks={todoTasks} />
      <Column title="In Progress" tasks={inProgressTasks} />
      <Column title="Done" tasks={doneTasks} />
    </div>
  );
}

export default Board;
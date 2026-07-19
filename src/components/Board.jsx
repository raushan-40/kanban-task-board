import Column from './Column';

function Board() {
  const boardStyle = {
    display: 'flex',
    gap: '1.5rem',
    padding: '1.5rem',
    overflowX: 'auto',
    alignItems: 'flex-start',
  };

  return (
    <div style={boardStyle}>
      <Column title="To Do" />
      <Column title="In Progress" />
      <Column title="Done" />
    </div>
  );
}

export default Board;
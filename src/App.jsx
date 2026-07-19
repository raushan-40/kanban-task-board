import { useState } from 'react';
import Board from './components/Board';

function App() {
  // Master state containing 3 initial sample tasks (one for each status)
  const [tasks, setTasks] = useState([
    {
      id: 'task-1',
      title: 'Analyze Requirements',
      description: 'Review internship guidelines and functional scope.',
      status: 'todo',
    },
    {
      id: 'task-2',
      title: 'Design Layout',
      description: 'Implement structural flexbox grids for columns.',
      status: 'in-progress',
    },
    {
      id: 'task-3',
      title: 'Set Up Repository',
      description: 'Initialize Vite app with essential component files.',
      status: 'done',
    },
  ]);

  const containerStyle = {
    fontFamily: 'sans-serif',
    backgroundColor: '#fafbfc',
    minHeight: '100vh',
    padding: '1rem',
  };

  const headerStyle = {
    textAlign: 'center',
    color: '#091e42',
    marginBottom: '2rem',
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1>Kanban Board</h1>
      </header>
      <main>
        {/* Passing the entire tasks state down to Board */}
        <Board tasks={tasks} />
      </main>
    </div>
  );
}

export default App;
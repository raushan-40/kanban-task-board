import { useState } from 'react';
import Board from './components/Board';
import TaskForm from './components/TaskForm';

function App() {
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

  const handleAddTask = ({ title, description }) => {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      description,
      status: 'todo',
    };
    setTasks([...tasks, newTask]);
  };

  // Immutable state update deleting the targeted task using filter
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

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
        <TaskForm onAddTask={handleAddTask} />
        {/* Passing the delete callback down to Board */}
        <Board tasks={tasks} onDeleteTask={handleDeleteTask} />
      </main>
    </div>
  );
}

export default App;
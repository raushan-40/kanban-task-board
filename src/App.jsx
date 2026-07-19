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

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Pure state update function to handle transitions between columns
  const handleMoveTask = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        // Return a brand new object with the updated status
        return { ...task, status: newStatus };
      }
      // Return unchanged reference for all other tasks
      return task;
    });

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
        {/* Passing move callback down to the Board wrapper */}
        <Board 
          tasks={tasks} 
          onDeleteTask={handleDeleteTask} 
          onMoveTask={handleMoveTask} 
        />
      </main>
    </div>
  );
}

export default App;
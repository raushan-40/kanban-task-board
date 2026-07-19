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

  // Tracks which task is currently being edited. Only one can be edited at a time.
  const [editingTaskId, setEditingTaskId] = useState(null);

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
    // If we delete the task currently being edited, reset the editing state
    if (editingTaskId === taskId) {
      setEditingTaskId(null);
    }
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleMoveTask = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // Inline editing handlers
  const handleStartEdit = (taskId) => {
    setEditingTaskId(taskId);
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
  };

  const handleSaveTask = (taskId, newTitle) => {
    if (!newTitle.trim()) return; // Disallow empty titles

    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, title: newTitle.trim() };
      }
      return task;
    });

    setTasks(updatedTasks);
    setEditingTaskId(null); // Turn off edit mode upon successful save
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
        <Board 
          tasks={tasks} 
          onDeleteTask={handleDeleteTask} 
          onMoveTask={handleMoveTask} 
          editingTaskId={editingTaskId}
          onStartEdit={handleStartEdit}
          onCancelEdit={handleCancelEdit}
          onSaveTask={handleSaveTask}
        />
      </main>
    </div>
  );
}

export default App;
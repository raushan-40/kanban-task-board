import { useState, useEffect } from 'react'; // Imported useEffect
import Board from './components/Board';
import TaskForm from './components/TaskForm';

function App() {
  // 1. Lazy State Initialization to fetch data synchronously on startup
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('kanban-tasks');
    
    if (savedTasks) {
      try {
        return JSON.parse(savedTasks);
      } catch (error) {
        console.error("Failed to parse tasks from localStorage:", error);
        // Fallback to sample tasks if parsing fails
      }
    }

    // Default static fallback tasks if empty
    return [
      {
        id: 'task-1',
        title: 'Analyze Requirements',
        description: 'Review internship guidelines and functional scope.',
        status: 'todo',
        priority: 'high',
      },
      {
        id: 'task-2',
        title: 'Design Layout',
        description: 'Implement structural flexbox grids for columns.',
        status: 'in-progress',
        priority: 'medium',
      },
      {
        id: 'task-3',
        title: 'Set Up Repository',
        description: 'Initialize Vite app with essential component files.',
        status: 'done',
        priority: 'low',
      },
    ];
  });

  const [editingTaskId, setEditingTaskId] = useState(null);

  // 2. Sync Effect: Runs on mount and whenever the 'tasks' state reference changes
  useEffect(() => {
    localStorage.setItem('kanban-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = ({ title, description, priority }) => {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      description,
      priority,
      status: 'todo',
    };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
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

  const handleStartEdit = (taskId) => {
    setEditingTaskId(taskId);
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
  };

  const handleSaveTask = (taskId, newTitle) => {
    if (!newTitle.trim()) return;

    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, title: newTitle.trim() };
      }
      return task;
    });

    setTasks(updatedTasks);
    setEditingTaskId(null);
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
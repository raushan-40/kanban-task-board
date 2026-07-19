import { useState, useEffect } from 'react';
import Board from './components/Board';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('kanban-tasks');
    
    if (savedTasks) {
      try {
        return JSON.parse(savedTasks);
      } catch (error) {
        console.error("Failed to parse tasks from localStorage:", error);
      }
    }

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
  
  // New state to track the active search string
  const [searchQuery, setSearchQuery] = useState('');

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

  // --- DERIVED DATA CALCULATION ---
  // We calculate filteredTasks on every render. If searchQuery is empty,
  // includes('') returns true, showing all tasks.
  const filteredTasks = tasks.filter((task) => {
    const normalizedQuery = searchQuery.toLowerCase().trim();
    const matchesTitle = task.title.toLowerCase().includes(normalizedQuery);
    const matchesDescription = task.description.toLowerCase().includes(normalizedQuery);
    
    return matchesTitle || matchesDescription;
  });

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

  const searchContainerStyle = {
    maxWidth: '500px',
    margin: '0 auto 1.5rem auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.3rem',
  };

  const searchInputStyle = {
    padding: '0.6rem',
    borderRadius: '4px',
    border: '1px solid #dfe1e6',
    fontSize: '0.9rem',
    fontFamily: 'sans-serif',
    boxSizing: 'border-box',
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1>Kanban Board</h1>
      </header>
      
      <main>
        <TaskForm onAddTask={handleAddTask} />
        
        {/* Search Input Controls */}
        <div style={searchContainerStyle}>
          <label style={{ fontSize: '0.8rem', color: '#5e6c84', fontWeight: '600' }}>
            Search Tasks:
          </label>
          <input 
            type="text"
            placeholder="Type task title or description to search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={searchInputStyle}
          />
        </div>

        {/* Passing the computed filteredTasks instead of the raw tasks state */}
        <Board 
          tasks={filteredTasks} 
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
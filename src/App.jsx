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

  const filteredTasks = tasks.filter((task) => {
    const normalizedQuery = searchQuery.toLowerCase().trim();
    const matchesTitle = task.title.toLowerCase().includes(normalizedQuery);
    const matchesDescription = task.description.toLowerCase().includes(normalizedQuery);
    
    return matchesTitle || matchesDescription;
  });

  return (
    // Replaced inline styling wrappers with custom semantic CSS classes
    <div className="app-container">
      <header className="app-header">
        <h1>Kanban Board</h1>
      </header>
      
      <main className="controls-wrapper">
        <TaskForm onAddTask={handleAddTask} />
        
        <div className="input-group">
          <label htmlFor="search-field">Search Tasks:</label>
          <input 
            id="search-field"
            type="text"
            placeholder="Type task title or description to search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-input"
          />
        </div>
      </main>

      <Board 
        tasks={filteredTasks} 
        onDeleteTask={handleDeleteTask} 
        onMoveTask={handleMoveTask} 
        editingTaskId={editingTaskId}
        onStartEdit={handleStartEdit}
        onCancelEdit={handleCancelEdit}
        onSaveTask={handleSaveTask}
      />
    </div>
  );
}

export default App;
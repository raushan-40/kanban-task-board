import { useState, useEffect } from 'react';
import Board from './components/Board';
import TaskForm from './components/TaskForm';

// Extracted static configurations out of component scope to save memory allocations
const INITIAL_TASKS = [
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
    return INITIAL_TASKS;
  });

  const [editingTaskId, setEditingTaskId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('kanban-tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Switched all state setters to safe functional updates (prevTasks)
  const handleAddTask = ({ title, description, priority }) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: crypto.randomUUID(),
        title,
        description,
        priority,
        status: 'todo',
      },
    ]);
  };

  const handleDeleteTask = (taskId) => {
    if (editingTaskId === taskId) {
      setEditingTaskId(null);
    }
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleMoveTask = (taskId, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleStartEdit = (taskId) => {
    setEditingTaskId(taskId);
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
  };

  const handleSaveTask = (taskId, newTitle) => {
    const trimmedTitle = newTitle.trim();
    if (!trimmedTitle) return;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, title: trimmedTitle } : task
      )
    );
    setEditingTaskId(null);
  };

  // Performance Optimization: If search input is blank, skip complex mapping
  const normalizedQuery = searchQuery.toLowerCase().trim();
  const filteredTasks = !normalizedQuery
    ? tasks
    : tasks.filter((task) => {
        const matchesTitle = task.title.toLowerCase().includes(normalizedQuery);
        const matchesDescription = task.description.toLowerCase().includes(normalizedQuery);
        return matchesTitle || matchesDescription;
      });

  return (
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
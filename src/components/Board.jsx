// Imported dnd-kit context hooks and sensors
import { 
  DndContext, 
  useSensor, 
  useSensors, 
  PointerSensor 
} from '@dnd-kit/core';
import Column from './Column';

function Board({ 
  tasks, 
  onDeleteTask, 
  onMoveTask, 
  editingTaskId, 
  onStartEdit, 
  onCancelEdit, 
  onSaveTask 
}) {
  const boardStyle = {
    display: 'flex',
    gap: '1.5rem',
    padding: '1.5rem',
    overflowX: 'auto',
    alignItems: 'flex-start',
  };

  // 1. Configure sensors with a click/drag distance buffer to keep buttons functional
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // Drag is triggered only if pointer moves 8px. Clicks operate normally.
      },
    })
  );

  // 2. Handle drop complete event
  const handleDragEnd = (event) => {
    const { active, over } = event;

    // Guard: Verify if the card was dropped over a valid drop target
    if (over && active.id && over.id) {
      const taskId = active.id;
      const newStatus = over.id; // Corresponds to target Column status

      // Update task position in state
      onMoveTask(taskId, newStatus);
    }
  };

  const todoTasks = tasks.filter((task) => task.status === 'todo');
  const inProgressTasks = tasks.filter((task) => task.status === 'in-progress');
  const doneTasks = tasks.filter((task) => task.status === 'done');

  return (
    // Wrap columns with DndContext
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div style={boardStyle}>
        {/* Added status prop to map as droppable identifiers */}
        <Column 
          status="todo"
          title="To Do" 
          tasks={todoTasks} 
          onDeleteTask={onDeleteTask} 
          onMoveTask={onMoveTask} 
          editingTaskId={editingTaskId}
          onStartEdit={onStartEdit}
          onCancelEdit={onCancelEdit}
          onSaveTask={onSaveTask}
        />
        <Column 
          status="in-progress"
          title="In Progress" 
          tasks={inProgressTasks} 
          onDeleteTask={onDeleteTask} 
          onMoveTask={onMoveTask} 
          editingTaskId={editingTaskId}
          onStartEdit={onStartEdit}
          onCancelEdit={onCancelEdit}
          onSaveTask={onSaveTask}
        />
        <Column 
          status="done"
          title="Done" 
          tasks={doneTasks} 
          onDeleteTask={onDeleteTask} 
          onMoveTask={onMoveTask} 
          editingTaskId={editingTaskId}
          onStartEdit={onStartEdit}
          onCancelEdit={onCancelEdit}
          onSaveTask={onSaveTask}
        />
      </div>
    </DndContext>
  );
}

export default Board;
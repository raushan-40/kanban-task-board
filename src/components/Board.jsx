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
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over && active.id && over.id) {
      const taskId = active.id;
      const newStatus = over.id;
      onMoveTask(taskId, newStatus);
    }
  };

  const todoTasks = tasks.filter((task) => task.status === 'todo');
  const inProgressTasks = tasks.filter((task) => task.status === 'in-progress');
  const doneTasks = tasks.filter((task) => task.status === 'done');

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      {/* Replaced inline styles with board-grid class */}
      <div className="board-grid">
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
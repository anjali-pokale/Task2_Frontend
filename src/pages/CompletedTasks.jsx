// 3. CompletedTasks.jsx
import React from 'react';
import Cards from '../components/Home/Cards';
import { useOutletContext } from 'react-router-dom';

const CompletedTasks = () => {
  const { tasks, onToggleComplete, onToggleImportant, onDelete, onEdit } = useOutletContext();
  const completedTasks = tasks.filter(task => task.status === "Complete");

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-white mb-4">Completed Tasks</h2>
      <Cards home="false" tasks={completedTasks} onToggleComplete={onToggleComplete} onToggleImportant={onToggleImportant} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
};

export default CompletedTasks;
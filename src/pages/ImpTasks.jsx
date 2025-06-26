import React from 'react';
import Cards from '../components/Home/Cards';
import { useOutletContext } from 'react-router-dom';

const ImpTasks = () => {
  const { tasks, onToggleComplete, onToggleImportant, onDelete, onEdit } = useOutletContext();
  const importantTasks = tasks.filter(task => task.isImportant);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-white mb-4">Important Tasks</h2>
      <Cards home="false" tasks={importantTasks} onToggleComplete={onToggleComplete} onToggleImportant={onToggleImportant} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
};

export default ImpTasks;

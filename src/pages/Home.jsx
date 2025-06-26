// 1. Home.jsx (Layout)
import React, { useState } from 'react';
import Sidebar from '../components/Home/Sidebar';
import { Outlet } from 'react-router-dom';

const Home = () => {
  const [tasks, setTasks] = useState([
    {
      title: "Daily Coding Practice",
      desc: "I have to do daily coding practice for 1 hour",
      status: "In Complete",
      isImportant: false,
    },
    {
      title: "Assignment",
      desc: "Complete web development assignment within 2 days",
      status: "In Complete",
      isImportant: false,
    },
    {
      title: "Project",
      desc: "Complete AIML project within 1 week",
      status: "In Complete",
      isImportant: false,
    },
    {
      title: "Interview Preparation",
      desc: "Prepare for interview of XYZ company",
      status: "Complete",
      isImportant: true,
    },
  ]);

  const addTask = (newTask) => setTasks(prev => [...prev, newTask]);

  const onToggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].status = updated[index].status === "Complete" ? "In Complete" : "Complete";
    setTasks(updated);
  };

  const onToggleImportant = (index) => {
    const updated = [...tasks];
    updated[index].isImportant = !updated[index].isImportant;
    setTasks(updated);
  };

  const onDelete = (index) => {
    if (window.confirm("Delete this task?")) {
      const updated = tasks.filter((_, i) => i !== index);
      setTasks(updated);
    }
  };

  const onEdit = (index) => alert(`Edit feature not implemented yet for: ${tasks[index].title}`);

  return (
    <div className='flex h-[98vh] gap-4 bg-gray-900 text-white'>
      <div className='w-1/6 border border-gray-500 rounded-xl p-4 flex flex-col justify-between'>
        <Sidebar />
      </div>
      <div className='w-5/6 border border-gray-500 rounded-xl p-4 overflow-y-auto'>
        <Outlet context={{ tasks, setTasks, addTask, onToggleComplete, onToggleImportant, onDelete, onEdit }} />
      </div>
    </div>
  );
};

export default Home;

// 2. AllTasks.jsx
import React, { useState } from 'react';
import Cards from '../components/Home/Cards';
import { IoAddCircleSharp } from "react-icons/io5";
import InputData from '../components/Home/InputData';
import { useOutletContext } from 'react-router-dom';

const AllTasks = () => {
  const { tasks, addTask, onToggleComplete, onToggleImportant, onDelete, onEdit } = useOutletContext();
  const [inputDiv, setInputDiv] = useState("hidden");

  return (
    <>
      <div className='w-full flex justify-end items-end px-4 py-2'>
        <button onClick={() => setInputDiv("fixed")} className='bg-gray-800 p-2 rounded'>
          <IoAddCircleSharp className='text-4xl text-gray-400 hover:text-gray-100 transition-all duration-300' />
        </button>
      </div>
      <Cards home="true" setInputDiv={setInputDiv} tasks={tasks} onToggleComplete={onToggleComplete} onToggleImportant={onToggleImportant} onDelete={onDelete} onEdit={onEdit} />
      <InputData InputDiv={inputDiv} setInputDiv={setInputDiv} addTask={addTask} />
    </>
  );
};

export default AllTasks;
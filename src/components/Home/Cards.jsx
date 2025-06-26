import React from 'react';
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";

const Cards = ({ home, setInputDiv, tasks = [], onToggleComplete, onDelete, onEdit, onToggleImportant }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {tasks.map((task, i) => (
        <div
        key={i}
        className={`flex flex-col justify-between rounded-sm p-4 overflow-auto transition-all duration-300 
          ${task.isImportant ? 'bg-blue-300 text-black border-l-4 border-yellow-300' : 'bg-gray-800 text-gray-500'}`}
      > 
          <div>
            <h3 className="font-semibold text-xl text-white">{task.title}</h3>
            <p className="text-gray-300 my-2">{task.desc}</p>
          </div>

          <div className="mt-4 w-full flex items-center">
            <button
              className={`p-2 rounded w-3/6 text-white font-medium ${task.status === "In Complete" ? "bg-red-400" : "bg-green-700"}`}
              onClick={() => onToggleComplete(i)}
              aria-label="Toggle task status"
            >
              {task.status}
            </button>

            <div className='text-white p-2 w-3/6 text-2xl font-semibold flex justify-around'>
              <button onClick={() => onToggleImportant(i)} title="Mark Important" aria-label="Mark important"><CiHeart className={task.isImportant ? "text-red-500" : ""  } /></button>
              <button onClick={() => onEdit(i)} title="Edit Task" aria-label="Edit"><FaEdit /></button>
              <button onClick={() => onDelete(i)} title="Delete Task" aria-label="Delete"><MdDelete /></button>
            </div>
          </div>
        </div>
      ))}

      {home === "true" && (
        <button
          className="flex flex-col justify-center items-center bg-gray-800 rounded-sm p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300"
          onClick={() => setInputDiv("fixed")}
        >
          <IoAddCircle className='text-5xl' />
          <h2 className='text-2xl mt-4'>Add Task</h2>
        </button>
      )}
    </div>
  );
};

export default Cards;

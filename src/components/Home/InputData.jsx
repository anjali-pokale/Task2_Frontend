import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

const InputData = ({ InputDiv, setInputDiv, addTask }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !desc.trim()) {
      alert("Please fill in both title and description.");
      return;
    }

    const newTask = {
      title,
      desc,
      status: "In Complete",
      isImportant: false,
    };

    addTask(newTask); // pass new task to parent
    setTitle('');
    setDesc('');
    setInputDiv("hidden");
  };

  return (
    <>
      <div className={`${InputDiv} fixed top-0 left-0 bg-gray-800 opacity-80 h-screen w-full z-10`}></div>

      <div className={`${InputDiv} fixed top-0 left-0 flex items-center justify-center h-screen w-full z-20`}>
        <div className='w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 bg-gray-900 p-6 rounded shadow-md'>
          <div className='flex justify-end'>
            <button className='text-2xl text-white' onClick={() => setInputDiv("hidden")}>
              <RxCross2 />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder='Title'
              name='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='px-3 py-2 rounded w-full bg-gray-700 text-white'
              required
            />

            <textarea
              name="desc"
              cols="30"
              rows="5"
              placeholder='Description...'
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className='px-3 py-2 rounded w-full bg-gray-700 my-3 text-white'
              required
            />

            <button
              type="submit"
              className='px-3 py-2 bg-blue-400 rounded text-black text-xl font-semibold w-full hover:bg-blue-500 transition duration-300'
            >
              Add Task
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default InputData;

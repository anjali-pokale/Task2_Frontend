import React from 'react';
import { CgNotes } from 'react-icons/cg';
import { FaCheckDouble } from 'react-icons/fa';
import { TbNotebookOff } from 'react-icons/tb';
import { MdLabelImportant } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ user = { name: "AAA BBB CCC", email: "abc@gmail.com" }, onLogout }) => {
  const location = useLocation();

  const data = [
    { title: "All Tasks", icon: <CgNotes />, link: "/" },
    { title: "Important Tasks", icon: <MdLabelImportant />, link: "/importantTasks" },
    { title: "Completed Tasks", icon: <FaCheckDouble />, link: "/completedTasks" },
    { title: "Incompleted Tasks", icon: <TbNotebookOff />, link: "/incompletedTasks" },
  ];

  return (
    <div className="bg-gray-900 h-full p-4 text-white flex flex-col justify-between">
      {/* User Section */}
      <div>
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <h4 className="text-sm text-gray-400 mb-3">{user.email}</h4>
        <hr className="mb-4 border-gray-600" />
        
        {/* Navigation Links */}
        <div className="space-y-2">
          {data.map((item, i) => (
            <Link
              to={item.link}
              key={i}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 ${
                location.pathname === item.link ? "bg-gray-700 font-semibold" : "hover:bg-gray-700"
              }`}
            >
              {item.icon}
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div className="mt-6">
        <button
          onClick={onLogout || (() => alert("Logout function not connected"))}
          className="w-full py-2 bg-gray-700 hover:bg-red-500 rounded-md transition-all duration-300"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

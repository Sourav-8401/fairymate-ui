// navbar.jsx
import React from "react";
import { FaHome, FaCalendarAlt, FaEnvelope, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-indigo-800 w-20 h-full flex flex-col items-center py-8">
      <div className="flex flex-col space-y-8 text-white text-2xl">
        <button className="hover:text-indigo-400">
          <FaHome />
        </button>
        <button className="hover:text-indigo-400">
          <FaCalendarAlt />
        </button>
        <button className="hover:text-indigo-400">
          <FaEnvelope />
        </button>
        <button className="hover:text-indigo-400">
          <FaUser />
        </button>
        <button className="hover:text-indigo-400">
          <FaCog />
        </button>
      </div>
      <div className="mt-auto text-white text-2xl">
        <button className="hover:text-indigo-400">
          <FaSignOutAlt />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

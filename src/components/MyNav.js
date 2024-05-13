import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';
import { FaSave, FaTimes } from 'react-icons/fa';

const MyNav = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="bg-white p-4 flex justify-between items-center shadow-lg md:sticky md:top-0 md:z-50">
      <div className="flex items-center space-x-4">
        <select className="border p-2 rounded">
          <option>AI</option>
        </select>
        <Link to="/Myaccount">Dashboard</Link>
        <Link to="/Myaccount/Coursepage">Courses</Link>
        <Link to="/Myaccount/Notes">Notes</Link>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default MyNav;

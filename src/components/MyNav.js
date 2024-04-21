import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { auth } from '../Firebase'; // Import the auth object
import { FaSave, FaTimes } from 'react-icons/fa'; // Import save and cancel icons

const MyNav = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Error signing out:', error);
      // Handle error
    }
  };

  return (
    <div className="bg-white p-4 flex justify-between items-center shadow-lg">
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

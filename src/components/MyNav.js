import React from 'react';
import { Link } from 'react-router-dom';

const MyNav = () => {
  return (
    <div className="bg-white p-4 flex justify-between items-center shadow-lg">
      <div className="flex items-center space-x-4">
        <select className="border p-2 rounded">
          <option>AI</option>
        </select>
        <Link to="/Myaccount">Dashboard</Link>
        <Link to="/Myaccount/Coursepage">Courses</Link>
      </div>
    </div>
  );
}

export default MyNav;

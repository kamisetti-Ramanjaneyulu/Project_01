import React from 'react';
import { Link } from 'react-router-dom';


const MyNav = () => {
  return (
    <div className="bg-white p-4 flex justify-between items-center shadow-lg">
      <div className="flex items-center space-x-4">
        <select className="border p-2 rounded">
          <option>AI</option>
         
        </select>
        <Link to="/Myaccount" >Dashboard</Link>
<<<<<<< HEAD
        <Link to="/Myaccount/Coursepage">Courses</Link>
=======
        <Link to="Courses">Courses</Link>
>>>>>>> 064327520cc3b494574d70ea3672408d65abb0e0
      </div>

    </div>
  );
}

export default MyNav;
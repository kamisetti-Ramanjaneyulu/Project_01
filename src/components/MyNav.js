import React from 'react';
import { Link } from 'react-router-dom';


const MyNav = () => {
  return (
    <div className="bg-white p-4 flex justify-between items-center shadow-lg">
      <div className="flex items-center space-x-4">
        <select className="border p-2 rounded">
          <option>Gen-AI-Program</option>
        </select>
        <Link to="/Myaccount" >Dashboard</Link>
        <Link to="Courses">Courses</Link>
      </div>

      <div className="flex items-center space-x-4">
        <input 
          type="text" 
          placeholder="Search any topic" 
          className="p-2 border rounded"
        />
        <button className="p-2 border rounded">?</button>
        {/* Replace the below path with the actual path of your image */}
        <img src="/path/to/your/image.jpg" alt="" className="rounded-full h-10 w-10"/>
      </div>
    </div>
  );
}

export default MyNav;
import React from 'react';
import { Link } from 'react-router-dom';


const MyNav = () => {
  return (
    <div className="bg-white p-4 flex justify-between items-center shadow-lg">
      <div className="flex items-center space-x-4">
        <select className="border p-2 rounded">
          <option>Machine Learning</option>
          <option>Recommendation Systems</option>
          <option>Time Series</option>
          <option>Deep Learning</option>
          <option>Computer Vision</option>
          <option>Natural Language Processing</option>
          <option>GANs</option>
          <option>Reinforement Learning</option>
          <option>Generative AI</option>
          <option>Prompt Engineering</option>
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
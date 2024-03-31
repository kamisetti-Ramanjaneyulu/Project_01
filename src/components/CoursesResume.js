import React from 'react'
import { FaFileAlt } from 'react-icons/fa'; 
import MyNav from './MyNav';
function CoursesResume() {
  return (
    <div>
      <MyNav/>
        <div className="p-4 bg-white rounded-lg shadow-lg max-w-sm">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <FaFileAlt className="w-16 h-16 mr-4 text-purple-500" /> {/* Using React Icons */}
          <div>
            <h2 className="text-xl font-bold">Multimodal Generative AI Applications</h2>
            <p className="text-sm text-gray-500">In Progress</p>
          </div>
        </div>
        <div>
          <p className="text-sm">Your Marks: 48/50</p> 
        </div>
      </div>
      <div className="relative pt-1 mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-xs">VIEW COURSE ANNOUNCEMENTS</span>
          <span className="text-xs">98%</span> 
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
          <div style={{ width: "98%" }} className="shadow-none flex flex-col text-center whitespace-pre rounded bg-blue-500"></div>
        </div>
      </div>
      <button type="button" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 border border-blue-500 rounded shadow">
        RESUME
      </button>
    </div>
    </div>
  )
}
export default CoursesResume
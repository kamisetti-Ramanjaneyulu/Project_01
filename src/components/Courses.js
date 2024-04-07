import React from 'react';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';
import MyNav from './MyNav';

const Courses = () => {
  const courseData = [
    {
      title: 'LearneverythingAI',
      marks: '48/50',
    },
    
  ];

  return (
    <div className="p-4">
      <MyNav />
      <h2 className="text-xl font-bold mb-4">Active Courses</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {courseData.map((course, index) => (
          <div key={index} className="border p-4 rounded-md">
            {/* Image placeholder */}
            <div className="w-full h-40 bg-gray-200 mb-4"></div>

            {/* Course info */}
            <h3 className="text-lg font-semibold">{course.title}</h3>
            {course.marks && (
              <p className="text-sm text-gray-600 py-4">Your Marks: {course.marks}</p>
            )}
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
          <div style={{ width: "98%" }} className="shadow-none flex flex-col text-center whitespace-pre rounded bg-blue-500"></div>
        </div>
            {/* Resume button */}
            {course.marks && course.marks !== '' && (
              <Link to="/Myaccount/Course" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
                RESUME
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

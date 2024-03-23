import React from 'react'
import { FaCalendarAlt, FaClock, FaGlobe } from 'react-icons/fa';

const Workshop = () => {
  return (
    <div>
       <div className="bg-black text-white py-6 px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Learn to use AI Tools & ChatGPT</h1>
        <p className="mb-4 text-center text-lg">Create any kind of Presentations under 10 secs, do any kind of IT work under 10 mins, become top 1% of excel users who can use the functions and save your job and 90% of your time on daily basis</p>
        
        <ul className="list-disc pl-5 mb-4 text-lg">
          <li className="flex items-center">
            <span className="text-orange-500 text-2xl mr-2">&#10003;</span> BECOME A HIGHLY PAID PROMPT ENGINEER (AVERAGE SALARY 17LPA)
          </li>
          <li className="flex items-center">
            <span className="text-orange-500 text-2xl mr-2">&#10003;</span> NO PRIOR TECHNICAL OR AI KNOWLEDGE REQUIRED
          </li>
          <li className="flex items-center">
            <span className="text-orange-500 text-2xl mr-2">&#10003;</span> SAVE UPTO 2 HOURS EVERYDAY
          </li>
          <li className="flex items-center">
            <span className="text-orange-500 text-2xl mr-2">&#10003;</span> GROW YOUR SALARY UPTO 3X
          </li>
        </ul>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-lg bg-neutral-700	rounded-lg p-4">
          {/* Date */}
          <div className="flex items-center bg-black rounded-lg p-2">
            <FaCalendarAlt className="h-5 w-5 text-red-500" />
            <span className="ml-2">On March 24, 2024</span>
          </div>

          {/* Duration */}
          <div className="flex items-center bg-black rounded-lg p-2">
            <FaClock className="h-5 w-5 text-red-500" />
            <span className="ml-2">3+ Hours</span>
          </div>

          {/* Format */}
          <div className="flex items-center bg-black rounded-lg p-2">
            <FaGlobe className="h-5 w-5 text-red-500" />
            <span className="ml-2">Live Session</span>
          </div>

          {/* Time */}
          <div className="flex items-center bg-black rounded-lg p-2">
            <FaClock className="h-5 w-5 text-red-500" />
            <span className="ml-2">11:00 am Onwards</span>
          </div>
        </div>

        {/* Additional Information */}
        <div className="flex items-center text-lg bg-black rounded-lg p-2">
          <p>Get certified by be10x to highlight your AI tool capabilities in your resume</p>
          <div className="ml-2 w-6 h-6 flex items-center justify-center bg-white rounded-full">
            <svg className="w-4 h-4 text-black" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center ">
          <button className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 text-lg md:text-xl">
            Register Now
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Workshop

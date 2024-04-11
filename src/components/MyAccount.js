import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import MyNav from './MyNav';
import { FaChalkboardTeacher, FaBolt } from 'react-icons/fa';
import { FaLightningBolt, FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <MyNav />
      <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
        <div className="mb-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Welcome back Gaurav Reddy, Continue learning</h1>
          {/* <button className="bg-blue-500 text-white px-4 py-2 rounded">SEE ALL</button> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Left Section */}
          <div>
            {/* Course Information */}
            <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Machine Learning',
                    subtitle: 'EDA, Supervised Learing, Unsupervised Learing, Life Cycle'
                  },
                  {
                    title: 'Natural Language Processing',
                    subtitle: 'Text Pre-Processing, Text Classification, Sequential NLP'
                  }
                ].map((course, index) => (
                  <Link to="/Myaccount/CourseOverview" key={index} className="border rounded p-4 flex items-center">
                    <div className="flex-grow">
                      <svg className="inline-block mr-2 h-6 w-6 text-purple-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"></path>
                        <polyline points="13 2 13 9 20 9"></polyline>
                      </svg>
                      <h2 className='inline-block font-bold'>{course.title}</h2>
                      <p className='block text-sm'>{course.subtitle}</p>
                    </div>
                    {index === 0 && (
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='-mr-2 h-5 w-5'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-14H3'></path>
                      </svg>
                    )}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded shadow">
              <h3 className="text-lg font-semibold mb-2">Activities</h3>
              <div className="flex space-x-4">
                <button
                  className={`p-2 rounded ${activeTab === 'upcoming' ? 'bg-blue-200' : 'bg-gray-200'}`}
                  onClick={() => handleTabChange('upcoming')}
                >
                  Upcoming
                </button>
                <button
                  className={`p-2 rounded ${activeTab === 'ongoing' ? 'bg-blue-200' : 'bg-gray-200'}`}
                  onClick={() => handleTabChange('ongoing')}
                >
                  Ongoing
                </button>
                <button
                  className={`p-2 rounded ${activeTab === 'completed' ? 'bg-blue-200' : 'bg-gray-200'}`}
                  onClick={() => handleTabChange('completed')}
                >
                  Completed
                </button>
              </div>
              {activeTab === 'upcoming' && (
                <>
                  <div className="p-4 bg-white shadow-lg max-w-md mx-auto rounded-md">
                    <div className="flex items-center text-purple-600 mb-2">
                      <FaChalkboardTeacher className="mr-2" />
                      <h2 className="font-semibold">Mentored Learning Session</h2>
                    </div>
                    <p className="text-gray-700">
                      LVC 7 : Generative AI for Image Creation by Rahul Aggarwal (1465)
                    </p>
                    <p className="text-sm text-gray-500">
                      Course: Multimodal Generative AI Applications
                    </p>
                    <p className="text-sm text-gray-500">
                      Starts At: Mar 21, 7:00 AM (2h)
                    </p>

                    <button
                      type="button"
                      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                      Join Session
                    </button>
                  </div>
                </>
              )}
              {activeTab === 'ongoing' && (
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-pink-500 text-white p-2 rounded-full">
                      <FaBolt /> {/* React Icons usage */}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold">Multimodal Generative AI Applications</h3>
                      <p>Graded Quiz: Generative AI for Image Creation</p>
                      <p>From: Mar 14, 8:00 PM - Due: Mar 25, 11:55 AM</p>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-500">Time remaining: 6d 17h</p>
                </div>

              )}
              {activeTab === 'completed' && (

                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="p-2 bg-purple-100 rounded-full mr-4">
                      <span role="img" aria-label="Quiz Icon">⚡</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Graded Quiz: Generative AI for Speech Recognition</h4>
                      <p className="text-gray-600">From: Mar 07, 8:00 PM - Due: Mar 18, 11:55 AM</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div>
            {/* Progress Information */}
            {/* <div className="p-4 bg-white rounded-lg shadow-lg max-w-sm m-4">
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-gray-700 text-sm">In Progress</p>
                  <p className="text-lg font-bold">2</p>
                </div>
                <div>
                  <p className="text-gray-700 text-sm">Completed</p>
                  <p className="text-lg font-bold">0</p>
                </div>
                <div>
                  <p className="text-gray-700 text-sm">Incomplete</p>
                  <p className="text-lg font-bold">0</p>
                </div>
              </div>

              <button
                type="button"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 border border-blue-500 rounded shadow"
              >
                VIEW GRADEBOOK
              </button>
            </div> */}
          
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;

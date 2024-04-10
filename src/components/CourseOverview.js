import React, { useState } from 'react';
import { FaChalkboardTeacher, FaBolt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseOverview = () => {
  const [activeTab, setActiveTab] = useState('upcoming'); // Set default active tab
  const [sections, setSections] = useState([
    {
      title: 'Section 1: Introduction',
      lectures: [
        { title: 'Course Outline', duration: '7min', videoLink: 'https://www.example.com/video1' },
        { title: 'Join Our Online Classroom!', duration: '8min', videoLink: 'https://www.example.com/video2' },
      ],
      isOpen: true,
      notes: '',
    },
  ]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const jumpToTime = (time) => {
    console.log('Jumping to time:', time);
  };

  const toggleSection = (index) => {
    setSections(sections.map((section, i) => {
      if (i === index) {
        return { ...section, isOpen: !section.isOpen };
      }
      return section;
    }));
  };

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg mb-4">
        <img
          src="https://wallpaperaccess.com/full/1426962.jpg"
          alt="Course"
          className="w-full md:w-1/3 h-auto rounded-lg object-cover"
        />
        <div className="w-full md:w-2/3 pl-4">
          <h2 className="text-xl font-bold">Computer Vision with CNNs</h2>
          <p className="text-green-500">Completed</p>
          <div className="mt-4 p-4 border-l border-gray-200">
            <h3>Grades</h3>
            <p>Your Marks: 58/70</p>
            <p>Grade: Excellent</p>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white rounded shadow">
        <h3 className="text-lg font-semibold p-4">Activities</h3>
        <div className="flex space-x-4 p-4">
          <button
            className={`flex-1 p-2 rounded ${activeTab === 'upcoming' ? 'bg-blue-200' : 'bg-gray-200'}`}
            onClick={() => handleTabChange('upcoming')}
          >
            CONTEXT
          </button>
          <button
            className={`flex-1 p-2 rounded ${activeTab === 'ongoing' ? 'bg-blue-200' : 'bg-gray-200'}`}
            onClick={() => handleTabChange('ongoing')}
          >
            RECORDING
          </button>
          <button
            className={`flex-1 p-2 rounded ${activeTab === 'completed' ? 'bg-blue-200' : 'bg-gray-200'}`}
            onClick={() => handleTabChange('completed')}
          >
            ASSESSMENTS
          </button>
        </div>

        {activeTab === 'upcoming' && (
          <div className="p-4">
            {sections.map((section, index) => (
              <div key={index} className="mb-4">
                <button
                  className="flex justify-between items-center w-full text-left bg-white text-gray-800 hover:text-blue-500 focus:outline-none px-4 py-2 rounded-md"
                  onClick={() => toggleSection(index)}
                >
                  <span className="font-semibold text-lg">{section.title}</span>
                  <svg
                    className={`w-6 h-6 transition-transform ${section.isOpen ? 'transform rotate-90' : ''}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {section.isOpen && (
                  <div className="mt-2 space-y-2">
                    {section.lectures.map((lecture, lectureIndex) => (
                      <div key={lectureIndex} className="flex items-center justify-between bg-white px-4 py-2 rounded-md">
                        <span className="text-gray-800" onClick={() => window.open(lecture.videoLink, '_blank')} style={{ cursor: 'pointer' }}>{lecture.title}</span>
                        <div className="flex items-center space-x-4">
                          <span className="text-gray-500">{lecture.duration}</span>
                          <Link to="/Myaccount/Course/start" className="text-blue-500 hover:text-blue-600" onClick={() => jumpToTime(lectureIndex * 60)}>
                            Go to Lecture
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'ongoing' && (
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold">Not Available</h3>
          </div>
        )}

        {activeTab === 'completed' && (
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h4 className="text-lg font-bold">Not Available</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseOverview;

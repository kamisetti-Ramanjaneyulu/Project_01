import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MyNav from './MyNav';

const Course = () => {
  const [sections, setSections] = useState([
    {
      title: 'Front-End Web Development',
      lectures: [
        { title: 'What You\'ll Get in This Course', duration: '03:08', preview: true },
        // Add other lectures here
      ],
      isOpen: false,
    },
    // Add other sections here
  ]);

  const toggleSection = (index) => {
    setSections(sections.map((section, i) => {
      if (i === index) {
        return { ...section, isOpen: !section.isOpen };
      }
      return section;
    }));
  };

  return (
    <>
    <MyNav />
    <div className="container mx-auto p-4 md:p-8">
      <div className="max-w-md md:max-w-2xl rounded overflow-hidden shadow-lg bg-white">
        <div className="p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Complete 2024 Web Development Bootcamp</h2>
          <p className="text-gray-700 text-base md:text-lg mb-6">
            Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps
          </p>
          <div className="flex items-center">
            <span className="bg-green-200 text-green-800 text-xs md:text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">Bestseller</span>
            <div className="text-yellow-400 text-sm md:text-base mr-1">
              ★★★★☆
            </div>
            <div className="text-gray-600 text-xs md:text-sm">
              (1 ratings)
            </div>
          </div>
          <div className="text-gray-600 text-xs md:text-sm mt-1 p-4">
            1 students
          </div>
          <Link type="/Myaccount/Course/start" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 border border-blue-500 rounded shadow">
          Start
          </Link>
        </div>
      </div>

      <div className="bg-white mt-6 md:mt-10 p-4 md:p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Course Content</h2>
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-700 text-base md:text-lg">4 Sections • 373 lectures • 61h 44m total length</p>
          <button className="text-blue-600 hover:text-blue-800 text-base md:text-lg">Expand all sections</button>
        </div>
        {sections.map((section, index) => (
          <div key={index} className="mb-6">
            <button
              className="flex justify-between items-center w-full text-left focus:outline-none"
              onClick={() => toggleSection(index)}
            >
              <span className="font-semibold text-lg md:text-xl">{section.title}</span>
              <svg
                className={`w-6 h-6 transition-transform transform ${section.isOpen ? 'rotate-180' : ''}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                {section.isOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.993 15.157l-4.95-4.95a.75.75 0 011.06-1.061L10 12.94l4.897-4.793a.75.75 0 111.06 1.06l-5.286 5.185a.75.75 0 01-1.06 0l-5.286-5.185a.75.75 0 111.06-1.06l4.95 4.95z" />
                ) : (
                  <path fillRule="evenodd" clipRule="evenodd" d="M10 17.5a.75.75 0 01-.53-.22l-6.25-6.25a.75.75 0 111.06-1.06L10 15.44l5.72-5.97a.75.75 0 111.06 1.06l-6.25 6.25a.75.75 0 01-.53.22z" />
                )}
              </svg>
            </button>
            {section.isOpen && (
              <div className="mt-4 pl-4 border-l-2 border-gray-200">
                {section.lectures.map((lecture, lectureIndex) => (
                  <div key={lectureIndex} className="flex justify-between items-center py-2">
                    <span className="text-gray-700 text-base md:text-lg">{lecture.title}</span>
                    <span className="text-gray-500 text-xs md:text-sm">{lecture.duration}</span>
                    {lecture.preview && (
                      <button className="text-blue-600 hover:text-blue-800 text-xs md:text-sm">Preview</button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Course;

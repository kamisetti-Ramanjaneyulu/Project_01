import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import MyNav from './MyNav';

const CourseStart = () => {
  const [sections, setSections] = useState([
    {
      title: 'Section 1: Introduction',
      lectures: [
        { title: 'Course Outline', duration: '7min' },
        { title: 'Join Our Online Classroom!', duration: '8min' },
        // ... other lectures
      ],
      isOpen: true,
      notes: '', // Storing notes as a string
    },
    // ... other sections
  ]);

  const playerRef = useRef(null); // Reference to ReactPlayer component

  const toggleSection = (index) => {
    setSections(sections.map((section, i) => {
      if (i === index) {
        return { ...section, isOpen: !section.isOpen };
      }
      return section;
    }));
  };

  const handleNoteChange = (event) => {
    setSections({ ...sections, notes: event.target.value });
  };

  const handleNoteSubmit = () => {
    const currentTime = playerRef.current.getCurrentTime();
    const noteContent = sections.notes.trim();
    if (noteContent) {
      const updatedSections = [...sections];
      updatedSections.notes.push({ time: currentTime, content: noteContent });
      setSections(updatedSections);
    }
  };

  const jumpToTime = (time) => {
    playerRef.current.seekTo(time);
  };

  return (
    <>
      <MyNav />
      <div className="container mx-auto px-4 py-8 md:py-16">
        <ReactPlayer
          ref={playerRef}
          url="https://youtu.be/YHV3soXJqJI"
          width="100%"
          height="500px" // Adjust the height here
          controls={true}
        />
        <div className="md:flex md:justify-between md:items-start">
          <div className="md:w-1/2 md:pr-8 md:mb-0 mb-8">
            <div className="overflow-y-auto">
              {sections.map((section, index) => (
                <div key={index} className="mb-8">
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
                    <div className="mt-4 space-y-4">
                      {section.lectures.map((lecture, lectureIndex) => (
                        <div key={lectureIndex} className="flex items-center justify-between bg-white px-4 py-2 rounded-md">
                          <span className="text-gray-800">{lecture.title}</span>
                          <div className="flex items-center space-x-4">
                            <span className="text-gray-500">{lecture.duration}</span>
                            <span
                              className="cursor-pointer text-blue-500 hover:text-blue-600"
                              onClick={() => jumpToTime(lectureIndex * 60)} // Assuming lectures are roughly a minute each
                            >
                              Go to Lecture
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <textarea
              className="w-full h-40 px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none mb-4"
              placeholder="Take notes..."
              value={sections.notes}
              onChange={handleNoteChange}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none"
              onClick={handleNoteSubmit}
            >
              Add Note
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseStart;

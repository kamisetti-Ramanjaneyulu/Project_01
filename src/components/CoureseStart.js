import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import MyNav from './MyNav';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';

const CourseStart = () => {
  const { videoUrl } = useParams();
  const decodedVideoUrl = decodeURIComponent(videoUrl);

  // Initialize Slate editor
  const editor = withReact(createEditor());

  // Load notes from localStorage
  let savedNotes = JSON.parse(localStorage.getItem('notes'));

  // Check if savedNotes is null or not an array
  if (!Array.isArray(savedNotes)) {
    savedNotes = [
      {
        type: 'paragraph',
        children: [{ text: '' }],
      },
    ];
  }

  const [value, setValue] = useState(savedNotes);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(value));
  }, [value]);

  return (
    <>
      <MyNav />
      <div className="container mx-auto mt-8">
        <ReactPlayer url={decodedVideoUrl} controls={true} width="100%" height="100vh" />
        {/* <Slate editor={editor} value={value} onChange={newValue => setValue(newValue)}>
          <Editable />
        </Slate> */}
      </div>
    </>
  );
};

export default CourseStart;
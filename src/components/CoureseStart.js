import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MyNav from './MyNav';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import ReactPlayer from 'react-player';
import { getAuth } from 'firebase/auth'; // Import getAuth from firebase/auth
import { getFirestore, doc, setDoc } from 'firebase/firestore'; // Import firestore modules
import { app as firebaseApp } from '../Firebase'; // Import your initialized Firebase app instance

const CourseStart = () => {
  const { videoUrl } = useParams();
  const decodedVideoUrl = decodeURIComponent(videoUrl);
  const [downloadableUrl, setDownloadableUrl] = useState(null);
  const [notes, setNotes] = useState('');
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const handleNoteChange = (content) => {
    setNotes(content);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (!user) {
        throw new Error('User is not authenticated.');
      }

      const db = getFirestore(firebaseApp); // Get Firestore instance
      const userNotesRef = doc(db, 'userNotes', user.uid); // Reference to user's notes document

      // Save notes to Firestore
      await setDoc(userNotesRef, {
        userId: user.uid,
        notes: notes,
        createdAt: new Date(),
      });

      alert('Notes saved successfully!');
    } catch (error) {
      console.error('Error saving notes:', error);
      alert('Failed to save notes. Please try again later.');
    }
  };

  useEffect(() => {
    const fetchDownloadableUrl = async () => {
      if (decodedVideoUrl.startsWith("https://firebasestorage.googleapis.com/")) {
        try {
          const storage = getStorage();
          const storageRef = ref(storage, decodedVideoUrl);
          const url = await getDownloadURL(storageRef);
          setDownloadableUrl(url);
        } catch (error) {
          console.error('Error fetching video:', error);
          setError('Error loading video. Please try again later.');
        }
      }
    };

    fetchDownloadableUrl();
  }, [decodedVideoUrl]);

  const isYouTubeVideo = (url) => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  useEffect(() => {
    // Check if user is logged in
    const auth = getAuth(firebaseApp); // Get Auth instance
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (!user) {
    // User is not logged in, should have been redirected
    return (
      <div>
        <p className='text-red-600	m-4'>Please log in to access this content.</p>
        <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md m-5">Login</Link>
      </div>
    );
  }

  return (
    <>
      <MyNav />
      <div className="container mx-auto mt-8">
        <div className="relative" style={{ paddingTop: '56.25%' }}>
          {isYouTubeVideo(decodedVideoUrl) ? (
            <ReactPlayer
              url={decodedVideoUrl}
              controls
              width="100%"
              height="100%"
              className="absolute top-0 left-0"
            />
          ) : (
            <>
              {error ? (
                <div>{error}</div>
              ) : (
                <ReactPlayer
                  url={downloadableUrl || decodedVideoUrl}
                  controls
                  width="100%"
                  height="100%"
                  className="absolute top-0 left-0"
                />
              )}
            </>
          )}
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Take Notes:</h3>
          <form onSubmit={handleSubmit}>
            <div className="w-full md:w-1/2 mx-auto">
              <ReactQuill
                value={notes}
                onChange={handleNoteChange}
                placeholder="Write your notes here..."
                modules={CourseStart.modules}
                formats={CourseStart.formats}
                className="bg-white p-4 mb-4 shadow-md rounded-md"
              />
              <button
                type="submit"
                className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save Notes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

// Quill modules and formats for customization
CourseStart.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
    ['clean'],
    ['code-block'],
  ],
};

CourseStart.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'link',
  'image',
  'code-block',
];

export default CourseStart;

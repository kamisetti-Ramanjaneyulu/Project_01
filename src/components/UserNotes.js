import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { app as firebaseApp } from '../Firebase'; // Import your initialized Firebase app instance
import ReactQuill from 'react-quill'; // Import ReactQuill
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { FaSave, FaTimes } from 'react-icons/fa'; // Import save and cancel icons

const UserNotes = ({ userId }) => {
  const [notes, setNotes] = useState('');
  const [originalNotes, setOriginalNotes] = useState('');
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const db = getFirestore(firebaseApp); // Get Firestore instance
        const userNotesRef = doc(db, 'userNotes', userId); // Reference to user's notes document
        const docSnap = await getDoc(userNotesRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          setNotes(userData.notes);
          setOriginalNotes(userData.notes); // Save original notes for cancel
        } else {
          setNotes('No notes found');
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching user notes:', error);
        setLoading(false);
      }
    };

    fetchNotes();
  }, [userId]);

  const handleSave = async () => {
    try {
      const db = getFirestore(firebaseApp);
      const userNotesRef = doc(db, 'userNotes', userId);
      await updateDoc(userNotesRef, { notes });
      setEditing(false);
    } catch (error) {
      console.error('Error saving notes:', error);
    }
  };

  const handleCancel = () => {
    setNotes(originalNotes); // Reset notes to original
    setEditing(false);
  };

  if (loading) {
    return <div className="text-center mt-4">Loading user notes...</div>;
  }

  return (
    <div className="bg-white p-4 shadow-md rounded-md max-w-md mx-auto">
      {editing ? (
        <>
          <ReactQuill
            theme="snow"
            value={notes}
            onChange={setNotes}
            modules={UserNotes.modules}
            formats={UserNotes.formats}
            className="bg-white p-4 mb-4 shadow-md rounded-md"
          />
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2 flex items-center"
            >
              <FaSave className="mr-2" /> Save
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 flex items-center"
            >
              <FaTimes className="mr-2" /> Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <div
            className="mb-4"
            dangerouslySetInnerHTML={{ __html: notes }}
          />
          <button
            onClick={() => setEditing(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center"
          >
            <FaSave className="mr-2" /> Edit Notes
          </button>
        </>
      )}
    </div>
  );
};

// Quill modules and formats for customization
UserNotes.modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ 'size': [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['link', 'image'],
    ['clean'],
    ['code-block'],
  ],
};

UserNotes.formats = [
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

export default UserNotes;

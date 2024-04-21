import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import UserNotes from './UserNotes';
import { app as firebaseApp } from '../Firebase'; // Import your initialized Firebase app instance

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Your Profile Page</h1>
      {user && (
        <div className="bg-white shadow-md rounded-md p-4 mb-4">
          <h2 className="text-xl font-bold mb-2">User Information:</h2>
          <p><span className="font-semibold">Email:</span> {user.email}</p>
          <p><span className="font-semibold">User ID:</span> {user.uid}</p>
        </div>
      )}
      {user && (
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-xl font-bold mb-2">Your Notes:</h2>
          <UserNotes userId={user.uid} />
        </div>
      )}
    </div>
  );
};

export default ProfilePage;

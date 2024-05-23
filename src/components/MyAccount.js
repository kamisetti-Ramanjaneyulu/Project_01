import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import MyNav from './MyNav';
import { Link, Navigate } from 'react-router-dom'; // Import the Navigate component
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { auth } from '../Firebase'; // Import your Firebase auth object
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { color } from 'framer-motion';

const firebaseConfig = {
  apiKey: "AIzaSyA4qjcP40hgzx-gWKqVB6c9h9OKpecZobw",
  authDomain: "lms-1-36b1f.firebaseapp.com",
  projectId: "lms-1-36b1f",
  storageBucket: "lms-1-36b1f.appspot.com",
  messagingSenderId: "568729903010",
  appId: "1:568729903010:web:5e85a998503b1054f9dcfb",
  measurementId: "G-Z5844EFCH1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const MyAccount = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser]=useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'courses'));
        const coursesData = [];
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
           
            setUser(currentUser);
          } else {
           
            setUser(null);
          }
          return () => unsubscribe();
        }, []);
        querySnapshot.forEach(doc => {
          coursesData.push({ id: doc.id, ...doc.data() });
        });
        setCourses(coursesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, [db]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Check if user is logged in
  if (!auth.currentUser) {
    
    // User is not logged in, redirect to login
    return <Navigate to="/login" />;
  }
  function name(){
    const name = user.email;
    const n = name.split("@"); 
    return n[0];
  }
  const containerStyle = {
    padding: '20px', // Adjust as needed
    backgroundColor: '#f5f5f5', // Light background for better contrast (replace with website's color)
    color: '#333', // Darker color for better contrast (replace with website's text color)
    textAlign: 'center',
    margin: '20px auto', // Adjust margins for spacing
    maxWidth: '400px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow
    borderRadius: '4px', // Rounded corners
  };
  

  const textStyle = {
    color: '#333', // Darker color for better contrast
    fontSize: '1.15em',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const signInStyle = {
    color: '#777', // Slightly lighter color for sign-in message
    fontStyle: 'italic',
  };
  

  


  return (
    
    <>
      <MyNav />
      <div style={containerStyle}>
      {user ? (
        <div>
          <p style={textStyle}>Welcome <b>{name()}</b> </p>
        </div>
      ) : (
        <p style={signInStyle}>Please sign in to view your username.</p>
      )}
    </div>
      <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
        <div className="mb-4">
          {/* <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Welcome back Gaurav Reddy, Continue learning</h1> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Left Section */}
          <div>
            {/* Course Information */}
            <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courses.map((course, index) => (
                  <Link
                    to={{
                      pathname: `/Myaccount/CourseOverview/${course.id}`,
                      state: { courseId: course.id } // Pass the course ID as state
                    }} key={index} className="border rounded p-4 flex items-center">
                    <div className="flex-grow">
                      <svg className="inline-block mr-2 h-6 w-6 text-purple-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"></path>
                        <polyline points="13 2 13 9 20 9"></polyline>
                      </svg>
                      <h2 className='inline-block font-bold'>{course.courseName}</h2>
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
          </div>
          
        </div>
      </div>
    </>
  );
};

export default MyAccount;

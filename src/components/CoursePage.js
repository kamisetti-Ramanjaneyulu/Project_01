import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { auth } from '../Firebase'; // Import your Firebase auth object
import MyNav from './MyNav';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

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

const CoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Get the navigate function for redirection

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'courses'));
        const coursesData = [];
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
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Check if user is logged in
  if (!auth.currentUser) {
    // User is not logged in, redirect to login
    navigate('/login');
    return null; // Return null to avoid rendering anything before redirect
  }

  return (
    <>
      <MyNav />
      <div className="p-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Meach learning</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {courses.map((course) => (
            <Link
              to={{
                pathname: `/Myaccount/CourseOverview/${course.id}`,
                state: { courseId: course.id } // Pass the course ID as state
              }}
              key={course.id}
              className="p-4 border rounded shadow"
            >
              <img src={course.courseThumbnailURL} alt={course.courseName} className="w-full h-24 sm:h-32 object-cover mb-2 rounded" />
              <p className="text-sm sm:text-base">{course.courseName}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default CoursePage;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import MyNav from './MyNav';

const firebaseConfig = {
  apiKey: "AIzaSyA6hi5WniSmIBsPCwcqk_QVizh8yHcYM88",
  authDomain: "ravuru-ccbcd.firebaseapp.com",
  projectId: "ravuru-ccbcd",
  storageBucket: "ravuru-ccbcd.appspot.com",
  messagingSenderId: "438776822141",
  appId: "1:438776822141:web:31b8db8d2b789959003414",
  measurementId: "G-9TDRW616T8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const CoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <>
    <MyNav />
    <div className="p-4">
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

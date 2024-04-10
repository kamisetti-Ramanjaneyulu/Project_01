import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CoursePage = () => {
  const courseCategories = [
    {
      title: 'Machine Learning',
      courses: ['EDA', 'Supervised Learning', 'Unsupervised Learning', 'Life Cycle']
    },
    {
      title: 'Recommendation Systems',
      courses: ['Pre-work', 'Neural Networks & Deep Learning']
    },
    {
      title: 'Time Series',
      courses: ['Visualization', 'GANs', 'Reinforcement Learning', 'Advanced Computer Vision']
    },
    {
      title: 'Deep Learning',
      courses: ['Visualization', 'GANs', 'Reinforcement Learning', 'Advanced Computer Vision']
    },
    {
      title: 'Computer Vision',
      courses: ['Visualization', 'GANs', 'Reinforcement Learning', 'Advanced Computer Vision']
    },
    {
      title: 'Natural Language Processing',
      courses: ['Text Pre-Processing', 'Text Classification', 'Sequential NLP']
    },
  ];

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all(courseCategories.map((_, index) => 
      fetch('https://source.unsplash.com/random/400x300?sig=' + index)
        .then((response) => response.url)
    ))
    .then((urls) => {
      setImages(urls);
      setLoading(false);
    });
  }, [courseCategories]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      {courseCategories.map((category, index) => (
        <Link to="/Myaccount/CourseOverview" key={index} className="mb-6">
          <h2 className="text-lg font-bold mb-4">{category.title.trim()}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {category.courses.map((course, i) => (
              <div key={i} className="p-4 border rounded shadow">
                <img src={images[index]} alt={course} className="w-full h-24 sm:h-32 object-cover mb-2 rounded" />
                <p className="text-sm sm:text-base">{course}</p>
              </div>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CoursePage;

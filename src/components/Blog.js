import React from 'react';
import croods1 from '../images/croods1.png';

import blogai from '../images/blogai.jpg';
import blogyai from '../images/blogyai.jpeg';
import whyai from '../images/why-ai.jpg';
import { Link } from 'react-router-dom';
import bg1 from '../images/blogbg.png';
const Blog = () => {


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  const posts = [
    {
      title: 'How to Become Artificial Intelligent / Data Science Expert',
      date: '16-Oct-2023',
      content: 'Artificial Intelligence (AI) refers to the capability of machines to imitate human intelligence. This simulation encompasses a range of functions... ',
      image: blogai,
      imageAlt: 'Machine learning concept illustration',
      link:'/blog/ai',
    },
    {
      title: 'Why to Use Artificial Intelligence (AI)',
      date: '16-Oct-2023',
      content: 'Artificial Intelligence (AI) has become increasingly prevalent in our daily lives, and there are several reasons why individuals, organizations, and governments are turning to AI...',
      image: whyai,
      imageAlt: 'Blog design improvement ideas',  
      link:'/blog/whyai',
    },
    {
      title: 'Applications of Artificial Intelligence (AI)',
      date: '16-Oct-2023',
      content: 'The application of AI (Artificial Intelligence) spans across various sectors, industries, and functions. Here is a summary of how AI is applied in various fields...',
      image: blogyai,
      imageAlt: 'Person overcoming writer',
      link:'/blog/applications',
    },  
  ];

      
  return (
    <div>
        {/* <div className="   h-screen">
      <div
        className=" top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg1})`, 
        }}
      ></div>

      <div className=" top-0 left-0 w-full h-full bg-black opacity-50"></div>

      <div className=" top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">What is Gen AI</h1>
        <p className="text-lg md:text-xl lg:text-2xl m-4">How to Learn it</p>
        <Link to="/blog/genai" className="mt-8 mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Read More
        </Link>
      </div>
    </div> */}

<div className='m-0'>
  <div className="bg-white text-[#18181B] h-screen">
    <div className="flex flex-col md:flex-row items-center justify-between h-full">
      <div className="p-10 md:w-1/3 flex flex-col justify-center h-full order-2 md:order-1">
        <h1 className="text-5xl font-bold md:text-5xl">What is Gen AI</h1>
        <p className="p-4 px-8 text-lg md:text-xl">How to Learn it</p>
        <Link onClick={scrollToTop}
        to="/blog/genai" className="mt-8 mt-6 w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
         Read More
       </Link>
      </div>
      <div className="block md:hidden md:w-full h-2/3 order-1 md:order-2">
        <img
          src={bg1}
          alt="AI and Planet"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hidden md:block md:w-2/3 h-full order-2 md:order-1">
        <img
          src={bg1}
          alt="AI and Planet"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</div>



    <div>
    <div className='bg-black min-h-screen p-4'>
    <div className="p-4 md:mx-4 sm:mx-2">
    <h1 className="text-3xl font-bold mb-8 mt-12">Blog</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {posts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <img src={post.image} alt="" className="w-full h-48 object-cover mb-4 rounded" />
                <h2 className="text-xl text-black font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.content}</p>
                <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                <Link to={post.link} onClick={scrollToTop} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
                    Read more
                </Link>
            </div>
        ))}
    </div>
</div>
    
</div>


    </div>

    


    </div>
  );
};

export default Blog;

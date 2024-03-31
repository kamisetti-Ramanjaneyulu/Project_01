import React, { useEffect, useState } from 'react';
import mainImage from '../images/lms1.jpg'; 
import Overlay from '../images/o.png';
import c from '../images/c.png';
import cam from '../images/cam.png';
import msg from '../images/msg.png';
import battery from '../images/battery.png';
import laptopimg from '../images/laptopimg.png';
import ml from '../images/ml.png';
import deep from '../images/Deep.jpg';
import nlp from '../images/npl.png';
import genai from '../images/ge.jpg';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import t1 from '../images/t1.png';
import t2 from '../images/t2.png';
import t3 from '../images/t3.png';
import t4 from '../images/t4.png';
import t5 from '../images/t5.png';
import blogai from '../images/blogai.jpg';
import blogyai from '../images/blogyai.jpeg';
import whyai from '../images/why-ai.jpg';
import { Link } from 'react-router-dom';
const Home = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + testimonials.length) % testimonials.length;
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % testimonials.length;
    setCurrentSlide(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); // Auto transition every 5 seconds

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email format (you may add more validation as needed)
    if (!validateEmail(email)) {
      alert('Invalid email format');
      return;
    }

    // Make POST request to the provided URL
    try {
      const response = await fetch('https://lmsr-ffb4b-default-rtdb.firebaseio.com/join.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSuccessMessage('Thank you for joining our AI community!');
        setEmail('');
        setShowPopup(true);
      } else {
        console.error('Failed to submit data:', response.statusText);
        setSuccessMessage('Failed to submit data. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('Failed to submit data. Please try again later.');
    }
  };

  const validateEmail = (email) => {
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const textToType = 'Gen AI Program';
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= textToType.length) {
        setTypedText(textToType.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 200);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className='m-0'>
{/* <div className="w-full h-auto md:h-[80vh] flex flex-col md:flex-row bg-black text-white px-6 md:px-20">
  <div className='flex-1 flex flex-col justify-center'>
    <h1 className="text-4xl md:text-7xl font-bold mb-4">Become 10X More Productive with Our<span className='text-orange-500'> AI Workshop</span></h1>
    <ul className="text-lg md:text-xl">
      <li>Learn the basics of prompt engineering to create a presentation using AI.</li>
      <li>Generate amazing presentations with AI within 10 mins</li>
    </ul>
  </div>
  <div className='p-6 md:p-20 flex-1 flex flex-col justify-center items-center'>
    <p className="text-xl md:text-3xl text-center mb-8">Join AI Workshop today!</p>
    <Link to="/Workshop" className="border-2 border-orange-500 rounded-full text-white font-bold py-2 px-4 text-lg md:text-xl">Register now</Link>
  </div>
</div> */}


<div className='m-0'>
  <div className="bg-white text-[#18181B] h-screen">
    <div className="flex flex-col md:flex-row items-center justify-between h-full">
      <div className="p-10 md:w-1/3 flex flex-col justify-center h-full order-2 md:order-1">
        <h1 className="text-5xl font-bold md:text-5xl">{typedText}</h1>
        <p className="p-4 px-8 text-lg md:text-xl">Build Future with AI</p>
        <Link onClick={scrollToTop}
          to="/programs"
          className="bg-purple-600 text-white w-52 text-center px-4 py-2 mt-4 md:mt-0 md:ml-8 rounded inline-block text-sm md:text-base"
        >
          Start Learning
        </Link>
      </div>
      <div className="block md:hidden md:w-full h-2/3 order-1 md:order-2">
        <img
          src={mainImage}
          alt="AI and Planet"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hidden md:block md:w-2/3 h-full order-2 md:order-1">
        <img
          src={mainImage}
          alt="AI and Planet"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</div>







        <div className="my-0">
            <img src={Overlay} alt="AI and Planet" className="w-full h-auto my-0" />
        </div>

        <div className="p-4 md:p-8 bg-black text-white">
            <div className="mb-4 md:flex md:items-center md:justify-between m-2">
                <div className="mb-4 md:mb-0 md:pr-10">
                    <h1 className="text-3xl md:text-4xl mb-2">How Guravas AI Works</h1>
                    <p className="text-sm md:text-base mb-2">Simple steps to AI mastery.</p>
                    <div className="hidden md:block">
                        <Link to="/programs" onClick={scrollToTop} className="px-4 py-2 bg-purple-600 text-white rounded">Explore Programs</Link>
                    </div>
                </div>
                <div className="text-center md:text-right">
                    <img src={laptopimg} alt="AI and Planet" className="w-full h-auto md:w-auto" />
                    <div className="md:hidden mt-4">
                        <Link to="/programs" onClick={scrollToTop} className="px-4 py-2 bg-purple-600 text-white rounded">Explore Programs</Link>
                    </div>
                </div>
            </div>
        </div>


        <div className='bg-[#1F2937] text-white'>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 p-4 md:p-10">
        {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-2 md:p-0">
                <img src={feature.icon} alt="" className="mb-4 w-12 h-12 md:w-auto md:h-auto transform hover:scale-110 transition duration-300 ease-in-out" />
                <h3 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm md:text-base p-2">{feature.description}</p>
            </div>
        ))}
    </div>
</div>



       <div className='bg-black text-white'>
       <div className="p-4 md:p-8">
  <div className="mb-6">
    <h2 className="text-3xl font-bold">Level Up with AI</h2>
    <p>Making learning accessible.</p>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-2 sm:m-4 rounded-full">
    {courses.map((course, index) => (
      <div key={index} className="border rounded-lg p-2 text-center bg-white">
        <img src={course.image} alt={course.title} className="w-full h-auto mb-2 rounded" />
        <h3 className="text-2xl font-bold text-black">{course.title}</h3>
        <p className="text-gray-600 mb-2">{course.description}</p>
        <div className="my-4">
          <Link to="/contact-us" onClick={scrollToTop} className="mt-2 px-4 py-2 text-white rounded bg-[#334456]">
            Join
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>


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
       <div className="bg-black text-white text-center p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl mb-6">What our clients say</h2>

    
      <div className="relative">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <button onClick={prevSlide} className="">&#10094;</button>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <button onClick={nextSlide} className="">&#10095;</button>
      </div>
      <div className="flex flex-col justify-center md:flex-row md:justify-center md:space-x-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`bg-white text-black rounded-lg mt-4 w-full md:w-1/3 ${index === currentSlide ? '' : 'hidden'}`}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="rounded-full w-16 h-16 mx-auto mb-2"
                  />
                  <p className="text-center">{testimonial.name}</p>
                  <p className="text-center text-gray-500 text-sm"><b>{testimonial.role}</b></p>
                  <p className="text-center mt-2">{testimonial.feedback}</p>
                </div>
                <div className="flex justify-center mt-2">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

{/* 
      <button className="mt-4 md:mt-6 bg-white text-black px-4 py-2 rounded-lg">
        View all Testimonials
      </button> */}
    </div>
        

        <div className=''>
        <div className="bg-[#1F2937] text-white">
            <div className="p-4 md:p-10">
                <div className="flex flex-col md:flex-row justify-between items-center">
                {/* Your existing JSX code here */}
                {showPopup && (
                  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                    <div className="bg-white p-6 rounded-lg text-black">
                      <h2 className="text-lg font-semibold mb-2">Success!</h2>
                      <p>{successMessage}</p>
                      <button className="bg-gray-800 text-white px-4 py-2 mt-4 rounded" onClick={closePopup}>
                        Close
                      </button>
                    </div>
                  </div>
                )}

                <div className="w-full md:w-1/2 my-8 md:my-32">
                  <h1 className="text-3xl md:text-4xl mb-4">Join Our AI Community</h1>
                  <p className="mb-6">Subscribe for the latest AI news and updates.</p>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={handleEmailChange}
                      className="p-2 mb-4 w-full max-w-md text-black"
                    />
                    <button type="submit" className="bg-[#008A90] p-2 px-6 md:px-20 m-1 text-white rounded-lg">
                      Join Now
                    </button>
                  </form>
                </div>

                    <div className="w-full md:w-1/2 bg-[#393E46] p-4 md:p-6 my-4 md:my-10 backdrop-blur-2xl rounded-lg">
                        <div className="mb-4">
                            <img src={icon1} alt="" className="mb-2 w-12 h-12 md:w-auto md:h-auto" />
                            <p className="font-bold">User-Friendly Design</p>
                            <p className="text-sm">Intuitive interfaces for an enhanced reading experience.</p>
                        </div>

                        <div className="mb-4">
                            <img src={icon2} alt="" className="mb-2 w-12 h-12 md:w-auto md:h-auto" />
                            <p className="font-bold">Expert AI Insights</p>
                            <p className="text-sm">Deep dives into AI topics by leading industry experts.</p>
                        </div>

                        <div>
                            <img src={icon3} alt="" className="mb-2 w-12 h-12 md:w-auto md:h-auto" />
                            <p className="font-bold">Latest AI Trends</p>
                            <p className="text-sm">Stay updated with the evolving world of artificial intelligence.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
}; 

const features = [
  {
      icon: msg,
      title: 'Interactive Courses',
      description: 'Hands-on projects with real data.'
  },
  {
      icon: cam,
      title: 'Expert Instructors',
      description: 'Learn from AI industry leaders.'
  },
  {
      icon: c,
      title: 'Flexible Learning',
      description: 'Study at your own pace anytime.'
  },
  {
      icon: battery,
      title: 'Community Support',
      description: 'Join a network of AI enthusiasts.'
  },
];

const courses = [
  { title: 'Machine Learning', image: ml, description: 'Explore the fundamentals and advanced concepts of machine learning.' },
  { title: 'Deep Learning', image: deep, description: 'Dive deep into neural networks and learn to build powerful AI models.'},
  { title: 'NLP', image: nlp, description: 'Discover natural language processing techniques and applications.' },
  { title: 'Gen AI', image: genai, description: 'Unlock the potential of generative AI and its impact on various industries.' }
];

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
    date: '16-Jan-2024',
    content: 'The application of AI (Artificial Intelligence) spans across various sectors, industries, and functions. Here is a summary of how AI is applied in various fields...',
    image: blogyai,
    imageAlt: 'Person overcoming writer',
    link:'/blog/applications',
  },  
];


const testimonials = [
  {
    name: 'Manikanta',
    avatar: t1,
    role:'Renault & Nissan',
    feedback: 'The AI training at ”GuravasAI” transformed my understanding of machine learning and data science. The instructors are knowledgeable, and the curriculum is spot-on with industry needs! ',
  
  },
  {
    name: 'Naga Muni Rao',
    avatar: t2,
    role:'Dell',
    feedback: 'This AI training has been a game-changer for me. The curriculum is thorough, the instructors knowledgeable, and the resources are top-notch. I feel well-prepared to tackle real-world AI challenges',
  },
  {
    name: 'Sravani',
    avatar: t3,
    role:'Wipro',
    feedback: 'This training bridges the gap between academia and industry in AI. The modules are comprehensive, and the practical sessions are invaluable.',
  
  },
  {
    name: 'ManikantaRavindra Reddy: ',
    avatar: t4,
    role:'Bill Soft',
    feedback: "From understanding Machine Learning to implementing deep learning models and NLP Models, this AI training has given me confidence and skills that I never thought I'd achieve in such a short time. Thank you! ",
  },
  {
    name: 'Naga Rajesh',
    avatar: t5,
    role:'TCS',
    feedback: "The AI training course transformed my understanding of modern algorithms. The depth and clarity of the content are unparalleled. Highly recommended!"
  },
];
export default Home;

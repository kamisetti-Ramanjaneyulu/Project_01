import React from 'react';
import bg from '../images/girl.png';
import bg1 from '../images/Frame.png';
import mic from '../images/ml.png';
import nlp from '../images/ge.jpg';
import deep from '../images/Deep.jpg';
import video1 from '../images/video1.png';
import { Link } from 'react-router-dom';
const Programs = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <div>
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row md:items-center">
   
        <div className="mb-6 md:w-1/2 md:mr-8">
          <h1 className="text-2xl font-bold mb-4">Boost your skill with experts</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
         <div className='my-4'>
         <Link to="/download-brochure"onClick={scrollToTop} className="bg-purple-600 text-white px-8 py-2 mt-4 md:mt-0 md:ml-8 rounded inline-block">
            Download Brochure
          </Link>
         </div>
        </div>
       
        <img src={bg} alt="Woman with books" className="hidden md:block mb-6 md:mt-0 md:w-1/2" />
{/*       
        <div className="flex flex-col justify-center items-center md:w-1/2">
        <div className="text-center mb-4">
          <div className="text-3xl font-bold">320K</div>
          <div className="text-gray-600">Successful campaigns</div>
        </div>
        <div className="text-center mb-4">
          <div className="text-3xl font-bold">100%</div>
          <div className="text-gray-600">Success rate</div>
        </div>
        <div className="text-center mb-4">
          <div className="text-3xl font-bold">20K</div>
          <div className="text-gray-600">Happy clients</div>
        </div>
        <div className="text-center mb-4">
          <div className="text-3xl font-bold">980</div>
          <div className="text-gray-600">5-star reviews</div>
        </div>
        <div className="text-center mb-4">
          <img src={bg1} alt="University icon" className="mt-2" />
        </div>
      </div> */}
      
    </div>


    <div className="bg-black text-white py-12 md:px-4">
    <h1 className="text-3xl font-semibold text-center mb-8">Courses</h1>
    <p className="text-gray-400 text-center mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam...
    </p>

    <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-6 mx-4 md:mx-0 ">
        {/* Course 1 */}
        <div className="w-full md:w-1/3 bg-white rounded-lg p-6 shadow-lg mb-4 md:mb-0">
            <img src={mic} alt="Machine Learning" className="w-full h-48 object-cover rounded-lg" />
            <h2 className="text-black text-xl font-semibold mt-4">Machine Learning</h2>
            <p className="text-black mt-2">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam quis dolor sit amet...
            </p>
            <div className="m-4" >

                <Link to="/contact-us" onClick={scrollToTop} className="mt-4 bg-black hover:bg-green-dark text-white px-4 py-2 rounded-lg">
                    Join
                </Link>
            </div>
            {/* <p className="mt-2 text-black">23450 Enroll</p> */}
        </div>

        {/* Course 2 */}
        <div className="w-full md:w-1/3 bg-white rounded-lg p-6 shadow-lg mb-4 md:mb-0">
            <img src={deep} alt="Advanced AI" className="w-full h-48 object-cover rounded-lg" />
            <h2 className="text-xl text-black font-semibold mt-4">Advanced AI</h2>
            <p className="text-black mt-2">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam quis dolor sit amet...
            </p>
            <div className="m-4" >

                <Link to="/contact-us" onClick={scrollToTop} className="mt-4 bg-black hover:bg-green-dark text-white px-4 py-2 rounded-lg">
                    Join
                </Link>
            </div>
            {/* <p className="mt-2 text-black">23450 Enroll</p> */}
        </div>

        {/* Course 3 */}
        <div className="w-full md:w-1/3 bg-white rounded-lg p-6 shadow-lg">
            <img src={nlp} alt="Gen AI" className="w-full h-48 object-cover rounded-lg" />
            <h2 className="text-black text-xl font-semibold mt-4">Gen AI</h2>
            <p className="text-black mt-2">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam quis dolor sit amet...
            </p>
            <div className="m-4" >

                <Link to="/contact-us" onClick={scrollToTop} className="mt-4 bg-black hover:bg-green-dark text-white px-4 py-2 rounded-lg">
                    Join
                </Link>
            </div>
            {/* <p className="mt-2 text-black">23450 Enroll</p> */}
        </div>
    </div>

    <div className="flex justify-center mt-8">
        {/* <button className="bg-white hover:bg-green-dark text-black px-4 py-2 rounded-lg">
            Explore courses
        </button> */}
    </div>
</div>

      <div class="flex justify-center items-center">

    <div className="m-10">
      <img src={video1} alt="Gen AI" className="w-full object-cover rounded-lg" />
    </div>


</div>
    </div>
  );
};

export default Programs;
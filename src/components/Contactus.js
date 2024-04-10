import React, { useState } from 'react';
import { AiFillPhone, AiFillMail, AiFillEnvironment } from 'react-icons/ai';
import { FaFacebook, FaYoutube, FaLinkedin} from 'react-icons/fa';

const Contactus = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [showPopup, setShowPopup] = useState(false);

  const data = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const getdata = async (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        phone: user.phone,
        message: user.message
      })
    };
    const res = await fetch('https://lmsr-ffb4b-default-rtdb.firebaseio.com/UserData.json', options);
    if (res.status === 200) {
      setShowPopup(true);
      setUser({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } else {
      alert('Failed');
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
  <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3 xl:w-1/2 flex flex-col md:flex-row mx-2">
    <div className="bg-[#011C2B] text-white p-8 rounded-lg w-full md:w-1/2 flex flex-col my-2 md:my-0">
      <h2 className="text-xl font-bold">Contact Information</h2>
      <p className="my-4">Say something to start a live chat!</p>
      <p className="my-2 flex items-center">
        <AiFillPhone className="mr-2" />
        <span><strong>Phone:</strong> +91 9019913949 </span>
      </p>
      <p className="my-2 flex items-center">
        <AiFillMail className="mr-2" />
        <span><strong>Email:</strong> contactus@guravasai.com</span>
      </p>
      <p className="my-2 flex items-center">
        <AiFillEnvironment className="mr-2" />
        <span><strong>Location:</strong> Bangalore</span>
      </p>
      <div className="flex my-16">
        <a href="https://www.facebook.com/guravasai" target="_blank" rel="noopener noreferrer" className="mr-4">
          <FaFacebook size="2em" />
        </a>
        <a href="https://www.youtube.com/@GuravasAI" target="_blank" rel="noopener noreferrer" className='mr-4'>
          <FaYoutube size="2em" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size="2em" />
        </a>
      </div>
    </div>

    <form className="w-full md:w-1/2 pl-8" onSubmit={getdata}>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">First Name</label>
      <input type="text" id="name" name="name" required className="mt-1 p-2 w-full border rounded-md" value={user.name} onChange={data} />

      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-4">Email</label>
      <input type="email" id="email" name="email" required className="mt-1 p-2 w-full border rounded-md" value={user.email} onChange={data} />

      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mt-4">Phone Number</label>
      <input type="tel" id="phone" name="phone" required className="mt-1 p-2 w-full border rounded-md" value={user.phone} onChange={data} />

      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mt-4">Message</label>
      <textarea id="message" name="message" rows={4} required className="mt-1 p-2 w-full border rounded-md" value={user.message} onChange={data}></textarea>

      <button type="submit" className="mt-4 bg-[#011C2A] text-white px-4 py-2 rounded-md hover:bg-[#011C2A]">
        Send Message
      </button>
    </form>
  </div>

  {showPopup && (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Success!</h2>
        <p>Your message has been sent successfully.</p>
        <button className="bg-gray-800 text-white px-4 py-2 mt-4 rounded" onClick={closePopup}>
          Close
        </button>
      </div>
    </div>
  )}
</div>

  );
}

export default Contactus;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const DownloadBrochure = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [showPopup, setShowPopup] = useState(false); // State for controlling the popup

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple form validation
    let validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      validationErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      validationErrors.phone = 'Phone number must be 10 digits';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Show popup on successful submission
    setShowPopup(true);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      phone: ''
    });
    // Redirect to the brochure URL
    window.open('https://firebasestorage.googleapis.com/v0/b/lmsr-ffb4b.appspot.com/o/brochure%2FAI%20Brochure%201_v1.pdf?alt=media&token=195f589b-ac13-4b87-a98c-a4c5bf9e207a', '_blank');
  };

  const closePopup = () => {
    setShowPopup(false);
    // Redirect to home page
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="flex justify-end">
        <Link to="/programs" className="text-gray-500 hover:text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
       </svg>
      </Link>
        </div>
        <h2 className="text-2xl mb-4">Download Brochure</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600" htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600" htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600" htmlFor="phone">Phone:</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          <button type="submit" className="w-full bg-black text-white p-2 rounded-md">Download</button>
        </form>
      </div>
      {/* Popup message */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Success!</h2>
            <p>Brochure downloaded successfully!</p>
            <button className="bg-gray-800 text-white px-4 py-2 mt-4 rounded" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadBrochure;

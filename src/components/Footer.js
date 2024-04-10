import React from 'react';
import { FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gray-100 p-4 md:p-8 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col mb-4 md:mb-0">
        <span className="text-purple-600 font-bold">AIgiant</span>
        <span>Revolutionizing AI Learning</span>
      </div>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
        {[
          { section: 'Company', links: [
              { label: 'About us', path: '/about-us' },
              { label: 'Contact us', path: '/contact-us' } 
            ] 
          },
          { section: 'Coming Soon', links: [
              { label: 'Careers', path: '/careers' },
              { label: 'News boom', path: '/news-boom' } 
            ] 
          },
          { section: 'Social', icons: [
              <a href="https://www.facebook.com/guravasai" target="_blank" rel="noopener noreferrer"><FaFacebook key="facebook" size="2em" /></a>, 
              <a href="https://www.youtube.com/@GuravasAI" target="_blank" rel="noopener noreferrer"><FaYoutube key="youtube" size="2em" /></a>,
              <a href="" target="_blank" rel="noopener noreferrer"><FaLinkedin key="linkedin" size="2em" /></a>,
            ] 
          },
          { section: 'Legal', links: [
              { label: 'Terms', path: '/terms' },
              { label: 'Privacy', path: '/privacy' } 
            ] 
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col space-y-1">
            <span className="font-bold">{item.section}</span>
            {item.links && item.links.map((link, i) => (
              <Link key={i} to={link.path} onClick={scrollToTop} className="text-gray-600 hover:text-gray-800">
                {link.label}
              </Link>
            ))}
            {item.icons && item.icons.map((icon, i) => (
              <span key={i} className="text-gray-600 hover:text-gray-800">
                {icon}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="text-center mt-4 md:mt-0 text-gray-600">
        &copy; {year} AIgiant. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

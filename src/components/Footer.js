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
    <footer className="bg-gray-800 text-gray-300 p-6 md:p-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col mb-4 md:mb-0">
          <span className="text-purple-400 font-bold text-xl">AItgaint</span>
          <span className="mt-2">Revolutionizing AI Learning</span>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {[
            {
              section: 'Company', links: [
                { label: 'About us', path: '/about-us' },
                { label: 'Contact us', path: '/contact-us' }
              ]
            },
            {
              section: 'Coming Soon', links: [
                { label: 'Careers', path: '/careers' },
                { label: 'News boom', path: '/news-boom' }
              ]
            },
            {
              section: 'Social', icons: [
                <a href="https://www.facebook.com/guravasai" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaFacebook size="1.5em" /></a>,
                <a href="https://www.youtube.com/@GuravasAI" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaYoutube size="1.5em" /></a>,
                <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaLinkedin size="1.5em" /></a>,
              ]
            },
            {
              section: 'Legal', links: [
                { label: 'Terms', path: '/terms' },
                { label: 'Privacy', path: '/privacy' }
              ]
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <span className="font-bold text-lg text-purple-400">{item.section}</span>
              {item.links && item.links.map((link, i) => (
                <Link key={i} to={link.path} onClick={scrollToTop} className="text-gray-400 hover:text-white transition">
                  {link.label}
                </Link>
              ))}
              {item.icons && (
                <div className="flex space-x-4 mt-2">
                  {item.icons.map((icon, i) => (
                    <span key={i} className="text-gray-400 hover:text-white transition">
                      {icon}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center md:text-right mt-4 md:mt-0">
          <span className="text-gray-400">&copy; {year} AItgaint. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

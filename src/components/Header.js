import React, { useState } from 'react';
import { Link } from 'react-scroll';
import profilepic from '../assets/profile.jpeg';
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex cursor-pointer items-center sticky top-0 z-50 bg-violet-950 p-4 md:p-7 justify-between h-20 md:h-28">
      <div className="flex items-center">
        <img src={profilepic} alt="Profile" className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-violet-600 transform -rotate-12 hover:animate-ping transition-transform duration-150"/>
      </div>
      <header className="flex items-center">
        <div className="md:hidden ">
          <button onClick={toggleMenu} className="text-white ">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <nav className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row md:items-center bg-violet-950 md:bg-transparent absolute md:static top-full left-0 w-40 mx-24 my-0 md:w-auto space-y-2 md:space-y-0 md:space-x-4 mt-2 md:mt-0 p-2 md:p-0 text-white rounded-lg`}
        >
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center md:bg-violet-800 p-2 text-lg rounded-full">
            <li>
              <Link to="home" smooth={true} duration={500} className="flex items-center justify-center w-full md:w-24 h-8 md:h-10 hover:ml-2 hover:text-violet-600 hover:bg-white rounded-full transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}> Home
              </Link>
            </li>
            <li>
              <Link to="services"  smooth={true} duration={500} className="flex items-center justify-center w-full md:w-24 h-8 md:h-10 hover:text-violet-600 hover:bg-white rounded-full transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}> Services
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} className="flex items-center justify-center w-full md:w-24 h-8 md:h-10 hover:text-violet-600 hover:bg-white rounded-full transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}> Projects
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} className="flex items-center justify-center w-full md:w-24 h-8 md:h-10 hover:text-violet-600 hover:bg-white rounded-full transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}> About
              </Link>
            </li>
            <li>
              <a href="mailto:kamishkajamshaid8@gmail.com">
                <button className="bg-white text-violet-600 font-semibold rounded-full h-19 px-2 md:h-10 w-full md:w-28 hover:text-violet-900 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110">
                  Contact Me
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="flex space-x-4 md:space-x-6 ml-4 md:ml-0 items-center">
        <a
          href="https://www.facebook.com/KamishkaJamshaid" className="transition-transform transform hover:-translate-y-1 hover:scale-110 duration-300 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-white text-violet-600 rounded-full hover:bg-violet-600 hover:text-white"
        ><FaFacebookF className="w-4 h-4 md:w-5 md:h-5" />
        </a>
        <a
          href="mailto:kamishkajamshaid8@gmail.com" className="transition-transform transform hover:-translate-y-1 hover:scale-110 duration-300 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-white text-violet-600 rounded-full hover:bg-violet-600 hover:text-white"
        ><FaEnvelope className="w-4 h-4 md:w-5 md:h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/kamishka-jamshaid/" className="transition-transform transform hover:-translate-y-1 hover:scale-110 duration-300 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-white text-violet-600 rounded-full hover:bg-violet-600 hover:text-white"
        ><FaLinkedinIn className="w-4 h-4 md:w-5 md:h-5" />
        </a>
      </div>
    </div>
  );
};

export default Header;

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
    <div className="flex cursor-pointer items-center sticky top-0 z-50 bg-violet-950 p-4 lg:p-7 lg:p-7 justify-between h-20 lg:h-28">
      <div className="flex items-center">
        <img src={profilepic} alt="Profile" className="w-12 h-12 md:w-16 md:h-16 lg:w-16 lg:h-16 rounded-full border-2 border-violet-600 transform -rotate-12 hover:animate-ping transition-transform duration-150"/>
      </div>
      <header className="flex items-center">
        <div className=" lg:hidden float-right">
          <button onClick={toggleMenu} className="text-white ">
            {isMenuOpen ? <FaTimes size={24} className='border-2 md:w-12 md:h-8'/> : <FaBars size={24} className=' md:w-12 md:h-8' />}
          </button>
        </div>

        <nav className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } lg:flex flex-col lg:flex-row lg:items-center bg-violet-950 lg:bg-transparent absolute lg:static lg:pr-28 border-2 lg:no-underline sm:underline lg:border-none top-full left-0 w-40 mx-16 my-0 md:w-40 md:ml-56 md:underline lg:w-auto space-y-2 lg:space-y-0 lg:space-x-4 mt-2 lg:mt-0 p-2 lg:p-0 text-white rounded-lg`}
        >
          <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 items-center lg:bg-violet-800 p-2 text-lg rounded-full">
            <li>
              <Link to="home" smooth={true} duration={500} className="flex items-center justify-center w-full lg:w-24 h-8 lg:h-10 hover:ml-2 hover:text-violet-600 hover:bg-white rounded-full transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}> Home
              </Link>
            </li>
            <li>
              <Link to="services"  smooth={true} duration={500} className="flex items-center justify-center w-full lg:w-24 h-8 lg:h-10 hover:text-violet-600 hover:bg-white rounded-full transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}> Services
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} className="flex items-center justify-center w-full lg:w-24 h-8 lg:h-10 hover:text-violet-600 hover:bg-white rounded-full transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}> Projects
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} className="flex items-center justify-center w-full lg:w-24 h-8 lg:h-10 hover:text-violet-600 hover:bg-white rounded-full transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}> About
              </Link>
            </li>
            <li>
              <a href="mailto:kamishkajamshaid8@gmail.com">
                <button className="bg-white text-violet-600 font-semibold rounded-full h-19 px-2 lg:h-10 w-full lg:w-28 hover:text-violet-900 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110">
                  Contact Me
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="flex space-x-4 lg:space-x-6 md:space-x-8 ml-4 lg:ml-0 items-center">
        <a
          href="https://www.facebook.com/KamishkaJamshaid" className="transition-transform transform hover:-translate-y-1 hover:scale-110 duration-300 flex items-center justify-center w-8 h-8 md:w-11 md:h-11 lg:w-10 lg:h-10 bg-white text-violet-600 rounded-full hover:bg-violet-600 hover:text-white"
        ><FaFacebookF className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5" />
        </a>
        <a
          href="mailto:kamishkajamshaid8@gmail.com" className="transition-transform transform hover:-translate-y-1 hover:scale-110 duration-300 flex items-center justify-center w-8 h-8 md:w-11 md:h-11 lg:w-10 lg:h-10 bg-white text-violet-600 rounded-full hover:bg-violet-600 hover:text-white"
        ><FaEnvelope className="w-4 h-4 lg:w-5 md:w-5 md:h-5 lg:h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/kamishka-jamshaid/" className="transition-transform transform hover:-translate-y-1 hover:scale-110 duration-300 flex items-center justify-center w-8 h-8 md:w-11 md:h-11 lg:w-10 lg:h-10 bg-white text-violet-600 rounded-full hover:bg-violet-600 hover:text-white"
        ><FaLinkedinIn className="w-4 h-4 lg:w-5 md:w-5 md:h-5 lg:h-5" />
        </a>
      </div>
    </div>
  );
};

export default Header;

import { Link } from 'react-scroll';
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import background from '../assets/bg.jpg';
import profilepic from '../assets/profile.jpeg';
import React from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <section id="footer" style={{ backgroundImage: `url(${background})`}} className="bottom-0 px-8 md:px-2 cursor-pointer flex flex-col bg-cover bg-center py-6 px-2 sm:px-6 md:px-16 lg:px-32 w-full md:flex-row items-center justify-center text-black">
      <div data-aos="fade-right" className="cursor-pointer flex flex-col gap-2 items-center lg:text-center bg-white p-4 sm:p-4 rounded-lg shadow-lg mb-4 sm:mb-8 md:mb-0 w-full sm:text-justify md:w-80 md:mr-8 lg:w-2/5">
        <img src={profilepic} alt="Profile" className="origin-bottom -rotate-12 hover:origin-bottom hover:rotate-[35] rounded-full w-16 h-16 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mb-2 sm:mb-4 border-4 border-violet-500 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300"  />
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold lg:px-12 px-8 md:px-6 mb-2 sm:mb-4 bg-gradient-to-r from-violet-950 from-10% via-indigo-600 via-30% via-purple-600 via-50% to-pink-800 to-90% inline-block text-transparent bg-clip-text transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300">
            Kamishka Jamshaid
          </h2>
          <p className="text-violet-900 pr-8 pl-6 text-center lg:px-4 mb-2 sm:mb-4 text-xs sm:text-sm md:text-lg lg:text-lg">
            I believe in the power of design to transform ideas into tangible, user-friendly websites.
          </p>
        </div>
      </div>
      <div data-aos="fade-left" className="flex flex-col items-center bg-white p-4 lg:p-8 rounded-lg shadow-lg w-full md:w-80 lg:w-3/5 lg:ml-16 text-center">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold my-2 sm:my-4 text-violet-900">
          Got a project in mind?
        </h2>
        <div className="flex space-x-2 sm:space-x-4 md:space-x-6 my-2 sm:my-4 justify-center items-center">
          <p className="text-violet-600 text-sm sm:text-base md:text-lg">Let's talk</p>
          <a href="https://www.facebook.com/KamishkaJamshaid" className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white text-violet-600 rounded-full border-2 border-violet-800 hover:bg-violet-600 hover:text-white">
            <FaFacebookF size={12} className="sm:w-5 sm:h-5 md:w-5 md:h-5" />
          </a>
          <a href="mailto:kamishkajamshaid8@gmail.com" className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white text-violet-600 rounded-full border-2 border-violet-800 hover:bg-violet-600 hover:text-white" >
            <FaEnvelope size={16} className="sm:w-6 sm:h-6 md:w-6 md:h-6" />
          </a>
          <a href="https://www.linkedin.com/in/kamishka-jamshaid/" className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white text-violet-600 rounded-full border-2 border-violet-800 hover:bg-violet-600 hover:text-white">
            <FaLinkedinIn size={12} className="sm:w-5 sm:h-5 md:w-5 md:h-5" />
          </a>
        </div>
        <div className="mx-auto flex flex-col items-center justify-center my-2 sm:my-4">
          <div className='relative group'>
            <div className="absolute rounded-full -inset-1 shadow-none bg-gradient-to-r from-indigo-400 via-pink-400 to-teal-400 blur opacity-100 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <a href='mailto:kamishkajamshaid8@gmail.com'>
              <button type='button' className="bg-gradient-to-r from-violet-950 via-violet-600 via-30% to-purple-700 text-white relative w-32 sm:w-40 h-9 md:h-12 text-sm md:text-base px-5 py-2 rounded-full hover:text-white hover:shadow-inner hover:shadow-cyan-500/50 hover:bg-gradient-to-r hover:from-indigo-700 hover:via-purple-600 hover:to-indigo-700 flex items-center transition ease-in-out delay-0 hover:-translate-y-2 hover:scale-110 duration-300">
                Contact Me
                <div className="absolute ml-20 sm:ml-24 -rotate-90 my-4 bold">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="animate-bounce w-5 h-5 sm:w-6 sm:h-6">
                    <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                  </svg>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
     

    <section>
      <div className="cursor-pointer flex flex-col md:flex-row items-center bg-violet-950 p-4 md:p-4 lg:p-7 justify-between h-auto md:h-24">
        <div className="mb-2 font-semibold lg:mr-8 md:mr-10 text-center md:text-left text-white text-xl lg:text-2xl w-full md:w-1/3 pl-4 lg:pl-10 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300">
          Kamishka Jamshaid
        </div>
        <footer className="cursor-pointer text-white flex flex-col md:flex-row items-end md:rounded-full mx-0 md:ml-16 underline text-sm md:text-lg md:pr-2 justify-center">
          <nav >
            <ul className="flex -space-x-8  md:flex-row lg:space-x-4 md:space-x-1 ">
              <li className="mb-1 md:mb-0">
                <Link to="home" smooth={true} duration={500} className="flex items-center justify-center w-24 h-10 hover:ml-2 hover:text-violet-600 hover:bg-white rounded-full">Home</Link>
              </li>
              <li className="mb-1 md:mb-0 ">
                <Link to="services" smooth={true} duration={500} className="flex items-center justify-center w-24 h-10 hover:text-violet-600 hover:bg-white rounded-full">Services</Link>
              </li>
              <li className="mb-1 md:mb-0">
                <Link to="projects" smooth={true} duration={500} className="flex items-center justify-center w-24 h-10 hover:text-violet-600 hover:bg-white rounded-full">Projects</Link>
              </li>
              <li className="mb-1 md:mb-0">
                <Link to="about" smooth={true} duration={500} className="flex items-center justify-center w-24 h-10 hover:mr-2 hover:text-violet-600 hover:bg-white rounded-full">About Me</Link>
              </li>
              <li>
                <button className="bg-white text-violet-600 font-semibold rounded-full ml-6 md:ml-2 mt-1 md:mt-0 md:mb-2 md:h-10 md:w-28 h-7 w-20 mx-4 hover:text-violet-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                  <a href="mailto:kamishkajamshaid8@gmail.com">Contact Me</a>
                </button>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </section>
    </>
  );
};

export default Footer;

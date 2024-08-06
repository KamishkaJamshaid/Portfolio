import React from 'react';
import { FaUsers, FaPaintBrush, FaCogs } from 'react-icons/fa';
import html from '../assets/html.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import css from '../assets/css.png'
import js from '../assets/js.jpeg'
import react from '../assets/react.png'
import tw from '../assets/ts.jpeg'
import nodejs from '../assets/node.png'

const Services = () => {
  const [text] = useTypewriter({
    words: ['SERVICES'],
    loop: true,
    typeSpeed:120,
    deleteSpeed:60,
  });

  return (
    <section id="services" className="p-8 md:m-8 lg:m-0 md:mt-20 bg-violet-900 shadow-inner shadow-violet-600">
      <div className="text-center text-white md:mt-20">
        <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-4">
          <span>{text}</span><Cursor cursorStyle='>'/>
        </h2>
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold my-3">Client-centric website design</h3>        
        <div className='grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-7 lg:pl-28 mx-auto gap-2 items-center justify-items-center my-8 max-w-screen-lg'>
          <img src={html} alt='HTML' className='transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 h-16 w-16 md:h-24 md:w-24 border-violet-300 p-2 border-2 rounded-full' />
          <img src={css} alt='CSS' className='transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 h-16 w-16 md:h-24 md:w-24 border-violet-300 p-2 border-2 rounded-full' />
          <img src={js} alt='JavaScript' className='transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 h-16 w-16 md:h-24 md:w-24 border-violet-300 p-2 border-2 rounded-full' /> 
          <img src={react} alt='React' className=' transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 h-16 w-16 md:h-24 md:w-24 border-violet-300 p-2 border-2 rounded-full' />
          <img src={tw} alt='Tailwind CSS' className='transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 h-16 w-16 md:h-24 md:w-24 border-violet-300 p-2 border-2 rounded-full' /> 
          <img src={nodejs} alt='nodejs' className='transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 h-16 w-16 md:h-24 md:w-24 border-violet-300 p-2 border-2 rounded-full' />      
        </div>
        <p className='mb-8 max-w-screen-md mx-auto'>These services demonstrate my comprehensive skill set and commitment to delivering high-quality, tailored web solutions for a variety of client needs.</p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          <div className="shadow-inner bg-white p-4 md:p-6 rounded-lg border-2 border-violet-800 hover:bg-violet-600 hover:text-white text-violet-800 w-full sm:w-80 md:w-80 shadow-lg shadow-purple-600 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="flex justify-center items-center bg-violet-800 w-12 h-12 md:w-16 md:h-16 rounded-full mx-auto mb-4">
              <FaUsers className="text-2xl md:text-3xl text-white" />
            </div>
            <h4 className="text-lg md:text-xl font-semibold text-violet-950 mt-4 md:mt-6">User-centered</h4>
            <p className="p-4 md:p-6">Design intuitive, user-friendly interfaces prioritizing user needs, enhancing engagement, and ensuring a positive user experience.</p>
          </div>
          <div className="bg-white border-2 border-violet-800 p-4 md:p-6 hover:bg-violet-600 hover:text-white rounded-lg text-violet-800 w-full sm:w-80 md:w-80 shadow-lg shadow-purple-600 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 shadow-inner">
            <div className="flex justify-center items-center bg-violet-800 w-12 h-12 md:w-16 md:h-16 rounded-full mx-auto mb-4">
              <FaCogs className="text-2xl md:text-3xl text-white" />
            </div>
            <h4 className="text-lg md:text-xl font-semibold text-violet-950 mt-4 md:mt-6">Single Page Applications</h4>
            <p className="p-4 md:p-6">Build responsive, fast-loading single-page applications (SPAs) for seamless user experiences and efficient navigation without page reloads.</p>
          </div>
          <div className="bg-white p-4 md:p-6 border-2 hover:bg-violet-600 hover:text-white border-violet-800 rounded-lg text-violet-800 w-full sm:w-80 md:w-80 shadow-lg shadow-purple-600 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="flex justify-center items-center bg-violet-800 w-12 h-12 md:w-16 md:h-16 rounded-full mx-auto mb-4">
              <FaPaintBrush className="text-2xl md:text-3xl text-white" />
            </div>
            <h4 className="text-lg md:text-xl font-semibold text-violet-950 mt-4 md:mt-6">Visual design</h4>
            <p className="p-4 md:p-6">Craft visually appealing, modern web designs that align with brand identity, enhancing aesthetic appeal and user engagement.</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-8 md:mt-14">
          <div className="bg-white hover:bg-violet-600 hover:text-white p-4 md:p-6 border-2 border-violet-800 rounded-lg text-violet-800 w-full sm:w-80 md:w-80 shadow-lg shadow-purple-600 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="flex justify-center items-center bg-violet-800 w-12 h-12 md:w-16 md:h-16 rounded-full mx-auto mb-4">
              <FaCogs className="text-2xl md:text-3xl text-white" />
            </div>
            <h4 className="text-lg md:text-xl font-semibold text-violet-950 mt-4 md:mt-6">Performance Optimization</h4>
            <p className="p-4 md:p-6">Optimize website performance for faster load times and improved user experience, employing best practices and advanced techniques.</p>
          </div>
          <div className="hover:bg-violet-600 hover:text-white bg-white border-2 border-violet-800 p-4 md:p-6 rounded-lg text-violet-800 w-full sm:w-80 md:w-80 shadow-lg shadow-purple-600 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="flex justify-center items-center bg-violet-800 w-12 h-12 md:w-16 md:h-16 rounded-full mx-auto mb-4">
              <FaPaintBrush className="text-2xl md:text-3xl text-white" />
            </div>
            <h4 className="text-lg md:text-xl font-semibold text-violet-950 mt-4 md:mt-6">Custom Animations and Transitions</h4>
            <p className="p-4 md:p-6">Implement custom animations and transitions to enhance user interaction, adding a dynamic, engaging feel to your website.</p>
          </div>
          <div className="hover:bg-violet-600 hover:text-white bg-white p-4 md:p-6 border-2 border-violet-800 rounded-lg text-violet-800 w-full sm:w-80 md:w-80 shadow-lg shadow-purple-600 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="flex justify-center items-center bg-violet-800 w-12 h-12 md:w-16 md:h-16 rounded-full mx-auto mb-4">
              <FaCogs className="text-2xl md:text-3xl text-white" />
            </div>
            <h4 className="text-lg md:text-xl font-semibold text-violet-950 mt-4 md:mt-6">Web Maintenance and Support</h4>
            <p className="p-4 md:p-6">Provide ongoing web maintenance and support, ensuring your site remains updated, secure, and performs optimally.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

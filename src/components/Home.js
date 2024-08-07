import React from 'react';
import { Link } from 'react-scroll';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Home() {
  const circleRef = useRef(null);

  useEffect(() => {
      const element = circleRef.current;
      gsap.to(element, { rotation: "+=360", duration: 10 });  
    },);
  const [text] = useTypewriter({
    words: ['Web Developer' ],
    loop: true,
    typeSpeed:120,
    deleteSpeed:60,
  });
  const [text1] = useTypewriter({
    words: ['Kamishka '],
    loop: true,
    typeSpeed:120,
    deleteSpeed:60,
  });
  const [text2] = useTypewriter({
    words: [' Jamshaid'],
    loop: true,
    typeSpeed:220,
    deleteSpeed:60,
  });

  return (
    <section id='home' className="bg-[url('https://assets-global.website-files.com/660a953d221d423306bbc7bd/660aaca80d7f990b2dd03262_CTA%20Background%20Image-p-1600.jpg')] bg-cover bg-center text-white flex flex-col lg:flex-row justify-between p-4">
      <div className="flex flex-col lg:flex-row my-8 justify-center">
        <div className="animate-parent-spin md:mx-52 flex justify-center w-56 md:w-80 md:h-80 lg:h-96 lg:w-96 mt-6 h-56 text-center rounded-full items-center border-white lg:border-[24px] md:border-[16px] border-[12px] lg:mx-12 mx-12">
          <div className="animate-none flex justify-center lg:w-72 lg:h-72 w-44 h-44 md:h-64 md:w-64 bg-white text-center rounded-full items-center">
            <div className="absolute align-middle text-center transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110">
              <h1 className="align-middle text-xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-violet-950 via-indigo-600 to-pink-800 text-transparent bg-clip-text text-center animate-pulse transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110">
                {text1}<br/><span>{text2}</span><span style={{color:'red'}}><Cursor /></span> 
              </h1>
            </div>
            <span ref={circleRef} className="lg:place-self-end lg:relative lg:h-20 lg:w-20 w-40 h-40 md:w-40 md:h-40 lg:mr-72 mr-44 mt-24 md:mt-56 md:mr-48 grid text-center items-center">
              <span className="animate-ping absolute inline-flex lg:h-full lg:w-full h-12 w-12 md:h-20 md:w-20 rounded-full bg-white opacity-50"></span>
              <span className="lg:static text-center items-center text-white lg:p-8 lg:inline-flex rounded-full lg:h-20 lg:w-20 md:h-16 md:w-16  w-12 h-12 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-800 via-purple-700 via-purple-600 via-blue-700 to-violet-800 text-sm p-4 md:p-6" >Hi</span>
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-20 md:px-20 pt-4 lg:text-left ml-8 lg:ml-2 text-justify lg:justify-left  lg:mr-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-white lg:ml-0">I'm a{' '}<span className='text-3xl md:text-4xl lg:text-5xl font-bold '>{text}</span><span><Cursor /></span></h1>
          <p className="text-sm lg:text-xl md:text-lg my-2 lg:my-8 mr-20 text-justify">A professional and passionate front-end web developer, dedicated to creating visually stunning and highly functional web experiences.</p>
          <div className=" lg:ml-0 mx-auto flex flex-row lg:justify-left lg:justify-left my-4 lg:my-12 mr-24">
            <div className="relative group">
              <div className="absolute rounded-full -inset-1 shadow-none bg-gradient-to-r from-indigo-400 via-pink-400 to-teal-400 blur opacity-100 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Link to="footer" smooth={true} duration={1000}>
                <button type="button" className="bg-gradient-to-r from-violet-950 via-violet-600 to-purple-700 text-white relative lg:w-56 lg:h-12 h-11 lg:px-6 py-2 w-44 px-4 text-sm lg:text-lg  static rounded-full hover:text-white hover:shadow-inner hover:shadow-cyan-500/50 hover:bg-gradient-to-r hover:from-indigo-700 hover:via-purple-600 hover:to-indigo-700 flex items-center transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110">
                  Available for Work
                  <div className="absolute lg:ml-40 ml-32 -rotate-90 my-4 bold">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="animate-bounce w-6 h-6">
                      <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

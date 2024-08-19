import React, { useState, useEffect } from 'react';
import pic from '../assets/opic.png';
import pic1 from '../assets/4.jpg';
import pic2 from '../assets/homesite.jpg';
import pic3 from '../assets/page.jpeg';
import pic4 from '../assets/pic (2).PNG';
import pic5 from '../assets/hpic.png';
import pic6 from '../assets/rpic.png';
import pic7 from '../assets/pic (1).PNG';
import pic8 from '../assets/pic.jpg';
import pic9 from '../assets/pic2.jpg';
import pic10 from '../assets/p1.PNG';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const images = [pic10, pic, pic5, pic4, pic6]; 
const descriptions = [
  "Fitness or Health Websites",    
  "Restaurant Website",          
  "Business Website",   
  "Organizational or Corporational website",          
  "Event or Conference Website"   
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid relative mx-3 rounded-lg md:mx-28 lg:mx-28 2xl:mx-96 my-8 w-[330px] md:w-[500px] lg:w-[800] h-[800px] overflow-hidden transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300 ">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-100 ease-in-out  ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={image} alt={`Slide ${index}`} className=" object-cover rounded-lg" />
          <div className={`absolute bottom-0 left-0 w-full text-center p-4 bg-gradient-to-t from-black to-transparent text-white text-2xl text-semibold ${
            index === currentSlide ? 'block' : 'hidden'
          }`}>
            {descriptions[index]}
          </div>
        </div>
      ))}
    </div>
  );
};
const SampleProjects = () => {
  const [text] = useTypewriter({
    words: ['Responsive web designs'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
  });
  const [text2] = useTypewriter({
    words: ['Custom Animations and Transitions'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
  });
  const [text4] = useTypewriter({
    words: ['User-Centered Design'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
  });
  const [text3] = useTypewriter({
    words: ['Some Snaps of my Stunning Projects'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed:20
  });
  const [text1] = useTypewriter({
    words: ['Scalability & Security'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
  });
  const [text5] = useTypewriter({
    words: ['Accessibility or Cross-Browser Compatibility'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
  });
  const [text6] = useTypewriter({
    words: ['Interactive Features and Responsive Layouts'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
  });
  const [text7] = useTypewriter({
    words: ['Different website designs for various purposes'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
  });
  

  return (
    <>
      <section id="projects" className="flex flex-col text-center items-center text-black m-4 p-4">
        <div className="w-48 h-14 justify-self-center p-0">
          <h2 className="justify-self-center font-semibold text-4xl mb-4 place-content-center items-center rounded-lg -pb-4 pt-2 bg-gradient-to-r from-violet-950 from-10% via-indigo-600 via-30% via-purple-600 via-50% to-pink-800 to-90% inline-block text-transparent bg-clip-text border-2 p-4">
            PROJECTS
          </h2>
        </div>
        <span className="flex justify-end place-self-center relative h-4 w-4 ml-64 mr-4 -mt-16 grid text-center items-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full border-violet-400 border-2 opacity-75"></span>
          <span className="static inline-flex rounded-full h-4 w-4 bg-violet-500"></span>
        </span>
        <h3 className="text-2xl font-bold my-8 text-violet-800 ml-8 mt-20">My Projects</h3>
        <div className="hidden md:hidden lg:grid lg:grid-cols-4 gap-4 p-4 border-violet-800 border-2 lg:h-[1050px] 2xl:h-[1150px] overflow-hidden shadow-lg shadow-violet-800 rounded-lg shadow-3xl bg-violet-800">
          <div className="col-span-1 row-span-6">
            <img src={pic7} alt="Large" className=" object-cover border-violet-400 border-2 rounded-lg"/>
          </div>
          <div className="col-span-1 row-span-5">
            <img src={pic5} alt="Medium One" className=" object-cover border-violet-400 border-2 rounded-lg"/>
          </div>
          <div className="col-span-1 ">
            <img src={pic9} alt="Small" className=" object-cover border-violet-400 border-2 rounded-lg"/>
          </div>
          <div className="col-span-1 row-span-3">
            <img src={pic} alt="Medium Two" className="object-cover border-violet-400 border-2 rounded-lg"/>
          </div>
          <div className="col-span-1 row-span-4">
            <img src={pic6} alt="Medium Two" className="object-cover border-violet-400 border-2 rounded-lg"/>
          </div>
          <div className="col-span- row-span-3 ">
            <img src={pic4} alt="Medium Two" className="object-cover border-violet-400 border-2 rounded-lg"/>
          </div>
          <div className="col-span-1">
            <img src={pic8} alt="Small" className=" object-cover border-violet-400 border-2 rounded-lg"/>
          </div>
          <div className="col-span-1 ">
            <img src={pic1} alt="Medium Two" className="object-cover border-violet-400 border-2 rounded-lg"/>
          </div>
        </div>
      </section>
      <div className='grid md:grid-cols-2 md:gap-4 bg-white rounded-lg md:px-8 py-2 md:m-4 shadow-inner shadow-violet-800 border-4 border-violet-900'>
      <p className='font-bold text-2xl md:text-4xl mt-4 col-span-2 text-center text-violet-900 h-12 w-full'>Slideshow of my Projects</p>
      <div className=''><Slideshow /></div>
        <div className='hidden lg:grid my-12 text-2xl text-violet-900'>
          <p className=' m-8'>
            <span className='inline-block mr-2'>→</span>{text}
          </p>
          <p className=' m-8'>
            <span className='inline-block mr-2 '>→</span>{text2}
          </p>
          <p className=' m-8'>
            <span className='inline-block mr-2'>→</span>{text1}
          </p>
          <p className=' m-8'>
            <span className='inline-block mr-2'>→</span>{text4}
          </p>
          <p className=' m-8'>
            <span className='inline-block mr-2'>→</span>{text5}
          </p>
          <p className=' m-8'>
            <span className='inline-block mr-2'>→</span>{text6}
          </p>
          <p className=' m-8'>
            <span className='inline-block mr-2'>→</span>{text7}
          </p>
        </div>
          </div>
        <div class="px-2 md:px-16 bg-violet-500 p-4">
          <div className='text-white h-10 w-full text-center md:text-2xl text-xl font-bold m-1 md:m-2 lg:m-8'>{text3}<Cursor/></div>
          <div className='md:hidden text-white h-10 w-full text-center text-sm font-bold'>Scroll <Cursor cursorStyle={'>'}/></div>
          <div smooth={true} duration={3000} className='scroll-smooth flex overflow-x-auto snap-x '>
            <div class="flex-none w-[300px] h-[200px] md:w-[550px] md:h-[420px] md:mx-2 lg:mx-4 mx-2 ">
              <img src={pic8} className=' h-[200px] md:h-[400px] rounded-lg'/>
            </div>
            <div class="flex-none w-[300px] h-[200px] md:w-[550px] md:h-[450px] lg:ml-12 md:ml-4 mr-6 snap-start ml-4">
              <img src={pic1} className=' md:h-[400px] h-[200px] rounded-lg'/>
            </div>
            <div class="flex-none w-[300px] h-[200px] md:w-[550px] md:h-[450px] lg:-mx-8 md:-mx-16 snap-start -mr-12 -ml-16">
              <img src={pic3} className=' md:h-[400px] h-[200px] rounded-lg'/>
            </div>
            <div class="flex-none w-[300px] h-[200px] md:w-[550px] md:h-[450px] lg:mx-4 snap-start mx-3">
              <img src={pic9}className='  md:h-[400px] h-[200px] rounded-lg'/>
            </div>
            <div class="flex-none w-[300px] h-[200px] md:w-[550px] md:h-[450px] lg:ml-12 snap-start mx-2">
              <img src={pic2}className='  md:h-[400px] h-[200px] rounded-lg'/>
            </div>
            </div>
        </div>    
    </>
  );
};

export default SampleProjects;

import React, { useState } from 'react'; 
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const [text] = useTypewriter({
    words: ['RESUME'],
    loop: true,
    typeSpeed:120,
    deleteSpeed:60,
  });
  return (
    <div id='about' className="p-2 m-8 md:p-8 lg:p-8 rounded-lg border-2 border-violet-700 shadow-inner shadow-violet-600 text-white">
      <div className="container mx-auto px-4 md:px-2 p-8 py-12 lg:p-12">
        <div className="text-center mb-4 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-violet-950 from-10% via-indigo-600 via-30% via-purple-600 via-50% to-pink-800 to-90% inline-block text-transparent bg-clip-text font-semibold"><span>{text}</span><Cursor /></h2>
        </div>
        <div className="flex justify-center md:mb-4 mb-2 bg-violet-950">
          <button className={`px-1 py-1 md:px-12 md:py-2 mx-2 md:mx-2 text-sm md:text-xl font-semibold ${activeTab === 'education' ? 'text-white border-2 border-violet-800 bg-violet-500 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300' : 'text-lg md:text-xl text-white '}`}
            onClick={() => setActiveTab('education')} > Education</button>
          <button  className={`px-1 py-1 md:px-12 md:py-2 mx-2 md:mx-2 text-sm md:text-xl font-semibold ${activeTab === 'skills' ? 'text-white border-2 border-violet-800 bg-violet-500 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300' : 'text-lg md:text-xl text-white'}`}
            onClick={() => setActiveTab('skills')}> Professional Skills </button>
            <button  className={`px-1 py-1 md:px-12 md:py-2 mx-2 md:mx-2 text-sm md:text-xl font-semibold ${activeTab === 'summary' ? 'text-white border-2 border-violet-800 bg-violet-500 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300' : 'text-lg md:text-xl text-white'}`}
            onClick={() => setActiveTab('summary')}>Summary </button>
        </div>
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 my-8 rounded-lg pl-4 md:pl-40 bg-white">
            <h3 className="text-2xl md:text-3xl font-semibold py-1 md:py-1 -ml-4 md:-ml-24 text-violet-800">Education</h3>
            <p></p>
            <div className="bg-white border-2 border-violet-800 p-4 md:p-6 mx-0 md:mx-8 w-full md:w-11/12 rounded-lg shadow-lg shadow-purple-600 text-violet-900 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300 border-l-8 border-violet-800 hover:text-white hover:bg-violet-700">
              <h4 className="text-xl md:text-2xl font-semibold mb-2">BS in Computer Science</h4>
              <p className="text-lg mb-2">The Women University Multan</p>
              <p className="text-lg mb-2">Multan (2020 - 2024)</p>
              <p className="text-lg">Grade: A</p>
            </div>
            <div className="content-center bg-violet-900 text-white hover:bg-violet-800 hover:text-white hover:opacity-100 opacity-65 p-6 md:p-10 border-2 border-violet-950  md:mx-4 mt-2 w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg shadow-purple-600 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300 mx-20">
              <h3 className="text-xl md:text-2xl px-2">CGPA</h3>
              <p className="text-xl md:text-2xl">3.59/4.00</p>
            </div>
            <div className="bg-white p-4 md:p-6 md:mx-8 w-full md:w-11/12 mt-2 border-2 border-violet-800 rounded-lg shadow-lg shadow-purple-600 hover:text-white hover:bg-violet-700 border-l-8 border-violet-800 text-violet-950 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300">
              <h4 className="text-xl md:text-2xl font-semibold mb-2">Intermediate</h4>
              <p className="text-lg mb-2">The KIPS girls college, Multan</p>
              <p className="text-lg mb-2">Multan (2018 - 2020)</p>
              <p className="text-lg">Grade: A</p>
            </div>
            <div className="content-center bg-violet-900 opacity-65 mx-20 p-6 md:p-10 border-2 hover:bg-violet-800 hover:text-white hover:opacity-100 border-violet-950 mx-20 md:mx-4 mt-4 w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg shadow-purple-600 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300">
              <h3 className="text-white text-xl md:text-2xl px-2">Marks</h3>
              <p className="text-white text-xl md:text-2xl">979/1100</p></div>
            <div className="bg-white p-4 md:p-6 md:mx-8 w-full md:w-11/12 my-2 rounded-lg border-2 border-violet-800 shadow-lg shadow-purple-600 hover:text-white hover:bg-violet-700 border-l-8 border-violet-800 text-violet-950 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300">
              <h4 className="text-xl md:text-2xl font-semibold mb-2">Matriculation</h4>
              <p className="text-lg mb-2">Govt. Girls High School no 2, Multan</p>
              <p className="text-lg mb-2">Multan (2016 - 2018)</p>
              <p className="text-lg">Grade: A+</p>
            </div>
            <div className="content-center bg-violet-900 opacity-65 mx-20 p-6 md:p-10 border-2 hover:bg-violet-800 hover:text-white hover:opacity-100 border-violet-950 md:mx-4 my-2 w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg shadow-purple-600 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300">
              <h3 className="text-white text-xl md:text-2xl px-2">Marks</h3>
              <p className="text-white text-xl md:text-2xl">1023/1100</p></div>
          </div>
        )}
        {activeTab === 'skills' && (
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-violet-900">Professional Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-violet-900 ">
              <div className="bg-white border-2 border-violet-800 p-4 md:p-6 rounded-lg text-violet-900 hover:bg-violet-800 hover:text-white shadow-lg shadow-purple-600 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300">
                <h4 className="text-lg md:text-xl font-semibold mb-2">Development Skills</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-base md:text-lg">HTML</p>
                    <div className="w-full bg-white border-2 border-violet-800 rounded-full h-2 md:h-3">
                      <div className="bg-gradient-to-r from-violet-950 from-10% via-indigo-600 via-30% via-purple-600 via-50% to-pink-800 to-90% font-semibold h-1 md:h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-base md:text-lg">CSS</p>
                    <div className="w-full bg-white border-2 border-violet-800 rounded-full h-2 md:h-3">
                      <div className="bg-gradient-to-r from-violet-950 from-10% via-indigo-600 via-30% via-purple-600 via-50% to-pink-800 to-90% font-semibold h-1 md:h-2 rounded-full" style={{ width: '93%' }}></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-base md:text-lg">JavaScript</p>
                    <div className="w-full bg-white border-2 border-violet-800 rounded-full h-2 md:h-3">
                      <div className="bg-gradient-to-r from-violet-950 from-10% via-indigo-600 via-30% via-purple-600 via-50% to-pink-800 to-90% font-semibold h-1 md:h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-base md:text-lg">React</p>
                    <div className="w-full bg-white border-2 border-violet-800 rounded-full h-2 md:h-3">
                      <div className="bg-gradient-to-r from-violet-950 from-10% via-indigo-600 via-30% via-purple-600 via-50% to-pink-800 to-90% font-semibold h-1 md:h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-base md:text-lg">Tailwind CSS</p>
                    <div className="w-full bg-white border-2 border-violet-800 rounded-full h-2 md:h-3">
                      <div className="bg-gradient-to-r from-violet-950 from-10% via-indigo-600 via-30% via-purple-600 via-50% to-pink-800 to-90% font-semibold h-1 md:h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border-2 border-violet-800 p-4 md:p-6 rounded-lg text-violet-900 hover:bg-violet-800 hover:text-white shadow-lg shadow-purple-600 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300">
                <h4 className="text-lg md:text-xl font-semibold mb-2">Design Skills</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-base md:text-lg">Graphic Design</p>
                    <div className="w-full bg-white border-2 border-violet-800 rounded-full h-2 md:h-3">
                      <div className="bg-gradient-to-r from-violet-950 from-10% via-indigo-600 via-30% via-purple-600 via-50% to-pink-800 to-90% font-semibold h-1 md:h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-base md:text-lg">Canva</p>
                    <div className="w-full bg-white border-2 border-violet-800 rounded-full h-2 md:h-3">
                      <div className="bg-gradient-to-r from-violet-950 from-10% via-indigo-600 via-30% via-purple-600 via-50% to-pink-800 to-90% font-semibold h-1 md:h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-base md:text-lg">Prsentation sills</p>
                    <div className="w-full bg-white border-2 border-violet-800 rounded-full h-2 md:h-3">
                      <div className="bg-gradient-to-r from-violet-950 from-10% via-indigo-600 via-30% via-purple-600 via-50% to-pink-800 to-90% font-semibold h-1 md:h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>                    
                  </div>
                  <div>
                    <p className="text-base md:text-lg">Responsive Designs</p>
                    <div className="w-full bg-white border-2 border-violet-800 rounded-full h-2 md:h-3">
                      <div className="bg-gradient-to-r from-violet-950 from-10% via-indigo-600 via-30% via-purple-600 via-50% to-pink-800 to-90% font-semibold h-1 md:h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>                    
                  </div>
                  <div>
                    <p className="text-base md:text-lg">Photoshop</p>
                    <div className="w-full bg-white border-2 border-violet-800 rounded-full h-2 md:h-3">
                      <div className="bg-gradient-to-r from-violet-950 from-10% via-indigo-600 via-30% via-purple-600 via-50% to-pink-800 to-90% font-semibold h-1 md:h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'summary' && (
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md text-violet-800 border-2 border-violet-800">
             <h2 className="text-3xl font-semibold mb-6 text-violet-950">Summary</h2>
                <div className=''><h2 className="text-xl underline bg-gradient-to-r from-violet-950 from-10% via-indigo-600 via-30% via-purple-600 via-50% to-pink-800 to-90% inline-block text-transparent bg-clip-text font-bold "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 inline">
                <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>Strong Educational Background:</h2><p className='m-6 py-4 px-8 rounded-lg bg-violet-700 text-white'>With a robust educational foundation, I have consistently demonstrated excellence in both academic and professional spheres. My journey began with a Bachelor of Science in Computer Science from the Women University of Multan, where I graduated.</p></div>
                <div><h2 className="bg-gradient-to-r from-violet-950 from-10% via-indigo-600 via-30% via-purple-600 via-50% to-pink-800 to-90% inline-block text-transparent bg-clip-text text-xl underline font-bold"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 inline">
                <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>Expertise in Front-End Web Development:</h2><p className='m-6 py-4 px-8 rounded-lg bg-violet-700 text-white'>As a passionate and skilled front-end web developer, I specialize in creating visually stunning, user-friendly websites and applications. My expertise lies in utilizing modern technologies such as React, Tailwind CSS, and Bootstrap to deliver responsive and interactive user experiences. I take pride in writing clean, maintainable code and implementing best practices in web development. </p></div>
                <div><h2 className="bg-gradient-to-r from-violet-950 from-10% via-indigo-600 via-30% via-purple-600 via-50% to-pink-800 to-90% inline-block text-transparent bg-clip-text text-xl underline  font-bold"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 inline">
                <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>Dedication to Continuous Learning:</h2><p className='m-6 py-4 px-8 rounded-lg bg-violet-700 text-white '>In an ever-evolving field like web development, continuous learning is paramount. I am dedicated to expanding my knowledge and skills, regularly attending workshops, conferences, and online courses. </p></div>
            </div>
        )}
        <button type='button' class="float-right bg-gradient-to-r from-violet-950 via-indigo-800 to-purple-700 text-white md:w-40 md:h-12 text-sm w-32 h-10 px-5 md:px-4 lg:px-7 lg:text-base py-2 md:my-3 lg:my-4 my-2 rounded-full hover:text-white hover:shadow-inner hover:shadow-cyan-500/50 hover:bg-gradient-to-r hover:from-indigo-700 hover:via-purple-600 hover:to-indigo-700 flex items-center transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300">Download CV</button>
      </div>
    </div>
  );
};

export default Resume;








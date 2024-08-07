import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Services from './components/Services';
import SampleProjects from './components/SampleProjects';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Rotatebox from './Rotatebox.js';


const App = () => {
  return (
    <div class="App bg-white cursor-pointer">
      <Header />
      <Home />
      <Services />
      <SampleProjects/>
      <Resume/>
      <Footer/>
    </div>
  );
}

export default App;

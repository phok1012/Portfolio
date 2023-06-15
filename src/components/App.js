import React, {useState} from 'react';
import NavBar from './NavBar';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Interest from './Interest';
import '../css/App.css';


const App = () => {
  return (
    <div className='container'>
      <NavBar />
      <div className='row'>
        <About />
        <Skills />
        <Projects />
        <Interest />
      </div>
    </div>
  );
}

export default App;
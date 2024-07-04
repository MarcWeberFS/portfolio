import React from 'react';
import ParticleCanvas from './component/ParticleCanvas';
import Spotlight from './component/Spotlight';
import './App.css';
import Card from './component/Card';
function App() {

  const card1 = {
    Date: "July 2020 - present",
    Role: "Full Stack Software Engineer",
    Description: "Test Test Test",
    Skills: "Test Test Test"
  };


  return (
    <div className="App font-sans">
      <header className="App-header bg-slate-950 text-white">
        <div className="background-container">
          <ParticleCanvas />
          <div className="inverted-canvas">
            <ParticleCanvas />
          </div>
        </div>
        <Spotlight />
        <div className="content flex max-w-5xl mr-auto ml-auto text-left">
          <div className="w-4/5">
            <span className="text-5xl font-bold">Marc Weber</span>
            <br></br>
            <span className="text-2xl">Full Stack Software Engineer</span>

          </div>
          <div className="w-full">
          <Card 
            Date={card1.Date} 
            Role={card1.Role} 
            Description={card1.Description} 
            Skills={card1.Skills} 
          />
            About
            <br></br>
            work experience
            <br></br>
            Projects
            <br></br>
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import ParticleCanvas from './component/ParticleCanvas';
import Spotlight from './component/Spotlight';
import './App.css';
import Card from './component/Card';
function App() {

  const card1 = {
    Date: "Mar 2023 - present",
    Role: "Co-Founder at Cardea Insurance GmbH",
    Description: "Designed and deployed a customer-facing web application. Integrated AWS services to streamline processes. Led strategic recruitment and team building.",
    Skills: ['AWS', 'Webflow', 'JavaScript','Leadership'],
    Link: "https://www.cardea-insurance.com"
  };
  
  const card2 = {
    Date: "Jan 2022 - May 2022",
    Role: "Telematics Technician Soldier at Rekrutenschule",
    Description: "Collaborated on military communication objectives. Established and maintained mobile communication networks. Resolved network issues to ensure operations.",
    Skills: ['Communication Networks', 'Team Collaboration', 'Problem-Solving'],
    Link: "https://www.miljobs.ch/functions/telematiksoldat"
  };
  
  const card3 = {
    Date: "Aug 2020 - Dec 2021",
    Role: "Full-Stack Software Engineer at Swisscard",
    Description: "Developed and enhanced Octopus UI application. Implemented monitoring systems with Prometheus and Grafana. Contributed to Scrum team for automated solutions.",
    Skills: ['Spring Boot', 'Docker', 'React', 'CI/CD', 'Prometheus'],
    Link: "https://www.swisscard.ch/en"
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
          <Card 
            Date={card2.Date} 
            Role={card2.Role} 
            Description={card2.Description} 
            Skills={card2.Skills} 
          />
          <Card 
            Date={card3.Date} 
            Role={card3.Role} 
            Description={card3.Description} 
            Skills={card3.Skills} 
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

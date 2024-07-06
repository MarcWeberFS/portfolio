import React from 'react';
import ParticleCanvas from './component/ParticleCanvas';
import Spotlight from './component/Spotlight';
import './App.css';
import Card from './component/Card';
import Download from './component/Download';
import Profile from './assets/profile.jpg';

function App() {
  const cardEducation = {
    Date: 'Sep 2022 - Jul 2025',
    Role: 'Bachelor of Applied Science at ZHAW, Business Information Technology',
    Description: `The Bachelor of Science in Business Information Technology is designed to equip students with a blend of IT skills and business knowledge. The program focuses on current topics and practical examples, ensuring relevance to the digitalization of society. It prepares students for roles at the intersection of people and technology, focusing on designing, implementing, and operating innovative and complex socio-technical systems.`,
    Skills: [
      'Full-Stack Development',
      'Project Management',
      'Microeconomics',
      'Artificial Intelligence',
      'Data Science',
      'Java',
      'Python',
      'Spring Boot',
      'MongoDB',
      'Svelte',
      'Microsoft Azure'
    ],
    Link: 'https://www.zhaw.ch/en/sml/study/bachelor/business-information-technology-business-information-systems/'
  };

  const card1 = {
    Date: "Mar 2023 - present",
    Role: "Co-Founder at Cardea Insurance GmbH",
    Description: "Designed and deployed a customer-facing web application. Integrated AWS services to streamline processes. Led strategic recruitment and team building.",
    Skills: ['AWS', 'Webflow', 'JavaScript','Leadership'],
    Link: "https://www.cardea.webflow.io/"
  };
  
  const card2 = {
    Date: "Jan 2022 - May 2022",
    Role: "Telematics Technician Soldier during the Rekrutenschule",
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
    <div className="App font-sans h-screen">
      <header className="App-header bg-slate-950 text-white h-full">
        <div className="background-container absolute inset-0 z-0">
          <ParticleCanvas />
          <div className="inverted-canvas">
            <ParticleCanvas />
          </div>
        </div>
        <Spotlight />
        <div className="w-full h-full overflow-y-auto">
          <div className="content flex max-w-7xl mx-auto text-left relative z-10 h-full">
            <div className="w-4/5 sticky top-0">
              <img src={Profile} alt="Marc Weber" className="rounded-full w-40 h-40 border-4 border-slate-900 bg-slate-900 mb-5" />
              <span className="text-5xl font-bold">Marc Weber</span>
              <br></br>
              <span className="text-2xl">Full Stack Software Engineer</span>
              <br></br>
              <span className="material-icons ml-2 mb-auto text-lg mr-2">
              location_on
              </span><span className="text-xl">Zürich</span>
              <Download 
                Label="Download CV"
                Link="https://www.linkedin.com/in/marc-weber-2a2a7b1b0/"
              />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>

            </div>
            <div className="w-full">
              <div className="p-4 space-y-4 text-slate-300">
                <div className="text-3xl text-white font-semibold">About</div>
                <div className="text-slate-300">
                  Cardea Insurance represents the culmination of my journey in tech and business, where I leverage my skills in <span className="text-white font-semibold">web application development</span> to revolutionize the insurance industry. With a focus on enhancing user experience and automating processes, my team and I have developed a user-friendly digital signature solution and a premium calculator using robotics technology. These innovations not only streamline customer interactions but also embody our digital-first ethos, ensuring efficiency and accessibility.
                  <br />
                  <br />
                  Currently pursuing a Bachelor of Applied Science in Business Information Technology at ZHAW, I am honing my understanding of <span className="text-white font-semibold">economics and management</span> while applying these principles to drive company growth. My past experience at Swisscard and the Swiss Armed Forces, coupled with my proficiency in <span className="text-white font-semibold">AWS services</span>, positions me to create software solutions that democratize access to financial services, reflecting my commitment to leveraging technology for social empowerment.
                </div>
                <div className="text-3xl text-white font-semibold margin-top-50">Education</div>
                <Card 
                  Date={cardEducation.Date} 
                  Role={cardEducation.Role} 
                  Description={cardEducation.Description} 
                  Skills={cardEducation.Skills} 
                  Link={cardEducation.Link}
                />
                <div className="text-3xl text-white font-semibold margin-top-50">Work Experience</div>
                <Card 
                  Date={card1.Date} 
                  Role={card1.Role} 
                  Description={card1.Description} 
                  Skills={card1.Skills} 
                  Link={card1.Link}
                />
                <Card 
                  Date={card2.Date} 
                  Role={card2.Role} 
                  Description={card2.Description} 
                  Skills={card2.Skills} 
                  Link={card2.Link}
                />
                <Card 
                  Date={card3.Date} 
                  Role={card3.Role} 
                  Description={card3.Description} 
                  Skills={card3.Skills} 
                  Link={card3.Link}
                />
                <div className="text-3xl text-white font-semibold margin-top-50">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

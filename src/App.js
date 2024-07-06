import React from 'react';
import ParticleCanvas from './component/ParticleCanvas';
import Spotlight from './component/Spotlight';
import './App.css';
import Card from './component/Card';
import Download from './component/Download';
import Profile from './assets/profile.jpg';
import { motion } from 'framer-motion';
import { FlipWords } from './component/flip-words';
import ThumbnailCard from './component/ThumbnailCard';
import Portfolio from './assets/Portfolio.PNG';
import PolicySign from './assets/PolicySign.png';
import Cardea from './assets/Cardea.png';

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
    Skills: ['AWS', 'Webflow', 'JavaScript', 'Leadership'],
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

  const project1 = {
    ImageSrc: Portfolio,
    Title: "Portfolio Website", 
    Description: "Designed and deployed a customer-facing web Portfolio. Listing my achievements and being a hub for the work I've done online.",
    Skills: ['React', 'Tailwind', 'JavaScript', 'Framer Motion', 'Vercel'],
    Link: "https://github.com/MarcWeberFS/portfolio"
  };

  const project2 = {
    ImageSrc: PolicySign,
    Title: "Policysign",
    Description: "Designed and deployed a customer-facing web application. Used for managing, templating, downloading, sending and signing documents.",
    Skills: ['Azure', 'Svelte', 'Spring Boot', 'MongoDB'],
    Link: "https://github.com/MarcWeberFS/PolicySign"
  };

  const project3 = {
    ImageSrc: Cardea,
    Title: "Cardea Insurance Website",
    Description: "Designed and deployed a customer-facing web application. Implemented online signature for mandates. Using robotics technology to calculate premiums",
    Skills: ['AWS', 'Webflow', 'JavaScript', 'MySQL', 'Robotics'],
    Link: "https://www.cardea.webflow.io/"
  };


  const jiggleAnimation = {
    whileHover: { rotate: [0, -10, 10, -10, 10, 0] },
    transition: { duration: 0.6, ease: "easeInOut" }
  };

  return (
    <div className="App font-sans h-screen overflow-hidden">
      <header className="App-header bg-slate-950 text-white h-full">
        <div className="background-container absolute inset-0 z-0">
          <ParticleCanvas />
          <div className="inverted-canvas">
            <ParticleCanvas />
          </div>
        </div>
        <Spotlight />
        <div className="w-full h-full overflow-y-auto mr-5 pt-5 ml-5">
          <div className=" flex max-w-7xl mx-auto text-left relative z-10">
            <div className="w-4/5 sticky top-0 flex flex-col justify-between h-[calc(100vh-4rem)]">
              <div>
                <img src={Profile} alt="Marc Weber" className="rounded-full w-40 h-40 border-4 border-slate-900 bg-slate-900 mb-5" />
                <span className="text-5xl font-bold">Marc Weber</span>
                <br />
                <FlipWords
                  words={["Full Stack Software Engineer", "AWS Foundation Certified", "Business Information Technology Student"]}
                  duration={20000}
                  className="text-white"
                />
                <br />
                <div className='mt-2'>
                  <span className="material-icons mb-auto text-lg mr-2">location_on</span>
                  <span className="text-xl">Zürich</span>
                </div>
                <div className='mt-1 group'>
                  <a href="mailto:marc.robin.weber@gmail.com" className='flex items-center text-xl'>
                    <motion.span className="material-icons mb-auto text-lg mr-2" {...jiggleAnimation}>mail</motion.span>
                    <span className="underline-animation">marc.robin.weber@gmail.com</span>
                  </a>
                </div>
                <div className='mb-5 mt-1 group'>
                  <a href="tel:+41792739667" className='flex items-center text-xl'>
                    <motion.span className="material-icons mb-auto text-lg mr-2" {...jiggleAnimation}>phone</motion.span>
                    <span className="underline-animation">+41 79 273 96 67</span>
                  </a>
                </div>
                <Download
                  Label="Download CV"
                  Link="https://www.linkedin.com/in/marc-weber-2a2a7b1b0/"
                />
              </div>
              <div className="flex space-x-4 mt-4">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-6 w-6"
                  aria-hidden="true"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </motion.svg>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  aria-hidden="true"
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </motion.svg>
              </div>
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
                <ThumbnailCard
                  ImageSrc={project1.ImageSrc}
                  Title={project1.Title}
                  Description={project1.Description}
                  Skills={project1.Skills}
                  Link={project1.Link}
                />

                <ThumbnailCard
                  ImageSrc={project2.ImageSrc}
                  Title={project2.Title}
                  Description={project2.Description}
                  Skills={project2.Skills}
                  Link={project2.Link}
                />

                <ThumbnailCard
                  ImageSrc={project3.ImageSrc}
                  Title={project3.Title}
                  Description={project3.Description}
                  Skills={project3.Skills}
                  Link={project3.Link}
                />

                <div className='text-center' style={{ marginBottom: '2rem' }}>
                  © Marc Weber | 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

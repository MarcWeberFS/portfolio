import React from 'react';
import ParticleCanvas from '../component/ParticleCanvas';
import Spotlight from '../component/Spotlight';
import '../App.css';
import Card from '../component/Card';
import Download from '../component/Download';
import Profile from '../assets/profile.jpg';
import { motion } from 'framer-motion';
import { FlipWords } from '../component/flip-words';
import ThumbnailCard from '../component/ThumbnailCard';
import Portfolio from '../assets/Portfolio.PNG';
import PolicySign from '../assets/policysign_logo.png';
import Cardea from '../assets/Cardea.png';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Langpartner from '../assets/Langpartner.PNG';
import VideoDownloader from '../assets/camunda_videoo_downloader.png';
import ViviennePortfolio from '../assets/Vivienne_portfolio.png';
import TextToPostGIS from '../assets/text-to-postgis.png';

function Home() {
  const cardEducation = {
    Date: 'Sep 2022 - Sep 2025',
    Role: 'Bachelor of Applied Science at ZHAW, Business Information Technology',
    Description: `The Bachelor of Science in Business Information Technology is designed to equip students with a blend of IT skills and business knowledge. The program focuses on current topics such as AI and webdevelopement and practical examples as seen in enterprises. It prepares students for roles at the intersection of people and technology.`,
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
    Date: "Mar 2023 - Dec 2024",
    Role: "Co-Founder at Cardea Insurance GmbH",
    Description: "Designed and maintained a customer-facing web application. Implemented online signature for mandates. Used robotics to calculate and provide a premiums calculator. Built the backend up with Lambda functions and EC2. Led strategic marketing / recruitment and team building.",
    Skills: ['AWS', 'Webflow', 'JavaScript', 'Leadership'],
    Link: ""
  };

  const card2 = {
    Date: "Jan 2022 - May 2022",
    Role: "Telematics Technician Soldier during the Rekrutenschule",
    Description: "Collaborated on military communication objectives. Established and maintained mobile communication networks. Resolved network issues to ensure operations.",
    Skills: ['Communication Networks', 'Team Collaboration'],
    Link: "https://www.miljobs.ch/functions/telematiksoldat"
  };

  const card3 = {
    Date: "Aug 2020 - Dec 2021",
    Role: "Full-Stack Software Engineer at Swisscard",
    Description: "Developed and maintained a DevOps monitoring application for failed Jenkins pipelines. Implemented monitoring systems with Prometheus and Grafana. Worked on automation topics which were developped using Camunda and Spring Boot.",
    Skills: ['Java','Spring Boot', 'Docker', 'React', 'CI/CD', 'Camunda', 'Prometheus'],
    Link: "https://www.swisscard.ch/en"
  };

  const card4 = {
    Date: "Jan 2025 - Present",
    Role: "Document Template Developer at Zurich Insurance",
    Description: "Workingstudent at Zurich Insurance in the Enterprise Content Management team. Working on outbound topics such as creating documents, testing documents. Developped API microservices for the outbound platform using Java and Spring Boot to communicate securely. More recently working on the inbound document extraction team using TCG.",
    Skills: ['ISIS Papyrus', 'TCG', 'Spring-Boot', 'Java'],
    Link: "https://www.zurich.ch/"
  };

  const project1 = {
    ImageSrc: Portfolio,
    Title: "Portfolio Website",
    Description: "Designed and deployed a customer-facing web Portfolio. Listing my achievements and being a hub for the work I've done online.",
    Skills: ['React', 'Tailwind CSS', 'JavaScript', 'Framer Motion', 'Vercel'],
    Link: "https://github.com/MarcWeberFS/portfolio"
  };

  const project2 = {
    ImageSrc: PolicySign,
    Title: "Policysign",
    Description: "Designed and deployed a customer-facing web application. Used for managing, templating, downloading, sending and signing documents.",
    Skills: ['Azure', 'Svelte', 'Java','Spring Boot', 'MongoDB'],
    Link: "https://github.com/MarcWeberFS/PolicySign"
  };

  const project3 = {
    ImageSrc: Cardea,
    Title: "Cardea Insurance Website",
    Description: "Designed and deployed a customer-facing web application. Implemented online signature for mandates. Using robotics technology to calculate premiums",
    Skills: ['AWS', 'Webflow', 'JavaScript', 'MySQL', 'Robotics'],
    Link: "https://cardea.webflow.io/"
  };

  const project4 = {
    ImageSrc: Langpartner,
    Title: "Lang + Partner Finanzdienstleistungen GmbH",
    Description: "Created a Webapp for a financial services company. Most features are insurance related such as digital signature of a mandate. The herosection features a parallax effect which adjusts the background image based on the location of the mouse.",
    Skills: ['React', 'AWS', 'Parallax', 'JavaScript', 'Vercel', 'Tailwind CSS'],
    Link: "https://www.langpartner.ch"
  };

  const project5 = {
    ImageSrc: VideoDownloader,
    Title: "Camunda Video Downloader and Transcription Creator",
    Description: "Using a Spring Boot backend paired with Camunda, with the help of AWS Translate, Transcribe and EC2. The user provides either a YouTube or an Instagram link set the source and target language for captions and send off the request. AWS services used are S3 to store and provide download links to videos, EC2 to host the app, Translate, Transcribe and ECR.",
    Skills: ['Camunda', 'AWS', 'Spring Boot', 'Java', 'React', 'Tailwind CSS'],
    Link: "https://github.com/MarcWeberFS/camunda-video-translator"
  };

  const project6 = {
    ImageSrc: ViviennePortfolio,
    Title: "Portfolio page for Architecture ETH Graduate",
    Description: "In order to boosts my sisters visibility online and likelyhood of getting a job offer, we created a portfolio for her together to showcase her work. The page is built with React and Tailwind CSS.",
    Skills: ['React', 'Tailwind CSS'],
    Link: "https://vivienneweber.com"
  };

  const project7 = {
    ImageSrc: TextToPostGIS,
    Title: "Text to PostGIS - Bacherlor Thesis",
    Description: "A text to PostGIS converter that allows multiple feedback loops which improve the response of the AI. The performance of the AIs and the impact the feedback loops had on the performance were evaluated in self designed Benchmark. The benchmark contains 25 questions with varying difficulty. The a small app to interact with the LLMs and the results of the Benchmark are displayed on the website.",
    Skills: ['React', 'Spring Boot', 'PostGIS', 'Java', 'PostgreSQL', 'AI'],
    Link: "https://text-to-postgis.com/"
  };

  const jiggleAnimation = {
    whileHover: { rotate: [0, -10, 10, -10, 10, 0] },
    transition: { duration: 0.6, ease: "easeInOut" }
  };

  return (
    <div className="App font-sans min-h-screen overflow-hidden">
      <Analytics />
      <SpeedInsights />
      <div className="App-header bg-slate-950 text-white min-h-screen">
        <div className="background-container absolute inset-0 z-0">
          <ParticleCanvas />
          <div className="inverted-canvas">
            <ParticleCanvas />
          </div>
        </div>
        <Spotlight />
        <div className="w-full h-full overflow-y-auto px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row max-w-7xl mx-auto text-left relative z-10">
            <div className="w-full lg:w-2/5 lg:sticky top-0 flex flex-col justify-between h-[calc(100vh-4rem)] mb-8 lg:mb-0">
              <div>
                <img src={Profile} alt="Marc Weber" className="rounded-full w-32 h-32 sm:w-40 sm:h-40 border-4 border-slate-900 bg-slate-900 mb-4 sm:mb-5 mx-auto lg:mx-0" />
                <span className="text-3xl sm:text-5xl font-bold mb-5">Marc Weber</span>

                <div className='mt-2'>
                    <FlipWords
                    words={["Full Stack Software Engineer", "AWS Cloud Practitioner", "Business Information Technology Graduate"]}
                    duration={20000}
                    className="text-white text-lg sm:text-2xl"
                    />
                </div>
                <div className='mt-2'>
                  <span className="material-icons mb-auto text-lg mr-2">location_on</span>
                  <span className="text-xl">Zürich</span>
                </div>
                <div className='mt-1 group'>
                  <a href="mailto:work@webermarc.com" className='flex items-center text-xl group'>
                    <motion.span className="material-icons mb-auto text-lg mr-2" {...jiggleAnimation}>mail</motion.span>
                    <span className="underline-animation">work@webermarc.com</span>
                  </a>
                </div>
                <div className='mb-5 mt-1 group'>
                  <a href="tel:0792739667" className='flex items-center text-xl group'>
                    <motion.span className="material-icons mb-auto text-lg mr-2" {...jiggleAnimation}>phone</motion.span>
                    <span className="underline-animation">079 273 96 67</span>
                  </a>
                </div>

                <Download
                  Label="Open CV"
                />


              </div>
              <div className='lg:justify-start'>
                <div className="flex space-x-4 mt-4 justify-center lg:justify-start">
                  <a href='https://github.com/MarcWeberFS'>
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
                  </a>
                  <a href='https://www.linkedin.com/in/marc-weber-b7777b216/'>
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
                  </a>
                </div>
                <div className='lg:hidden text-center mt-4'>
                  <motion.span
                    className="material-icons text-lg"
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: 'loop',
                      ease: 'easeInOut'
                    }}
                  >
                    keyboard_double_arrow_down
                  </motion.span>
                </div>
              </div>


            </div>
            <div className="w-full lg:w-3/5">
              <div className="p-4 space-y-4 text-slate-300">
                <div className="text-3xl text-white font-semibold">About</div>
                <div className="text-slate-300">
                  Graduated from ZHAW with a Bachelor in Business Information Technology. This education has equipped me with a solid foundation in <span className="text-white font-semibold">software engineering</span>, <span className="text-white font-semibold">project management</span>, and <span className="text-white font-semibold">artificial intelligence</span>. There are two aspects in IT which I am most passionate about. First being process automation with my preferred stack being Spring Boot and Camunda (7). The second aspect are cloud services.
                  <br />
                  <br />
                  The reason I am passionate about the Cloud is that the company I co-founded Cardea Insurance had its backend developped on AWS. Using the microservices that are available from AWS right out of the box and the ease of integrating new microservices or deploying your own microsesrvices lit a fire in me. I am now AWS Certified Cloud Practitioner and have a strong foundation of the AWS ecosystem, including services like <span className="text-white font-semibold">S3, EC2, Lambda, Dynamo</span> and other less frequently used microserives like <span className="text-white font-semibold">Cognito</span> or <span className="text-white font-semibold">SES</span>. This knowledge allows me to design and implement scalable and secure solutions that meet the needs of modern enterprise sized businesses.
                </div>
                <div className="text-3xl text-white font-semibold mt-8">Education</div>
                <Card
                  Date={cardEducation.Date}
                  Role={cardEducation.Role}
                  Description={cardEducation.Description}
                  Skills={cardEducation.Skills}
                  Link={cardEducation.Link}
                />
                <div className="text-3xl text-white font-semibold mt-8">Work Experience</div>
                <Card
                  Date={card4.Date}
                  Role={card4.Role}
                  Description={card4.Description}
                  Skills={card4.Skills}
                  Link={card4.Link}
                />
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
                <div className="text-3xl text-white font-semibold mt-8">Projects</div>
                
                <ThumbnailCard
                  ImageSrc={project7.ImageSrc}
                  Title={project7.Title}
                  Description={project7.Description}
                  Skills={project7.Skills}
                  Link={project7.Link}
                />

                <ThumbnailCard
                  ImageSrc={project5.ImageSrc}
                  Title={project5.Title}
                  Description={project5.Description}
                  Skills={project5.Skills}
                  Link={project5.Link}
                />

                <ThumbnailCard
                  ImageSrc={project4.ImageSrc}
                  Title={project4.Title}
                  Description={project4.Description}
                  Skills={project4.Skills}
                  Link={project4.Link}
                />

                <ThumbnailCard
                  ImageSrc={project6.ImageSrc}
                  Title={project6.Title}
                  Description={project6.Description}
                  Skills={project6.Skills}
                  Link={project6.Link}
                />

                <ThumbnailCard
                  ImageSrc={project2.ImageSrc}
                  Title={project2.Title}
                  Description={project2.Description}
                  Skills={project2.Skills}
                  Link={project2.Link}
                />

                <div className='text-center' style={{ marginBottom: '2rem' }}>
                  © Marc Weber | 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

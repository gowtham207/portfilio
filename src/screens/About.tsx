import React from 'react'
import AboutHero from '../components/about/AboutHero';
import TechStack from '../components/about/TechStack';
import Educational from '../components/about/Educational';
import Collaborate from '../components/about/Collaborate';

const About: React.FC = () => {
  return (
    <main className='grow flex flex-col items-center w-full'>
      <AboutHero />
      <TechStack />
      <Educational />
      <Collaborate />
    </main>
  );
};

export default About;

import React from 'react'
import AboutHero from '../components/about/AboutHero';
import TechStack from '../components/about/TechStack';
import Collaborate from '../components/about/Collaborate';
import EducationTab from '../components/about/EducationTab';

const About: React.FC = () => {
  return (
    <main className='grow flex flex-col items-center w-full'>
      <AboutHero />
      <TechStack />
      <EducationTab />
      <Collaborate />
    </main>
  );
};

export default About;

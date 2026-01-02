import React from 'react'
import Hero from '../components/home/Hero'
import TechStack from '../components/home/TechStack'
import AboutSection from '../components/home/AboutSection';

const Home:React.FC = () => {
  return (
    <main className='grow flex flex-col items-center w-full'>
        <Hero />
        <TechStack />
        <AboutSection />
    </main>
  );
};

export default Home;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/navbar';
import HeroSection from './components/HeroSection'; 
import WhyDanceFitness from './components/WhyDanceFitness';
import ClassesSection from './components/ClassesSection';
import MeetVijaya from './components/MeetVijaya';
import AccessibilitySection from './components/AccessibilitySection';
import EventsSection from './components/EventsSection';
import ContactDetails from './components/ContactDetails';
import Footer from './components/Footer';

const App = () => {
useEffect(() => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: false,     // allow re-trigger on scroll
    offset: 80,
  });
}, []);




  return (
    <div>
      <Navbar />
      <HeroSection /> 
      <WhyDanceFitness />
      <ClassesSection />
      <MeetVijaya />
      <AccessibilitySection />
      <EventsSection />
      <ContactDetails />
      <Footer />
    </div>
  );
};

export default App;

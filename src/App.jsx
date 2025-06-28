import React from 'react';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection'; 
import WhyDanceFitness from './components/WhyDanceFitness';
import ClassesSection  from './components/ClassesSection';
import MeetVijaya from './components/MeetVijaya';
import AccessibilitySection from './components/AccessibilitySection';
import EventsSection from './components/EventsSection';
import ContactDetails from './components/ContactDetails';
import Footer from './components/Footer';

const App = () => {
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
      {/* Add more sections as needed */}
    </div>
  );
};

export default App;

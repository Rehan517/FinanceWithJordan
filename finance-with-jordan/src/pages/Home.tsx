import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ProcessOverview from '@/components/sections/ProcessOverview';
import TestimonialsSlider from '@/components/sections/TestimonialsSlider';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ProcessOverview />
      <TestimonialsSlider />
    </div>
  );
};

export default Home; 
import React from 'react';
import { motion } from 'framer-motion';
import ShapeDivider from './ShapeDivider';

const Hero: React.FC = () => {
  const scrollToPlans = () => {
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative text-white min-h-screen flex flex-col justify-end items-center overflow-hidden bg-linknet-blue"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: 'url(https://res.cloudinary.com/dtuacdvn6/image/upload/v1756932000/image_2025-09-03_173903460_eszvlm.png)' }}
      >
      </div>
      
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
        >
          <button
            onClick={scrollToPlans}
            className="bg-transparent border-2 border-linknet-yellow text-linknet-yellow text-lg font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-linknet-yellow hover:text-linknet-dark-blue shadow-xl"
          >
            Conheça os Planos Premium
          </button>
        </motion.div>
      </div>
      <ShapeDivider position="bottom" color="#FFFFFF" />
    </section>
  );
};

export default Hero;
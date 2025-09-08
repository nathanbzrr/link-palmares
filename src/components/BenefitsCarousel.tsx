import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { benefits } from '../data/content';
// import ShapeDivider from './ShapeDivider'; // Não precisa mais importar se não for usar nenhum shape aqui

const textVariants = {
  enter: { opacity: 0, x: -50 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

const imageVariants = {
  enter: { opacity: 0, scale: 0.95 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

const BenefitsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextBenefit = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % benefits.length);
  };

  const prevBenefit = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + benefits.length) % benefits.length);
  };

  const currentBenefit = benefits[currentIndex];

  return (
    <section id="benefits-carousel" className="relative py-24 bg-white overflow-hidden">
      {/* REMOVIDO: <ShapeDivider position="top" color="#0488c7" /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-white rounded-3xl shadow-xl flex flex-col lg:flex-row overflow-hidden relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex + "text"}
              className="lg:w-1/2 p-12 flex flex-col justify-center relative z-10"
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <h4 className="text-sm font-semibold text-linknet-blue uppercase tracking-wider mb-3">
                {currentBenefit.preTitle}
              </h4>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-linknet-gray-dark mb-6 leading-tight">
                {currentBenefit.title}
              </h2>
              {currentBenefit.description && (
                <p className="text-lg text-gray-600 mb-8 max-w-md">
                  {currentBenefit.description}
                </p>
              )}
              <a 
                href={currentBenefit.ctaLink} 
                className="inline-flex items-center bg-linknet-blue hover:bg-linknet-blue/90 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg max-w-max"
              >
                {currentBenefit.ctaText}
              </a>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex + "image"}
              className="lg:w-1/2 relative flex items-center justify-center p-4 lg:p-0"
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <img
                src={currentBenefit.imageUrl}
                alt={currentBenefit.title}
                className="rounded-2xl lg:rounded-none lg:rounded-r-3xl object-cover h-full w-full shadow-lg"
                style={{ aspectRatio: '16/9' }}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-12 space-x-3">
          {benefits.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-linknet-blue w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir para o benefício ${index + 1}`}
            ></button>
          ))}
        </div>

        <button
          onClick={prevBenefit}
          className="absolute top-1/2 -translate-y-1/2 left-4 lg:left-0 bg-white/70 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-300 z-20 hidden md:block"
          aria-label="Benefício anterior"
        >
          <ChevronLeft className="w-6 h-6 text-linknet-gray-dark" />
        </button>
        <button
          onClick={nextBenefit}
          className="absolute top-1/2 -translate-y-1/2 right-4 lg:right-0 bg-white/70 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-300 z-20 hidden md:block"
          aria-label="Próximo benefício"
        >
          <ChevronRight className="w-6 h-6 text-linknet-gray-dark" />
        </button>
      </div>

    </section>
  );
};

export default BenefitsCarousel;
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PlansSection from './components/PlansSection';
import AdvantagesSection from './components/AdvantagesSection';
import BenefitsCarousel from './components/BenefitsCarousel';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from './utils/whatsapp';

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <Header onSearchClick={() => setIsSearchOpen(true)} />
      <main>
        <Hero />
        <BenefitsCarousel />
        <PlansSection />
        <AdvantagesSection />
        <FaqSection />
      </main>
      <Footer />
      <button
        onClick={() => openWhatsApp()}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-40"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}

export default App;
import React from 'react';
import { Search } from 'lucide-react';

interface HeaderProps {
  onSearchClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-linknet-blue/90 backdrop-blur-md rounded-full shadow-lg h-16 flex justify-between items-center transition-all duration-300">
        <div className="flex items-center pl-4">
          <img src="https://res.cloudinary.com/dtuacdvn6/image/upload/v1756930974/image_2025-09-03_172251868_oo34w5.png" alt="Linknet Palmares Logo" className="h-8 w-auto" />
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-white font-medium pr-4">
          <a href="#hero" className="hover:text-linknet-yellow transition-colors duration-200">Home</a>
          <a href="#plans" className="hover:text-linknet-yellow transition-colors duration-200">Planos</a>
          <a href="#advantages" className="hover:text-linknet-yellow transition-colors duration-200">Vantagens</a>
          <a href="#faq" className="hover:text-linknet-yellow transition-colors duration-200">FAQ</a>
          <button onClick={onSearchClick} className="hover:text-linknet-yellow transition-colors duration-200">
            <Search className="w-5 h-5" />
          </button>
          <a 
            href="https://linknetpe.sgp.net.br/accounts/central/login" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white/20 hover:bg-white/30 text-white font-bold px-4 py-2 rounded-full text-sm transition-colors duration-200"
          >
            Central do Assinante
          </a>
        </nav>
        <div className="flex md:hidden pr-4">
           <button onClick={onSearchClick} className="p-2 text-white hover:text-linknet-yellow transition-colors duration-200">
            <Search className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
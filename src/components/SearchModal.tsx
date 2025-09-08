import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
import { plans, advantages, faqs, benefits } from '../data/content';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const allContent = [
  ...plans.map(p => ({ ...p, type: 'Plano' })),
  ...advantages.map(a => ({ ...a, type: 'Vantagem' })),
  ...faqs.map(f => ({ ...f, type: 'Dúvida Frequente', title: f.question, description: f.answer })),
  ...benefits.map(b => ({ ...b, type: 'Benefício' }))
];

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const lowerCaseQuery = query.toLowerCase();
    return allContent.filter(item => 
      Object.values(item).some(value => 
        String(value).toLowerCase().includes(lowerCaseQuery)
      )
    );
  }, [query]);

  const handleResultClick = (id: string) => {
    onClose();
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center p-4 pt-[10vh]"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Pesquisar por planos, vantagens, dúvidas..."
                  className="w-full pl-12 pr-4 py-3 border-none focus:ring-0 text-lg rounded-lg bg-gray-100"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                />
              </div>
            </div>
            <div className="max-h-[60vh] overflow-y-auto">
              {query.trim() && searchResults.length === 0 && (
                <div className="p-8 text-center text-gray-500">
                  Nenhum resultado encontrado para "{query}".
                </div>
              )}
              <ul className="divide-y divide-gray-100">
                {searchResults.map((item, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => handleResultClick(item.id)}
                      className="w-full text-left p-4 hover:bg-linknet-gray-light transition-colors duration-200"
                    >
                      <span className="text-xs font-bold uppercase text-linknet-blue">{item.type}</span>
                      <p className="font-semibold text-lg text-linknet-gray-dark">{item.title || item.speed + ' Mega'}</p>
                      <p className="text-gray-600 line-clamp-2">{item.description || item.ideal}</p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
import React from 'react';
import { motion } from 'framer-motion';
import { advantages } from '../data/content';
import ShapeDivider from './ShapeDivider';

const AdvantagesSection: React.FC = () => {
  return (
    <section id="advantages" className="relative py-24 bg-white">
      <ShapeDivider position="top" color="#FFDD00" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-linknet-blue mb-4">
            Descubra o diferencial Linknet Palmares
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Conectamos você ao futuro com tecnologia e dedicação.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              id={advantage.id}
              className="text-center group p-8 rounded-2xl bg-linknet-gray-light shadow-lg hover:shadow-xl transition-all duration-300 border border-linknet-gray-medium hover:border-linknet-yellow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-linknet-blue mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold text-linknet-gray-dark mb-4">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
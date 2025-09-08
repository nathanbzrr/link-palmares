import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { plans } from '../data/content';
import { openWhatsApp } from '../utils/whatsapp';
import ShapeDivider from './ShapeDivider';

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const PlansSection: React.FC = () => {
  return (
    <section id="plans" className="relative py-24 bg-linknet-yellow">
      <ShapeDivider position="top" color="#FFFFFF" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-linknet-blue mb-4">
            Escolha o plano Linknet Palmares para você
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto font-light">
            Internet de fibra óptica com desempenho incomparável para sua casa ou negócio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              id={plan.id}
              className={`relative bg-white/70 backdrop-blur-md rounded-3xl shadow-xl border border-linknet-gray-medium transition-all duration-300 hover:shadow-2xl hover:border-linknet-blue ${
                plan.popular ? 'ring-2 ring-linknet-yellow border-linknet-yellow' : ''
              }`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-linknet-yellow text-linknet-blue px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Plano Promocional
                  </span>
                </div>
              )}
              <div className="p-8 text-center">
                <div className="mb-4">
                  <div className="text-5xl font-extrabold text-linknet-blue mb-2 leading-none">
                    {plan.speed}
                    <span className="text-xl font-bold text-gray-500 ml-1">MEGA</span>
                  </div>
                  <div className="text-lg text-linknet-gray-dark font-medium">{plan.ideal}</div>
                </div>
                <div className={`text-4xl font-bold ${plan.popular ? 'text-linknet-blue' : 'text-linknet-gray-dark'} mb-6`}>
                  {plan.price}
                  <span className="text-xl font-medium text-gray-500">/mês</span>
                </div>
                <ul className="space-y-3 mb-8 text-left text-linknet-gray-dark">
                  {plan.benefits.map((benefit, bIndex) => (
                    <li key={bIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openWhatsApp(plan.speed)}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-md ${
                    plan.popular
                      ? 'bg-linknet-yellow hover:bg-linknet-yellow/90 text-linknet-blue'
                      : 'bg-linknet-blue hover:bg-linknet-blue/90 text-white'
                  }`}
                >
                  Contratar Agora
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, PlusCircle } from 'lucide-react';
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

interface PlanOptions {
  [key: string]: {
    router?: boolean;
    channels?: boolean;
  };
}

const PlanCard = ({ plan, options, onOptionChange, totalPrice, index }: any) => {
  const currentOptions = options[plan.id] || {};

  return (
    <motion.div
      id={plan.id}
      className={`relative bg-white/70 backdrop-blur-md rounded-3xl shadow-xl border transition-all duration-300 hover:shadow-2xl hover:border-linknet-blue flex flex-col h-full ${
        plan.popular ? 'ring-2 ring-linknet-blue border-linknet-blue' : 'border-linknet-gray-medium'
      }`}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      whileHover={{ y: -5 }}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-linknet-blue text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
            Mais Popular
          </span>
        </div>
      )}
      <div className="p-8 text-center flex-grow flex flex-col">
        <div className="mb-4">
          <div className="text-5xl font-extrabold text-linknet-blue mb-2 leading-none">
            {plan.speed}
            <span className="text-xl font-bold text-gray-500 ml-1">MEGA</span>
          </div>
          <div className="text-lg text-linknet-gray-dark font-medium h-12 flex items-center justify-center">{plan.ideal}</div>
        </div>
        
        <ul className="space-y-3 mb-6 text-left text-linknet-gray-dark flex-grow">
          {plan.benefits.map((benefit: string, bIndex: number) => (
            <li key={bIndex} className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="border-t border-gray-200 pt-4 space-y-3 mt-auto">
          <label className="flex items-center cursor-pointer w-full">
            <PlusCircle className="w-4 h-4 mr-2 text-linknet-gray-dark flex-shrink-0" />
            <span className="flex-grow text-sm text-linknet-gray-dark text-left">
              Roteador Adicional
            </span>
            <span className="text-sm font-semibold mr-3 text-linknet-gray-dark">+ R$ 30,00</span>
            <input
              type="checkbox"
              checked={!!currentOptions.router}
              onChange={() => onOptionChange(plan.id, 'router')}
              className="h-5 w-5 rounded border-gray-300 text-linknet-blue focus:ring-linknet-blue"
            />
          </label>
          {!plan.hasChannels && (
            <label className="flex items-center cursor-pointer w-full">
              <PlusCircle className="w-4 h-4 mr-2 text-linknet-gray-dark flex-shrink-0" />
              <span className="flex-grow text-sm text-linknet-gray-dark text-left">
                Pacote de Canais
              </span>
              <span className="text-sm font-semibold mr-3 text-linknet-gray-dark">+ R$ 30,00</span>
              <input
                type="checkbox"
                checked={!!currentOptions.channels}
                onChange={() => onOptionChange(plan.id, 'channels')}
                className="h-5 w-5 rounded border-gray-300 text-linknet-blue focus:ring-linknet-blue"
              />
            </label>
          )}
        </div>
      </div>

      <div className="p-8 pt-4 text-center">
        <div className="text-sm text-gray-600">Valor total</div>
        <div className={`text-4xl font-bold ${plan.popular ? 'text-linknet-blue' : 'text-linknet-gray-dark'} mb-6`}>
          R$ {totalPrice.toFixed(2).replace('.', ',')}
          <span className="text-xl font-medium text-gray-500">/mês</span>
        </div>
        <button
          onClick={() => openWhatsApp({ 
            planSpeed: plan.speed, 
            planIdeal: plan.ideal,
            totalPrice: totalPrice, 
            options: currentOptions 
          })}
          className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-md ${
            plan.popular
              ? 'bg-linknet-blue hover:bg-linknet-blue/90 text-white'
              : 'bg-linknet-yellow hover:bg-linknet-yellow/90 text-linknet-blue'
          }`}
        >
          Contratar Agora
        </button>
      </div>
    </motion.div>
  );
};
  
const PlansSection: React.FC = () => {
  const [options, setOptions] = useState<PlanOptions>({});

  const handleOptionChange = (planId: string, option: 'router' | 'channels') => {
    setOptions(prev => ({
      ...prev,
      [planId]: {
        ...prev[planId],
        [option]: !prev[planId]?.[option],
      },
    }));
  };

  const calculateTotalPrice = (plan: typeof plans[0]) => {
    let total = plan.price;
    const planOptions = options[plan.id] || {};
    if (planOptions.router) total += 30;
    if (planOptions.channels && !plan.hasChannels) total += 30;
    return total;
  };

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              options={options}
              onOptionChange={handleOptionChange}
              totalPrice={calculateTotalPrice(plan)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
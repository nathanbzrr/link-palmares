import React, { useState } from 'react';
import { Wifi, Zap, Shield, Headphones, MapPin, Phone, Mail, Instagram, Facebook, ChevronDown, MessageCircle, Clock, Users, Star, CheckCircle } from 'lucide-react';

function App() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [coverageAddress, setCoverageAddress] = useState('');

  const plans = [
    {
      speed: '300',
      ideal: 'Navegar e Redes Sociais',
      price: 'R$ 79,90',
      popular: false
    },
    {
      speed: '400',
      ideal: 'Streaming e Jogos',
      price: 'R$ 99,90',
      popular: true
    },
    {
      speed: '500',
      ideal: 'Home Office e Família Conectada',
      price: 'R$ 119,90',
      popular: false
    },
    {
      speed: '600',
      ideal: 'Máxima Performance',
      price: 'R$ 139,90',
      popular: false
    }
  ];

  const advantages = [
    {
      icon: <Wifi className="w-12 h-12" />,
      title: 'Conexão 100% Fibra Óptica',
      description: 'Leve a fibra diretamente até sua casa ou empresa, garantindo máxima velocidade e estabilidade.'
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: 'Suporte Técnico Local e Rápido',
      description: 'Problemas? Fale com uma equipe que conhece a região e resolve de verdade.'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Wi-Fi de Alta Performance',
      description: 'Nossos equipamentos garantem a melhor cobertura de sinal em todos os cantos da sua casa.'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Estabilidade para Jogos e Streaming',
      description: 'Jogue online sem lag e assista seus filmes e séries em 4K sem travamentos.'
    }
  ];

  const faqs = [
    {
      question: 'Como funciona a instalação?',
      answer: 'Nossa equipe técnica agenda uma visita gratuita, instala todos os equipamentos necessários e configura sua rede Wi-Fi. Todo o processo é feito sem custo adicional.'
    },
    {
      question: 'Qual a diferença da internet fibra óptica?',
      answer: 'A fibra óptica oferece velocidade simétrica (mesma velocidade para download e upload), maior estabilidade, menor latência e não sofre interferências climáticas como outros tipos de conexão.'
    },
    {
      question: 'Existe fidelidade nos planos?',
      answer: 'Nossos planos têm fidelidade de 12 meses. Após este período, você pode cancelar a qualquer momento sem taxas adicionais.'
    }
  ];

  const scrollToPlans = () => {
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = (planSpeed?: string) => {
    const message = planSpeed 
      ? `Olá! Tenho interesse no plano de ${planSpeed} Mega da Linknet Palmares.`
      : 'Olá! Gostaria de saber mais sobre os planos da Linknet Palmares.';
    
    window.open(`https://wa.me/5551999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  const checkCoverage = () => {
    if (coverageAddress.trim()) {
      const message = `Olá! Gostaria de consultar a disponibilidade da fibra no endereço: ${coverageAddress}`;
      window.open(`https://wa.me/5551999999999?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Wifi className="w-8 h-8 text-orange-500" />
              <span className="text-xl font-bold text-slate-800">Linknet Palmares</span>
            </div>
            <button
              onClick={() => openWhatsApp()}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%2230%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              A ultravelocidade que você sempre quis em 
              <span className="text-orange-400"> Palmares do Sul</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Internet 100% Fibra Óptica com a estabilidade e o suporte que você merece.
            </p>
            <button
              onClick={scrollToPlans}
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Ver Planos
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
              <div className="text-gray-300">Fibra Óptica</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Suporte Local</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">0</div>
              <div className="text-gray-300">Taxa de Instalação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Escolha o plano perfeito para você
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Planos com velocidade de verdade e preços justos para toda família
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular ? 'ring-2 ring-orange-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-slate-800 mb-2">
                      {plan.speed}
                      <span className="text-lg text-gray-500 ml-1">Mega</span>
                    </div>
                    <div className="text-gray-600 mb-4">{plan.ideal}</div>
                    <div className="text-2xl font-bold text-orange-500">{plan.price}<span className="text-sm text-gray-500">/mês</span></div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      Wi-Fi de Alta Performance
                    </div>
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      Instalação Grátis
                    </div>
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      100% Fibra Óptica
                    </div>
                  </div>

                  <button
                    onClick={() => openWhatsApp(plan.speed)}
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-orange-500 hover:bg-orange-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-slate-800'
                    }`}
                  >
                    Contrate Agora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Por que escolher a Linknet Palmares?
            </h2>
            <p className="text-xl text-gray-600">
              Tecnologia de ponta com atendimento humano e local
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="text-center group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300"
              >
                <div className="text-orange-500 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Consulte a disponibilidade no seu endereço
            </h2>
            <p className="text-xl text-gray-600">
              Verifique se nossa fibra já chegou na sua região
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Digite seu endereço completo..."
                  value={coverageAddress}
                  onChange={(e) => setCoverageAddress(e.target.value)}
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
                />
              </div>
              <button
                onClick={checkCoverage}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                Consultar Cobertura
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Dúvidas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Respostas rápidas para suas principais questões
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-slate-800">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      expandedFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Wifi className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold">Linknet Palmares</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Internet 100% fibra óptica em Palmares do Sul. 
                Conectando você ao que mais importa com velocidade e qualidade.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <Phone className="w-5 h-5 mr-3" />
                  (51) 99999-9999
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="w-5 h-5 mr-3" />
                  contato@linknetpalmares.com.br
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-5 h-5 mr-3" />
                  Palmares do Sul, RS
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-orange-500 transition-colors">
                  Área do Cliente
                </a>
                <a href="#" className="block text-gray-400 hover:text-orange-500 transition-colors">
                  Suporte Técnico
                </a>
                <a href="#" className="block text-gray-400 hover:text-orange-500 transition-colors">
                  Teste de Velocidade
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8 text-center">
            <p className="text-gray-400">
              © 2025 Linknet Palmares. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => openWhatsApp()}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}

export default App;
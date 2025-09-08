import { Wifi, Zap, Award, Headphones } from 'lucide-react';

export const plans = [
  { id: 'plan-300', speed: '300', ideal: 'Navegar e Redes Sociais', price: 'R$ 65,00', popular: true, benefits: ['Wi-Fi 6', 'Atendimento digital', 'Instalação grátis', '100% fibra óptica'] },
  { id: 'plan-600', speed: '600', ideal: 'Streaming e Jogos', price: 'R$ 79,90', popular: false, benefits: ['Wi-Fi 6', 'LinknetTV', 'Atendimento digital', 'Instalação grátis', '100% fibra óptica'] },
  { id: 'plan-1000', speed: '1000', ideal: 'Home Office e Família', price: 'R$ 179,90', popular: false, benefits: ['Wi-Fi 6', 'LinknetTV', 'Atendimento digital', 'Instalação grátis', '100% fibra óptica'] },
];

export const advantages = [
  { id: 'adv-fibra', icon: <Wifi className="w-12 h-12" />, title: '100% Fibra Óptica', description: 'Leve a fibra diretamente até sua casa, garantindo máxima velocidade e estabilidade.' },
  { id: 'adv-suporte', icon: <Headphones className="w-12 h-12" />, title: 'Suporte Local e Rápido', description: 'Fale com uma equipe que conhece a região e resolve de verdade.' },
  { id: 'adv-wifi', icon: <Zap className="w-12 h-12" />, title: 'Wi-Fi de Alta Performance', description: 'Nossos equipamentos garantem a melhor cobertura de sinal em todos os cantos da sua casa.' },
  { id: 'adv-tech', icon: <Award className="w-12 h-12" />, title: 'Tecnologia de Ponta', description: 'Utilizamos o que há de mais moderno em equipamentos para sua melhor experiência.' }
];

export const faqs = [
  { id: 'faq-instalacao', question: 'Como funciona a instalação?', answer: 'Nossa equipe técnica agenda uma visita, instala todos os equipamentos e configura sua rede Wi-Fi sem custo adicional.' },
  { id: 'faq-diferenca', question: 'Qual a diferença da internet fibra óptica?', answer: 'A fibra óptica oferece velocidade simétrica, maior estabilidade, menor latência e não sofre interferências climáticas.' },
  { id: 'faq-fidelidade', question: 'Existe fidelidade nos planos?', answer: 'Nossos planos têm fidelidade de 12 meses. Após este período, você pode cancelar a qualquer momento sem taxas.' }
];

export const benefits = [
    { id: 'benefit-streaming', preTitle: 'CONEXÃO E DIVERSÃO', title: 'Veja as melhores histórias no seu streaming do coração', description: 'Com a ultravelocidade Linknet Palmares, seus filmes e séries favoritos rodam sem interrupções em 4K. Prepare a pipoca!', ctaText: 'Assinar Internet + Streaming', ctaLink: '#plans', imageUrl: 'https://res.cloudinary.com/dtuacdvn6/image/upload/v1756932256/pexels-olly-3794188_txchir.jpg' },
    { id: 'benefit-work', preTitle: 'TRABALHE E ESTUDE SEM LIMITES', title: 'Produtividade e aprendizado na velocidade da fibra', description: 'Videochamadas sem travas, downloads instantâneos e acesso a plataformas de ensino. A Linknet Palmares te impulsiona.', ctaText: 'Planos para Home Office', ctaLink: '#plans', imageUrl: 'https://res.cloudinary.com/dtuacdvn6/image/upload/v1756932247/pexels-olly-925786_xl1lzv.jpg' },
    { id: 'benefit-gaming', preTitle: 'JOGUE SEM LAG', title: 'Domine suas partidas online com baixa latência', description: 'Aproveite a estabilidade da nossa fibra para uma experiência de jogo fluida e sem atrasos. Sua vitória começa aqui.', ctaText: 'Conheça Planos Gamer', ctaLink: '#plans', imageUrl: 'https://res.cloudinary.com/dtuacdvn6/image/upload/v1756932241/pexels-a-darmel-7862360_kxkwdy.jpg' },
];
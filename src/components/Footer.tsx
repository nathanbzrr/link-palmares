import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-linknet-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
               <img src="https://res.cloudinary.com/dtuacdvn6/image/upload/v1756930974/image_2025-09-03_172251868_oo34w5.png" alt="Linknet Palmares Logo" className="h-10 w-auto" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md font-light">
              Internet 100% fibra óptica em Palmares - PE. Conectando você ao que mais importa com velocidade e qualidade.
            </p>
            <div className="flex space-x-5">
              <a href="https://www.instagram.com/linknetpalmares/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-linknet-yellow transition-colors duration-200">
                <Instagram className="w-7 h-7" />
              </a>
              <a href="https://www.facebook.com/linknetpalmares" target="_blank" rel="noopener noreferrer" className="text-white hover:text-linknet-yellow transition-colors duration-200">
                <Facebook className="w-7 h-7" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start text-white text-lg">
                <Phone className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                <a href={`tel:+558136612630`} className="hover:text-linknet-yellow transition-colors">(81) 3661-2630</a>
              </div>
              <div className="flex items-start text-white text-lg">
                <Mail className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                <a href="mailto:linknetpalmares@gmail.com" className="hover:text-linknet-yellow transition-colors">linknetpalmares@gmail.com</a>
              </div>
              <div className="flex items-start text-white text-lg">
                <MapPin className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                <span>Avenida Estácio Coimbra, 28, Centro, Palmares, PE - CEP 55540000</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Links Úteis</h3>
            <div className="space-y-4 text-lg">
              <a 
                href="https://linknetpe.sgp.net.br/accounts/central/login" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-white hover:text-linknet-yellow transition-colors"
              >
                Área do Cliente
              </a>
              <a href="#" className="block text-white hover:text-linknet-yellow transition-colors">
                Suporte Técnico
              </a>
              <a 
                href="https://www.speedtest.net/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-white hover:text-linknet-yellow transition-colors"
              >
                Teste de Velocidade
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-500/50 pt-10 mt-12 text-center">
          <p className="text-white text-md font-light">
            © 2025 Linknet Palmares. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
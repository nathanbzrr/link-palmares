interface WhatsAppDetails {
  planSpeed?: string;
  planIdeal?: string;
  totalPrice?: number;
  options?: {
    router?: boolean;
    channels?: boolean;
  };
}

export const openWhatsApp = (details: WhatsAppDetails = {}) => {
  const { planSpeed, planIdeal, totalPrice, options } = details;
  
  let message = 'Olá! Gostaria de saber mais sobre os planos da Linknet Palmares.';

  if (planSpeed) {
    message = `Olá! Tenho interesse no plano de ${planSpeed} Mega (${planIdeal}) da Linknet Palmares.`;
    
    const additions = [];
    if (options?.router) {
      additions.push('Roteador Adicional');
    }
    if (options?.channels) {
      additions.push('Pacote de Canais');
    }

    if (additions.length > 0) {
      message += `\n\nAdicionais: ${additions.join(', ')}.`;
    }

    if (totalPrice) {
      message += `\n\nValor total: R$ ${totalPrice.toFixed(2).replace('.', ',')}.`;
    }
  }
  
  window.open(`https://wa.me/558136612630?text=${encodeURIComponent(message)}`, '_blank');
};
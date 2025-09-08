export const openWhatsApp = (planSpeed?: string) => {
  const message = planSpeed
    ? `Olá! Tenho interesse no plano de ${planSpeed} Mega da Linknet Palmares.`
    : 'Olá! Gostaria de saber mais sobre os planos da Linknet Palmares.';
  
  window.open(`https://wa.me/558136612630?text=${encodeURIComponent(message)}`, '_blank');
};
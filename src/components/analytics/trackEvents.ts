"use client";
import { event } from './GoogleAnalytics';

// Eventos predefinidos para el sitio
export const trackEvents = {
  // Contacto y conversiones
  whatsappClick: (source: string) => {
    event({
      action: 'click',
      category: 'contact',
      label: `whatsapp_${source}`,
    });
  },

  // Redes sociales
  socialClick: (platform: string, location: string) => {
    event({
      action: 'click',
      category: 'social',
      label: `${platform}_${location}`,
    });
  },

  // Navegación de servicios
  serviceView: (serviceName: string) => {
    event({
      action: 'view',
      category: 'service',
      label: serviceName,
    });
  },

  serviceClick: (serviceName: string, source: string) => {
    event({
      action: 'click',
      category: 'service',
      label: `${serviceName}_${source}`,
    });
  },

  // Enlaces de navegación
  navigationClick: (linkName: string, section: string) => {
    event({
      action: 'click',
      category: 'navigation',
      label: `${linkName}_${section}`,
    });
  },

  // Interacciones con componentes
  beforeAfterInteraction: () => {
    event({
      action: 'interact',
      category: 'engagement',
      label: 'before_after_slider',
    });
  },

  // Descargas o acciones importantes
  phoneClick: () => {
    event({
      action: 'click',
      category: 'contact',
      label: 'phone_number',
    });
  },

  emailClick: () => {
    event({
      action: 'click',
      category: 'contact',
      label: 'email_address',
    });
  },

  // Navegación del footer
  footerLinkClick: (linkName: string) => {
    event({
      action: 'click',
      category: 'navigation',
      label: `footer_${linkName}`,
    });
  },

  // Scroll tracking (opcional)
  scrollDepth: (percentage: number) => {
    event({
      action: 'scroll',
      category: 'engagement',
      label: `${percentage}%`,
      value: percentage,
    });
  },

  // Cookies
  cookiesAccepted: () => {
    event({
      action: 'accept',
      category: 'privacy',
      label: 'cookies_accepted',
    });
  },

  cookiesRejected: () => {
    event({
      action: 'reject',
      category: 'privacy',
      label: 'cookies_rejected',
    });
  },
};

export default trackEvents;
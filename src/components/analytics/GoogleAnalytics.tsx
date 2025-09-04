"use client";
import { useEffect } from 'react';
import Script from 'next/script';

// Configuración de Google Analytics
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
const GA_DEBUG = process.env.NEXT_PUBLIC_GA_DEBUG === 'true';
const ANALYTICS_ENABLED = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true';

// Función para enviar eventos a GA
export const gtag = (...args: any[]) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag(...args);
  }
};

// Función para reportar páginas vistas
export const pageview = (url: string) => {
  gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Función para reportar eventos personalizados
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Componente de Google Analytics
export function GoogleAnalytics() {
  useEffect(() => {
    // Configurar GA cuando el componente se monta
    if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      gtag('config', GA_MEASUREMENT_ID, {
        page_path: window.location.pathname,
      });
    }
  }, []);

  // No renderizar en desarrollo a menos que se especifique
  if (process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_GA_DEBUG) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

// Hook para trackear cambios de página
export function usePageTracking() {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };

    // Si estás usando App Router, puedes trackear cambios manualmente
    // o usar eventos del router según sea necesario
    
    return () => {
      // Cleanup si es necesario
    };
  }, []);
}

export default GoogleAnalytics;
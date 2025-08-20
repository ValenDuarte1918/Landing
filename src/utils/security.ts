/**
 * Utilidades de seguridad para la aplicación
 */

// URLs permitidas para redirección
const ALLOWED_DOMAINS = [
  'wa.link',
  'api.whatsapp.com',
  'whatsapp.com',
  'instagram.com',
  'www.instagram.com'
];

/**
 * Valida si una URL es segura para redirección
 * @param url - URL a validar
 * @returns boolean - true si es segura
 */
export function isValidUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    
    // Verificar que el protocolo sea HTTPS
    if (urlObj.protocol !== 'https:') {
      return false;
    }
    
    // Verificar que el dominio esté en la lista permitida
    const isAllowedDomain = ALLOWED_DOMAINS.some(domain => 
      urlObj.hostname === domain || urlObj.hostname.endsWith(`.${domain}`)
    );
    
    return isAllowedDomain;
  } catch {
    return false;
  }
}

/**
 * Sanitiza una cadena de texto para prevenir XSS
 * @param input - Texto a sanitizar
 * @returns string - Texto sanitizado
 */
export function sanitizeText(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remover < y >
    .replace(/javascript:/gi, '') // Remover javascript:
    .replace(/on\w+=/gi, '') // Remover event handlers
    .trim();
}

/**
 * Función segura para abrir URLs externas
 * @param url - URL a abrir
 * @param target - Target del enlace (por defecto '_blank')
 */
export function safeOpenUrl(url: string, target: string = '_blank'): void {
  if (!isValidUrl(url)) {
    console.warn('URL no válida o no permitida:', url);
    return;
  }
  
  const link = document.createElement('a');
  link.href = url;
  link.target = target;
  link.rel = 'noopener noreferrer'; // Prevenir window.opener attacks
  link.click();
}

/**
 * Configuración de Rate Limiting (para futuras implementaciones)
 */
export const RATE_LIMITS = {
  CONTACT_FORM: {
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 5 // máximo 5 envíos por ventana
  },
  WHATSAPP_CLICKS: {
    windowMs: 60 * 1000, // 1 minuto
    max: 10 // máximo 10 clicks por minuto
  }
};

/**
 * Headers de seguridad recomendados
 */
export const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
};

/**
 * Validador de formularios
 * @param data - Datos del formulario
 * @returns object - Resultado de validación
 */
export function validateFormData(data: Record<string, any>) {
  const errors: string[] = [];
  
  // Validar campos requeridos
  const requiredFields = ['name', 'email', 'message'];
  requiredFields.forEach(field => {
    if (!data[field] || typeof data[field] !== 'string' || data[field].trim().length === 0) {
      errors.push(`El campo ${field} es requerido`);
    }
  });
  
  // Validar email
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Email no válido');
  }
  
  // Validar longitud de mensaje
  if (data.message && data.message.length > 1000) {
    errors.push('El mensaje es demasiado largo');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

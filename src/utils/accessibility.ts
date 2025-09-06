/**
 * Utilidades para mejorar la accesibilidad del sitio web
 */

// Tipos para accesibilidad
export interface AriaAttributes {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
  'aria-hidden'?: boolean;
  'aria-controls'?: string;
  'aria-current'?: 'page' | 'step' | 'location' | 'date' | 'time' | 'true' | 'false';
  'aria-live'?: 'polite' | 'assertive' | 'off';
  'aria-atomic'?: boolean;
  role?: string;
  tabIndex?: number;
}

/**
 * Clase para manejar focus trapping en modales/menús
 */
export class FocusTrap {
  private container: HTMLElement;
  private focusableElements: HTMLElement[] = [];
  private firstFocusableElement: HTMLElement | null = null;
  private lastFocusableElement: HTMLElement | null = null;
  private isActive: boolean = false;

  constructor(container: HTMLElement) {
    this.container = container;
    this.updateFocusableElements();
  }

  private updateFocusableElements() {
    const focusableSelector = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ].join(',');

    this.focusableElements = Array.from(
      this.container.querySelectorAll(focusableSelector)
    ) as HTMLElement[];

    this.firstFocusableElement = this.focusableElements[0] || null;
    this.lastFocusableElement = this.focusableElements[this.focusableElements.length - 1] || null;
  }

  public activate() {
    if (this.isActive) return;
    
    this.isActive = true;
    this.container.addEventListener('keydown', this.handleKeyDown);
    
    // Focus en el primer elemento
    if (this.firstFocusableElement) {
      this.firstFocusableElement.focus();
    }
  }

  public deactivate() {
    if (!this.isActive) return;
    
    this.isActive = false;
    this.container.removeEventListener('keydown', this.handleKeyDown);
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key !== 'Tab') return;

    if (event.shiftKey) {
      // Shift + Tab
      if (document.activeElement === this.firstFocusableElement) {
        event.preventDefault();
        this.lastFocusableElement?.focus();
      }
    } else {
      // Tab
      if (document.activeElement === this.lastFocusableElement) {
        event.preventDefault();
        this.firstFocusableElement?.focus();
      }
    }
  };
}

/**
 * Anuncia mensajes a lectores de pantalla
 */
export const announceToScreenReader = (
  message: string,
  priority: 'polite' | 'assertive' = 'polite'
) => {
  const announcer = document.createElement('div');
  announcer.setAttribute('aria-live', priority);
  announcer.setAttribute('aria-atomic', 'true');
  announcer.className = 'sr-only';
  announcer.textContent = message;
  
  document.body.appendChild(announcer);
  
  // Remover después de que el mensaje sea anunciado
  setTimeout(() => {
    document.body.removeChild(announcer);
  }, 1000);
};

/**
 * Verifica si el usuario prefiere movimiento reducido
 */
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Maneja el scroll suave con respeto a las preferencias de accesibilidad
 */
export const scrollToElement = (
  element: HTMLElement | null, 
  options: ScrollIntoViewOptions = {}
) => {
  if (!element) return;
  
  const scrollOptions: ScrollIntoViewOptions = {
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
    inline: 'nearest',
    ...options
  };
  
  element.scrollIntoView(scrollOptions);
  
  // Enfocar el elemento para lectores de pantalla
  element.focus({ preventScroll: true });
};

/**
 * Crea un ID único para elementos
 */
export const generateUniqueId = (prefix: string = 'element'): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Valida contraste de colores (simplificado)
 */
export const getContrastRatio = (foreground: string, background: string): number => {
  // Implementación básica - en producción usar una librería completa
  const getLuminance = (color: string): number => {
    // Convertir color hex a RGB y calcular luminancia
    // Esta es una implementación simplificada
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16) / 255;
    const g = parseInt(hex.substr(2, 2), 16) / 255;
    const b = parseInt(hex.substr(4, 2), 16) / 255;
    
    const [rs, gs, bs] = [r, g, b].map(c => 
      c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    );
    
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };
  
  const l1 = getLuminance(foreground);
  const l2 = getLuminance(background);
  
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  
  return (lighter + 0.05) / (darker + 0.05);
};

/**
 * Verifica si el contraste cumple con WCAG AA
 */
export const isAccessibleContrast = (
  foreground: string, 
  background: string, 
  largeText: boolean = false
): boolean => {
  const ratio = getContrastRatio(foreground, background);
  return largeText ? ratio >= 3 : ratio >= 4.5;
};

/**
 * Hook para detectar navegación por teclado
 */
export const detectKeyboardNavigation = () => {
  let isKeyboardUser = false;
  
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      isKeyboardUser = true;
      document.body.classList.add('keyboard-user');
      document.removeEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);
    }
  };
  
  const handleMouseDown = () => {
    isKeyboardUser = false;
    document.body.classList.remove('keyboard-user');
    document.removeEventListener('mousedown', handleMouseDown);
    document.addEventListener('keydown', handleKeyDown);
  };
  
  document.addEventListener('keydown', handleKeyDown);
  
  return () => {
    document.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('mousedown', handleMouseDown);
  };
};

/**
 * Configuración de atributos ARIA comunes
 */
export const createAriaProps = (config: AriaAttributes): AriaAttributes => {
  return Object.fromEntries(
    Object.entries(config).filter(([_, value]) => value !== undefined)
  );
};

/**
 * Verificar si el elemento está en el viewport
 */
export const isElementInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Manejar announcements para cambios de ruta (SPA)
 */
export const announceRouteChange = (routeName: string) => {
  announceToScreenReader(`Navegado a ${routeName}`, 'assertive');
};

/**
 * Configurar skip links dinámicamente
 */
export interface SkipLink {
  id: string;
  label: string;
  target: string;
}

export const createSkipLinks = (links: SkipLink[]): HTMLElement => {
  const nav = document.createElement('nav');
  nav.setAttribute('aria-label', 'Enlaces de navegación rápida');
  nav.className = 'skip-links';
  
  const list = document.createElement('ul');
  
  links.forEach(link => {
    const item = document.createElement('li');
    const anchor = document.createElement('a');
    
    anchor.href = `#${link.target}`;
    anchor.textContent = link.label;
    anchor.className = 'skip-link';
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(link.target);
      if (target) {
        scrollToElement(target);
      }
    });
    
    item.appendChild(anchor);
    list.appendChild(item);
  });
  
  nav.appendChild(list);
  return nav;
};
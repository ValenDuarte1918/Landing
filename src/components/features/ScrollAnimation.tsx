'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'flip-up' | 'slide-up';
  delay?: number;
  duration?: number;
  offset?: number;
  once?: boolean;
}

const ScrollAnimation = ({ 
  children, 
  animation = 'fade-up',
  delay = 0,
  duration = 800,
  offset = 100,
  once = true 
}: ScrollAnimationProps) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: 'ease-in-out-cubic',
      once: true,
      mirror: false,
    });

    // Refresh AOS on route changes
    AOS.refresh();

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div
      data-aos={animation}
      data-aos-delay={delay}
      data-aos-duration={duration}
      data-aos-offset={offset}
      data-aos-once={once}
    >
      {children}
    </div>
  );
};

// Hook para smooth scroll personalizado
export const useSmoothScroll = () => {
  const scrollToSection = (elementId: string, offset: number = 80) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return { scrollToSection };
};

// Componente para navegación suave
export const SmoothScrollLink = ({ 
  href, 
  children, 
  className = '',
  offset = 80 
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  offset?: number;
}) => {
  const { scrollToSection } = useSmoothScroll();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const elementId = href.startsWith('#') ? href.slice(1) : href;
    scrollToSection(elementId, offset);
  };

  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default ScrollAnimation;

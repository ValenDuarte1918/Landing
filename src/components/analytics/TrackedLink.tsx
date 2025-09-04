"use client";
import Link from 'next/link';
import { trackEvents } from '../analytics/trackEvents';
import { ReactNode } from 'react';

interface TrackedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  trackingLabel: string;
  trackingCategory?: string;
  target?: string;
  rel?: string;
}

export function TrackedLink({ 
  href, 
  children, 
  className, 
  trackingLabel, 
  trackingCategory = 'navigation',
  ...props 
}: TrackedLinkProps) {
  
  const handleClick = () => {
    // Track el click
    if (trackingCategory === 'service') {
      trackEvents.serviceClick(trackingLabel, 'homepage');
    } else if (trackingCategory === 'social') {
      trackEvents.socialClick(trackingLabel, 'footer');
    } else {
      trackEvents.navigationClick(trackingLabel, trackingCategory);
    }
  };

  // Si es un enlace externo, usar <a>
  if (href.startsWith('http')) {
    return (
      <a
        href={href}
        className={className}
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Si es interno, usar Link de Next.js
  return (
    <Link 
      href={href} 
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
}

export default TrackedLink;

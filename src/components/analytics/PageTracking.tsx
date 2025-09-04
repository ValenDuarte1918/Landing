"use client";
import { useEffect } from 'react';
import { trackEvents } from './trackEvents';

interface PageTrackingProps {
  pageName: string;
  category?: string;
}

export function PageTracking({ pageName, category = 'page' }: PageTrackingProps) {
  useEffect(() => {
    // Track page view cuando el componente se monta
    trackEvents.serviceView(pageName);
  }, [pageName]);

  return null; // No renderiza nada visible
}

export default PageTracking;

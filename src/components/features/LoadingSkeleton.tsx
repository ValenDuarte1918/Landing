'use client';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface LoadingSkeletonProps {
  type?: 'hero' | 'card' | 'gallery' | 'stats';
  count?: number;
}

const LoadingSkeleton = ({ type = 'card', count = 1 }: LoadingSkeletonProps) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'hero':
        return (
          <div className="py-20">
            <div className="container mx-auto px-4 text-center">
              <Skeleton height={60} width="70%" className="mb-6" />
              <Skeleton height={24} width="50%" className="mb-8" />
              <div className="flex justify-center gap-4">
                <Skeleton height={48} width={150} />
                <Skeleton height={48} width={150} />
              </div>
            </div>
          </div>
        );

      case 'gallery':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: count }).map((_, index) => (
              <div key={index} className="bg-gray-800/50 rounded-2xl overflow-hidden">
                <Skeleton height={200} />
                <div className="p-4">
                  <Skeleton height={20} width="80%" className="mb-2" />
                  <Skeleton height={16} width="60%" />
                </div>
              </div>
            ))}
          </div>
        );

      case 'stats':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="text-center bg-gray-800/50 rounded-2xl p-8">
                <Skeleton height={48} width={80} className="mb-4 mx-auto" />
                <Skeleton height={20} width="70%" className="mx-auto" />
              </div>
            ))}
          </div>
        );

      default: // card
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.from({ length: count }).map((_, index) => (
              <div key={index} className="bg-gray-800/50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Skeleton circle height={64} width={64} className="mr-4" />
                  <div className="flex-1">
                    <Skeleton height={24} width="60%" className="mb-2" />
                    <Skeleton height={16} width="80%" />
                  </div>
                </div>
                <Skeleton count={3} height={16} className="mb-2" />
                <Skeleton height={40} width={120} className="mt-4" />
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <SkeletonTheme
      baseColor="#1f2937"
      highlightColor="#374151"
      borderRadius={12}
    >
      {renderSkeleton()}
    </SkeletonTheme>
  );
};

export default LoadingSkeleton;

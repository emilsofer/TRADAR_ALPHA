
import React from 'react';

export function Logo({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg', className?: string }) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
  };
  
  return (
    <div className={`${className}`}>
      <img 
        src="/lovable-uploads/898d3dbd-0579-4517-aba6-413bdc3deb30.png" 
        alt="TRADAR" 
        className={`${sizeClasses[size]} rounded-full`}
      />
    </div>
  );
}

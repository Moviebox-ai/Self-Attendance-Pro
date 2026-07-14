import React from 'react';

export function PhoneMockup({ 
  src, 
  alt, 
  className = "" 
}: { 
  src: string; 
  alt: string; 
  className?: string;
}) {
  return (
    <div className={`relative mx-auto rounded-[2.5rem] border-[8px] border-secondary bg-black shadow-2xl overflow-hidden ring-1 ring-white/20 aspect-[9/19.5] w-[260px] md:w-[280px] lg:w-[300px] shrink-0 ${className}`}>
      {/* Notch */}
      <div className="absolute top-0 inset-x-0 h-6 bg-secondary rounded-b-2xl w-[120px] mx-auto z-20 flex justify-center items-end pb-1.5">
        <div className="w-12 h-1.5 rounded-full bg-white/10" />
      </div>
      
      {/* Content Image */}
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-contain bg-black z-10 relative" 
        loading="lazy"
      />
      
      {/* Screen Glare/Shine */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none z-30" />
    </div>
  );
}

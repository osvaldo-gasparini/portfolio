import React, { useEffect, useRef } from 'react';

const SaturnAnimation: React.FC = () => {
  const saturnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saturn = saturnRef.current;
    if (!saturn) return;

    let animationId: number;
    let rotation = 0;

    const animate = () => {
      rotation += 0.2;
      if (saturn) {
        saturn.style.transform = `rotate(${rotation}deg)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="fixed top-1/4 right-1/4 w-96 h-96 opacity-5 pointer-events-none z-0">
      <div ref={saturnRef} className="relative w-full h-full">
        {/* Saturn body */}
        <div className="absolute top-1/2 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-amber-100/30 to-orange-200/20 rounded-full shadow-inner"></div>
        
        {/* Saturn rings */}
        <div className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 border border-gray-300/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 border border-gray-300/15 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-56 h-56 -translate-x-1/2 -translate-y-1/2 border border-gray-300/10 rounded-full"></div>
      </div>
    </div>
  );
};

export default SaturnAnimation;
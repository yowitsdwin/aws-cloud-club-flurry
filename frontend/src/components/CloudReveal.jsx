import React, { useState, useEffect, useRef } from 'react';

const CloudReveal = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] w-full ${isVisible
          ? 'opacity-100 blur-0 translate-y-0 scale-100'
          : 'opacity-0 blur-[2px] translate-y-[20px] scale-[0.99]'
        }`}
    >
      {children}
    </div>
  );
};

export default CloudReveal;

import React, { useState, useEffect } from 'react';

const PageLoadReveal = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] w-full ${isLoaded
          ? 'opacity-100 blur-0 translate-y-0 scale-100'
          : 'opacity-0 blur-[2px] translate-y-[15px] scale-[0.99]'
        }`}
    >
      {children}
    </div>
  );
};

export default PageLoadReveal;

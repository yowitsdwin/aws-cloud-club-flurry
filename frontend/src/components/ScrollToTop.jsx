import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-[100] w-12 h-12 rounded-full bg-primary-dark text-white flex items-center justify-center shadow-[0_4px_14px_rgba(47,112,186,0.4)] transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(47,112,186,0.6)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px] pointer-events-none'
        }`}
      aria-label="Scroll to top"
    >
      <i className="fa-solid fa-chevron-up text-lg"></i>
    </button>
  );
};

export default ScrollToTop;

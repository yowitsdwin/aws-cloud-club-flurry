import React, { useState, useEffect } from 'react';
const logo = '/images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-[20px] left-1/2 -translate-x-1/2 w-[90%] max-w-[1000px] z-[1000]">
      <nav
        className="flex justify-between items-center px-6 py-3 rounded-[100px] border border-white/30 backdrop-blur-[16px] shadow-premium bg-[rgba(240,249,255,0.7)] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
      >

        <div className="flex items-center gap-3 font-semibold text-[0.9em] tracking-[-0.01em]">
          <img src={logo} alt="AWSCC Logo" className="h-[40px] w-auto object-contain" />
          <span className="text-text-main">AWSCC - Flurry</span>
        </div>

        <ul className="hidden md:flex list-none gap-8 items-center">
          {['Home', 'About Us', 'Events', 'Leaderboard', 'Blog'].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-text-main text-[0.95rem] font-medium transition-colors duration-200 hover:text-text-muted"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button className="hidden md:block bg-primary-dark text-white px-[32px] py-[14px] rounded-[10px] text-[0.95rem] font-medium leading-[normal] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
            Verify
          </button>

          <button
            className="md:hidden text-[1.5rem] text-text-main p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>

        <div
          className={`absolute top-[80px] left-1/2 -translate-x-1/2 w-[92%] bg-[rgba(240,249,255,0.9)] backdrop-blur-[24px] border border-black/5 rounded-[28px] p-4 shadow-[0_20px_40px_rgba(0,0,0,0.1)] z-[1001] md:hidden flex-col gap-2
      ${isMenuOpen ? 'flex animate-[slideIn_0.3s_cubic-bezier(0.4,0,0.2,1)]' : 'hidden'}`}
        >
          <ul className="flex flex-col gap-2 w-full">
            {['Home', 'About Us', 'Events', 'Leaderboard', 'Blog'].map((item, index) => (
              <li
                key={item}
                className={isMenuOpen ? "opacity-0 translate-y-2.5 animate-[staggerIn_0.4s_cubic-bezier(0.4,0,0.2,1)_forwards]" : "opacity-0"}
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <a
                  href="#"
                  className="block text-center py-[14px] px-[20px] rounded-[16px] font-semibold text-text-main transition-all duration-200 ease-out hover:bg-[#ff6b501a] hover:text-primary hover:scale-[0.98]"
                >
                  {item}
                </a>
              </li>
            ))}

            <li
              className={`px-[20px] py-[10px] ${isMenuOpen ? "opacity-0 translate-y-2.5 animate-[staggerIn_0.4s_cubic-bezier(0.4,0,0.2,1)_forwards]" : "opacity-0"}`}
              style={{ animationDelay: '0.35s' }}
            >
              <button className="w-full bg-primary-dark text-white py-[14px] rounded-[10px] font-medium leading-[normal] transition-all hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                Verify
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <style dangerouslySetInnerHTML={{
        __html: `
      @keyframes slideIn {
        from { opacity: 0; transform: translate(-50%, -10px); }
        to { opacity: 1; transform: translate(-50%, 0); }
      }
      @keyframes staggerIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `
      }} />
    </header>

  );
};

export default Navbar;

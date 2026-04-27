import React from 'react';

const Partners = () => {
  const partners = [
    "AWS Cloud Club - NU",
    "AWS Cloud Club - SWU",
    "AWS Cloud Club - UP",
    "AWS Cloud Club - WILDQUACC",
    "AWS Cloud Club - UC",
    "AWS Cloud Club - CTU",
    "AWS Cloud Club - User Group"
  ];

  return (
    <section className="sticky top-[200px] z-[2] py-[40px] lg:py-[60px] overflow-hidden" style={{ background: 'rgba(255,255,255,0.45)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderTop: '1px solid rgba(255,255,255,0.7)', borderBottom: '1px solid rgba(255,255,255,0.7)', boxShadow: '0 4px 30px rgba(37,119,212,0.06)' }}>
      <div className="max-w-[1100px] mx-auto px-6">
        <p className="text-center text-[0.8rem] lg:text-[0.9rem] font-semibold uppercase tracking-[0.1em] text-text-muted mb-5 lg:mb-10">
          Our Community Partners
        </p>
        
        <div className="w-full overflow-hidden relative">
          <div className="flex w-max gap-[40px] lg:gap-[80px] animate-[scroll_20s_linear_infinite] lg:animate-[scroll_30s_linear_infinite]">
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="text-[0.85rem] lg:text-[1.25rem] font-bold text-[#0d2845] opacity-60 whitespace-nowrap flex items-center hover:opacity-100 hover:scale-105 transition-all duration-300">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 40px)); }
        }
      `}} />
    </section>
  );
};

export default Partners;

import React, { useState } from 'react';
import MembershipModal from './MembershipModal';
const mascot = '/images/mascot1.svg';

const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative z-[6] px-6 pb-24 pt-10">
      <section
        className="relative rounded-[24px] overflow-hidden mx-auto mt-8 md:mt-0 shadow-[0_20px_60px_rgba(37,119,212,0.2)]"
        style={{
          background: 'linear-gradient(135deg, #1a4fa8 0%, #2577d4 35%, #0ea5e9 65%, #7c3aed 100%)',
          backgroundSize: '300% 300%',
          animation: 'shimmer-bg 8s ease infinite',
        }}
      >
        {/* Cloud puff decorations */}
        <div className="absolute top-[-30px] left-[-40px] w-[220px] h-[100px] opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, white 0%, transparent 70%)', filter: 'blur(20px)' }} />
        <div className="absolute bottom-[-20px] right-[10%] w-[180px] h-[80px] opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, white 0%, transparent 70%)', filter: 'blur(18px)' }} />
        <div className="absolute top-[30%] right-[35%] w-[120px] h-[60px] opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, white 0%, transparent 70%)', filter: 'blur(14px)' }} />

        {/* Shimmer overlay */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%, rgba(255,255,255,0.04) 100%)' }} />

        <div className="max-w-[1000px] mx-auto text-white flex flex-col-reverse md:flex-row justify-between items-stretch gap-0 md:gap-10">

          {/* Text side */}
          <div className="flex-1 flex flex-col justify-center relative z-[2] leading-[1.1] px-8 pt-0 pb-12 max-[450px]:px-5 max-[450px]:pb-10 md:px-8 md:py-[70px]">
            <span className="inline-block text-[0.75rem] font-bold tracking-[0.15em] uppercase mb-4 px-3 py-1 rounded-full w-fit"
              style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)' }}>
              ☁️ Get Started Today
            </span>
            <h2 className="text-[clamp(2.2rem,5vw,3.2rem)] font-extrabold leading-[1.15] mb-5 text-white">
              Ready to Build<br />the Future?
            </h2>
            <p className="text-[1.1rem] mb-10 leading-[1.6]" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Join AWS Cloud Club Flurry today and accelerate your cloud journey with hands-on experience.
            </p>
            <div className="flex gap-4 flex-wrap justify-center md:justify-start max-[450px]:flex-col">
              <button
                className="btn-glow px-[32px] py-[12px] rounded-[10px] text-[0.95rem] font-semibold transition-all cursor-pointer"
                style={{ background: 'rgba(255,255,255,1)', color: '#1a4fa8', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
                onClick={() => setIsModalOpen(true)}
              >
                Become a Member
              </button>
              <button
                className="px-[32px] py-[12px] rounded-[10px] text-[0.9rem] font-medium transition-all cursor-pointer hover:-translate-y-[2px]"
                style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.35)', color: 'white' }}
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Mascot side */}
          <div className="relative flex justify-center items-end flex-none w-full h-[240px] md:w-[320px] md:h-auto overflow-hidden md:overflow-visible pr-0 md:pr-8">
            <img
              src={mascot}
              alt="Mascot"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180px] md:w-[300px] max-w-[70%] md:max-w-none h-auto z-[1] pointer-events-none"
              style={{ animation: 'mascot-float 3.5s ease-in-out infinite', filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.3))' }}
            />
          </div>

        </div>
      </section>

      {/* Membership application modal */}
      <MembershipModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default CTA;

import React, { useEffect, useRef } from 'react';
const mascot = '/images/mascot2.svg';

// Deterministic star positions so they don't change on re-render
const STARS = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  top: `${((i * 37 + 11) % 90) + 2}%`,
  left: `${((i * 61 + 7) % 95) + 1}%`,
  size: 2 + (i % 3),
  dur: `${2.5 + (i % 4) * 0.7}s`,
  delay: `${-(i * 0.4 % 4)}s`,
}));

const Hero = () => {
  const sectionRef = useRef(null);

  // Subtle mouse parallax on hero clouds
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const handleMouse = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      const blob = section.querySelector('[data-hero-blob]');
      if (blob) blob.style.transform = `translate(calc(-50% + ${dx * 18}px), ${dy * 12}px)`;
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-[140px] pb-[80px] lg:pt-[180px] lg:pb-[120px] px-6 flex flex-col items-center text-center"
    >
      {/* Sky glow orb — top centre */}
      <div
        data-hero-blob
        className="absolute -top-[120px] left-1/2 -translate-x-1/2 w-[700px] h-[420px] pointer-events-none z-0 transition-transform duration-200 ease-out"
        style={{
          background: 'radial-gradient(ellipse, rgba(147,210,255,0.55) 0%, rgba(200,235,255,0.25) 45%, transparent 75%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Secondary warm glow — bottom right */}
      <div className="absolute bottom-0 right-[-5%] w-[500px] h-[300px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse, rgba(186,220,255,0.4) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Star particles */}
      {STARS.map((s) => (
        <span
          key={s.id}
          className="star absolute rounded-full"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            '--dur': s.dur,
            '--delay': s.delay,
            background: 'rgba(180, 220, 255, 0.9)',
          }}
        />
      ))}

      {/* Floating cloud puffs inside hero */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute w-[520px] h-[180px] top-[8%] -left-[8%] opacity-50"
          style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.75) 0%, transparent 70%)', filter: 'blur(35px)', animation: 'drift-horizontal 70s ease-in-out infinite' }} />
        <div className="absolute w-[680px] h-[220px] top-[45%] left-[18%] opacity-30"
          style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.7) 0%, transparent 70%)', filter: 'blur(50px)', animation: 'drift-horizontal 90s ease-in-out infinite reverse' }} />
        <div className="absolute w-[400px] h-[160px] top-[65%] left-[62%] opacity-40"
          style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.75) 0%, transparent 70%)', filter: 'blur(30px)', animation: 'drift-horizontal 55s ease-in-out infinite' }} />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center max-w-[1000px] w-full">
        <div className="relative w-full flex flex-col items-start text-left min-[640px]:items-center min-[640px]:text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[0.8rem] font-semibold tracking-wide mb-6 min-[640px]:mx-auto"
            style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(147,210,255,0.5)', color: '#1a60b8', boxShadow: '0 2px 12px rgba(37,119,212,0.1)' }}>
            ☁️ AWS Cloud Club · Flurry Chapter
          </div>

          <h1 className="font-extrabold leading-[1.1] mb-5 tracking-[-0.04em] text-text-main text-[2.4rem] mt-2 lg:text-[4.2rem] lg:mt-0"
            style={{ textShadow: '0 2px 20px rgba(37,119,212,0.08)' }}>
            It&apos;s Always Day{" "}
            <span className="relative inline-block">
              <img
                src={mascot}
                alt="Mascot"
                className="absolute object-contain z-0 bottom-[2px] right-[-5px] h-[70px] w-auto lg:h-[140px] lg:right-[0] lg:bottom-[5px] pointer-events-none"
                style={{ animation: 'mascot-float 4s ease-in-out infinite' }}
              />
              {/* Gradient "One" text — only "n" is in front of the dragon */}
              <span style={{ background: 'linear-gradient(135deg, #1a60b8 0%, #38bdf8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                O<span className="relative z-10" style={{ background: 'linear-gradient(135deg, #1a60b8 0%, #38bdf8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>n</span>e
              </span>
            </span>
          </h1>

          <p className="text-[1.2rem] text-text-muted max-w-[580px] min-[640px]:mx-auto mb-10 leading-[1.65]">
            Join AWS Cloud Club — a community of cloud learners, builders, and
            leaders. Gain real-world skills, earn certifications, and grow with us.
          </p>

          <div className="flex gap-4 min-[640px]:mx-auto flex-col min-[400px]:flex-row">
            <button
              className="btn-glow bg-[#2577d4] text-white px-8 py-[14px] rounded-[12px] text-[0.95rem] font-semibold shadow-[0_4px_20px_rgba(37,119,212,0.35)] transition-all"
            >
              Find out more
            </button>
            <button
              className="glass-card px-8 py-[14px] rounded-[12px] text-[0.9rem] font-medium text-[#1a60b8] transition-all hover:-translate-y-[2px]"
            >
              Join the Club ☁️
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes drift-horizontal {
          0%   { transform: translateX(0px); }
          50%  { transform: translateX(55px); }
          100% { transform: translateX(0px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;

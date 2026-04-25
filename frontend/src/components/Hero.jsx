import React from 'react';
const mascot = '/images/mascot2.svg';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-[140px] pb-[60px] lg:pt-[180px] lg:pb-[100px] px-6 flex flex-col items-center text-center transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
      <div className="absolute -top-[150px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle,_rgba(255,253,230,0.4)_0%,_rgba(255,255,255,0)_75%)] blur-[60px] pointer-events-none z-0"></div>

      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute w-[600px] h-[300px] top-[10%] -left-[10%] opacity-60 animate-[float-clouds_60s_linear_infinite] bg-[radial-gradient(circle,_rgba(255,255,255,0.8)_0%,_rgba(255,255,255,0)_70%)] rounded-full blur-[40px]"></div>
        <div className="absolute w-[800px] h-[400px] top-[40%] left-[20%] opacity-40 animate-[float-clouds_80s_linear_infinite] bg-[radial-gradient(circle,_rgba(255,255,255,0.8)_0%,_rgba(255,255,255,0)_70%)] rounded-full blur-[40px]"></div>
        <div className="absolute w-[500px] h-[250px] top-[60%] left-[70%] opacity-50 animate-[float-clouds_50s_linear_infinite] bg-[radial-gradient(circle,_rgba(255,255,255,0.8)_0%,_rgba(255,255,255,0)_70%)] rounded-full blur-[40px]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-[1000px] w-full">
        <div className="relative w-full flex flex-col items-start text-left min-[640px]:items-center min-[640px]:text-center">
          <h1 className="font-extrabold leading-[1.1] mb-5 tracking-[-0.04em] text-text-main transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] text-[2.2rem] mt-10 lg:text-[4rem] lg:mt-[80px]">
            It's Always Day{" "}
            <span className="relative inline-block">
              <img
                src={mascot}
                alt="Sleeping Mascot"
                className="absolute object-contain z-10 bottom-[0] right-[-5px] h-[70px] w-auto lg:h-[140px] lg:right-[0] lg:bottom-[-20%] transition-all duration-300 ease-in-out pointer-events-none"
              />
              O<span className="absolute z-[100]">n</span>ne
            </span>
          </h1>
          <p className="text-[1.25rem] text-text-muted max-w-[600px] min-[640px]:mx-auto mb-10 leading-[1.6]">
            Join AWS Cloud Club — a community of cloud learners, builders, and leaders. Gain real-world skills, earn certifications, and grow with us.
          </p>
          <button className="bg-transparent border border-primary text-[rgba(18,35,85,0.7)] px-[32px] py-[14px] rounded-[10px] text-[0.9rem] font-normal leading-[normal] hover:-translate-y-[1px] shadow-[0_4px_14px_rgba(47,112,186,0.139)] transition-all">
            Find out more
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float-clouds {
          0% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(50px) translateY(-20px); }
          100% { transform: translateX(0) translateY(0); }
        }
      `}} />
    </section>
  );
};

export default Hero;

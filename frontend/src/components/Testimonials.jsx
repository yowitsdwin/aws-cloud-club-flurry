import React, { useState } from 'react';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      text: "AWSCC - Flurry has provided me with the resources and community support to truly excel in cloud computing. The hands-on workshops are a game changer!",
      author: "Marie Anjilee Naces",
      role: "Member",
      img: "https://i.pravatar.cc/100?img=32"
    },
    {
      text: "Being part of this club opened doors to industry networking I never thought possible as a student. Highly recommend joining!",
      author: "Simon Asis",
      role: "Member",
      img: "https://i.pravatar.cc/100?img=22"
    },
    {
      text: "The leaderboard keeps me motivated to keep building. It's not just a club, it's a family of passionate cloud builders.",
      author: "Michelle Godin",
      role: "Member",
      img: "https://i.pravatar.cc/100?img=44"
    }
  ];

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative z-[5] py-20 px-6 overflow-hidden">
      {/* Soft background tint */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(235,248,255,0.5) 0%, rgba(245,243,255,0.5) 100%)' }} />

      <div className="max-w-[1100px] mx-auto relative z-[1]">
        {/* Glass card wrapper */}
        <div className="glass-card rounded-[28px] p-10 md:p-14 flex flex-col md:flex-row gap-12 items-start md:items-center">

        <div className="md:w-1/3 text-left">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-text-main mb-6 leading-tight">From our community.</h2>
          <p className="text-text-muted mb-8">Here's what our members had to say about their experience with AWSCC - Flurry.</p>
          <div className="flex gap-3">
            <button 
              onClick={prev}
              className="w-16 h-16 rounded-full border border-[#e5e7eb] flex items-center justify-center text-text-main hover:bg-[#f8fafc] hover:border-primary hover:text-primary hover:scale-105 transition-all duration-300 cursor-pointer text-[1.3rem]"
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button 
              onClick={next}
              className="w-16 h-16 rounded-full border border-[#e5e7eb] flex items-center justify-center text-text-main hover:bg-[#f8fafc] hover:border-primary hover:text-primary hover:scale-105 transition-all duration-300 cursor-pointer text-[1.3rem]"
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <div className="md:w-2/3 relative min-h-[350px] w-full pt-5">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={`absolute inset-0 transition-all duration-700 ease-in-out flex flex-col justify-start ${i === current ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20 pointer-events-none'}`}
            >
              <i className="fa-solid fa-quote-left text-[2rem] text-primary opacity-70 mb-6 block"></i>
              <p className="text-[1.5rem] font-semibold text-text-main leading-[1.3] mb-10 tracking-tight">
                "{t.text}"
              </p>
              <div className="flex items-center gap-5">
                <img src={t.img} alt={t.author} className="w-[50px] h-[50px] rounded-full object-cover" />
                <div className="text-left">
                  <h4 className="font-bold text-text-main text-[1.2rem] mb-0.5">{t.author}</h4>
                  <span className="text-[0.95rem] text-text-muted">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>

  );
};

export default Testimonials;

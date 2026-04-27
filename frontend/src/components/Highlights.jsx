import React, { useRef } from 'react';
const event1 = '/images/event1.png';
const event2 = '/images/event2.jpg';
const event3 = '/images/event3.png';

const events = [
  {
    img: event3,
    tag: "Webinar",
    tagColor: '#7c3aed',
    tagBg: 'rgba(124,58,237,0.12)',
    title: "INTO THE CLOUDS | Github fundamentals with AWS Networking & Security",
    date: "Mar 22, 2026",
    time: "1:00 PM - 5:00 PM"
  },
  {
    img: event2,
    tag: "Workshop",
    tagColor: '#0ea5e9',
    tagBg: 'rgba(14,165,233,0.12)',
    title: "INTO THE CLOUDS | Building & Deploying Web Apps with AWS Amplify and S3",
    date: "Feb 27, 2026",
    time: "9:00 AM - 12:00 PM"
  },
  {
    img: event1,
    tag: "Webinar",
    tagColor: '#7c3aed',
    tagBg: 'rgba(124,58,237,0.12)',
    title: "INTO THE CLOUDS | First Step in AWS",
    date: "Jan 11, 2026",
    time: "7:00 PM - 9:00 PM"
  }
];

const Highlights = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector('.highlight-card');
      if (card) {
        const cardWidth = card.offsetWidth + 20;
        scrollRef.current.scrollBy({ left: direction === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative z-[5] pt-[100px] pb-[80px] px-6 overflow-hidden">
      {/* Soft sky-blue background tint */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(230,245,255,0.6) 100%)' }} />

      {/* Background cloud blobs */}
      <div className="absolute top-[5%] right-[-4%] w-[400px] h-[180px] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(200,230,255,1) 0%, transparent 70%)', filter: 'blur(40px)', animation: 'float-slow 12s ease-in-out infinite' }} />
      <div className="absolute bottom-[10%] left-[-4%] w-[350px] h-[160px] opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(220,240,255,1) 0%, transparent 70%)', filter: 'blur(35px)', animation: 'float-slow 9s ease-in-out infinite reverse' }} />

      <div className="max-w-[1100px] mx-auto relative z-[1]">
        {/* Header row */}
        <div className="flex justify-between items-end mb-10 flex-col md:flex-row gap-6 md:gap-0">
          <div className="text-left self-start">
            <span className="inline-block text-[0.8rem] font-bold tracking-[0.15em] uppercase mb-3 px-3 py-1 rounded-full"
              style={{ background: 'rgba(37,119,212,0.1)', color: '#1a60b8' }}>
              Events
            </span>
            <h2 className="text-[clamp(2rem,5vw,3rem)] font-extrabold text-text-main leading-tight">
              Be Part of the Community
            </h2>
            <p className="text-text-muted mt-2">Explore the core pillars of our community engagement.</p>
          </div>
          <div className="flex gap-3 self-start md:self-end">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer text-[0.95rem] transition-all duration-300 hover:-translate-y-[2px]"
              style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.8)', color: '#1a60b8', boxShadow: '0 4px 12px rgba(37,119,212,0.1)' }}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer text-[0.95rem] transition-all duration-300 hover:-translate-y-[2px]"
              style={{ background: 'rgba(37,119,212,1)', color: 'white', boxShadow: '0 4px 16px rgba(37,119,212,0.35)' }}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Event cards */}
        <div
          ref={scrollRef}
          className="highlights-grid flex flex-nowrap overflow-x-auto gap-5 py-4 snap-x scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {events.map((event, index) => (
            <div
              key={index}
              className="highlight-card flex-none w-[320px] snap-center group cursor-pointer"
            >
              {/* Glass card */}
              <div className="relative rounded-[20px] overflow-hidden transition-all duration-400 hover:-translate-y-3 hover:shadow-[0_24px_48px_rgba(37,119,212,0.18)]"
                style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.8)', boxShadow: '0 8px 24px rgba(37,119,212,0.08)' }}>

                {/* Image */}
                <div className="w-full h-[190px] overflow-hidden">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <span
                    className="inline-block text-[0.72rem] font-bold tracking-wide uppercase px-3 py-1 rounded-full mb-3"
                    style={{ background: event.tagBg, color: event.tagColor }}
                  >
                    {event.tag}
                  </span>
                  <h3 className="text-[0.97rem] font-semibold text-text-main leading-[1.4] mb-4 line-clamp-2">
                    {event.title}
                  </h3>
                  <div className="flex gap-4 text-text-muted text-[0.78rem]">
                    <span className="flex items-center gap-1.5">
                      <i className="fa-regular fa-calendar text-primary"></i>
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <i className="fa-regular fa-clock text-primary"></i>
                      {event.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="btn-glow bg-[#2577d4] text-white px-[32px] py-[13px] rounded-[10px] text-[0.9rem] font-semibold shadow-[0_4px_20px_rgba(37,119,212,0.3)] transition-all">
            View all events
          </button>
        </div>
      </div>

      <style>{`.highlights-grid::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
};

export default Highlights;

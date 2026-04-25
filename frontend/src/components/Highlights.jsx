import React, { useRef } from 'react';
const event1 = '/images/event1.png';
const event2 = '/images/event2.jpg';
const event3 = '/images/event3.png';

const Highlights = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector('.highlight-card');
      if (card) {
        const cardWidth = card.offsetWidth + 16;
        scrollRef.current.scrollBy({ left: direction === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
      }
    }
  };

  const events = [
    {
      img: event3,
      tag: "Webinar",
      title: "INTO THE CLOUDS | Github fundamentals with AWS Networking & Security",
      date: "Mar 22, 2026",
      time: "1:00 PM - 5:00 PM"
    },
    {
      img: event2,
      tag: "Workshops",
      title: "INTO THE CLOUDS | Building & Deploying Web Apps with AWS Amplify and S3",
      date: "Feb 27, 2026",
      time: "9:00 AM - 12:00 PM"
    },
    {
      img: event1,
      tag: "Webinar",
      title: "INTO THE CLOUDS | First Step in AWS",
      date: "Jan 11, 2026",
      time: "7:00 PM - 9:00 PM"
    }
  ];

  return (
    <section className="relative z-[5] pt-[120px] pb-[50px] px-6 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex justify-between items-center mb-[30px] flex-col md:flex-row">
          <div className="text-left mb-0 self-start md:self-center">
            <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold text-text-main mb-4 leading-tight">Be Part of the Community</h2>
            <p className="text-text-muted">Explore the core pillars of our community engagement.</p>
          </div>
          <div className="flex gap-3 mt-8 md:mt-0 self-start md:self-center">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-[#e5e7eb] bg-transparent flex items-center justify-center cursor-pointer text-[1rem] text-text-main hover:bg-[#F9FAFB] hover:border-primary hover:text-primary hover:scale-105 transition-all duration-300"
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-[#e5e7eb] bg-transparent flex items-center justify-center cursor-pointer text-[1rem] text-text-main hover:bg-[#F9FAFB] hover:border-primary hover:text-primary hover:scale-105 transition-all duration-300"
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="highlights-grid flex flex-nowrap overflow-x-auto gap-4 py-5 snap-x scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {events.map((event, index) => (
            <div key={index} className="highlight-card w-[300px] h-[250px] snap-center relative rounded-[5px] cursor-pointer overflow-hidden bg-text-muted flex-none group">
              <div className="w-full h-full">
                <img src={event.img} alt={event.title} className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.01]" />
              </div>
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-white to-transparent flex flex-col justify-end items-start p-[30px_20px] opacity-0 group-hover:opacity-100 transition-all duration-400 gap-[5px] text-text-main">
                <span className="bg-primary text-white py-[5px] px-[15px] rounded-[5px] text-[0.7rem] translate-y-[20px] group-hover:translate-y-0 transition-all duration-400 delay-100">
                  {event.tag}
                </span>
                <h3 className="text-[1rem] font-medium m-0 translate-y-[20px] group-hover:translate-y-0 transition-all duration-400 delay-200">
                  {event.title}
                </h3>
                <div className="flex gap-[15px] text-text-muted text-[0.7rem] translate-y-[20px] group-hover:translate-y-0 transition-all duration-400 delay-300">
                  <span className="flex items-center gap-1">
                    <i className="fa-regular fa-calendar"></i>{event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="fa-regular fa-clock"></i>{event.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-transparent border border-primary text-[rgba(18,35,85,0.7)] px-[32px] py-[14px] rounded-[10px] text-[0.9rem] font-normal leading-[normal] hover:-translate-y-[1px] shadow-[0_4px_14px_rgba(47,112,186,0.139)] transition-all">
            View all events
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .highlights-grid::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

export default Highlights;

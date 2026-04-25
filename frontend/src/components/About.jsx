import React from 'react';

const About = () => {
  const values = [
    {
      icon: "fa-graduation-cap",
      title: "Learning",
      description: "Hands-on workshops and AWS certification paths."
    },
    {
      icon: "fa-code",
      title: "Building",
      description: "Real-world projects using modern cloud architecture."
    },
    {
      icon: "fa-users",
      title: "Community",
      description: "Networking with AWS experts and fellow builders."
    },
    {
      icon: "fa-rocket",
      title: "Growth",
      description: "Career opportunities and leadership development."
    }
  ];

  return (
    <section className="relative z-[3] py-[80px] md:py-[120px] px-6 bg-white">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center gap-2.5 text-center">
        <div className="max-w-[800px]">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-text-main leading-[1.2] mb-6 tracking-tight">
            Who we are
          </h2>
          <p className="text-[1.15rem] text-text-muted leading-[1.7] mb-10">
            AWS Cloud Club - Flurry is a vibrant community of students and professionals dedicated to mastering AWS technologies. We bridge the gap between academic theory and industry practice.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 w-full">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 px-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-black/5 transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-primary group">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-2xl mx-auto mb-5 transition-all group-hover:bg-primary group-hover:text-white group-hover:-rotate-10 group-hover:scale-110">
                <i className={`fa-solid ${value.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">{value.title}</h3>
              <p className="text-[0.95rem] text-text-muted leading-normal">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-4 justify-center mt-10 w-full sm:w-auto flex-col sm:flex-row">
          <button className="bg-primary-dark text-white px-[32px] py-[14px] rounded-[10px] text-[0.95rem] font-medium leading-[normal] hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all">
            Join with Us
          </button>
          <button className="bg-transparent border border-primary text-[rgba(18,35,85,0.7)] px-[32px] py-[14px] rounded-[10px] text-[0.9rem] font-normal leading-[normal] hover:-translate-y-[1px] shadow-[0_4px_14px_rgba(47,112,186,0.139)] hover:shadow-[0_4px_14px_rgba(47,112,186,0.14)] transition-all">
            Discover more
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

const values = [
  {
    icon: "fa-graduation-cap",
    title: "Learning",
    description: "Hands-on workshops and AWS certification paths.",
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.08)',
  },
  {
    icon: "fa-code",
    title: "Building",
    description: "Real-world projects using modern cloud architecture.",
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.08)',
  },
  {
    icon: "fa-users",
    title: "Community",
    description: "Networking with AWS experts and fellow builders.",
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.08)',
  },
  {
    icon: "fa-rocket",
    title: "Growth",
    description: "Career opportunities and leadership development.",
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
  }
];

// Cloud bump silhouette divider
const WaveDivider = ({ flip = false, color = 'rgba(255,255,255,0.5)' }) => (
  <div
    style={{
      position: 'absolute',
      left: 0,
      width: '100%',
      overflow: 'hidden',
      lineHeight: 0,
      pointerEvents: 'none',
      zIndex: 2,
      ...(flip ? { bottom: '-55px', transform: 'scaleY(-1)' } : { top: '-55px' }),
    }}
  >
    <svg viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
      <path
        d="M0,90 L0,55
           C 60,55 80,28 120,28 C 160,28 180,50 220,50
           C 260,50 275,20 330,20 C 385,20 400,48 445,48
           C 490,48 510,10 575,10 C 640,10 660,44 710,44
           C 760,44 780,22 840,22 C 900,22 915,46 960,46
           C 1005,46 1025,16 1090,16 C 1155,16 1170,50 1210,50
           C 1250,50 1275,30 1320,30 C 1365,30 1400,55 1440,55
           L1440,90 Z"
        fill={color}
      />
    </svg>
  </div>
);

const About = () => {
  return (
    <section className="relative z-[3] py-[100px] md:py-[130px] px-6"
      style={{ background: 'linear-gradient(180deg, rgba(224,242,255,0.6) 0%, rgba(240,249,255,0.85) 100%)' }}>

      {/* Cloud wave top */}
      <WaveDivider color="rgba(214,236,255,0.95)" />

      {/* Decorative background clouds */}
      <div className="absolute top-[10%] left-[-5%] w-[500px] h-[180px] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.9) 0%, transparent 70%)', filter: 'blur(40px)', animation: 'float-slow 10s ease-in-out infinite' }} />
      <div className="absolute bottom-[10%] right-[-5%] w-[420px] h-[160px] opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(200,230,255,0.9) 0%, transparent 70%)', filter: 'blur(40px)', animation: 'float-slow 13s ease-in-out infinite reverse' }} />

      <div className="max-w-[1100px] mx-auto flex flex-col items-center gap-3 text-center relative z-[1]">
        <div className="max-w-[800px]">
          <span className="inline-block text-[0.8rem] font-bold tracking-[0.15em] uppercase mb-4 px-3 py-1 rounded-full"
            style={{ background: 'rgba(37,119,212,0.1)', color: '#1a60b8' }}>
            About Us
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-text-main leading-[1.2] mb-6 tracking-tight">
            Who we are
          </h2>
          <p className="text-[1.15rem] text-text-muted leading-[1.7] mb-12">
            AWS Cloud Club – Flurry is a vibrant community of students and professionals dedicated to mastering AWS technologies. We bridge the gap between academic theory and industry practice.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5 w-full">
          {values.map((value, index) => (
            <div
              key={index}
              className="glass-card p-8 px-6 rounded-2xl transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_24px_48px_rgba(37,119,212,0.14)] group cursor-default"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mx-auto mb-5 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6"
                style={{ background: value.bg, color: value.color }}
              >
                <i className={`fa-solid ${value.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">{value.title}</h3>
              <p className="text-[0.95rem] text-text-muted leading-normal">{value.description}</p>

              {/* Bottom accent line */}
              <div className="mt-5 h-[2px] w-0 group-hover:w-full rounded-full transition-all duration-500 ease-out"
                style={{ background: `linear-gradient(90deg, ${value.color}, transparent)` }} />
            </div>
          ))}
        </div>

        <div className="flex gap-4 justify-center mt-12 w-full sm:w-auto flex-col sm:flex-row">
          <button className="btn-glow bg-[#2577d4] text-white px-[32px] py-[14px] rounded-[10px] text-[0.95rem] font-semibold shadow-[0_4px_20px_rgba(37,119,212,0.3)] transition-all">
            Join with Us
          </button>
          <button className="glass-card px-[32px] py-[14px] rounded-[10px] text-[0.9rem] font-medium text-[#1a60b8] transition-all hover:-translate-y-[2px]">
            Discover more
          </button>
        </div>
      </div>

      {/* Cloud wave bottom */}
      <WaveDivider flip color="rgba(255,255,255,0.5)" />
    </section>
  );
};

export default About;

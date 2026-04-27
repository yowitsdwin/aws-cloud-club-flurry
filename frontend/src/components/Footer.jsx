import React from 'react';
const logo = '/images/logo.png';

// Cloud bump divider for the footer top edge
const FooterCloud = () => (
  <div style={{ position: 'absolute', top: '-2px', left: 0, width: '100%', overflow: 'hidden', lineHeight: 0, pointerEvents: 'none', zIndex: 2 }}>
    <svg viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
      <path
        d="M0,70 L0,42
           C 50,42 70,18 110,18 C 150,18 168,38 205,38
           C 242,38 260,12 310,12 C 360,12 378,36 418,36
           C 458,36 476,8 535,8 C 594,8 612,38 655,38
           C 698,38 716,16 768,16 C 820,16 838,40 878,40
           C 918,40 936,14 990,14 C 1044,14 1062,42 1100,42
           C 1138,42 1158,22 1200,22 C 1242,22 1268,44 1310,44
           C 1352,44 1390,42 1440,42
           L1440,70 Z"
        fill="rgba(13,40,69,0.95)"
      />
    </svg>
  </div>
);

const socialLinks = [
  { href: "https://github.com/AWS-Cloud-Club-Flurry", icon: "fa-github", label: "GitHub" },
  { href: "https://www.linkedin.com/company/aws-cloud-club-flurry/", icon: "fa-linkedin", label: "LinkedIn" },
  { href: "https://discord.gg/Cc5td7Sn", icon: "fa-discord", label: "Discord" },
  { href: "https://web.facebook.com/profile.php?id=61583698383385", icon: "fa-facebook", label: "Facebook" },
];

const quickLinks = ['Home', 'About Us', 'Events', 'Leaderboard', 'Blog'];

const Footer = () => {
  return (
    <footer
      className="relative z-10 pt-24 px-6 pb-4 text-white overflow-hidden"
      style={{ background: 'linear-gradient(170deg, #0d2845 0%, #0a1f38 50%, #071629 100%)' }}
    >
      {/* Cloud top edge */}
      <FooterCloud />

      {/* Subtle cloud glow blobs */}
      <div className="absolute top-[20%] left-[-6%] w-[400px] h-[200px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(147,210,255,1) 0%, transparent 70%)', filter: 'blur(50px)' }} />
      <div className="absolute bottom-[10%] right-[-4%] w-[350px] h-[160px] opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(100,170,255,1) 0%, transparent 70%)', filter: 'blur(45px)' }} />

      <div className="max-w-[1200px] mx-auto relative z-[1]">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-[60px] mb-[60px] text-center md:text-left">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-5 justify-center md:justify-start">
              <img src={logo} alt="AWS Cloud Club" className="w-10 h-10 rounded-full" style={{ filter: 'brightness(1.1)' }} />
              <span className="text-[1.4rem] font-extrabold text-white">AWSCC – Flurry</span>
            </div>
            <p className="leading-[1.7] max-w-[300px] mx-auto md:mx-0" style={{ color: 'rgba(200,225,255,0.65)' }}>
              Empowering students with cloud computing skills, industry networking, and community support.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-6 justify-center md:justify-start">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[1rem] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_6px_16px_rgba(37,119,212,0.4)]"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)', color: 'rgba(200,225,255,0.85)' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#2577d4'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                >
                  <i className={`fa-brands ${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[1rem] font-bold mb-5 tracking-wide uppercase" style={{ color: 'rgba(200,225,255,0.5)' }}>Quick Links</h3>
            <ul className="flex flex-col gap-3 list-none">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="transition-all duration-200 hover:text-white hover:translate-x-1 inline-block"
                    style={{ color: 'rgba(200,225,255,0.65)' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[1rem] font-bold mb-5 tracking-wide uppercase" style={{ color: 'rgba(200,225,255,0.5)' }}>Stay in the Cloud</h3>
            <p className="text-[0.9rem] mb-4" style={{ color: 'rgba(200,225,255,0.65)' }}>
              Get updates on our latest events and workshops.
            </p>
            <div className="flex w-full max-w-[280px] gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 rounded-[10px] text-[0.85rem] outline-none transition-all"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)', color: 'white' }}
              />
              <button
                className="px-4 py-2.5 rounded-[10px] text-[0.85rem] font-semibold transition-all hover:-translate-y-[2px]"
                style={{ background: '#2577d4', color: 'white', boxShadow: '0 4px 14px rgba(37,119,212,0.4)' }}
              >
                ✈️
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-3 text-[0.85rem]"
          style={{ borderColor: 'rgba(255,255,255,0.08)', color: 'rgba(200,225,255,0.4)' }}>
          <p>© 2025 AWS Cloud Club – Flurry. All rights reserved.</p>
          <p>Made with ☁️ in the Philippines</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

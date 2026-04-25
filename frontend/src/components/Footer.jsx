import React from 'react';
const logo = '/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE] text-text-main px-6 pb-2.5 relative z-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-[60px] mb-[60px] text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3 mb-5 justify-center md:justify-start">
            <img src={logo} alt="AWS Cloud Club" className="w-10 h-10" />
            <span className="text-[1.5rem] font-extrabold">AWSCC - Flurry</span>
          </div>
          <p className="text-text-muted leading-[1.6] max-w-[300px] mx-auto md:mx-0">
            Empowering students with cloud computing skills, industry networking, and community support.
          </p>
        </div>

        <div>
          <h3 className="text-[1.2rem] font-bold mb-6">Quick Links</h3>
          <ul className="flex flex-col gap-3 list-none">
            <li><a href="#" className="text-text-muted hover:text-text-main transition-colors">Home</a></li>
            <li><a href="#" className="text-text-muted hover:text-text-main transition-colors">About Us</a></li>
            <li><a href="#" className="text-text-muted hover:text-text-main transition-colors">Events</a></li>
            <li><a href="#" className="text-text-muted hover:text-text-main transition-colors">Leaderboard</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-[1.2rem] font-bold mb-6">Connect With Us</h3>
          <div className="flex gap-4 justify-center">
            <a href="https://github.com/AWS-Cloud-Club-Flurry" target="_blank" className="w-10 h-10 rounded-full bg-text-main flex items-center justify-center text-white hover:bg-primary hover:-translate-y-[3px] transition-all text-xl">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/company/aws-cloud-club-flurry/" target="_blank" className="w-10 h-10 rounded-full bg-text-main flex items-center justify-center text-white hover:bg-primary hover:-translate-y-[3px] transition-all text-xl">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://discord.gg/Cc5td7Sn" target="_blank" className="w-10 h-10 rounded-full bg-text-main flex items-center justify-center text-white hover:bg-primary hover:-translate-y-[3px] transition-all text-xl">
              <i className="fa-brands fa-discord"></i>
            </a>
            <a href="https://web.facebook.com/profile.php?id=61583698383385" target="_blank" className="w-10 h-10 rounded-full bg-text-main flex items-center justify-center text-white hover:bg-primary hover:-translate-y-[3px] transition-all text-xl">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto pt-6 border-t border-white/10 text-center text-text-muted text-[0.9rem]">
        <p>&copy; 2024 AWS Cloud Club Flurry. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

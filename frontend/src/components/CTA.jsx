import React from 'react';
const mascot = '/images/mascot1.svg';

const CTA = () => {
  return (
    <div className="relative z-[6] px-6 pb-20 pt-10">
      <section className="bg-white relative rounded-[10px] overflow-hidden shadow-sm mx-auto mt-8 md:mt-0">
        <div className="max-w-[1000px] mx-auto text-center md:text-left text-text-main flex flex-col-reverse md:flex-row justify-between items-stretch gap-0 md:gap-10">

          <div className="flex-1 flex flex-col justify-center relative z-[2] leading-[1.1] px-6 pt-0 pb-12 max-[450px]:px-5 max-[450px]:pt-0 max-[450px]:pb-10 md:px-6 md:py-[60px]">
            <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold leading-[1.2] mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-[1.2rem] opacity-90 mb-10">
              Join the AWS Cloud Club Flurry today and accelerate your cloud journey.
            </p>
            <div className="flex gap-4 flex-wrap justify-center md:justify-start max-[450px]:flex-col">
              <button className="bg-primary-dark text-white px-[32px] py-[10px] rounded-[10px] border border-transparent text-[0.95rem] font-medium leading-normal hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-200 cursor-pointer">
                Become a Member
              </button>
              <button className="bg-transparent border border-primary text-[rgba(18,35,85,0.699)] px-[32px] py-[10px] rounded-[10px] text-[0.9rem] font-normal leading-normal hover:-translate-y-[1px] shadow-[0_4px_14px_rgba(47,112,186,0.139)] transition-all duration-200 cursor-pointer">
                Contact Us
              </button>
            </div>
          </div>

          <div className="relative flex justify-center flex-none w-full h-[300px] pt-0 max-[450px]:pt-[30px] md:w-[350px] md:h-auto md:pt-0">
            <img
              src={mascot}
              alt="Mascot"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] md:w-[380px] max-w-none h-auto opacity-100 z-[1] pointer-events-none"
            />
          </div>

        </div>
      </section>
    </div>
  );
};

export default CTA;

import React, { useState } from 'react';

/**
 * FAQs — Accordion-style Frequently Asked Questions section.
 * Inherits the existing design system (glass-card, color palette, typography).
 *
 * Usage:
 *   Import into App.jsx and render inside a <CloudReveal> wrapper.
 */

const faqData = [
  {
    question: 'What is AWS?',
    answer:
      'Amazon Web Services (AWS) is a cloud computing platform that provides services like storage, computing power, and databases through the internet. It allows developers and companies to build and run applications without managing physical servers.',
    icon: 'fa-cloud',
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.08)',
  },
  {
    question: 'What are AWS Student Builder Groups?',
    answer:
      'AWS Student Builder Groups are student-led communities that help students explore cloud computing together. Members learn new technologies, collaborate on projects, and grow their technical skills.',
    icon: 'fa-users',
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.08)',
  },
  {
    question: 'What do members do in AWS Student Builder Groups?',
    answer:
      'Members participate in workshops, tech talks, and hands-on activities related to cloud computing. These events help students gain practical experience with modern technology.',
    icon: 'fa-laptop-code',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.08)',
  },
  {
    question: 'Do I need experience to join?',
    answer:
      'No prior experience is required. The club welcomes beginners and provides resources to help members learn step by step.',
    icon: 'fa-seedling',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
  },
  {
    question: 'Who can join the club?',
    answer:
      'Any college student who is interested in technology, innovation, or cloud computing is welcome to join. Whether you\'re just starting to explore the tech world or looking to expand your knowledge, AWS Student Builder Groups provides a supportive community where members can learn, collaborate, and grow together.',
    icon: 'fa-graduation-cap',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
  },
  {
    question: 'What can I learn from the club?',
    answer:
      'Members can learn about cloud infrastructure, application deployment, and other modern technologies. These skills are widely used in the tech industry today.',
    icon: 'fa-book-open',
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.08)',
  },
  {
    question: 'What are the benefits of joining?',
    answer:
      'Joining the club allows students to gain technical knowledge, meet like-minded peers, and build useful projects. It also helps members explore possible career paths in technology.',
    icon: 'fa-star',
    color: '#f97316',
    bg: 'rgba(249,115,22,0.08)',
  },
  {
    question: 'How can I become a member?',
    answer:
      'Students who are interested in joining can visit and follow our official Facebook Page for the latest announcements and updates. A membership form link will be posted there where you can easily fill out your information and apply. Once submitted, you\'ll be able to stay connected with our community and participate in upcoming events and activities.',
    icon: 'fa-user-plus',
    color: '#2577d4',
    bg: 'rgba(37,119,212,0.08)',
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative z-[5] py-[80px] md:py-[110px] px-6">
      <div className="max-w-[820px] mx-auto flex flex-col items-center gap-3 text-center relative z-[1]">
        {/* Section badge + heading */}
        <span
          className="inline-block text-[0.8rem] font-bold tracking-[0.15em] uppercase mb-4 px-3 py-1 rounded-full"
          style={{ background: 'rgba(37,119,212,0.1)', color: '#1a60b8' }}
        >
          FAQs
        </span>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-text-main leading-[1.2] mb-3 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-[1.1rem] text-text-muted leading-[1.7] mb-10 max-w-[600px]">
          Everything you need to know about the AWS Student Builder Group – Flurry.
        </p>

        {/* Accordion */}
        <div className="w-full flex flex-col gap-3">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`glass-card rounded-2xl transition-all duration-300 cursor-pointer group ${
                  isOpen
                    ? 'shadow-[0_12px_40px_rgba(37,119,212,0.12)]'
                    : 'hover:shadow-[0_8px_24px_rgba(37,119,212,0.08)] hover:-translate-y-[2px]'
                }`}
                onClick={() => toggle(index)}
              >
                {/* Question row */}
                <div className="flex items-center gap-4 px-6 py-5 select-none">
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-lg transition-all duration-300 group-hover:scale-110"
                    style={{ background: faq.bg, color: faq.color }}
                  >
                    <i className={`fa-solid ${faq.icon}`}></i>
                  </div>

                  {/* Question text */}
                  <h3 className="flex-1 text-left text-[0.95rem] sm:text-[1.05rem] font-semibold text-text-main leading-snug">
                    {faq.question}
                  </h3>

                  {/* Chevron indicator */}
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 transition-all duration-300"
                    style={{
                      background: isOpen ? 'rgba(37,119,212,0.12)' : 'rgba(37,119,212,0.06)',
                      color: '#1a60b8',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>

                {/* Answer — animated expand / collapse */}
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? '500px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-6 pb-5 sm:pl-[72px]">
                    {/* Accent line */}
                    <div
                      className="h-[2px] w-12 rounded-full mb-3"
                      style={{ background: `linear-gradient(90deg, ${faq.color}, transparent)` }}
                    />
                    <p className="text-[0.92rem] sm:text-[0.95rem] text-text-muted leading-[1.7] text-left">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;

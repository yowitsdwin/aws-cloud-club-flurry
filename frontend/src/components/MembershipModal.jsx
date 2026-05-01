import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import MembershipForm from './MembershipForm';

/**
 * MembershipModal — A full-screen overlay modal that embeds the Membership Form.
 * Rendered conditionally via `isOpen` prop.
 *
 * Usage:
 *   <MembershipModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
 */
const MembershipModal = ({ isOpen, onClose }) => {
  // Lock body scroll when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKey);
    }
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6"
      style={{ animation: 'modalFadeIn 0.3s ease-out' }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal container */}
      <div
        className="relative w-full max-w-[720px] h-full max-h-[92vh] sm:h-auto flex flex-col rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.25)]"
        style={{
          background: 'linear-gradient(135deg, rgba(240,249,255,0.97) 0%, rgba(255,255,255,0.98) 100%)',
          border: '1px solid rgba(255,255,255,0.6)',
          animation: 'modalSlideUp 0.35s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        {/* Header */}
        <div
          className="relative px-5 sm:px-8 py-4 sm:py-6 flex-shrink-0"
          style={{
            background: 'linear-gradient(135deg, #1a4fa8 0%, #2577d4 50%, #0ea5e9 100%)',
          }}
        >
          {/* Cloud puff decorations inside header */}
          <div
            className="absolute top-[-20px] left-[-30px] w-[180px] h-[80px] opacity-15 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, white 0%, transparent 70%)', filter: 'blur(16px)' }}
          />
          <div
            className="absolute bottom-[-10px] right-[10%] w-[120px] h-[50px] opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, white 0%, transparent 70%)', filter: 'blur(12px)' }}
          />

          <div className="flex items-start sm:items-center justify-between relative z-[1] gap-3">
            <div className="flex-1">
              <span
                className="inline-block text-[0.65rem] sm:text-[0.7rem] font-bold tracking-[0.15em] uppercase mb-1.5 sm:mb-2 px-2 sm:px-3 py-1 rounded-full"
                style={{ background: 'rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.9)' }}
              >
                ☁️ Membership
              </span>
              <h2 className="text-[1.15rem] sm:text-[clamp(1.25rem,3vw,1.6rem)] font-extrabold text-white leading-[1.2] pr-2">
                Join the AWS Student Builder Group&nbsp;–&nbsp;Flurry
              </h2>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 mt-1 sm:mt-0 rounded-full flex items-center justify-center text-white text-lg sm:text-xl transition-all duration-200 hover:scale-110 hover:bg-white/20 cursor-pointer"
              style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}
              aria-label="Close membership form"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>

        {/* Form body */}
        <div className="flex-1 overflow-hidden bg-[rgba(255,255,255,0.5)] flex flex-col relative min-h-[400px]">
          <MembershipForm onSubmitComplete={onClose} />
        </div>
      </div>

      {/* Scoped keyframes for modal animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes modalFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes modalSlideUp {
            from { opacity: 0; transform: translateY(24px) scale(0.97); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
        `
      }} />
    </div>
  );

  // Render the modal directly into document.body to avoid z-index stacking context issues
  return createPortal(modalContent, document.body);
};

export default MembershipModal;

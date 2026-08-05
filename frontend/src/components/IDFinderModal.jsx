import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

/**
 * IDFinderModal — A floating mini-form that lets members retrieve their
 * 8-character Member ID via email. Shows a generic success message
 * regardless of whether the email is registered, to prevent enumeration.
 *
 * Usage:
 *   <IDFinderModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
 */
const IDFinderModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  // Reset state whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setEmail('');
      setStatus('idle');
      setErrorMsg('');
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');
    setErrorMsg('');

    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

    try {
      const response = await fetch(`${apiUrl}/memberships/find-id`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.message || 'Something went wrong. Please try again.');
      }

      setStatus('success');
    } catch (err) {
      setErrorMsg(err.message || 'Connection error. Please try again.');
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ animation: 'idFinderFadeIn 0.25s ease-out' }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal card */}
      <div
        className="relative w-full max-w-[480px] rounded-[20px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.3)]"
        style={{ animation: 'idFinderSlideUp 0.3s cubic-bezier(0.4,0,0.2,1)' }}
      >
        {/* Header — gradient background */}
        <div
          className="relative px-6 py-8 sm:px-8 sm:py-10 text-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1a1a3e 0%, #1a4fa8 40%, #7c3aed 100%)',
          }}
        >
          {/* Decorative glow orbs */}
          <div
            className="absolute -top-[40px] -left-[40px] w-[200px] h-[200px] opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.6) 0%, transparent 70%)', filter: 'blur(30px)' }}
          />
          <div
            className="absolute -bottom-[30px] -right-[30px] w-[160px] h-[160px] opacity-15 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.6) 0%, transparent 70%)', filter: 'blur(25px)' }}
          />

          {/* Star particles */}
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full"
              style={{
                width: 2 + (i % 3),
                height: 2 + (i % 3),
                top: `${10 + (i * 23) % 70}%`,
                left: `${5 + (i * 31) % 85}%`,
                background: 'rgba(255,255,255,0.5)',
                animation: `idFinderTwinkle ${2 + (i % 3) * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-white/70 text-lg transition-all duration-200 hover:scale-110 hover:bg-white/15 hover:text-white cursor-pointer"
            aria-label="Close ID Finder"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          <h2 className="relative z-[1] text-[clamp(1.6rem,4vw,2.2rem)] font-extrabold text-white leading-[1.15]">
            Are you a{' '}
            <span style={{ color: '#f59e0b' }}>Member</span>?
          </h2>
          <p className="relative z-[1] text-[0.95rem] text-white/70 mt-2">
            Retrieve your digital membership ID instantly.
          </p>
        </div>

        {/* Body */}
        <div
          className="px-6 py-6 sm:px-8 sm:py-8"
          style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)' }}
        >
          {status === 'success' ? (
            /* Success state */
            <div className="text-center py-4" style={{ animation: 'idFinderFadeIn 0.3s ease-out' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(16, 185, 129, 0.15)', border: '2px solid rgba(16, 185, 129, 0.3)' }}>
                <i className="fa-solid fa-envelope-circle-check text-2xl text-emerald-400"></i>
              </div>
              <p className="text-white/90 text-[0.95rem] leading-relaxed max-w-[340px] mx-auto">
                If this email is registered in our system, your Member ID has been sent to your inbox.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-8 py-2.5 rounded-xl text-[0.9rem] font-semibold text-white/80 transition-all hover:text-white hover:bg-white/10 cursor-pointer"
                style={{ border: '1px solid rgba(255,255,255,0.15)' }}
              >
                Close
              </button>
            </div>
          ) : (
            /* Form state (idle, loading, error) */
            <form onSubmit={handleSubmit}>
              {status === 'error' && (
                <div
                  className="mb-4 p-3 rounded-xl text-[0.85rem] flex items-center gap-2"
                  style={{
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.25)',
                    color: '#fca5a5',
                    animation: 'idFinderFadeIn 0.2s ease-out',
                  }}
                >
                  <i className="fa-solid fa-triangle-exclamation flex-shrink-0"></i>
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your registered email..."
                  required
                  disabled={status === 'loading'}
                  autoFocus
                  className="w-full px-5 py-4 rounded-2xl text-[0.95rem] text-white outline-none transition-all duration-200 placeholder:text-white/30 disabled:opacity-50"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.2)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(124,58,237,0.5)';
                    e.target.style.boxShadow = 'inset 0 2px 8px rgba(0,0,0,0.2), 0 0 0 3px rgba(124,58,237,0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.target.style.boxShadow = 'inset 0 2px 8px rgba(0,0,0,0.2)';
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || !email.trim()}
                className="w-full mt-4 py-3.5 rounded-2xl text-[0.95rem] font-bold text-white transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{
                  background: status === 'loading'
                    ? 'linear-gradient(135deg, #6b21a8, #7c3aed)'
                    : 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
                  boxShadow: '0 4px 20px rgba(124, 58, 237, 0.35)',
                }}
              >
                {status === 'loading' ? (
                  <>
                    <i className="fa-solid fa-circle-notch animate-spin"></i>
                    Searching...
                  </>
                ) : (
                  'Find ID'
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Scoped keyframes */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes idFinderFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes idFinderSlideUp {
            from { opacity: 0; transform: translateY(20px) scale(0.97); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes idFinderTwinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.9; }
          }
        `
      }} />
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default IDFinderModal;

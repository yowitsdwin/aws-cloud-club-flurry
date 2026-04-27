import React, { useEffect, useRef } from 'react';

// Realistic puffy cloud SVG using bezier curve path
const CloudSVG = ({ width = 200, opacity = 0.75, color = 'white' }) => {
  const h = Math.round(width * 0.52);
  return (
    <svg viewBox="0 0 200 104" width={width} height={h} xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
      <path
        fill={color}
        fillOpacity={opacity}
        d="M 30 80
           C 10 80 0 68 0 58
           C 0 46 10 38 22 37
           C 20 33 20 28 24 24
           C 28 18 36 16 44 18
           C 48 8 58 2 70 2
           C 84 2 96 10 100 22
           C 106 16 116 14 126 18
           C 136 22 142 32 140 42
           C 150 42 160 50 160 60
           C 160 72 150 80 138 80
           Z"
        transform="scale(1.25) translate(0, 2)"
      />
    </svg>
  );
};

const clouds = [
  // Layer 1 — slow, large, blurry (deep sky)
  { id: 1, layer: 1, top: '8%',  left: '-5%',  width: 420, opacity: 0.55, speed: 0.04,  duration: 80,  delay: 0   },
  { id: 2, layer: 1, top: '15%', left: '55%',  width: 380, opacity: 0.45, speed: 0.03,  duration: 95,  delay: -30 },
  { id: 3, layer: 1, top: '60%', left: '30%',  width: 450, opacity: 0.35, speed: 0.025, duration: 110, delay: -50 },
  { id: 4, layer: 1, top: '75%', left: '-8%',  width: 360, opacity: 0.3,  speed: 0.02,  duration: 120, delay: -20 },

  // Layer 2 — medium speed, mid-size
  { id: 5, layer: 2, top: '22%', left: '10%',  width: 280, opacity: 0.6,  speed: 0.07,  duration: 65,  delay: -15 },
  { id: 6, layer: 2, top: '35%', left: '65%',  width: 240, opacity: 0.5,  speed: 0.08,  duration: 70,  delay: -40 },
  { id: 7, layer: 2, top: '55%', left: '5%',   width: 300, opacity: 0.45, speed: 0.06,  duration: 75,  delay: -5  },
  { id: 8, layer: 2, top: '80%', left: '50%',  width: 260, opacity: 0.4,  speed: 0.065, duration: 68,  delay: -25 },

  // Layer 3 — fast, small, crisp (near)
  { id: 9,  layer: 3, top: '5%',  left: '40%',  width: 160, opacity: 0.7,  speed: 0.13, duration: 45, delay: -10 },
  { id: 10, layer: 3, top: '42%', left: '80%',  width: 140, opacity: 0.65, speed: 0.14, duration: 42, delay: -20 },
  { id: 11, layer: 3, top: '68%', left: '20%',  width: 180, opacity: 0.6,  speed: 0.12, duration: 50, delay: -35 },
  { id: 12, layer: 3, top: '88%', left: '70%',  width: 150, opacity: 0.55, speed: 0.11, duration: 55, delay: -8  },
];

const layerBlur = { 1: '8px', 2: '3px', 3: '0px' };
const layerColors = { 1: '#dbeafe', 2: '#eff6ff', 3: 'white' };

const ParallaxClouds = () => {
  const containerRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    let scrollY = 0;
    const cloudEls = containerRef.current?.querySelectorAll('[data-cloud]');
    if (!cloudEls) return;

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    const animate = () => {
      if (cloudEls) {
        cloudEls.forEach((el) => {
          const speed = parseFloat(el.dataset.speed);
          const parallaxOffset = -(scrollY * speed);
          el.style.transform = `translateY(${parallaxOffset}px)`;
        });
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          data-cloud
          data-speed={cloud.speed}
          className="absolute will-change-transform"
          style={{
            top: cloud.top,
            left: cloud.left,
            width: cloud.width,
            filter: `blur(${layerBlur[cloud.layer]})`,
            animation: `drift-${cloud.id % 2 === 0 ? 'right' : 'left'} ${cloud.duration}s linear infinite`,
            animationDelay: `${cloud.delay}s`,
          }}
        >
          <CloudSVG
            width={cloud.width}
            opacity={cloud.opacity}
            color={layerColors[cloud.layer]}
          />
        </div>
      ))}

      <style>{`
        @keyframes drift-left {
          0%   { margin-left: 0; }
          50%  { margin-left: -60px; }
          100% { margin-left: 0; }
        }
        @keyframes drift-right {
          0%   { margin-left: 0; }
          50%  { margin-left: 60px; }
          100% { margin-left: 0; }
        }
      `}</style>
    </div>
  );
};

export default ParallaxClouds;

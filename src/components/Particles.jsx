import { useEffect, useRef } from 'react';

/**
 * Floating "digital dust" — tiny gold particles drifting upward on a canvas.
 */
export default function Particles({ density = 60 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    };

    const spawn = () => {
      particles = [];
      const count = Math.max(20, Math.floor((canvas.width * canvas.height) / (26000 * window.devicePixelRatio)) * (density / 60));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: (Math.random() * 1.6 + 0.4) * window.devicePixelRatio,
          vy: -(Math.random() * 0.4 + 0.1) * window.devicePixelRatio,
          vx: (Math.random() - 0.5) * 0.2 * window.devicePixelRatio,
          a: Math.random() * 0.6 + 0.2,
          tw: Math.random() * 0.02 + 0.005,
        });
      }
    };

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.y += p.vy;
        p.x += p.vx;
        p.a += p.tw;
        if (p.a > 0.9 || p.a < 0.15) p.tw *= -1;
        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.a})`;
        ctx.shadowColor = 'rgba(212,175,55,0.6)';
        ctx.shadowBlur = 6 * window.devicePixelRatio;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    spawn();
    tick();
    window.addEventListener('resize', () => { resize(); spawn(); });
    return () => { cancelAnimationFrame(raf); };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
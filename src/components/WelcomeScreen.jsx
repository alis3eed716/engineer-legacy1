import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Particles from './Particles';

/**
 * Full-screen luxury welcome screen with staggered blur-in text and a gold
 * "Start" button. Calls onEnter() to reveal the main page.
 */
export default function WelcomeScreen({ onEnter }) {
  const rootRef = useRef(null);
  const tlRef = useRef(null);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.wc-ring', { scale: 0.4, opacity: 0, duration: 1.4, stagger: 0.25 })
        .from('.wc-title', { y: 40, opacity: 0, filter: 'blur(18px)', duration: 1.1 }, '-=0.8')
        .from('.wc-sub', { y: 30, opacity: 0, filter: 'blur(14px)', duration: 1 }, '-=0.7')
        .from('.wc-btn', { y: 24, opacity: 0, filter: 'blur(10px)', duration: 0.9 }, '-=0.6');
      tlRef.current = tl;
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const handleEnter = () => {
    if (leaving) return;
    setLeaving(true);
    const tl = gsap.timeline();
    tl.to('.wc-ring', { scale: 3, opacity: 0, duration: 0.8, ease: 'power2.in' })
      .to('.wc-fade', { opacity: 0, filter: 'blur(14px)', y: -20, duration: 0.7, stagger: 0.06 }, '<')
      .to(rootRef.current, {
        opacity: 0, filter: 'blur(20px)', duration: 0.9, ease: 'power2.inOut', onComplete: onEnter,
      }, '-=0.4');
  };

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(circle at 50% 40%, #141414 0%, #050505 70%)' }}
    >
      <Particles density={70} />

      {/* Pulsing gold rings */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="wc-ring absolute rounded-full border"
            style={{
              width: 220 + i * 120,
              height: 220 + i * 120,
              borderColor: 'rgba(212,175,55,0.35)',
              animation: `ringPulse 4s ease-out ${i * 1.2}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p className="wc-fade muted-en mb-6 text-xs uppercase tracking-[0.5em]">Digital Graduation Gift</p>

        <h1 className="wc-title font-calligraphy text-4xl leading-[1.6] text-[#D4AF37] sm:text-5xl md:text-6xl">
          أهلاً بك يا المهندس
          <br />
          نواف محمد الكثيري
        </h1>
        <p className="wc-fade muted-en mt-4 text-lg sm:text-xl">
          Welcome, Engineer Nawaf Mohammed Al-Kathiri
        </p>

        <div className="my-10 h-px w-40 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        <p className="wc-sub font-display text-xl text-[#E8E0D4] sm:text-2xl md:text-3xl">
          رحلة نجاح تستحق أن تُخلّد.
        </p>
        <p className="wc-fade muted-en mt-2 text-base sm:text-lg">
          A journey of success worth remembering.
        </p>

        <button
          onClick={handleEnter}
          className="wc-btn gold-btn mt-14 rounded-full px-16 py-4 text-xl font-semibold tracking-[0.3em]"
        >
          ابدأ
          <span className="block text-[0.7rem] font-light tracking-[0.4em]" style={{ color: 'inherit' }}>
            Start
          </span>
        </button>
      </div>
    </div>
  );
}
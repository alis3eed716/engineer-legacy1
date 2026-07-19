import { useEffect, useState } from 'react';
import WelcomeScreen from '@/components/WelcomeScreen';
import Particles from '@/components/Particles';
import Certificate from '@/components/Certificate';
import ChiefSection from '@/components/ChiefSection';
import MediaVault from '@/components/MediaVault';

export default function Home() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 900, once: true, offset: 80, easing: 'ease-out-cubic' });
    }
  }, [entered]);

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: 'var(--obsidian)' }}>
      {!entered && <WelcomeScreen onEnter={() => setEntered(true)} />}

      {/* Ambient particle field behind the main content */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-60">
        <Particles density={40} />
      </div>

      {/* Vignette glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(212,175,55,0.06), transparent 55%)' }}
      />

      <main className="relative z-10">
        {/* Intro line */}
        <header className="flex flex-col items-center px-6 pt-32 text-center sm:pt-40">
          <p data-aos="fade-down" className="muted-en text-xs uppercase tracking-[0.5em]">
            For Engineer Nawaf
          </p>
          <div data-aos="fade-up" className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </header>

        {/* 1. Certificate */}
        <section className="py-24 sm:py-32">
          <SectionLabel ar="وثيقة التكريم" en="The Digital Certificate" />
          <div className="mt-16">
            <Certificate />
          </div>
        </section>

        <Divider />

        {/* 2-5. Identity & Quotes */}
        <section className="py-28 sm:py-36">
          <ChiefSection />
        </section>

        <Divider />

        {/* 6-7. Media vault */}
        <section className="py-28 sm:py-36">
          <SectionLabel ar="خزانة الذكريات" en="The Media Vault" />
          <div className="mt-16">
            <MediaVault />
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 pb-20 pt-16 text-center">
          <div className="mx-auto mb-8 h-px w-40 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
          <p className="font-calligraphy text-2xl text-[#D4AF37]">فريق بح بح</p>
          <p className="muted-en mt-1 text-sm">Bah Bah Squad — 2026</p>
          <p className="font-display mt-6 text-sm text-[#9CA3AF]">
            صُنع بحبٍ، تكريماً للمهندس نواف محمد الكثيري
          </p>
          <p className="muted-en mt-1 text-xs">
            Crafted with love, in honor of Eng. Nawaf Mohammed Al-Kathiri
          </p>
        </footer>
      </main>
    </div>
  );
}

function SectionLabel({ ar, en }) {
  return (
    <div data-aos="fade-up" className="flex flex-col items-center">
      <span className="h-px w-12 bg-[#D4AF37]/60" />
      <h2 className="font-calligraphy mt-4 text-3xl text-[#D4AF37] sm:text-4xl">{ar}</h2>
      <p className="muted-en mt-1 text-sm sm:text-base">{en}</p>
    </div>
  );
}

function Divider() {
  return (
    <div className="flex justify-center">
      <span className="text-[#D4AF37]/40">✦</span>
    </div>
  );
}
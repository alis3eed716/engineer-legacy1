import { useEffect, useRef } from 'react';

/**
 * Digital appreciation certificate — a glassmorphic artifact framed in a double
 * gold border with a metallic light-sweep animation (AOS reveal handled by parent).
 */
export default function Certificate() {
  const sweepRef = useRef(null);

  // Re-trigger light sweep on hover for an interactive metallic reflection.
  useEffect(() => { /* CSS handles the continuous sweep */ }, []);

  return (
    <div className="relative mx-auto w-full max-w-3xl px-4">
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1100"
        className="cert-sweep glass gold-glow relative rounded-[18px] p-2"
      >
        {/* Double gold border */}
        <div className="relative rounded-[14px] border border-[#D4AF37]/70 p-1">
          <div className="relative rounded-[10px] border border-[#D4AF37]/30 px-6 py-14 text-center sm:px-12 sm:py-16">

            {/* Corner flourishes */}
            <Corner className="left-3 top-3 border-l-2 border-t-2" />
            <Corner className="right-3 top-3 border-r-2 border-t-2" />
            <Corner className="bottom-3 left-3 border-b-2 border-l-2" />
            <Corner className="bottom-3 right-3 border-b-2 border-r-2" />

            <p className="muted-en text-[0.7rem] uppercase tracking-[0.5em]">Appreciation Certificate</p>
            <h2 className="font-calligraphy mt-4 text-3xl text-[#D4AF37] sm:text-4xl">شهادة تقدير</h2>

            <div className="mx-auto my-8 h-px w-2/3 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

            <p className="font-display text-lg text-[#E8E0D4] sm:text-xl">
              تُمنح هذه الشهادة بكل حبٍ وفخر إلى
            </p>
            <p className="muted-en mt-1 text-sm">This certificate is presented with pride to</p>

            <h3 className="font-calligraphy my-8 text-4xl text-[#D4AF37] sm:text-5xl">
              المهندس نواف محمد الكثيري
            </h3>
            <p className="muted-en text-sm sm:text-base">Eng. Nawaf Mohammed Al-Kathiri</p>

            <p className="font-display mx-auto mt-8 max-w-xl text-base leading-loose text-[#E8E0D4] sm:text-lg">
              تقديراً لرحلةٍ من التميّز والإبداع في مجال الأمن السيبراني،
              ولقيمٍ نبيلةٍ جعلت منه قائداً وأخاً لا يُنسى.
            </p>
            <p className="muted-en mx-auto mt-3 max-w-md text-sm leading-relaxed">
              In recognition of a journey of excellence in cybersecurity,
              and noble values that made him an unforgettable leader and brother.
            </p>

            <div className="mt-12 flex items-center justify-between text-center">
              <div>
                <div className="h-px w-24 bg-[#D4AF37]/60 mx-auto" />
                <p className="mt-2 font-display text-sm text-[#E8E0D4]">التاريخ</p>
                <p className="muted-en text-xs">2026</p>
              </div>
              <div className="font-calligraphy text-2xl text-[#D4AF37]">فريق بح بح</div>
              <div>
                <div className="h-px w-24 bg-[#D4AF37]/60 mx-auto" />
                <p className="mt-2 font-display text-sm text-[#E8E0D4]">التوقيع</p>
                <p className="muted-en text-xs">Bah Bah Squad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Corner({ className }) {
  return <span className={`absolute h-6 w-6 border-[#D4AF37] ${className}`} />;
}
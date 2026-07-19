/**
 * The "Chief" identity: nickname in calligraphy flanked by gold rules, the
 * "engineer by profession / chief by nature" quote, an original cyber-chief
 * quote referencing the "Bah Bah" squad, and a short appreciation message.
 */
export default function ChiefSection() {
  return (
    <section className="relative mx-auto max-w-4xl px-6">
      {/* Nickname */}
      <div data-aos="fade-up" className="flex flex-col items-center">
        <div className="flex items-stretch gap-6">
          <span className="gold-rule" style={{ height: 120 }} />
          <div className="flex flex-col items-center">
            <span className="text-5xl">👑</span>
            <h2 className="font-calligraphy mt-2 text-6xl leading-tight text-[#D4AF37] sm:text-7xl md:text-8xl">
              العمدة
            </h2>
            <p className="muted-en mt-1 text-lg sm:text-xl">The Chief</p>
          </div>
          <span className="gold-rule" style={{ height: 120 }} />
        </div>
      </div>

      {/* Profession quote */}
      <div data-aos="fade-up" data-aos-delay="150" className="mt-24 text-center">
        <p className="font-display text-2xl leading-relaxed text-[#E8E0D4] sm:text-3xl md:text-4xl">
          «مهندسٌ بالمهنة... عمدةٌ بالفطرة.»
        </p>
        <p className="muted-en mt-3 text-base sm:text-lg">
          "Engineer by profession... Chief by nature."
        </p>
      </div>

      {/* Original cyber-chief quote */}
      <div data-aos="zoom-in" data-aos-delay="200" className="glass mx-auto mt-24 max-w-2xl rounded-2xl p-8 text-center sm:p-12">
        <span className="text-2xl text-[#D4AF37]">❝</span>
        <p className="font-display mt-2 text-2xl leading-loose text-[#E8E0D4] sm:text-3xl">
          حارسٌ للثغورِ في عالمِ الأرقام،<br />
          وقائدٌ للقلوبِ في مَجلسِ «بح بح».
        </p>
        <p className="muted-en mt-5 text-base leading-relaxed sm:text-lg">
          Guardian of the digital frontiers,<br />
          and leader of hearts in the "Bah Bah" council.
        </p>
        <span className="block text-2xl text-[#D4AF37]">❞</span>
      </div>

      {/* Appreciation message */}
      <div data-aos="fade-up" data-aos-delay="150" className="mt-24 text-center">
        <p className="font-display mx-auto max-w-2xl text-xl leading-loose text-[#E8E0D4] sm:text-2xl">
          يا أبا الشباب، ما كانت الليالي تُطاق إلا بوجودك،
          ولا اكتمل فرحٌ إلا وأنت في صدره.
          تبقى — يا العمدة — فخرَنا الذي لا يُنازَع.
        </p>
        <p className="muted-en mx-auto mt-5 max-w-xl text-base leading-relaxed sm:text-lg">
          You made the nights bearable, and no joy was complete without you in its heart.
          You remain — our Chief — our undisputed pride.
        </p>
      </div>
    </section>
  );
}
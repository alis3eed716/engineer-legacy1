const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useEffect, useRef } from 'react';

const IMG_BASE = '/images/';
const VIDEO_URL = '/videos/1.mp4';

const PHOTOS = [
  '1.jpeg',
  '2.jpeg',
  '3.jpeg',
  '4.jpeg',
  '5.jpeg',
  '6.jpeg',
  '7.jpeg',
  '8.jpeg',
  '9.jpeg',
  '10.jpeg',
  '11.jpeg',
  '12.jpeg',
  '13.jpeg',
];

// Vary spans to create a masonry feel.
const SPANS = [
  'sm:col-span-2 sm:row-span-2',
  '',
  '',
  'sm:col-span-2',
  '',
  'sm:col-span-2',
  '',
  '',
  'sm:col-span-2 sm:row-span-2',
  '',
  '',
  '',
];

/**
 * Media vault: one featured cinematic video, then a masonry photo gallery with
 * grayscale→color hover and Fancybox lightbox fullscreen viewing.
 */
export default function MediaVault() {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (!window.Fancybox) return;
    window.Fancybox.bind('[data-fancybox="gallery"]', {
      animated: true,
      showClass: 'f-fadeIn',
      hideClass: 'f-fadeOut',
      Toolbar: { display: { left: [], middle: [], right: ['iterateZoom', 'fullscreen', 'close'] } },
    });
    return () => {
      if (window.Fancybox) window.Fancybox.destroy();
    };
  }, []);

  return (
    <section className="relative mx-auto max-w-6xl px-4">
      {/* Featured video */}
      <div data-aos="fade-up" className="mb-8 text-center">
        <h3 className="font-calligraphy text-3xl text-[#D4AF37] sm:text-4xl">لحظة لا تُنسى</h3>
        <p className="muted-en mt-1 text-sm sm:text-base">An Unforgettable Moment</p>
      </div>

      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="relative mx-auto mb-32 overflow-hidden rounded-3xl gold-glow"
        style={{ border: '1px solid rgba(212,175,55,0.3)' }}
      >
        <div className="aspect-video w-full bg-black">
          <video
            src={VIDEO_URL}
            controls
            playsInline
            className="h-full w-full object-cover"
            poster={`${IMG_BASE}${PHOTOS[0]}`}
          />
        </div>
      </div>

      {/* Gallery */}
      <div data-aos="fade-up" className="mb-8 text-center">
        <h3 className="font-calligraphy text-3xl text-[#D4AF37] sm:text-4xl">معرض الذكريات</h3>
        <p className="muted-en mt-1 text-sm sm:text-base">Gallery of Memories</p>
      </div>

      <div
        ref={galleryRef}
        className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4"
      >
        {PHOTOS.map((p, i) => (
          <a
            key={p}
            href={`${IMG_BASE}${p}`}
            data-fancybox="gallery"
            data-caption="فريق بح بح · Bah Bah Squad"
            className={`gallery-item group relative block overflow-hidden rounded-xl ${SPANS[i % SPANS.length]}`}
          >
            <img
              src={`${IMG_BASE}${p}`}
              alt={`ذكريات ${i + 1}`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </a>
        ))}
      </div>
    </section>
  );
}
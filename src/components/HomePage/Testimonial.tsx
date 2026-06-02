'use client';

import { useState } from 'react';

export default function Testimonial() {
  const testimonials = [
    {
      initials: 'JG',
      name: 'Jonathan Green',
      role: 'CTO, Financial Bank Corp.',
      rating: 5,
      quote: "NetCore didn't just build a network, they engineered a foundation for our next decade of growth. Their technical precision during the Data Center migration was flawless, maintaining 99.9% uptime through the entire transition.",
    },
    {
      initials: 'SJ',
      name: 'Sarah Jenkins',
      role: 'Director of Operations, Global Logistics',
      rating: 5,
      quote: "The fiber optic WAN expansion completely transformed our distribution speeds. Latency dropped by 45%, and the team delivered the full physical deployment two weeks ahead of schedule.",
    },
    {
      initials: 'MV',
      name: 'Marcus Vance',
      role: 'Head of Security, Capital Airport',
      rating: 5,
      quote: "Deploying their AI-integrated CCTV surveillance system solved our terminal blindspots immediately. The installation was seamless and the support team is exceptionally responsive.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const active = testimonials[activeIndex];

  return (
    <section id="testimonial" className="relative bg-[#040812] py-8 sm:py-10 md:py-12 text-white border-t border-white/[0.03]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0d1527]/20 p-8 sm:p-16 backdrop-blur-md">
          {/* Decorative quote mark on background */}
          <div className="absolute right-8 bottom-4 text-zinc-900/40 font-serif text-[180px] leading-none pointer-events-none select-none">
            &rdquo;
          </div>

          <div className="max-w-4xl space-y-8 relative z-10">
            {/* Stars */}
            <div className="flex space-x-1 text-[#00DF89]">
              {[...Array(active.rating)].map((_, i) => (
                <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Quote */}
            <div className="min-h-[140px] sm:min-h-[100px] flex items-center">
              <p className="text-xl sm:text-2xl font-medium leading-relaxed text-zinc-200 transition-all duration-300">
                &ldquo;{active.quote}&rdquo;
              </p>
            </div>

            {/* Client Bio Info & Sliders */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-4 border-t border-white/[0.05]">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#00DF89]/10 border border-[#00DF89]/20 text-[#00DF89] font-bold text-sm">
                  {active.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white transition-all duration-200">{active.name}</h4>
                  <p className="text-xs text-zinc-500 mt-0.5 transition-all duration-200">{active.role}</p>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex space-x-3">
                <button
                  onClick={handlePrev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/20 text-zinc-400 hover:text-white transition-all cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/20 text-zinc-400 hover:text-white transition-all cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

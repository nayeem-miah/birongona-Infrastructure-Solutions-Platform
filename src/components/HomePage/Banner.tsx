'use client';

import Link from 'next/link';

export default function Banner() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#040812]">
      {/* Background Image with Dark Blue Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/server_rack_bg.png')` }}
      />
      
      {/* Overlay Gradients to blend and enhance readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#040812]/95 via-[#040812]/80 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#040812]/40 via-transparent to-[#040812]/80 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="max-w-3xl text-left space-y-6 sm:space-y-8">
          
          {/* Badge Label */}
          <div className="inline-flex items-center space-x-2 rounded-lg border border-[#00DF89]/30 bg-[#00DF89]/10 px-3.5 py-1.5">
            <svg 
              className="h-4 w-4 text-[#00DF89]" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5"
            >
              <rect x="2" y="3" width="20" height="7" rx="1.5" />
              <rect x="2" y="14" width="20" height="7" rx="1.5" />
              <line x1="6" y1="6.5" x2="6.01" y2="6.5" strokeLinecap="round" />
              <line x1="6" y1="17.5" x2="6.01" y2="17.5" strokeLinecap="round" />
            </svg>
            <span className="text-xs font-bold tracking-wider text-[#00DF89] uppercase font-sans">
              INFRASTRUCTURE TIER IV
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
            Data Center Infrastructure<br />
            Solutions
          </h1>

          {/* Description */}
          <p className="max-w-2xl text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">
            Critical Infrastructure for Enterprise Growth. We design and deploy resilient networking 
            foundations that power the next generation of global digital operations.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="#deploy"
              className="inline-flex items-center justify-center rounded-lg bg-[#00DF89] px-6 py-3 text-sm font-bold text-zinc-950 transition-all hover:bg-[#00c578] active:scale-95 shadow-lg shadow-[#00DF89]/10"
            >
              Deploy Solution
            </Link>
            <Link
              href="#specs"
              className="inline-flex items-center justify-center rounded-lg border border-[#00DF89]/30 bg-transparent px-6 py-3 text-sm font-bold text-[#00DF89] transition-all hover:bg-[#00DF89]/10 active:scale-95"
            >
              Technical Specs
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

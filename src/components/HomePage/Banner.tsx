'use client';

import Link from 'next/link';

export default function Banner() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#040812]">
      {/* Background Server Rack Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url('/server_rack_bg.png')` }}
      />
      
      {/* Overlay Gradients for readability and section blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040812]/30 via-transparent to-[#040812] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#040812]/40 via-transparent to-[#040812]/40 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full text-center space-y-6 sm:space-y-8">
        
        {/* Small top label */}
        <div className="inline-block">
          <span className="text-xs font-bold tracking-wider text-[#00DF89] bg-[#00DF89]/10 px-4 py-1.5 rounded-full border border-[#00DF89]/20 backdrop-blur-sm">
            Mission-Critical Availability
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl max-w-4xl mx-auto leading-tight">
          Engineering the Future of Connectivity.
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed font-medium">
          Architecting robust, scalable, and secure network infrastructure for the<br className="hidden sm:inline" />
          modern enterprise. From data centers to complex IP ecosystems.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-[#00DF89] px-7 py-3 text-sm font-bold text-zinc-950 transition-all hover:bg-[#00c578] active:scale-95 shadow-lg shadow-[#00DF89]/15 uppercase tracking-wide"
          >
            Request a Consultation
          </Link>
          <Link
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-[#00DF89]/30 bg-transparent px-7 py-3 text-sm font-bold text-[#00DF89] transition-all hover:bg-[#00DF89]/10 active:scale-95 uppercase tracking-wide"
          >
            Explore Our Solutions
          </Link>
        </div>

      </div>
    </section>
  );
}

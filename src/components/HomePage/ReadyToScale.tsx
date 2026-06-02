'use client';

import Link from 'next/link';

export default function ReadyToScale() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 bg-[#040812] border-t border-white/[0.03]">
      {/* Background Circuit Board Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url('/circuit_board_bg.png')` }}
      />
      
      {/* Overlay for optimal readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#040812]/90 via-[#040812]/60 to-[#040812]/90 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#040812] via-[#040812]/50 to-[#040812] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl leading-tight">
          Ready to Scale Your Infrastructure?
        </h2>
        
        <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">
          Consult with our lead architects to develop a bespoke data center strategy that 
          aligns with your enterprise objectives.
        </p>

        <div className="pt-4 flex justify-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#00DF89] px-8 py-3.5 text-sm font-bold text-zinc-950 transition-all hover:bg-[#00c578] active:scale-95 shadow-lg shadow-[#00DF89]/10"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

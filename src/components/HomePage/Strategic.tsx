'use client';

export default function StrategicOutcomes() {
  const outcomes = [
    {
      title: '99.999% Reliability',
      description: 'Achieve "Five Nines" availability with distributed redundant architectures designed for continuous fail-safe performance.',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l8.982-11.795H12l.813-5.109L3.818 15.904h5.995z" />
        </svg>
      ),
    },
    {
      title: 'Fluid Scalability',
      description: 'Modular growth patterns that allow for seamless compute and storage expansion without service interruption or architectural bottlenecks.',
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
    },
    {
      title: 'Optimal Efficiency',
      description: 'Maximize power utility and minimize thermal waste with smart environmental sensors and high-efficiency power distribution units.',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="strategic-outcomes" className="relative bg-[#040812] py-24 sm:py-32 text-white border-t border-white/[0.03]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Strategic Outcomes
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
            Quantifiable improvements in uptime, efficiency, and resource utilization.
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {outcomes.map((outcome, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-2xl border border-white/[0.05] bg-[#0d1527]/10 p-8 hover:border-white/10 hover:bg-white/[0.03] transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#00DF89]/10 text-[#00DF89] group-hover:scale-105 transition-transform duration-200">
                {outcome.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4">
                {outcome.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-zinc-500 group-hover:text-zinc-400 transition-colors leading-relaxed">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

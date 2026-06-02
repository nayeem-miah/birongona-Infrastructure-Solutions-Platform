'use client';

import Link from 'next/link';

export default function Stats() {
  const stats = [
    { value: '500+', label: 'PROJECTS COMPLETED' },
    { value: '15+', label: 'YEARS EXPERIENCE' },
    { value: '99.99%', label: 'UPTIME GUARANTEED' },
  ];

  return (
    <section id="stats" className="relative bg-[#040812] py-24 sm:py-32 text-white border-t border-white/[0.03]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Area: Content and Numbers */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Stabilizing the Enterprise Stack.
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-zinc-400">
                NetCore infrastructure solutions provide the architectural backbone for global businesses. 
                Our approach combines rigorous engineering standards with modern intelligence to ensure 
                your mission-critical systems never experience a second of downtime.
              </p>
            </div>

            {/* Metrics List */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/[0.05]">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-2">
                  <p className="text-3xl sm:text-4xl font-extrabold text-[#00DF89]">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs font-bold tracking-wider text-zinc-500 uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Area: Showcase Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            
            {/* Card 1 */}
            <Link href="#contact" className="group flex items-center space-x-5 rounded-2xl border border-white/[0.05] bg-[#0d1527]/10 p-6 hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#00DF89]/10 text-[#00DF89] group-hover:scale-105 transition-transform duration-250">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-[#00DF89] transition-colors">
                  Dual-Path Fiber Ring
                </h3>
                <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                  High-availability redundant routing architectures.
                </p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="#contact" className="group flex items-center space-x-5 rounded-2xl border border-white/[0.05] bg-[#0d1527]/10 p-6 hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#00DF89]/10 text-[#00DF89] group-hover:scale-105 transition-transform duration-250">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856a9 9 0 0113.788 0m-16.97-3.182a12.75 12.75 0 0120.125 0M12 18.75h.008v.008H12V18.75z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-[#00DF89] transition-colors">
                  Edge Networking
                </h3>
                <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                  Decentralized routing and ultra-low latency hubs.
                </p>
              </div>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}

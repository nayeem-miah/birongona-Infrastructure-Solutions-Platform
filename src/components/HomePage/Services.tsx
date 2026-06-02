'use client';

import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Data Center Infrastructure',
      description: 'Complete physical deployment of server racks, fiber cabling, and cooling topologies.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5m0-6a3 3 0 013-3m-3 3a3 3 0 100 6M5.25 5.25h13.5m-13.5 0a3 3 0 00-3 3m3-3a3 3 0 110 6h13.5m0-6a3 3 0 003 3m-3-3a3 3 0 110 6" />
        </svg>
      ),
    },
    {
      title: 'Advanced CCTV Systems',
      description: 'AI-powered surveillance cameras with high capacity storage and real-time analytics integration.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Enterprise IP Telephony',
      description: 'Managed, scale-ready telephonic infrastructures with secure routing and virtual PBX.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.122-4.1-6.924-6.924l1.293-.97c.362-.272.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
    },
    {
      title: 'Fire Suppression',
      description: 'Clean agent gaseous fire suppression systems designed for sensitive electronic environments.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="relative bg-[#040812] py-8 sm:py-10 md:py-12 text-white border-t border-white/[0.03]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Core Infrastructure Services.
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Specialized engineering for complex architectural requirements.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="#contact"
              className="inline-flex items-center text-sm font-semibold text-[#00DF89] hover:underline gap-1.5"
            >
              View Services Details
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <Link
              key={idx}
              href="#contact"
              className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.05] bg-[#0d1527]/10 p-8 hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300 min-h-[280px]"
            >
              <div className="space-y-6">
                {/* Icon */}
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#00DF89]/10 text-[#00DF89] group-hover:scale-105 transition-transform duration-250">
                  {service.icon}
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#00DF89] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Bottom arrow */}
              <div className="pt-6 flex justify-end">
                <span className="text-zinc-600 group-hover:text-[#00DF89] transition-colors duration-300">
                  <svg className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

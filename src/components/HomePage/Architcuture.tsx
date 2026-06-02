'use client';

import { useState } from 'react';

export default function Architecture() {
  const [urgency, setUrgency] = useState<'Low' | 'Medium' | 'High'>('Medium');
  const [companyName, setCompanyName] = useState('');
  const [scope, setScope] = useState('Full Data Center Build');
  const [requirements, setRequirements] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ companyName, scope, urgency, requirements });
    alert('Thank you! Your proposal generation request has been submitted.');
  };

  return (
    <section id="architecture" className="relative bg-[#040812] py-24 sm:py-32 text-white border-t border-white/[0.03]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Content and Features */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
                Architecture of Resilience
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-zinc-400">
                Our data center solutions are engineered at the intersection of performance and reliability. In an era 
                where downtime translates directly to significant fiscal loss, we prioritize a Tier IV architectural 
                philosophy. Every component—from the foundational power delivery to the precision environmental 
                controls—is designed with N+1 redundancy to ensure continuous operation under any failure scenario.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-zinc-400">
                We specialize in hyper-dense rack configurations and modular scaling strategies. By leveraging 
                advanced cooling topologies like liquid-to-chip and hot/cold aisle containment, we optimize Power Usage 
                Effectiveness (PUE) to industry-leading levels, significantly reducing long-term operational overhead 
                while supporting high-performance computing (HPC) workloads.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              
              {/* Feature 1: Redundant Power Systems */}
              <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-6 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <svg className="h-5 w-5 text-[#00DF89]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                  <h3 className="text-base font-bold text-white">Redundant Power Systems</h3>
                </div>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                  Dual-feed utility power with multi-megawatt UPS backup and on-site generation for zero-latency failover.
                </p>
              </div>

              {/* Feature 2: Precision Cooling */}
              <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-6 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <svg className="h-5 w-5 text-[#00DF89]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3m15.364-6.364L5.636 17.636m12.728 0L5.636 5.636" />
                  </svg>
                  <h3 className="text-base font-bold text-white">Precision Cooling</h3>
                </div>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                  Intelligent HVAC systems with AI-driven thermal management to maintain optimal operating environments.
                </p>
              </div>

              {/* Feature 3: Physical Security */}
              <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-6 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <svg className="h-5 w-5 text-[#00DF89]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <h3 className="text-base font-bold text-white">Physical Security</h3>
                </div>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                  Biometric access control, 24/7 kinetic surveillance, and multi-layered perimeter hardening.
                </p>
              </div>

              {/* Feature 4: Carrier Neutrality */}
              <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-6 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <svg className="h-5 w-5 text-[#00DF89]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5m0-6a3 3 0 013-3m-3 3a3 3 0 100 6M5.25 5.25h13.5m-13.5 0a3 3 0 00-3 3m3-3a3 3 0 110 6h13.5m0-6a3 3 0 003 3m-3-3a3 3 0 110 6" />
                  </svg>
                  <h3 className="text-base font-bold text-white">Carrier Neutrality</h3>
                </div>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                  Ultra-low latency connectivity via multiple Tier-1 providers with diverse entry points.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Request Quotation Form */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-[#0d1527]/40 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Request Quotation</h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
                Submit your project parameters for a high-fidelity infrastructure assessment.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Company Name */}
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">
                    Company Name
                  </label>
                  <input
                    id="company"
                    type="text"
                    required
                    placeholder="Enter organization name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#00DF89] focus:ring-1 focus:ring-[#00DF89] transition-colors"
                  />
                </div>

                {/* Project Scope */}
                <div className="space-y-2">
                  <label htmlFor="scope" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">
                    Project Scope
                  </label>
                  <div className="relative">
                    <select
                      id="scope"
                      value={scope}
                      onChange={(e) => setScope(e.target.value)}
                      className="w-full appearance-none rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00DF89] focus:ring-1 focus:ring-[#00DF89] transition-colors"
                    >
                      <option className="bg-[#0d1527]" value="Full Data Center Build">Full Data Center Build</option>
                      <option className="bg-[#0d1527]" value="Colocation Setup">Colocation Setup</option>
                      <option className="bg-[#0d1527]" value="Network Expansion">Network Expansion</option>
                      <option className="bg-[#0d1527]" value="Disaster Recovery">Disaster Recovery</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Urgency */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">
                    Urgency
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Low', 'Medium', 'High'] as const).map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setUrgency(level)}
                        className={`rounded-lg py-2.5 text-xs font-semibold border transition-all ${
                          urgency === level
                            ? 'border-[#00DF89]/50 bg-[#00DF89]/10 text-[#00DF89]'
                            : 'border-white/10 bg-transparent text-zinc-400 hover:text-white hover:border-white/20'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Infrastructure Requirements */}
                <div className="space-y-2">
                  <label htmlFor="requirements" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">
                    Infrastructure Requirements
                  </label>
                  <textarea
                    id="requirements"
                    rows={4}
                    placeholder="Rack density, power requirements..."
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#00DF89] focus:ring-1 focus:ring-[#00DF89] transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full items-center justify-center rounded-lg bg-[#00DF89] py-3.5 text-sm font-bold text-zinc-950 hover:bg-[#00c578] transition-colors active:scale-98 shadow-lg shadow-[#00DF89]/10"
                >
                  Generate Proposal
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Partners Section at Bottom */}
        <div className="mt-24 pt-10 border-t border-white/[0.05] space-y-6">
          <h4 className="text-xs font-bold text-zinc-600 uppercase tracking-widest">
            Strategic Hardware Partners
          </h4>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-6 text-zinc-500 text-sm font-semibold select-none">
            
            {/* Cisco Systems */}
            <div className="flex items-center space-x-2.5 hover:text-white transition-colors">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <rect x="3" y="15" width="2" height="4" />
                <rect x="6" y="11" width="2" height="8" />
                <rect x="9" y="8" width="2" height="11" />
                <rect x="12" y="5" width="2" height="14" />
                <rect x="15" y="8" width="2" height="11" />
                <rect x="18" y="11" width="2" height="8" />
                <rect x="21" y="15" width="2" height="4" />
              </svg>
              <span>CISCO SYSTEMS</span>
            </div>

            {/* Nvidia AI */}
            <div className="flex items-center space-x-2.5 hover:text-white transition-colors">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2zm1 14.5a3.5 3.5 0 113.5-3.5 3.5 3.5 0 01-3.5 3.5zm-5-3.5a1.5 1.5 0 111.5-1.5 1.5 1.5 0 01-1.5 1.5z" />
              </svg>
              <span>NVIDIA AI</span>
            </div>

            {/* Dell EMC */}
            <div className="flex items-center space-x-2.5 hover:text-white transition-colors">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              <span>DELL EMC</span>
            </div>

            {/* Intel Xeon */}
            <div className="flex items-center space-x-2.5 hover:text-white transition-colors">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <rect x="9" y="9" width="6" height="6" rx="0.5" />
                <line x1="12" y1="2" x2="12" y2="4" />
                <line x1="12" y1="20" x2="12" y2="22" />
                <line x1="2" y1="12" x2="4" y2="12" />
                <line x1="20" y1="12" x2="22" y2="12" />
              </svg>
              <span>INTEL XEON</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

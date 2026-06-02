'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    scope: 'Data Center Solutions',
    message: '',
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const scopes = [
    'Data Center Solutions',
    'Network Security SLA',
    'CCTV & Surveillance',
    'IP Telephony Integration',
    'Fire Suppression Design',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert('Thank you! Your consultation request has been submitted.');
  };

  return (
    <section id="contact" className="relative bg-[#040812] py-10 md:py-20 sm:py-15 lg:py-10 text-white border-t border-white/[0.03]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready for a Consultation?
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-zinc-400">
                Schedule a session with our lead engineers. We'll assess your current infrastructure
                and outline a roadmap for optimization and future scaling.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-5">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00DF89]/10 text-[#00DF89]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-zinc-300 font-medium">
                  info@birongona.it
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00DF89]/10 text-[#00DF89]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.122-4.1-6.924-6.924l1.293-.97c.362-.272.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-zinc-300 font-medium">
                  +880 1849317388
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00DF89]/10 text-[#00DF89]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25g-7.5-4.108-7.5-11.25A7.5 7.5 0 1119.5 10.5z" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-zinc-300 font-medium leading-relaxed">
                  Dhaka, Bangladesh
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-[#0d1527]/40 p-6 sm:p-8 backdrop-blur-md">
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Two Column Input (Name & Company) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#00DF89] focus:ring-1 focus:ring-[#00DF89] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">
                      Company
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter company name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#00DF89] focus:ring-1 focus:ring-[#00DF89] transition-colors"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#00DF89] focus:ring-1 focus:ring-[#00DF89] transition-colors"
                  />
                </div>

                {/* Project Scope (Custom Dropdown) */}
                <div className="space-y-2 relative">
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">
                    Project Scope
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full text-left flex items-center justify-between rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00DF89] focus:ring-1 focus:ring-[#00DF89] transition-colors cursor-pointer"
                    >
                      <span>{formData.scope}</span>
                      <svg className={`h-4 w-4 text-zinc-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                      </svg>
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute left-0 right-0 mt-2 z-50 rounded-lg border border-white/10 bg-[#0d1527] shadow-xl max-h-60 overflow-y-auto">
                        {scopes.map((scopeItem) => (
                          <button
                            key={scopeItem}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, scope: scopeItem });
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer ${
                              formData.scope === scopeItem
                                ? 'bg-[#00DF89]/10 text-[#00DF89] font-semibold'
                                : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                            }`}
                          >
                            {scopeItem}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Brief */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">
                    Project Brief
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your infrastructure requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#00DF89] focus:ring-1 focus:ring-[#00DF89] transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#00DF89] py-3.5 text-sm font-bold text-zinc-950 hover:bg-[#00c578] transition-all duration-200 active:scale-98 shadow-lg shadow-[#00DF89]/10"
                >
                  Send Request
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

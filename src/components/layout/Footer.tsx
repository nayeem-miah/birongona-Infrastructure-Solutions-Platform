'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-[#070b14] py-16 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-wider text-[#00DF89] uppercase">
              BIRONGONA IT
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              Precision-engineered infrastructure for the world's most demanding digital workloads.
            </p>
          </div>

          {/* Core Services Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase">
              CORE SERVICES
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#services" className="text-zinc-500 hover:text-[#00DF89] transition-colors">
                  Network Security
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-zinc-500 hover:text-[#00DF89] transition-colors">
                  Cloud Migration
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-zinc-500 hover:text-[#00DF89] transition-colors">
                  SLA Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase">
              RESOURCES
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#stats" className="text-zinc-500 hover:text-[#00DF89] transition-colors">
                  Compliance
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-zinc-500 hover:text-[#00DF89] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-zinc-500 hover:text-[#00DF89] transition-colors">
                  Tech Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Headquarters Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase">
              HEADQUARTERS
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              Dhaka, Bangladesh<br />
              Infrastructure Operations Hub
            </p>
            {/* Social / Info Icons */}
            <div className="flex space-x-3.5 pt-2">
              <button 
                className="text-[#00DF89] hover:text-white transition-colors" 
                aria-label="Global site"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </button>
              <button 
                className="text-[#00DF89] hover:text-white transition-colors" 
                aria-label="Network topology"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="18" cy="6" r="3" />
                  <circle cx="12" cy="18" r="3" />
                  <line x1="12" y1="12" x2="6" y2="6" />
                  <line x1="12" y1="12" x2="18" y2="6" />
                  <line x1="12" y1="12" x2="12" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright centered */}
        <div className="mt-16 pt-8 border-t border-white/[0.03] text-center space-y-2">
          <p className="text-sm text-zinc-500">
            &copy; 2024 Birongona IT Infrastructure Solutions. Engineered for stability.
          </p>
          <p className="text-xs text-zinc-600">
            Developed by{' '}
            <Link 
              href="https://nayeem-miah.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#00DF89] hover:underline"
            >
              Md Nayeem
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

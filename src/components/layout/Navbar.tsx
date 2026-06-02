'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Services');

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#stats' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Insights', href: '#testimonial' },
    { name: 'About', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-[#0d1527] shadow-lg shadow-black/25">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-extrabold tracking-wider text-[#00DF89] font-sans">
                BIRONGONA IT
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`relative py-5 text-sm font-semibold transition-all duration-200 ${
                  activeItem === item.name
                    ? 'text-[#00DF89]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item.name}
                {activeItem === item.name && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00DF89]" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Custom Connection Icon */}
            <Link 
              href="#services" 
              className="text-[#00DF89] hover:text-white/80 transition-colors p-1.5 rounded-lg hover:bg-white/5 cursor-pointer" 
              aria-label="Connection link"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" d="M9 12h6" />
              </svg>
            </Link>

            {/* Custom Bar Chart Icon */}
            <Link 
              href="#stats" 
              className="text-[#00DF89] hover:text-white/80 transition-colors p-1.5 rounded-lg hover:bg-white/5 cursor-pointer" 
              aria-label="Performance stats"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
                <path d="M3 18l6-6 4 4 8-8" />
              </svg>
            </Link>

            {/* CTA Button */}
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#00DF89] px-5 py-2 text-sm font-bold text-zinc-950 transition-all hover:bg-[#00c578] active:scale-95 shadow-md shadow-[#00DF89]/10"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-400 hover:bg-white/10 hover:text-white focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/[0.08] bg-[#0d1527]" id="mobile-menu">
          <div className="space-y-1 px-2 pb-4 pt-3 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveItem(item.name);
                  setIsOpen(false);
                }}
                className={`block rounded-lg px-3 py-2 text-base font-semibold transition-colors ${
                  activeItem === item.name
                    ? 'bg-[#00DF89]/10 text-[#00DF89]'
                    : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Actions */}
            <div className="mt-4 pt-4 border-t border-white/[0.05] px-3 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Link 
                  href="#services" 
                  onClick={() => setIsOpen(false)}
                  className="text-[#00DF89] hover:text-white/80 transition-colors p-2 rounded-lg bg-white/5 cursor-pointer" 
                  aria-label="Connection link"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" d="M9 12h6" />
                  </svg>
                </Link>
                <Link 
                  href="#stats" 
                  onClick={() => setIsOpen(false)}
                  className="text-[#00DF89] hover:text-white/80 transition-colors p-2 rounded-lg bg-white/5 cursor-pointer" 
                  aria-label="Performance stats"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                    <path d="M3 18l6-6 4 4 8-8" />
                  </svg>
                </Link>
              </div>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center rounded-lg bg-[#00DF89] py-3 text-center text-sm font-bold text-zinc-950 hover:bg-[#00c578] transition-colors"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

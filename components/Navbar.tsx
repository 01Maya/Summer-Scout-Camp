'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Program', href: '#program' },
    { label: 'Features', href: '#features' },
    { label: 'Activities', href: '#activities' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    setIsOpen(false);
  };

  return (
    <>
      {/* MAIN NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-olive-green border-b-2 border-accent-orange ${
          scrolled ? 'shadow-2xl backdrop-blur-md' : 'shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* LOGO */}
            <div
              onClick={scrollToTop}
              className="flex items-center gap-3 cursor-pointer group select-none"
            >
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-accent-orange flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-all duration-300 ease-out">
                ⛺
              </div>

              <span className="text-lg md:text-2xl font-bold text-warm-beige group-hover:text-accent-orange transition-all duration-300">
                Scout Camp
              </span>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-warm-beige font-semibold text-sm lg:text-base hover:text-white transition-all duration-300 group"
                >
                  {link.label}

                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-accent-orange transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden md:flex items-center">
              <div
                onClick={() => alert('Booking page opening...')}
                className="px-6 py-2.5 bg-accent-orange text-white rounded-full font-semibold cursor-pointer hover:bg-rust-red transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl active:scale-95 shadow-md"
              >
                Book Now
              </div>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                aria-label="Toggle Menu"
                className="p-2 rounded-lg text-warm-beige hover:text-accent-orange hover:bg-white/10 transition-all duration-300"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMounted && (
        <>
          {/* BACKDROP */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
          )}

          {/* MOBILE PANEL */}
          <div
            className={`fixed top-16 left-0 right-0 bottom-0 z-50 bg-olive-green md:hidden transition-all duration-500 ease-in-out ${
              isOpen
                ? 'translate-y-0 opacity-100'
                : '-translate-y-full opacity-0 pointer-events-none'
            }`}
          >
            <div className="flex flex-col px-5 py-6 space-y-3 overflow-y-auto h-full">

              {/* MOBILE LINKS */}
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleNavClick}
                  className="w-full px-5 py-4 rounded-xl text-warm-beige font-semibold text-base hover:bg-accent-orange/20 hover:text-white transition-all duration-300 border border-white/5"
                >
                  {link.label}
                </a>
              ))}

              {/* MOBILE CTA */}
              <div
                onClick={() => {
                  handleNavClick();
                  alert('Booking page opening...');
                }}
                className="w-full mt-4 px-6 py-4 bg-accent-orange text-white text-center font-bold rounded-xl cursor-pointer hover:bg-rust-red transition-all duration-300 hover:shadow-xl active:scale-95"
              >
                Book Now
              </div>

            </div>
          </div>
        </>
      )}
    </>
  );
}
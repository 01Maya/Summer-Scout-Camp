'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Send } from 'lucide-react';

export default function FooterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 2000);
  };

  const quickLinks = [
    { label: 'Program', href: '#program' },
    { label: 'Activities', href: '#activities' },
    { label: 'Dates & Prices', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const policies = [
    { label: 'Payment Policy', href: '#' },
    { label: 'Refund Policy', href: '#' },
    { label: 'Return Policy', href: '#' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer id="contact" className="bg-olive-green text-warm-beige relative overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 opacity-15 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary-green-light blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-warm-beige blur-3xl animate-bounce-soft" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-primary-green-medium opacity-10 blur-3xl animate-sway" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
            {/* Brand Column */}
            <div className="space-y-4 animate-slideInUp">
              <div className="flex items-center gap-3 animate-slideInLeft">
                <div className="w-10 h-10 rounded-full bg-accent-orange flex items-center justify-center text-cream-bg font-bold text-lg">
                  ⛺
                </div>
                <h3 className="text-2xl font-bold">Scout Camp</h3>
              </div>
              <p className="text-warm-beige/80 text-sm leading-relaxed animate-slideInLeft stagger-1">
                Creating unforgettable summer adventures for scouts of all ages. Join us and discover the great outdoors!
              </p>
              {/* Social Icons */}
              <div className="flex gap-3 pt-4 animate-slideInLeft stagger-2">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-accent-orange/30 flex items-center justify-center text-warm-beige hover:bg-accent-orange/80 transition-all duration-300 ease-out hover:scale-110 active:scale-95 group shadow-lg animate-slideInUp"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-slideInUp stagger-1">
              <h4 className="font-bold text-lg mb-4 text-accent-orange uppercase">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-warm-beige/80 hover:text-white transition-colors duration-300 ease-out relative group inline-block"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-orange group-hover:w-full transition-all duration-300 ease-out" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies */}
            <div className="animate-slideInUp stagger-2">
              <h4 className="font-bold text-lg mb-4 text-accent-orange uppercase">
                Policies
              </h4>
              <ul className="space-y-2">
                {policies.map((policy) => (
                  <li key={policy.label}>
                    <a
                      href={policy.href}
                      className="text-warm-beige/80 hover:text-white transition-colors duration-300 ease-out relative group inline-block"
                    >
                      {policy.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-orange group-hover:w-full transition-all duration-300 ease-out" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="animate-slideInUp stagger-3 space-y-4">
              <h4 className="font-bold text-lg text-accent-orange uppercase">
                Contact Us
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 group">
                  <Phone size={18} className="text-accent-orange shrink-0 mt-1" />
                  <div>
                    <p className="text-warm-beige/80 text-sm group-hover:text-accent-orange transition-colors duration-300 ease-out">
                      +1 (555) 123-4567
                    </p>
                    <p className="text-warm-beige/80 text-sm group-hover:text-accent-orange transition-colors duration-300 ease-out">
                      +1 (555) 123-4568
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <Mail size={18} className="text-accent-orange shrink-0 mt-1" />
                  <p className="text-warm-beige/80 text-sm group-hover:text-accent-orange transition-colors duration-300 ease-out">
                    info@scoutcamp.com
                  </p>
                </div>
                <div className="flex items-start gap-3 group">
                  <MapPin size={18} className="text-accent-orange shrink-0 mt-1" />
                  <p className="text-warm-beige/80 text-sm group-hover:text-accent-orange transition-colors duration-300 ease-out">
                    123 Scout Trail, Forest Park, CA 94000
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="grid md:grid-cols-2 gap-8 py-8 border-t border-warm-beige/20 mb-8 animate-slideInUp">
            <div className="animate-slideInLeft">
              <h4 className="font-bold text-lg text-accent-orange mb-2 uppercase">
                Newsletter
              </h4>
              <p className="text-warm-beige/80 text-sm">
                Don&apos;t miss out. Sign up now!
              </p>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="animate-slideInRight">
              <div className="flex gap-2 flex-col sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-2 bg-warm-beige/10 border border-warm-beige/30 rounded-full text-warm-beige placeholder-warm-beige/50 focus:outline-none focus:border-accent-orange transition-all duration-300 ease-out focus:ring-2 focus:ring-accent-orange/20"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-accent-orange text-white rounded-full font-bold hover:bg-muted-gold transition-all duration-300 ease-out hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg whitespace-nowrap animate-slideInRight hover:animate-glow-pulse"
                >
                  <Send size={16} />
                  <span className="hidden sm:inline">Sign Up</span>
                </button>
              </div>
              {submitted && (
                <p className="text-accent-orange text-sm mt-2 animate-slideInUp font-semibold">
                  ✓ Thanks for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-warm-beige/20 py-6 px-3 sm:px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-warm-beige/60 text-xs md:text-sm">
            <p>© 2024 Summer Scout Camp. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent-orange transition-colors duration-300 ease-out">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-accent-orange transition-colors duration-300 ease-out">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

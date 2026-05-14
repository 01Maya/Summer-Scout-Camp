'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProgramSection from '@/components/ProgramSection';
import FeaturesSection from '@/components/FeaturesSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import TestimonialSection from '@/components/TestimonialSection';
import DatesAndPricesSection from '@/components/DatesAndPricesSection';
import GallerySection from '@/components/GallerySection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const scrollPercent = totalScroll > 0 ? (scrolled / totalScroll) * 100 : 0;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-cream-light relative overflow-x-hidden w-full pt-16 md:pt-20">
      {/* Scroll progress indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-linear-to-r from-accent-orange to-rust-red z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />
      <HeroSection />
      <ProgramSection />
      <FeaturesSection />
      <ActivitiesSection />
      <TestimonialSection />
      <DatesAndPricesSection />
      <GallerySection />
      <FooterSection />
    </main>
  );
}

'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.4);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const polaroidPhotos = [
    { id: 1, image: '/images/hero-polaroid-1.jpg', title: 'Adventure', delay: 'stagger-1' },
    { id: 2, image: '/images/hero-polaroid-2.jpg', title: 'Camp Fire', delay: 'stagger-2' },
    { id: 3, image: '/images/hero-polaroid-3.jpg', title: 'Trek', delay: 'stagger-3' },
    { id: 4, image: '/images/hero-polaroid-4.jpg', title: 'Tent House', delay: 'stagger-4' },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-cream-light via-beige to-cream-bg overflow-hidden pt-16 md:pt-20" id="home">
      {/* Animated Background with Image */}
      <div className="absolute inset-0">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage: 'url(/images/hero-scouts.jpg)',
            transform: `translateY(${offsetY * 0.3}px) scale(1.1)`,
            transition: 'transform 0.3s ease-out',
            backgroundAttachment: 'fixed',
          }}
        />
        {/* Cream/Beige Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream-light/80 via-beige/70 to-cream-bg/90" />
        {/* Green Accent Gradient */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: 'linear-gradient(135deg, rgba(95, 119, 107, 0.3) 0%, rgba(200, 105, 74, 0.2) 100%)',
            transform: `translateY(${offsetY * 0.2}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #5F776B 0%, transparent 70%)',
            transform: `translateY(${offsetY * 0.15}px)`,
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative min-h-screen flex items-center justify-center px-4 py-12">
        {/* Main Hero Card */}
        <div className="w-full max-w-2xl">
          {/* Cream/Gold Background Card */}
          <div className="bg-gradient-to-br from-cream-light to-warm-beige rounded-3xl p-6 md:p-12 shadow-2xl relative transform transition-all duration-500 hover:scale-105 border-2 border-gold-yellow/30 animate-scaleIn">
            {/* Decorative Tape Pieces */}
            <div className="absolute -top-3 left-8 w-12 h-5 bg-accent-orange opacity-70 rounded-sm transform -rotate-12 shadow-md" />
            <div className="absolute -top-3 right-8 w-12 h-5 bg-primary-green opacity-60 rounded-sm transform rotate-12 shadow-md" />

            {/* Top Navigation Hint */}
            <div className="flex items-center justify-center gap-3 mb-6 md:mb-8 text-xs md:text-sm font-bold text-white animate-slideInUp drop-shadow">
              <span className="inline-block w-2 h-2 rounded-full bg-accent-orange" />
              <span>EXPLORE • LEARN • ADVENTURE</span>
              <span className="inline-block w-2 h-2 rounded-full bg-accent-orange" />
            </div>

            {/* Main Title with Animations */}
            <h1 className="text-4xl md:text-7xl font-black text-center mb-6 md:mb-8 leading-tight drop-shadow-lg">
              <div className="animate-slideInDown">
                <span className="text-primary-green block drop-shadow-md">SUMMER</span>
              </div>
              <div className="animate-slideInDown" style={{ animationDelay: '100ms' }}>
                <span className="text-[#C8694A] block drop-shadow-md">SCOUT</span>
              </div>
              <div className="animate-slideInDown" style={{ animationDelay: '200ms' }}>
                <span className="text-accent-orange block drop-shadow-md">CAMP</span>
              </div>
            </h1>

            {/* Hanging Polaroid Photos */}
            <div className="relative h-28 md:h-40 my-8 md:my-12 flex items-end justify-center gap-2 md:gap-4">
              {/* Rope Lines */}
              <div className="absolute top-0 left-1/4 w-1 h-32 md:h-44 bg-soft-brown opacity-40" />
              <div className="absolute top-0 right-1/4 w-1 h-32 md:h-44 bg-soft-brown opacity-40" />

              {/* Polaroid Cards */}
              {polaroidPhotos.map((photo, idx) => (
                <div
                  key={photo.id}
                  className={`w-14 md:w-20 h-16 md:h-28 bg-white rounded-sm shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-out hover:scale-110 hover:-rotate-0 cursor-pointer animate-float overflow-hidden ${
                    photo.delay
                  }`}
                  style={{
                    transform: `rotate(${-5 + (idx * 4)}deg)`,
                    transformOrigin: 'center bottom',
                  }}
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-4/5 object-cover"
                  />
                  <div className="w-full h-1/5 bg-white flex items-center justify-center text-[8px] md:text-xs text-[#C8694A] font-semibold">
                    {photo.title}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Divider */}
            <div className="my-6 md:my-8 flex items-center gap-4 animate-slideInUp" style={{ animationDelay: '300ms' }}>
              <div className="flex-1 h-0.5 bg-accent-orange opacity-60" />
              <span className="text-accent-orange text-xl">✦</span>
              <div className="flex-1 h-0.5 bg-accent-orange opacity-60" />
            </div>

            {/* Description Text */}
            <p className="text-center text-primary-green text-sm md:text-base leading-relaxed mb-8 md:mb-10 font-medium animate-slideInUp drop-shadow" style={{ animationDelay: '400ms' }}>
              An exciting <span className="text-gold-yellow font-bold">adventure</span> in the world of <span className="text-accent-orange font-bold">educational games</span>, <span className="text-gold-yellow font-bold">new friends</span> and <span className="text-accent-orange font-bold">discoveries</span> is waiting for you. Join us for an <span className="text-rust-red font-bold">unforgettable summer</span>!
            </p>

            {/* CTA Button with Glow Effect */}
            <div className="flex justify-center animate-slideInUp" style={{ animationDelay: '500ms' }}>
              <button 
                onClick={() => alert('Booking portal will open soon! Enter your details to reserve your spot at Scout Camp 2024!')}
                className="px-8 md:px-10 py-3 md:py-4 bg-accent-orange text-white font-bold rounded-full hover:bg-rust-red transition-all duration-300 ease-out hover:scale-110 hover:shadow-2xl active:scale-95 uppercase text-xs md:text-sm tracking-wide shadow-lg hover:animate-glow-pulse animate-glow-pulse"
              >
                Book Your Place
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Accent Elements */}
      <div className="absolute top-1/4 left-4 md:left-12 w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-warm-beige opacity-20 animate-float" />
      <div className="absolute bottom-1/4 right-4 md:right-12 w-12 h-12 md:w-20 md:h-20 rounded-full bg-accent-orange opacity-10 animate-bounce-soft" />
    </section>
  );
}

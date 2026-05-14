'use client';

import { useState, useRef, useEffect } from 'react';

export default function GallerySection() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const galleryImages = [
    { id: 1, gradient: 'from-warm-beige to-accent-orange', delay: 'stagger-1' },
    { id: 2, gradient: 'from-primary-green to-soft-brown', delay: 'stagger-2' },
    { id: 3, gradient: 'from-accent-orange to-soft-brown', delay: 'stagger-3' },
    { id: 4, gradient: 'from-light-beige to-warm-beige', delay: 'stagger-4' },
    { id: 5, gradient: 'from-primary-green to-muted-gold', delay: 'stagger-5' },
    { id: 6, gradient: 'from-warm-beige to-soft-brown', delay: 'stagger-6' },
  ];

  return (
    <section 
      id="gallery" 
      className="relative py-8 md:py-16 lg:py-28 px-4 bg-cream-light"
      ref={sectionRef}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-warm-beige opacity-10 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent-orange opacity-5 blur-3xl animate-bounce-soft" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className={`mb-12 md:mb-16 text-center ${isVisible ? 'animate-slideInUp' : ''}`}>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            <span className="text-[#C8694A] animate-slideInLeft">HOW</span>
            {' '}
            <span className="text-primary-green animate-slideInRight stagger-1">IT WAS</span>
          </h2>
          <div className="w-20 h-1.5 bg-accent-orange rounded-full mx-auto animate-slideInUp stagger-2" />
        </div>

        {/* Mobile Grid (Responsive) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((img, idx) => (
              <div
                key={img.id}
                className={`${
                  isVisible ? 'animate-slideInUp' : ''
                } ${img.delay}`}
                onMouseEnter={() => setHoveredImage(img.id)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="relative group h-48 md:h-56">
                {/* Tape Decorations */}
                <div className="absolute -top-3 left-3 w-10 h-4 bg-accent-orange opacity-70 rounded-sm transform -rotate-12 z-10 shadow-md hidden md:block" />
                <div className="absolute -bottom-3 right-3 w-10 h-4 bg-primary-green opacity-70 rounded-sm transform rotate-12 z-10 shadow-md hidden md:block" />

                {/* Image Card */}
                <div
                  className={`w-full h-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-out cursor-pointer border-2 border-light-beige hover:border-accent-orange ${
                    hoveredImage === img.id
                      ? 'scale-110 shadow-2xl'
                      : 'hover:scale-105'
                  }`}
                  style={{
                    transform: hoveredImage === img.id ? 'scale(1.1) rotate(0deg)' : `rotate(${(-3 + (idx % 3))}deg)`,
                    zIndex: hoveredImage === img.id ? 50 : idx,
                  }}
                >
                  {/* Image Content */}
                  <div className={`w-full h-full relative overflow-hidden`}>
                    <img
                      src={`/images/gallery-${img.id}.jpg`}
                      alt={`Scout adventure moment ${img.id}`}
                      className="w-full h-4/5 object-cover"
                    />
                    
                    {/* Hover Overlay */}
                    <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredImage === img.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <span className="text-white font-bold text-xs md:text-sm">View More</span>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="w-full h-1/5 bg-white flex items-center px-3">
                    <p className="text-xs md:text-sm text-primary-green font-semibold truncate animate-fadeIn">
                      Scout Moment {img.id}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className={`mt-12 md:mt-16 text-center ${isVisible ? 'animate-slideInUp stagger-5' : ''}`}>
          <p className="text-primary-green text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            These amazing moments from our past camps show the unforgettable memories and lifelong friendships created. Join us and be part of this adventure!
          </p>
        </div>
      </div>
    </section>
  );
}

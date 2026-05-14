'use client';

import { useState, useRef, useEffect } from 'react';
import { Tent, Compass, Flame } from 'lucide-react';

export default function FeaturesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  const features = [
    {
      id: 1,
      icon: Tent,
      title: 'Tent City',
      description: 'Accommodation in nature where we get in the middle of adventure and explore the wilderness together.',
    },
    {
      id: 2,
      icon: Compass,
      title: 'Tourism',
      description: 'Learning outdoor basics. Build fires, extract water, navigate the stars, and master wilderness skills.',
    },
    {
      id: 3,
      icon: Flame,
      title: 'Campfire Meals',
      description: 'Delicious meals cooked over campfire. Regular food available during bad weather. Shared community dining.',
    },
  ];

  return (
    <section 
      id="features" 
      className="relative py-8 md:py-16 lg:py-28 px-4 bg-cream-bg"
      ref={sectionRef}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary-green opacity-8 blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent-orange opacity-5 blur-3xl animate-bounce-soft" />
        <div className="absolute top-1/2 left-1/4 w-72 h-72 rounded-full bg-primary-green-light opacity-5 blur-3xl animate-sway" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className={`mb-12 md:mb-16 text-center ${isVisible ? 'animate-slideInUp' : ''}`}>
          <h2 className="text-2xl md:text-5xl font-black mb-4 drop-shadow-md">
            <span className="text-[#C8694A] animate-slideInLeft drop-shadow-sm">CAMP</span>
            {' '}
            <span className="text-gold-yellow animate-slideInRight drop-shadow-sm">FEATURES</span>
          </h2>
          <div className="w-20 h-1.5 bg-accent-orange rounded-full mx-auto animate-slideInUp" />
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className={`${
                  isVisible ? 'animate-slideInUp' : ''
                } ${
                  idx === 0
                    ? 'stagger-1'
                    : idx === 1
                    ? 'stagger-2'
                    : 'stagger-3'
                }`}
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`bg-white rounded-2xl p-6 md:p-8 text-center transition-all duration-300 ease-out h-full cursor-pointer border-2 border-transparent group ${
                    hoveredCard === feature.id
                      ? 'transform scale-105 shadow-2xl border-accent-orange'
                      : 'shadow-lg hover:shadow-xl'
                  }`}
                >
                  {/* Icon Container */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full mb-6 transition-all duration-300 ease-out ${
                      hoveredCard === feature.id
                        ? 'bg-white shadow-lg scale-110 hover:animate-bounce-soft'
                        : 'bg-primary-green-light/20'
                    }`}
                  >
                    <Icon size={32} className="text-black group-hover:text-[#C8694A] transition-colors duration-300 md:size-10" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold mb-4 animate-slideInUp drop-shadow-sm text-[#C8694A]">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-primary-green text-sm md:text-base leading-relaxed animate-slideInUp stagger-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

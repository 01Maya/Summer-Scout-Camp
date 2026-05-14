'use client';

import { useState, useEffect, useRef } from 'react';

export default function ProgramSection() {
  const [hovered, setHovered] = useState(false);
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

  return (
    <section 
      id="program" 
      className="relative py-8 md:py-16 lg:py-28 px-4 bg-cream-light"
      ref={sectionRef}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-yellow opacity-8 blur-3xl animate-parallax" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-primary-green opacity-8 blur-3xl animate-bounce-soft" />
        <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-warm-beige opacity-6 blur-3xl animate-float" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Taped Image */}
          <div className={`flex justify-center ${isVisible ? 'animate-slideInLeft' : ''}`}>
            <div
              className="relative transition-all duration-500 ease-out cursor-pointer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {/* Top Tape */}
              <div className="absolute -top-4 left-6 md:left-10 w-14 h-5 bg-accent-orange opacity-70 rounded-sm transform -rotate-12 z-10 shadow-md" />
              {/* Bottom Tape */}
              <div className="absolute -bottom-4 right-6 md:right-10 w-14 h-5 bg-primary-green opacity-70 rounded-sm transform rotate-12 z-10 shadow-md" />

              {/* Image Card */}
              <div className={`w-full max-w-sm h-64 md:h-80 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 animate-scaleIn ${
                hovered ? 'shadow-2xl scale-105' : 'shadow-xl'
              }`}>
                <img
                  src="/images/program.jpg"
                  alt="Scout program outdoor activities"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-4 md:space-y-6 ${isVisible ? 'animate-slideInRight' : ''}`}>
            <h2 className="text-3xl md:text-5xl font-black leading-tight drop-shadow-md">
              <span className="block text-primary-green animate-slideInRight drop-shadow-sm">THIS WILL BE</span>
              <span className="block text-[#C8694A] animate-slideInRight drop-shadow-sm">TENT CITY</span>
              <span className="block text-accent-orange animate-slideInRight drop-shadow-sm">ADVENTURE</span>
            </h2>

            <div className="w-16 h-1.5 bg-accent-orange rounded-full animate-slideInUp" />

            <div className="space-y-4 md:space-y-5">
              <p className="text-primary-green text-base md:text-lg leading-relaxed font-medium animate-slideInUp drop-shadow-sm">
                The scout program is a combination of <span className="text-accent-orange font-bold">exciting outdoor activities</span> and <span className="text-gold-yellow font-bold">challenges</span>. Children try their hand at <span className="text-rust-red font-bold">competitions and relay races</span> while <span className="text-accent-orange font-bold">enjoying nature</span>, gaining <span className="text-gold-yellow font-bold">survival skills</span> and knowledge.
              </p>
              <p className="text-primary-green text-base md:text-lg leading-relaxed animate-slideInUp drop-shadow-sm">
                The event is suitable for both <span className="text-accent-orange font-bold">beginner campers</span> and <span className="text-gold-yellow font-bold">experienced kids</span>. The staff will <span className="text-rust-red font-bold">customize activities</span> to suit the level of different group of participants.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 animate-slideInUp">
              <button 
                onClick={() => alert('Learn more about our scout program curriculum and activities!')}
                className="px-8 py-3 bg-accent-orange  text-[#C8694A]  font-bold rounded-full hover:bg-rust-red transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg active:scale-95 shadow-lg whitespace-nowrap"
              >
                Learn More
              </button>
              <button 
                onClick={() => alert('Explore our program details, photos, and testimonials!')}
                className="px-8 py-3 border-2 border-gold-yellow bg-gold-yellow/10 text-gold-yellow font-bold rounded-full hover:bg-gold-yellow hover:text-primary-green transition-all duration-300 ease-in-out hover:shadow-lg active:scale-95"
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

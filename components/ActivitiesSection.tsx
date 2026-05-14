'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

export default function ActivitiesSection() {
  const [activeActivity, setActiveActivity] = useState(0);
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

  const activities = [
    { id: 0, name: 'Nature Learning', color: 'from-warm-beige to-accent-orange', icon: '🌿' },
    { id: 1, name: 'Camping', color: 'from-primary-green to-soft-brown', icon: '🏕️' },
    { id: 2, name: 'Navigation Course', color: 'from-accent-orange to-soft-brown', icon: '🗺️' },
    { id: 3, name: 'First Aid Course', color: 'from-light-beige to-warm-beige', icon: '🚑' },
    { id: 4, name: 'Sport Activities', color: 'from-primary-green to-muted-gold', icon: '🏃' },
    { id: 5, name: 'Evening Program', color: 'from-accent-orange to-warm-beige', icon: '🌙' },
  ];

  return (
    <section 
      id="activities" 
      className="relative py-8 md:py-16 lg:py-28 px-4 bg-primary-green"
      ref={sectionRef}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-primary-green-light opacity-15 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-primary-green-medium opacity-8 blur-3xl animate-sway" />
        <div className="absolute top-1/2 right-1/3 w-80 h-80 rounded-full bg-warm-beige opacity-5 blur-3xl animate-bounce-soft" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className={`mb-12 md:mb-16 text-center ${isVisible ? 'animate-slideInUp' : ''}`}>
          <h2 className="text-3xl md:text-5xl font-black mb-4 drop-shadow-md">
            <span className="text-warm-beige animate-slideInLeft drop-shadow-sm">SCOUT</span>
            {' '}
            <span className="text-[#C8694A] animate-slideInRight drop-shadow-sm" style={{ animationDelay: '100ms' }}>ACTIVITIES</span>
          </h2>
          <div className="w-20 h-1.5 bg-gold-yellow rounded-full mx-auto animate-slideInUp stagger-2" />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
          {/* Left: Activity Menu */}
          <div className={`${isVisible ? 'animate-slideInLeft' : ''} space-y-2`}>
            {activities.map((activity, idx) => (
              <button
                key={activity.id}
                onClick={() => setActiveActivity(activity.id)}
                className={`w-full p-3 md:p-4 rounded-xl font-bold transition-all duration-300 ease-out flex items-center justify-between group text-sm md:text-base animate-slideInLeft ${
                  activeActivity === activity.id
                    ? 'bg-warm-beige/30 text-[#C8694A] shadow-lg scale-105'
                    : 'bg-warm-beige/20 text-primary-green hover:bg-warm-beige/30 hover:text-[#C8694A] active:text-[#C8694A]'
                }`}
                style={{
                  animationDelay: `${idx * 40}ms`,
                }}
              >
                <span className="uppercase">{activity.name}</span>
                <ChevronRight
                  size={18}
                  className={`transition-transform duration-300 ease-out ${
                    activeActivity === activity.id ? 'translate-x-2' : ''
                  }`}
                />
              </button>
            ))}

              <button 
                onClick={() => alert('Explore all our scout activities: Nature Learning, Camping, Navigation, First Aid, Sports, and Evening Programs!')}
                className="w-full mt-4 md:mt-6 px-6 py-3 bg-accent-orange text-[#C8694A] font-bold rounded-full hover:bg-rust-red transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg active:scale-95 shadow-lg text-sm md:text-base animate-slideInUp"
              >
                View All
              </button>
          </div>

          {/* Right: Image Cards (Mobile Stack, Desktop Floating) */}
          <div className={`${isVisible ? 'animate-slideInRight' : ''} relative min-h-96`}>
            {/* Main Activity Card */}
            <div className="relative w-full max-w-sm mx-auto">
              {/* Tape Decorations */}
              <div className="absolute -top-4 left-6 w-12 h-5 bg-accent-orange opacity-70 rounded-sm transform -rotate-12 z-10 shadow-md" />
              <div className="absolute -bottom-4 right-6 w-12 h-5 bg-primary-green opacity-70 rounded-sm transform rotate-12 z-10 shadow-md" />

              {/* Card */}
              <div
                className={`group cursor-pointer w-full h-64 md:h-72 rounded-xl shadow-2xl transition-all duration-500 ease-out hover:shadow-2xl hover:scale-[1.01] flex items-center justify-center text-white font-bold text-center px-4 overflow-hidden opacity-100 scale-100 bg-gradient-to-br ${activities[activeActivity]?.color}`}
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl md:text-4xl transition-all duration-300 ease-out hover:animate-bounce-soft">
                    {activities[activeActivity]?.icon}
                  </span>
                  <span className="text-lg md:text-2xl font-black text-[#C8694A]">{activities[activeActivity].name}</span>
                </div>
              </div>
            </div>

            {/* Floating Side Cards (Desktop Only) */}
            <div className="hidden md:block absolute top-0 right-0 animate-float">
              <div className="w-32 h-40 bg-warm-beige rounded-lg shadow-lg flex items-center justify-center transform rotate-6 border-4 border-white">
                <span className="text-xs font-bold text-forest-green text-center px-2">Activity Photo</span>
              </div>
            </div>

            <div className="hidden md:block absolute bottom-10 left-0 animate-bounce-soft">
              <div className="w-28 h-28 bg-burnt-orange rounded-lg shadow-lg flex items-center justify-center transform -rotate-3 text-[#C8694A] font-bold text-xs">
                Explore
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

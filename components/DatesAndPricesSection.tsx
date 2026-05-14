'use client';

import { useState, useRef, useEffect } from 'react';
import { MapPin, Users, Clock } from 'lucide-react';

export default function DatesAndPricesSection() {
  const [expandedSession, setExpandedSession] = useState(0);
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

  const sessions = [
    {
      id: 0,
      name: '01 JUNE - 21 JUNE',
      icon: '📍',
      ageGroup: 'Suitable 6-8 class',
      nights: '8 days, 20 nights',
      duration: '3-5 miles, daily water access',
      price: '$450',
      details: '3 children per tent',
    },
    {
      id: 1,
      name: '01 JULY - 21 JULY',
      icon: '🏕️',
      ageGroup: 'Suitable 3-5 class',
      nights: '8 days, 18 nights',
      duration: '2-3 miles, daily water access',
      price: '$380',
      details: '2-3 children per tent',
    },
    {
      id: 2,
      name: '01 AUGUST - 21 AUGUST',
      icon: '🧗',
      ageGroup: 'Suitable all ages',
      nights: '8 days, 16 nights',
      duration: '1-2 miles, daily water access',
      price: '$320',
      details: '2 children per tent',
    },
    {
      id: 3,
      name: '15 SEPTEMBER',
      icon: '✨',
      ageGroup: 'Advanced group',
      nights: 'Waiting',
      duration: 'Coming soon',
      price: 'TBA',
      details: 'Registration opening soon',
      disabled: true,
    },
  ];

  return (
    <section
      id="pricing"
      className="relative py-8 md:py-16 lg:py-28 px-4 bg-cream-light"
      ref={sectionRef}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-green opacity-8 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent-orange opacity-5 blur-3xl animate-bounce-soft" />
        <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-primary-green-light opacity-5 blur-3xl animate-sway" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className={`mb-12 md:mb-16 text-center ${isVisible ? 'animate-slideInUp' : ''}`}>
          <h2 className="text-3xl md:text-5xl font-black mb-4 drop-shadow-md">
            <span className="text-primary-green animate-slideInLeft drop-shadow-sm">
              DATES
            </span>{' '}
            <span className="text-gold-yellow animate-slideInDown drop-shadow-sm">
              &
            </span>{' '}
            <span className="text-[#C8694A] animate-slideInRight drop-shadow-sm">
              PRICES
            </span>
          </h2>

          <p className="text-primary-green text-sm md:text-base font-medium animate-slideInUp drop-shadow-sm">
            Choose the session that works best for your family
          </p>

          <div className="w-20 h-1.5 bg-accent-orange rounded-full mx-auto mt-4 animate-slideInUp stagger-2" />
        </div>

        {/* Timeline */}
        <div className="space-y-4 md:space-y-6">
          {sessions.map((session, idx) => (
            <div
              key={session.id}
              className={`${
                isVisible ? 'animate-slideInUp' : ''
              } ${
                idx === 0
                  ? 'stagger-1'
                  : idx === 1
                  ? 'stagger-2'
                  : idx === 2
                  ? 'stagger-3'
                  : 'stagger-4'
              }`}
            >
              <div className="flex gap-3 md:gap-6">
                {/* Timeline Circle */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-xl md:text-2xl shadow-lg transition-all duration-300 ease-out shrink-0 ${
                      session.disabled
                        ? 'bg-gray-400'
                        : 'bg-accent-orange hover:scale-110 active:scale-95'
                    }`}
                  >
                    {session.icon}
                  </div>

                  {idx < sessions.length - 1 && (
                    <div className="w-1.5 h-16 md:h-20 bg-warm-beige/50 mt-2" />
                  )}
                </div>

                {/* Session Card */}
                <div
                  onClick={() => !session.disabled && setExpandedSession(idx)}
                  className={`flex-1 mb-2 transition-all duration-300 ease-out ${
                    session.disabled
                      ? 'opacity-60 cursor-default'
                      : 'cursor-pointer'
                  }`}
                >
                  <div
                    className={`bg-white rounded-2xl p-5 md:p-8 text-left shadow-lg transition-all duration-300 ease-out border-2 ${
                      !session.disabled && expandedSession === idx
                        ? 'ring-2 ring-burnt-orange shadow-xl scale-[1.02] border-accent-orange'
                        : 'border-transparent hover:shadow-xl hover:-translate-y-1'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                      <h3 className="text-lg md:text-2xl font-black text-primary-green uppercase drop-shadow-sm">
                        {session.name}
                      </h3>

                      <span className="text-2xl md:text-3xl font-black text-[#C8694A] whitespace-nowrap drop-shadow-sm">
                        {session.price}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="space-y-3 text-accent-orange text-xs md:text-sm mb-4">
                      <div className="flex items-center gap-3">
                        <Users
                          size={16}
                          className="text-accent-orange shrink-0"
                        />
                        <span>{session.ageGroup}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Clock
                          size={16}
                          className="text-accent-orange shrink-0"
                        />
                        <span>{session.nights}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <MapPin
                          size={16}
                          className="text-accent-orange shrink-0"
                        />
                        <span>{session.duration}</span>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {expandedSession === idx && !session.disabled && (
                      <div className="mt-6 pt-6 border-t border-warm-beige animate-slideInUp">
                        <p className="text-[#C8694A] text-xs md:text-sm mb-4 font-medium">
                          {session.details}
                        </p>

<button
  type="button"
  className="px-6 py-2 bg-[#FAF8F3] text-[#C8694A] rounded-full font-bold hover:bg-[#b85c3f] transition-all duration-300"
>
  Apply for Camp
</button>
                      </div>
                    )}

                    {/* Disabled State */}
                    {session.disabled && (
                      <div className="text-center pt-4 border-t border-gray-200">
                        <p className="text-gray-500 font-semibold text-xs md:text-sm">
                          {session.details}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
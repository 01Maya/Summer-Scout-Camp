'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
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

  const testimonials = [
    {
      id: 1,
      title: 'A BUNCH OF EMOTIONS',
      author: 'Sarah Johnson',
      date: 'August 26, 2023',
      rating: 5,
      text: 'Thank you for these memorable days and activities. My son really enjoyed the camp and can&apos;t wait to come back!',
    },
    {
      id: 2,
      title: 'GREAT CAMP',
      author: 'Michael Chen',
      date: 'August 25, 2023',
      rating: 5,
      text: 'So many interesting activities and wonderful mentors. Kids had the time of their lives and made amazing friends!',
    },
    {
      id: 3,
      title: 'THANK YOU FOR BEING THERE',
      author: 'Emma Davis',
      date: 'July 27, 2023',
      rating: 5,
      text: 'The camp is perfectly designed to get kids to appreciate the outdoors and wilderness. Highly recommended!',
    },
    {
      id: 4,
      title: 'ACTIVE AND ENGAGING',
      author: 'James Wilson',
      date: 'July 18, 2023',
      rating: 5,
      text: 'Instructors are knowledgeable and activities build confidence. Perfect experience for outdoor learning!',
    },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay, testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    setIsAutoPlay(false);
  };

  return (
    <section 
      id="testimonials" 
      className="relative py-8 md:py-16 lg:py-28 px-4 bg-cream-light"
      ref={sectionRef}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-warm-beige opacity-10 blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent-orange opacity-5 blur-3xl animate-bounce-soft" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className={`mb-12 md:mb-16 text-center ${isVisible ? 'animate-slideInUp' : ''}`}>
          <h2 className="text-3xl md:text-5xl font-black mb-4 drop-shadow-md">
            <span className="text-[#C8694A] animate-slideInLeft drop-shadow-sm">CUSTOMER</span>
            {' '}
            <span className="text-gold-yellow animate-slideInRight drop-shadow-sm">REVIEWS</span>
          </h2>
          <div className="w-20 h-1.5 bg-gold-yellow rounded-full mx-auto animate-slideInUp stagger-2" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
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
              <div className="bg-white rounded-xl p-5 md:p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:scale-105 border-2 border-light-beige hover:border-accent-orange cursor-pointer relative group animate-slideInUp">
                {/* Tape Decoration */}
                <div className="absolute -top-3 right-4 w-10 h-4 bg-accent-orange opacity-70 rounded-sm transform -rotate-12 z-10 shadow-md" />

                {/* Title */}
                <h4 className="text-[#C8694A] font-black text-xs md:text-sm mb-3 uppercase tracking-wide animate-slideInLeft drop-shadow-sm">
                  {testimonial.title}
                </h4>

                {/* Stars */}
                <div className="flex gap-1 mb-4 animate-slideInUp stagger-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-[#5F776B] text-accent-orange drop-shadow-md"
                      style={{
                        animation: `scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
                        animationDelay: `${i * 100}ms`,
                      }}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-primary-green text-xs md:text-sm leading-relaxed mb-4 animate-slideInUp stagger-2 font-semibold">
                  {testimonial.text}
                </p>

                {/* Divider */}
                <div className="border-t border-light-beige pt-4 animate-slideInUp stagger-3">
                  <p className="font-bold text-[#C8694A] text-xs md:text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-primary-green/70">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-col items-center gap-6">
          {/* Buttons */}
          <div className="flex items-center justify-center gap-4 animate-slideInUp">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-accent-orange text-white hover:bg-muted-gold transition-all duration-300 ease-out hover:scale-110 active:scale-95 shadow-lg"
              aria-label="Previous review"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setIsAutoPlay(false);
                  }}
                  className={`rounded-full transition-all duration-300 ease-out ${
                    idx === currentIndex
                      ? 'bg-accent-orange w-8 h-3'
                      : 'bg-light-beige w-3 h-3 hover:bg-primary-green'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-accent-orange text-white hover:bg-muted-gold transition-all duration-300 ease-out hover:scale-110 active:scale-95 shadow-lg"
              aria-label="Next review"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Auto-play Toggle */}
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="text-sm md:text-base font-semibold text-primary-green hover:text-accent-orange transition-colors duration-300 ease-out animate-slideInUp stagger-1"
          >
            {isAutoPlay ? '⏸ Pause' : '▶ Play'}
          </button>
        </div>
      </div>
    </section>
  );
}

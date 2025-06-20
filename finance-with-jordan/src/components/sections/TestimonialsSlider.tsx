import React, { useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Star } from 'lucide-react';

const BASE_TESTIMONIALS = [
  {
    id: 1,
    name: 'Dilan N',
    avatar: 'S',
    rating: 5,
    text: 'Jordan assisted me with my car finance and I couldn\'t be happier with the service I received. He was able to get me a great rate and was able to get me into a car that I love. I would highly recommend him to anyone looking for a car finance.',
    date: 'May 3, 2025'
  },
  {
    id: 2,
    name: 'James S',
    avatar: 'J',
    rating: 5,
    text: 'Jordan was professional and helpful. He guided me throughout the entire process and was able to get me into my first home!',
    date: 'April 24, 2025',
    
  },
  {
    id: 3,
    name: 'Rehan A',
    avatar: 'R',
    rating: 5,
    text: 'Jordan was able to help me and my business partner secure a business loan for our clothing business. We didnt even know that this was an option for us. He made the process simple and efficient,allowing us to get the funds in a couple of days from our initial meeting. ',
    date: 'March 4, 2025'
  },
  {
    id: 4,
    name: 'Emma S',
    avatar: 'E',
    rating: 5,
    text: 'When I first contacted Jordan, I was a bit nervous as I wasnt sure if I was ready to buy a property. I did not know what type of property I was looking for, either investment or a place to live in. Jordan went through the list of pros and cons of each and helped me make a decision on what was best for me. He was always available to answer my questions and went above and beyond to get me the best deal possible.'
  },
  {
    id: 5,
    name: 'Jacqueline M',
    avatar: 'J',
    rating: 5,
    text: ' Jordan made my investment property purchase so easy. From the initial meeting, you could tell he loved what he does and was on the ball. He made me more excited about the purchase and guided me through the entire process. I was once told that, to build a good property portfolio, you need a good team by your side, well its safe to say that Jordan will always be part of my property team.',
    date: 'February 12, 2025'
  }
];

const TestimonialsSlider: React.FC = () => {
  // Create a duplicated array for seamless scrolling
  const TESTIMONIALS = [...BASE_TESTIMONIALS, ...BASE_TESTIMONIALS, ...BASE_TESTIMONIALS];
  const controls = useAnimationControls();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Calculate the width of a single set of testimonials based on screen size
    const updateWidth = () => {
      const isMobile = window.innerWidth < 640;
      const cardWidth = isMobile ? 320 : 480; // Increased card width for better text fit
      const gap = isMobile ? 16 : 24; // Smaller gap on mobile
      const singleSetWidth = BASE_TESTIMONIALS.length * (cardWidth + gap);
      setWidth(singleSetWidth);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    // Start the animation
    controls.start({
      x: -width,
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      }
    });

    return () => window.removeEventListener('resize', updateWidth);
  }, [controls, width]);

  return (
    <section className="pt-12 pb-20 sm:py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 md:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Word On The Street
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-primary-200 mx-auto"></div>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative">
          <motion.div
            animate={controls}
            className="flex gap-4 sm:gap-6"
            style={{ width: `${width * 3}px` }} // Triple the width for three sets
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="w-[320px] sm:w-[480px] flex-shrink-0 bg-gray-50 rounded-xl p-4 sm:p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  {/* Avatar */}
                  {typeof testimonial.avatar === 'string' && testimonial.avatar.startsWith('/') ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-lg sm:text-xl font-semibold">
                      {testimonial.avatar}
                    </div>
                  )}
                  
                  {/* Name and Rating */}
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900">{testimonial.name}</h3>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 sm:w-4 sm:h-4 fill-primary-500 text-primary-500"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{testimonial.text}</p>

                {/* Date */}
                <p className="text-xs sm:text-sm text-gray-500">{testimonial.date}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider; 
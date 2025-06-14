import React, { useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Star } from 'lucide-react';

const BASE_TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Sullivan',
    avatar: 'S',
    rating: 5,
    text: 'Kobe assisted us with refinancing our mortgage and we could not recommend her services more! She is knowledgeable, efficient and obtained the best possible outcome for us while making sure we understood everything along the way!',
    date: 'Dec 3, 2024'
  },
  {
    id: 2,
    name: 'Hayley G',
    avatar: '/avatars/hayley.jpg',
    rating: 5,
    text: '5 STARS simply isn\'t enough for Kobe. I couldn\'t recommend her enough if you\'re looking for someone who genuinely cares about getting you the best outcome possible.',
    date: 'Oct 28, 2024',
    image: '/testimonials/hayley-home.jpg'
  },
  {
    id: 3,
    name: 'Jaedin Muliaga',
    avatar: '/avatars/jaedin.jpg',
    rating: 5,
    text: 'Kobe has been such a pleasure to work with our so called co-parent guiding us down our financial journey into our first property. A relatable and natural interaction on a daily basis makes a first home buyer with Kobe\'s guidance so much easier.',
    date: 'Oct 21, 2024'
  },
  {
    id: 4,
    name: 'Esha',
    avatar: 'E',
    rating: 5,
    text: 'I highly recommend Kobe who is a dedicated, warm and knowledgeable mortgage broker who is 100% committed to her clients. As a fellow mortgage broker I\'ve seen how hard working and genuine Kobe is and I highly recommend her outstanding services. You will be in great hands!',
    date: 'Sep 24, 2024'
  },
  {
    id: 5,
    name: 'Kyle',
    avatar: '/avatars/kyle.jpg',
    rating: 5,
    text: 'KOBE IS THE BEST! She helped me secure my first home loan and made the process so easy. She was always available to answer my questions and went above and beyond to get me the best deal possible.',
    date: 'Sep 11, 2024',
    image: '/testimonials/kyle-home.jpg'
  }
];

const TestimonialsSlider: React.FC = () => {
  // Create a duplicated array for seamless scrolling
  const TESTIMONIALS = [...BASE_TESTIMONIALS, ...BASE_TESTIMONIALS, ...BASE_TESTIMONIALS];
  const controls = useAnimationControls();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Calculate the width of a single set of testimonials
    const singleSetWidth = BASE_TESTIMONIALS.length * (400 + 24); // card width (400px) + gap (24px)
    setWidth(singleSetWidth);

    // Start the animation
    controls.start({
      x: -singleSetWidth,
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      }
    });
  }, [controls]);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Word On The Street
          </h2>
          <div className="w-32 h-1 bg-primary-200 mx-auto"></div>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative">
          <motion.div
            animate={controls}
            className="flex gap-6"
            style={{ width: `${width * 3}px` }} // Triple the width for three sets
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="w-[400px] flex-shrink-0 bg-gray-50 rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  {/* Avatar */}
                  {typeof testimonial.avatar === 'string' && testimonial.avatar.startsWith('/') ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-semibold">
                      {testimonial.avatar}
                    </div>
                  )}
                  
                  {/* Name and Rating */}
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary-500 text-primary-500"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-600 mb-4 line-clamp-4">{testimonial.text}</p>

                {/* Optional Image */}
                {testimonial.image && (
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s success story`}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}

                {/* Date */}
                <p className="text-sm text-gray-500">{testimonial.date}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider; 
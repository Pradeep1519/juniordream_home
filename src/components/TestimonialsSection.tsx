import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    name: 'Ananya Desai',
    role: 'IIT Bombay Student',
    image: 'https://images.unsplash.com/photo-1616835240434-d91feb116120?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZW50b3IlMjBwb3J0cmFpdCUyMGxpZ2h0fGVufDF8fHx8MTc2MTc2MTk4MXww&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'JuniorDream gave me access to mentors who understood my journey. With their guidance, I cracked JEE Advanced with AIR 156!',
    rating: 5,
  },
  {
    name: 'Rohan Kumar',
    role: 'Startup Founder',
    image: 'https://images.unsplash.com/photo-1604177091072-b7b677a077f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVudHJlcHJlbmV1ciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjE3NjE5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'The entrepreneurship mentorship helped me refine my business model and pitch deck. We successfully raised our seed round!',
    rating: 5,
  },
  {
    name: 'Priya Singh',
    role: 'Design Student',
    image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwY29uZmlkZW50fGVufDF8fHx8MTc2MTY3NzA0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'Learning from accomplished designers transformed my portfolio. I got accepted into my dream design school with a scholarship!',
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 mb-4">
            <Star className="inline w-4 h-4 text-purple-600 mr-2" />
            <span className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Success Stories
            </span>
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Students Share Their Journey
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* Glassmorphic Card */}
                <div className="h-full p-12 rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl shadow-purple-200/50 border border-white/50">
                  <div className="flex flex-col md:flex-row gap-8 h-full">
                    {/* Image */}
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg">
                        <ImageWithFallback
                          src={testimonials[current].image}
                          alt={testimonials[current].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-center">
                      <Quote className="w-12 h-12 text-purple-300 mb-4" />
                      
                      <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                        {testimonials[current].content}
                      </p>

                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonials[current].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Author */}
                      <div>
                        <div className="text-lg bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                          {testimonials[current].name}
                        </div>
                        <div className="text-sm text-gray-500">{testimonials[current].role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === current
                    ? 'w-8 h-3 bg-gradient-to-r from-blue-500 to-purple-500'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const springConfig = {
  type: 'spring',
  stiffness: 260,
  damping: 20,
};

const mentors = [
  {
    name: 'Dr. Priya Sharma',
    role: 'IIT Delhi Graduate',
    specialty: 'AI & Machine Learning',
    image: 'https://images.unsplash.com/photo-1616835240434-d91feb116120?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    rating: 4.9,
    students: 150,
    sessions: 320,
    location: 'Mumbai',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    name: 'Arjun Mehta',
    role: 'Google Senior Engineer',
    specialty: 'Full Stack Development',
    image: 'https://images.unsplash.com/photo-1604177091072-b7b677a077f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    rating: 5.0,
    students: 200,
    sessions: 450,
    location: 'Bangalore',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    name: 'Meera Kapoor',
    role: 'Stanford MBA',
    specialty: 'Entrepreneurship',
    image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    rating: 4.8,
    students: 120,
    sessions: 280,
    location: 'Delhi',
    color: 'from-purple-500 to-pink-500',
  },
];

export function PremiumMentors() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <motion.div
                className="inline-block mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, ...springConfig }}
              >
                <div className="px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium">
                  Our Mentors
                </div>
              </motion.div>
              
              <h2 className="mb-4">
                Learn from the <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Best</span>
              </h2>
              <p className="text-xl text-gray-600">
                Connect with verified experts who've achieved what you aspire to
              </p>
            </div>

            <div className="flex justify-end">
              <motion.button
                onClick={() => window.location.hash = '#mentors'}
                className="group flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all shadow-sm font-medium"
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                transition={springConfig}
              >
                View All Mentors
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Mentor Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{ y: -12 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-500">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <ImageWithFallback
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent" />

                  {/* Rating badge */}
                  <motion.div
                    className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm flex items-center gap-1.5 shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.15, ...springConfig }}
                  >
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-900">{mentor.rating}</span>
                  </motion.div>

                  {/* Location */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-lg">
                    <MapPin className="w-3.5 h-3.5 text-gray-600" />
                    <span className="text-xs font-medium text-gray-700">{mentor.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{mentor.name}</h3>
                  <p className="text-sm text-blue-600 font-medium mb-2">{mentor.role}</p>
                  <p className="text-gray-600 mb-6">{mentor.specialty}</p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 pb-6 mb-6 border-b border-gray-100">
                    <div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {mentor.students}+
                      </div>
                      <div className="text-xs text-gray-500">Students</div>
                    </div>
                    <div className="w-px h-12 bg-gray-200" />
                    <div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {mentor.sessions}+
                      </div>
                      <div className="text-xs text-gray-500">Sessions</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => window.location.hash = '#join'}
                    className={`w-full py-3 rounded-xl bg-gradient-to-r ${mentor.color} text-white font-medium shadow-lg`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={springConfig}
                  >
                    Book Session
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

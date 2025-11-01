import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, MapPin, Briefcase, Filter } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const mentors = [
  {
    name: 'Dr. Priya Sharma',
    role: 'IIT Delhi Graduate',
    specialty: 'AI & Machine Learning',
    image: 'https://images.unsplash.com/photo-1616835240434-d91feb116120?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    rating: 4.9,
    students: 150,
    sessions: 320,
    location: 'Mumbai, India',
    category: 'Technology',
  },
  {
    name: 'Arjun Mehta',
    role: 'Google Senior Engineer',
    specialty: 'Full Stack Development',
    image: 'https://images.unsplash.com/photo-1604177091072-b7b677a077f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    rating: 5.0,
    students: 200,
    sessions: 450,
    location: 'Bangalore, India',
    category: 'Technology',
  },
  {
    name: 'Meera Kapoor',
    role: 'Stanford MBA',
    specialty: 'Entrepreneurship',
    image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    rating: 4.8,
    students: 120,
    sessions: 280,
    location: 'Delhi, India',
    category: 'Business',
  },
  // Add more mentors...
];

const categories = ['All', 'Technology', 'Business', 'Creative', 'Sports', 'Academic'];

export function MentorsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredMentors = selectedCategory === 'All'
    ? mentors
    : mentors.filter(m => m.category === selectedCategory);

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 bg-white min-h-screen">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Meet Our Mentors
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with 500+ verified experts ready to guide you to success
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex items-center gap-4 mb-12 overflow-x-auto pb-4">
          <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white border border-gray-200 text-gray-700 hover:border-purple-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Mentors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative aspect-[4/5]">
                <ImageWithFallback
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/95 flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{mentor.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl mb-1">{mentor.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{mentor.role}</p>
                <p className="text-sm text-purple-600 mb-4">{mentor.specialty}</p>

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{mentor.location}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-2 rounded-lg bg-blue-50">
                    <div className="text-lg text-blue-600">{mentor.students}+</div>
                    <div className="text-xs text-gray-600">Students</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-purple-50">
                    <div className="text-lg text-purple-600">{mentor.sessions}+</div>
                    <div className="text-xs text-gray-600">Sessions</div>
                  </div>
                </div>

                <button
                  onClick={() => (window.location.hash = '#join')}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transition-all"
                >
                  Book Session
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

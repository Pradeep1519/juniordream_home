import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Heart, Award } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 bg-white min-h-screen">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            About JuniorDream
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to democratize mentorship and make quality guidance accessible to every student.
          </p>
        </motion.div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              JuniorDream was born from a simple observation: talented students often lack access to the right guidance at the right time. We saw countless bright minds struggling not due to lack of potential, but due to lack of proper mentorship.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2024, we've grown from a small team of passionate educators to India's leading mentorship platform, connecting over 10,000 students with 500+ expert mentors across various fields.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we're proud to have helped thousands of students achieve their dreams, from cracking competitive exams to building successful startups.
            </p>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                alt="Team collaboration"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Excellence',
                description: 'We strive for excellence in everything we do',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: Users,
                title: 'Accessibility',
                description: 'Making quality mentorship accessible to all',
                color: 'from-purple-500 to-pink-500',
              },
              {
                icon: Heart,
                title: 'Empathy',
                description: 'We truly care about student success',
                color: 'from-orange-500 to-red-500',
              },
              {
                icon: Award,
                title: 'Impact',
                description: 'Creating measurable, lasting impact',
                color: 'from-green-500 to-emerald-500',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="p-8 rounded-3xl bg-white shadow-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="p-12 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10,000+', label: 'Students Mentored' },
              { value: '500+', label: 'Expert Mentors' },
              { value: '50,000+', label: 'Sessions Completed' },
              { value: '95%', label: 'Success Rate' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

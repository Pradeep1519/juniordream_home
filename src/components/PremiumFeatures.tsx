import React from 'react';
import { motion } from 'motion/react';
import { Video, Users, Calendar, Shield, Award, Zap, TrendingUp, Heart, MessageCircle, BookOpen, Clock, Target } from 'lucide-react';

const springConfig = {
  type: 'spring',
  stiffness: 260,
  damping: 20,
};

const features = [
  {
    icon: Video,
    title: 'Live 1-on-1 Sessions',
    description: 'Personal video calls with mentors',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Users,
    title: '25+ Expert Mentors',
    description: 'Carefully selected industry experts',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description: 'Book when it works for you',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Every mentor personally reviewed',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Award,
    title: 'Earn Certificates',
    description: 'Showcase your achievements',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Quick Start',
    description: 'Begin your journey in days',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Monitor your growth with analytics',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Heart,
    title: 'Growing Community',
    description: 'Join our first batch of learners',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: MessageCircle,
    title: 'Instant Messaging',
    description: 'Stay connected via chat',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: BookOpen,
    title: 'Resource Library',
    description: 'Access curated learning materials',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Help whenever you need it',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Target,
    title: 'Goal Setting',
    description: 'Track and achieve your goals',
    color: 'from-orange-500 to-red-500',
  },
];

export function PremiumFeatures() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, ...springConfig }}
          >
            <div className="px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium">
              Our Approach
            </div>
          </motion.div>
          
          <h2 className="mb-6">
            Everything You Need to <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Get Started</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A fresh approach to mentorship designed for today's learners
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Gradient background on hover */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className={`inline-flex mb-5 p-3.5 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={springConfig}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                {/* Decorative dot */}
                <motion.div
                  className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br ${feature.color}`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.button
            onClick={() => window.location.hash = '#join'}
            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium shadow-lg shadow-blue-200/50"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={springConfig}
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
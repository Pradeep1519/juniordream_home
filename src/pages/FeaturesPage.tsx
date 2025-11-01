import React from 'react';
import { motion } from 'motion/react';
import { Video, Calendar, MessageCircle, BarChart3, Shield, Zap, Users, Award, BookOpen, TrendingUp, Clock, Heart } from 'lucide-react';

const features = [
  {
    icon: Video,
    title: 'Live 1-on-1 Sessions',
    description: 'Connect face-to-face with mentors through high-quality video calls',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description: 'Book sessions at your convenience with our smart calendar system',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: MessageCircle,
    title: 'Instant Messaging',
    description: 'Stay connected with your mentor through our in-app chat',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: BarChart3,
    title: 'Progress Tracking',
    description: 'Monitor your growth with detailed analytics and insights',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Shield,
    title: 'Verified Mentors',
    description: 'All mentors are thoroughly vetted and verified',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Zap,
    title: 'Quick Matching',
    description: 'Get matched with the perfect mentor in under 24 hours',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Users,
    title: 'Group Sessions',
    description: 'Join group workshops and learn with peers',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Award,
    title: 'Certificates',
    description: 'Earn certificates upon completing mentorship programs',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: BookOpen,
    title: 'Resource Library',
    description: 'Access curated learning materials and resources',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: TrendingUp,
    title: 'Goal Setting',
    description: 'Set and track your goals with mentor guidance',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Our support team is always here to help you',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Heart,
    title: 'Community',
    description: 'Join a vibrant community of learners and achievers',
    color: 'from-rose-500 to-pink-500',
  },
];

export function FeaturesPage() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 bg-white min-h-screen">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-6 text-gray-900">
            Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Features</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to succeed, all in one platform designed to make mentorship accessible and effective.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-blue-200 shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900 font-semibold">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center p-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-2xl shadow-blue-200/50"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-4xl mb-4 text-white font-bold">Ready to get started?</h2>
          <p className="text-xl text-white/90 mb-8">Join thousands of students already learning from the best</p>
          <button
            onClick={() => (window.location.hash = '#join')}
            className="px-10 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300"
          >
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </div>
  );
}

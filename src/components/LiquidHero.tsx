import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Check, Users, Award, Star, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const liquidTransition = {
  type: 'spring',
  stiffness: 400,
  damping: 30,
};

export function LiquidHero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Animated liquid blobs */}
      <motion.div
        className="absolute -top-40 -right-40 w-72 sm:w-96 h-72 sm:h-96 rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(99, 102, 241, 0.2) 50%, transparent 100%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-72 sm:w-96 h-72 sm:h-96 rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Glass grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #3b82f6 1px, transparent 1px),
            linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container mx-auto relative z-10 max-w-7xl" style={{ opacity }}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center lg:text-left"
          >
            {/* Floating Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-blue-100 shadow-lg mb-6 sm:mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, ...liquidTransition }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-green-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-gray-700">✨ Early Bird Registration Open - Limited Seats</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="block text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Your Journey to Success
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Starts Here
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Be among the first to experience personalized mentorship from industry experts. 
              Join our founding cohort and shape the future of learning.
            </motion.p>

            {/* Feature List */}
            <motion.div
              className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {[
                'One-on-one sessions with industry experts',
                'Be part of our first student community',
                'Help us build the future of education',
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 justify-center lg:justify-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, ...liquidTransition }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-md">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.button
                onClick={() => window.location.hash = '#join'}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-lg shadow-blue-200/50 font-medium relative overflow-hidden"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={liquidTransition}
              >
                {/* Liquid shine */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                <span className="flex items-center gap-2 justify-center relative z-10">
                  Join Waitlist
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                onClick={() => window.location.hash = '#features'}
                className="px-8 py-4 bg-white/80 backdrop-blur-md border-2 border-gray-200 text-gray-700 rounded-xl hover:border-blue-300 hover:bg-blue-50/80 transition-all font-medium shadow-sm"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={liquidTransition}
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="mt-10 sm:mt-12 pt-8 border-t border-gray-200 flex items-center gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-md"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.1 + i * 0.05, ...liquidTransition }}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                  >
                    <ImageWithFallback
                      src={`https://i.pravatar.cc/100?img=${i}`}
                      alt={`Early Member ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Early Bird Cohort</span> - Limited spots available
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ y: y1 }}
          >
            {/* Main Image with Glass Effect */}
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50 bg-white/50 backdrop-blur-sm p-2 border border-white/20"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={liquidTransition}
            >
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="./img/hero.png"
                  alt="Future students learning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
              </div>
            </motion.div>

            {/* Floating Glass Cards */}
            <motion.div
              className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl hidden sm:block"
              initial={{ opacity: 0, x: -30, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.2, ...liquidTransition }}
              whileHover={{ scale: 1.05, y: -5 }}
              style={{ y: y2 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg relative overflow-hidden">
                  <Users className="w-7 h-7 text-white relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    25+
                  </div>
                  <div className="text-sm text-gray-600">Expert Mentors</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl hidden sm:block"
              initial={{ opacity: 0, x: 30, y: -30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.4, ...liquidTransition }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg relative overflow-hidden">
                  <Award className="w-7 h-7 text-white relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  />
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    100%
                  </div>
                  <div className="text-sm text-gray-600">Focus on Quality</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats - Fully Responsive */}
        <motion.div
          className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          {[
            { value: '50+', label: 'Early Applicants', icon: Users, color: 'from-blue-500 to-indigo-500' },
            { value: '25+', label: 'Expert Mentors', icon: Award, color: 'from-indigo-500 to-purple-500' },
            { value: '100%', label: 'Focus on Quality', icon: Sparkles, color: 'from-purple-500 to-pink-500' },
            { value: 'Launch', label: 'Coming Soon', icon: Star, color: 'from-yellow-500 to-orange-500' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center p-4 sm:p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 + i * 0.1, ...liquidTransition }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Liquid gradient on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0`}
                whileHover={{ opacity: 0.05 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-md relative overflow-hidden`}>
                <stat.icon className="w-6 h-6 text-white relative z-10" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                />
              </div>
              <div className={`text-2xl sm:text-3xl font-bold mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-widest text-gray-400">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-1.5 bg-white/50 backdrop-blur-sm">
            <motion.div
              className="w-1.5 h-2 rounded-full bg-gradient-to-b from-blue-500 to-indigo-500"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
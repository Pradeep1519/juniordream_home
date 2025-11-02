import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, Users, MessageSquare, Target, Star, Award } from 'lucide-react';

const plans = [
  {
    icon: '🎯',
    name: 'Dream Foundation',
    classRange: 'Class 6–7',
    monthlyFee: '₹1,499',
    annualFee: '₹17,988',
    description: 'Where curiosity begins its journey. Strong base in Maths, Science, and English. Logical thinking, creativity sessions, personality development, and mentor-guided goal discovery.',
    color: 'from-blue-400 to-cyan-400',
    buttonColor: 'from-blue-400 to-cyan-400',
  },
  {
    icon: '🚀',
    name: 'Dream Explorer',
    classRange: 'Class 8–9',
    monthlyFee: '₹1,999',
    annualFee: '₹23,988',
    description: 'Where curiosity turns into discovery. Deep understanding of core subjects, skill exposure (public speaking, coding, design thinking), career awareness sessions, and group discussions.',
    color: 'from-purple-400 to-pink-400',
    buttonColor: 'from-purple-400 to-pink-400',
    popular: true,
  },
  {
    icon: '🏆',
    name: 'Dream Achiever',
    classRange: 'Class 10–12',
    monthlyFee: '₹2,499',
    annualFee: '₹29,988',
    description: 'Where dreams take shape and direction. Board exam support, real-world projects, career mapping, mock interviews, and one-on-one mentor meetings.',
    color: 'from-orange-400 to-red-400',
    buttonColor: 'from-orange-400 to-red-400',
  },
];

const commonFeatures = [
  { icon: User, text: 'Dedicated mentor' },
  { icon: Users, text: 'Monthly parent-mentor review' },
  { icon: MessageSquare, text: 'Real achiever talk sessions' },
  { icon: Target, text: 'Personality & skill development activities' },
];

interface PricingPageProps {
  onEnrollClick: (plan: any) => void;
}

export function PricingPage({ onEnrollClick }: PricingPageProps) {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const getDisplayPrice = (plan: any) => {
    if (billingCycle === 'yearly') {
      return {
        price: plan.annualFee,
        period: 'year'
      };
    }
    return {
      price: plan.monthlyFee,
      period: 'month'
    };
  };

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Choose Your Dream Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Tailored learning paths for every stage of your academic journey
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-1 rounded-full bg-gray-100 border border-gray-200">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full transition-all font-medium ${
                billingCycle === 'monthly'
                  ? 'bg-white shadow-lg text-gray-900'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full transition-all font-medium ${
                billingCycle === 'yearly'
                  ? 'bg-white shadow-lg text-gray-900'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Yearly
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const displayPrice = getDisplayPrice(plan);
            
            return (
              <motion.div
                key={plan.name}
                className={`relative p-8 rounded-3xl border-2 ${
                  plan.popular
                    ? 'border-purple-300 shadow-2xl bg-white'
                    : 'border-gray-100 shadow-xl bg-white/80'
                } backdrop-blur-sm`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  scale: plan.popular ? 1.03 : 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                )}

                {/* Plan Icon and Header */}
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                    {plan.classRange}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {plan.description}
                </p>

                {/* Pricing */}
                <div className="text-center mb-6 p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-blue-50">
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex justify-center items-baseline gap-2">
                      <span className={`text-3xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                        {displayPrice.price}
                      </span>
                      <span className="text-gray-500">/{displayPrice.period}</span>
                    </div>
                  </div>
                </div>

                {/* Common Features */}
                <div className="space-y-3 mb-8">
                  {commonFeatures.map((feature, idx) => (
                    <motion.div 
                      key={feature.text}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                    >
                      <feature.icon className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Enroll Button - Connected to Enrollment Flow */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onEnrollClick(plan)}
                  className={`w-full py-3 rounded-xl font-semibold transition-all bg-gradient-to-r ${plan.buttonColor} text-white shadow-lg hover:shadow-xl`}
                >
                  Enroll Now
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Quote Section */}
        <motion.div
          className="mt-16 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-50/50 to-purple-50/50 backdrop-blur-sm border border-gray-100">
            <Award className="w-12 h-12 mx-auto mb-4 text-purple-500" />
            <p className="text-2xl md:text-3xl font-light text-gray-700 italic mb-4">
              "We don't just teach students — we build dreamers ready for life."
            </p>
            <div className="text-2xl">🌟</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
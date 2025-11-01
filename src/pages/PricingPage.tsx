import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    description: 'Perfect for exploring the platform',
    features: [
      '1 mentor session per month',
      'Access to group workshops',
      'Community forum access',
      'Basic progress tracking',
      'Email support',
    ],
    notIncluded: [
      'Unlimited sessions',
      'Priority mentor matching',
      'Personalized learning path',
      '24/7 support',
    ],
    color: 'from-gray-600 to-gray-700',
    popular: false,
  },
  {
    name: 'Pro',
    price: '₹2,999',
    period: 'per month',
    description: 'For serious learners ready to excel',
    features: [
      'Unlimited 1-on-1 sessions',
      'Priority mentor matching',
      'Personalized learning path',
      'Advanced analytics',
      'All group workshops',
      'Resource library access',
      'Certificate of completion',
      '24/7 priority support',
    ],
    notIncluded: [],
    color: 'from-blue-600 via-purple-600 to-pink-600',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For institutions and organizations',
    features: [
      'Everything in Pro',
      'Custom mentor onboarding',
      'Dedicated account manager',
      'Custom integrations',
      'Bulk student accounts',
      'Advanced reporting',
      'White-label options',
      'SLA guarantees',
    ],
    notIncluded: [],
    color: 'from-purple-600 to-indigo-600',
    popular: false,
  },
];

export function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

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
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your learning journey. No hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-1 rounded-full bg-gray-100">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white shadow-lg text-gray-900'
                  : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-white shadow-lg text-gray-900'
                  : 'text-gray-600'
              }`}
            >
              Yearly <span className="text-green-600 text-xs ml-1">(Save 20%)</span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative p-8 rounded-3xl border-2 ${
                plan.popular
                  ? 'border-purple-500 shadow-2xl scale-105'
                  : 'border-gray-200 shadow-lg'
              } bg-white`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className={`text-5xl bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-sm">/{plan.period}</span>
                </div>
              </div>

              <button
                onClick={() => (window.location.hash = '#join')}
                className={`w-full py-3 rounded-xl mb-6 transition-all ${
                  plan.popular
                    ? `bg-gradient-to-r ${plan.color} text-white hover:shadow-xl`
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Get Started
              </button>

              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 opacity-50">
                    <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-500 line-through">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          className="mt-20 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Can I switch plans anytime?',
                a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.',
              },
              {
                q: 'Is there a refund policy?',
                a: 'We offer a 7-day money-back guarantee if you\'re not satisfied with our service.',
              },
              {
                q: 'Are there any hidden fees?',
                a: 'No! The price you see is the price you pay. No hidden charges or surprise fees.',
              },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50">
                <h4 className="mb-2">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

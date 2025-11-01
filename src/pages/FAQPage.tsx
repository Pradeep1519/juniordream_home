import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How do I find the right mentor?',
    a: 'Use our smart matching system to find mentors based on your goals, interests, and learning style. You can also browse mentor profiles and book sessions directly.',
  },
  {
    q: 'Can I cancel a session?',
    a: 'Yes, you can cancel a session up to 24 hours before the scheduled time for a full refund. Cancellations within 24 hours may not be eligible for refund.',
  },
  {
    q: 'How are mentors verified?',
    a: 'All mentors go through a rigorous verification process including background checks, credential verification, and interview assessments.',
  },
  {
    q: 'What if I\'m not satisfied with a session?',
    a: 'We offer a satisfaction guarantee. If you\'re not happy with a session, contact our support team within 48 hours for a credit or refund.',
  },
  {
    q: 'Can I switch mentors?',
    a: 'Absolutely! You can work with different mentors anytime. Many students benefit from learning from multiple experts.',
  },
  {
    q: 'Are group sessions available?',
    a: 'Yes, many mentors offer group workshops and sessions at discounted rates. Check mentor profiles for group session availability.',
  },
];

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 bg-white min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Find answers to common questions about JuniorDream</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg pr-8">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-xl mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">Our support team is here to help</p>
          <button
            onClick={() => window.location.hash = '#contact'}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white"
          >
            Contact Support
          </button>
        </motion.div>
      </div>
    </div>
  );
}

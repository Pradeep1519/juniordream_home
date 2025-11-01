import React from 'react';
import { motion } from 'motion/react';
import { Search, Book, MessageCircle, Video, FileText } from 'lucide-react';

export function HelpCenterPage() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 bg-white min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="mb-6">Help Center</h1>
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-purple-500 outline-none"
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Book, title: 'Getting Started', desc: 'Learn the basics' },
            { icon: MessageCircle, title: 'Booking Sessions', desc: 'How to book mentors' },
            { icon: Video, title: 'Video Calls', desc: 'Technical support' },
            { icon: FileText, title: 'Billing', desc: 'Payment & invoices' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-8 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <item.icon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

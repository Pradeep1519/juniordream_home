import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User } from 'lucide-react';

const posts = [
  { title: '10 Tips to Crack JEE 2025', author: 'Dr. Priya Sharma', date: 'Jan 15, 2025', category: 'Academic' },
  { title: 'How to Build Your First Startup', author: 'Meera Kapoor', date: 'Jan 12, 2025', category: 'Business' },
  { title: 'The Art of Effective Mentorship', author: 'Team JuniorDream', date: 'Jan 10, 2025', category: 'Insights' },
];

export function BlogPage() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 bg-white min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, tips, and success stories from our community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              className="p-8 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm mb-4">
                {post.category}
              </div>
              <h3 className="text-xl mb-4">{post.title}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

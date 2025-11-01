import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock } from 'lucide-react';

const jobs = [
  {
    title: 'Senior Mentor Coordinator',
    department: 'Operations',
    location: 'Bangalore',
    type: 'Full-time',
    description: 'Manage mentor onboarding and quality assurance',
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
    description: 'Drive product strategy and roadmap',
  },
  {
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Bangalore',
    type: 'Full-time',
    description: 'Build and scale our platform',
  },
];

export function CareersPage() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 bg-white min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Help us make mentorship accessible to millions of students
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              className="p-8 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl mb-2">{job.title}</h3>
                  <p className="text-gray-600">{job.description}</p>
                </div>
                <button
                  onClick={() => window.location.hash = '#contact'}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                >
                  Apply Now
                </button>
              </div>
              <div className="flex gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  <span>{job.department}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{job.type}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

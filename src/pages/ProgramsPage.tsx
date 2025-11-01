import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Palette, Trophy, Users, Code, Briefcase, Mic, Heart } from 'lucide-react';

const programs = [
  {
    icon: GraduationCap,
    title: 'Academic Excellence',
    description: 'Excel in JEE, NEET, SAT, and other competitive exams with expert guidance',
    mentors: 120,
    students: 3500,
    color: 'from-blue-500 to-cyan-500',
    courses: ['IIT JEE Preparation', 'NEET Coaching', 'SAT/ACT Prep', 'Board Exam Excellence'],
  },
  {
    icon: Palette,
    title: 'Creative Arts',
    description: 'Master design, music, writing, and creative expression with industry professionals',
    mentors: 85,
    students: 2100,
    color: 'from-purple-500 to-pink-500',
    courses: ['Graphic Design', 'Music Production', 'Creative Writing', 'Digital Art'],
  },
  {
    icon: Trophy,
    title: 'Sports & Fitness',
    description: 'Train with athletes and coaches who have competed at the highest levels',
    mentors: 95,
    students: 1800,
    color: 'from-orange-500 to-red-500',
    courses: ['Athletic Training', 'Yoga & Wellness', 'Cricket Coaching', 'Football Training'],
  },
  {
    icon: Users,
    title: 'Leadership Development',
    description: 'Develop communication, management, and leadership skills with successful leaders',
    mentors: 110,
    students: 2600,
    color: 'from-green-500 to-emerald-500',
    courses: ['Public Speaking', 'Team Management', 'Strategic Thinking', 'Personal Branding'],
  },
  {
    icon: Code,
    title: 'Technology & Coding',
    description: 'Learn programming, AI, and tech skills from top engineers and developers',
    mentors: 140,
    students: 4200,
    color: 'from-indigo-500 to-purple-500',
    courses: ['Web Development', 'Mobile Apps', 'Data Science', 'AI & Machine Learning'],
  },
  {
    icon: Briefcase,
    title: 'Entrepreneurship',
    description: 'Build your startup dream with guidance from successful founders',
    mentors: 75,
    students: 1500,
    color: 'from-yellow-500 to-orange-500',
    courses: ['Startup Fundamentals', 'Business Planning', 'Fundraising', 'Growth Hacking'],
  },
  {
    icon: Mic,
    title: 'Media & Communication',
    description: 'Excel in journalism, content creation, and digital media',
    mentors: 65,
    students: 1200,
    color: 'from-pink-500 to-rose-500',
    courses: ['Content Creation', 'Video Production', 'Podcasting', 'Social Media Strategy'],
  },
  {
    icon: Heart,
    title: 'Personal Development',
    description: 'Build confidence, emotional intelligence, and life skills',
    mentors: 90,
    students: 2300,
    color: 'from-teal-500 to-cyan-500',
    courses: ['Confidence Building', 'Time Management', 'Stress Management', 'Career Guidance'],
  },
];

export function ProgramsPage() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 bg-white min-h-screen">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our diverse range of mentorship programs designed to help you excel in your chosen field.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-purple-200 shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="flex items-start gap-6">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl mb-2 text-gray-900">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  
                  {/* Stats */}
                  <div className="flex gap-4 mb-4">
                    <div className="px-3 py-1 rounded-lg bg-gray-100">
                      <span className="text-sm text-gray-600">{program.mentors}+ Mentors</span>
                    </div>
                    <div className="px-3 py-1 rounded-lg bg-gray-100">
                      <span className="text-sm text-gray-600">{program.students}+ Students</span>
                    </div>
                  </div>

                  {/* Courses */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">Popular Courses:</p>
                    <div className="flex flex-wrap gap-2">
                      {program.courses.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => (window.location.hash = '#join')}
                    className={`mt-6 px-6 py-2 rounded-full bg-gradient-to-r ${program.color} text-white hover:shadow-lg transition-all duration-300`}
                  >
                    Explore Program
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

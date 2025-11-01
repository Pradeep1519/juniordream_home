import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { GraduationCap, Palette, Trophy, Users, ArrowRight, Sparkles } from 'lucide-react';

const programs = [
  {
    icon: GraduationCap,
    title: 'Academics',
    description: 'Excel in JEE, NEET, SAT, and competitive exams with expert guidance from top scorers.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50',
    iconBg: 'from-blue-400 to-cyan-400',
    stats: { mentors: 120, students: 3500 },
  },
  {
    icon: Palette,
    title: 'Creative Arts',
    description: 'Master design, music, writing, and creative expression with industry professionals.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50',
    iconBg: 'from-purple-400 to-pink-400',
    stats: { mentors: 85, students: 2100 },
  },
  {
    icon: Trophy,
    title: 'Sports',
    description: 'Train with athletes and coaches who have competed at national and international levels.',
    color: 'from-orange-500 to-red-500',
    bgColor: 'from-orange-50 to-red-50',
    iconBg: 'from-orange-400 to-red-400',
    stats: { mentors: 95, students: 1800 },
  },
  {
    icon: Users,
    title: 'Leadership',
    description: 'Develop communication, management, and entrepreneurship skills with successful leaders.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'from-green-50 to-emerald-50',
    iconBg: 'from-green-400 to-emerald-400',
    stats: { mentors: 110, students: 2600 },
  },
];

interface ProgramCardProps {
  program: typeof programs[0];
  index: number;
}

function ProgramCard({ program, index }: ProgramCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
  const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

  const springConfig = { stiffness: 300, damping: 30 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      className="group relative h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      <motion.div
        className={`relative h-full p-8 rounded-3xl bg-gradient-to-br ${program.bgColor} shadow-lg shadow-gray-200/50 overflow-hidden`}
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ 
          scale: 1.02,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        }}
      >
        {/* Animated gradient background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0`}
          animate={{
            opacity: isHovered ? 0.05 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Floating particles */}
        {isHovered && (
          <>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-2 h-2 rounded-full bg-gradient-to-br ${program.color}`}
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${30 + i * 10}%`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.6, 0],
                  y: [0, -50],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
              />
            ))}
          </>
        )}

        {/* Icon container */}
        <motion.div
          className="relative mb-6"
          style={{ transform: 'translateZ(50px)' }}
        >
          <motion.div
            className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${program.iconBg} flex items-center justify-center shadow-xl relative overflow-hidden`}
            whileHover={{ 
              rotate: [0, -10, 10, -10, 0],
              scale: 1.1,
            }}
            transition={{ 
              rotate: { duration: 0.5 },
              scale: { duration: 0.2 },
            }}
          >
            {/* Rotating shine effect */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'conic-gradient(from 0deg, transparent, rgba(255,255,255,0.4), transparent)',
              }}
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 2, ease: 'linear' }}
            />
            <program.icon className="w-10 h-10 text-white relative z-10" />
          </motion.div>

          {/* Badge */}
          <motion.div
            className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
          >
            <Sparkles className="w-4 h-4 text-purple-600" />
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ transform: 'translateZ(30px)' }}
        >
          <motion.h3 
            className="text-2xl mb-4 text-gray-900"
            whileHover={{ x: 5 }}
          >
            {program.title}
          </motion.h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            {program.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <motion.div
              className="p-3 rounded-xl bg-white/60 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <div className={`text-xl bg-gradient-to-r ${program.color} bg-clip-text text-transparent`}>
                {program.stats.mentors}+
              </div>
              <div className="text-xs text-gray-500">Mentors</div>
            </motion.div>
            <motion.div
              className="p-3 rounded-xl bg-white/60 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <div className={`text-xl bg-gradient-to-r ${program.color} bg-clip-text text-transparent`}>
                {program.stats.students}+
              </div>
              <div className="text-xs text-gray-500">Students</div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.button
            className={`flex items-center gap-2 text-sm font-medium bg-gradient-to-r ${program.color} bg-clip-text text-transparent`}
            whileHover={{ x: 5 }}
          >
            <span>Explore Program</span>
            <motion.div
              animate={{ x: isHovered ? [0, 5, 0] : 0 }}
              transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Decorative corner element */}
        <motion.div
          className={`absolute -right-12 -bottom-12 w-40 h-40 rounded-full bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-10 blur-2xl`}
          animate={{
            scale: isHovered ? [1, 1.2, 1] : 1,
          }}
          transition={{
            duration: 3,
            repeat: isHovered ? Infinity : 0,
          }}
        />

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: '-100%', opacity: 0 }}
          whileHover={{ x: '100%', opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>
    </motion.div>
  );
}

export function AdvancedPrograms() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden" id="programs">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 blur-3xl opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 border border-purple-200/50 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: 'linear' 
              }}
            >
              <Sparkles className="w-5 h-5 text-purple-600" />
            </motion.div>
            <span className="text-sm bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Programs
            </span>
          </motion.div>
          
          <motion.h2 
            className="mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Choose Your Path to Excellence
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Whether you're passionate about academics, arts, sports, or leadership, we have expert mentors ready to guide you.
          </motion.p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={program.title} program={program} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.p
            className="text-gray-600 mb-4"
            whileHover={{ scale: 1.02 }}
          >
            Can't find your interest? We have 20+ specialized programs.
          </motion.p>
          <motion.button
            className="text-purple-600 underline-offset-4 hover:underline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View all programs →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

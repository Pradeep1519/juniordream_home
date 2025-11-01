import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';

const liquidTransition = {
  type: 'spring',
  stiffness: 400,
  damping: 30,
};

export function GlassNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  
  const { scrollY } = useScroll();
  const navBlur = useTransform(scrollY, [0, 100], [0, 20]);
  const navOpacity = useTransform(scrollY, [0, 100], [0.7, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      // Scroll direction detect karo
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll down - navbar hide
        setShowNavbar(false);
      } else {
        // Scroll up - navbar show
        setShowNavbar(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Programs', href: '#programs' },
    { name: 'Mentors', href: '#mentors' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled 
            ? 'py-3' 
            : 'py-4'
        }`}
        style={{ 
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'blur(8px) saturate(150%)',
        }}
        animate={{
          y: showNavbar ? 0 : -100,
        }}
        transition={{ 
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
      >
        {/* Glass background with gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/80 to-white/70 border-b border-white/20"
          style={{ opacity: navOpacity }}
          animate={{
            background: scrolled 
              ? 'linear-gradient(90deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.90) 50%, rgba(255,255,255,0.85) 100%)'
              : 'linear-gradient(90deg, rgba(255,255,255,0.70) 0%, rgba(255,255,255,0.80) 50%, rgba(255,255,255,0.70) 100%)',
          }}
          transition={{ duration: 0.6 }}
        />

        {/* Liquid gradient animation */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'linear-gradient(120deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
              'linear-gradient(240deg, transparent 0%, rgba(99, 102, 241, 0.1) 50%, transparent 100%)',
              'linear-gradient(120deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Left Side */}
            <motion.button
              onClick={() => window.location.hash = '#home'}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={liquidTransition}
            >
              <motion.div
                className="relative w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-lg overflow-hidden"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                {/* Your Company Logo */}
                <img 
                  src="./logo/logobr.png" 
                  alt="JuniorDream Logo"
                  className="w-11 h-11 object-contain"
                />
                
                {/* Liquid shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </motion.div>
              
              <div className="hidden sm:block">
                <div className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  JuniorDream
                </div>
                <div className="text-xs text-gray-500 -mt-0.5">Learn • Grow • Achieve</div>
              </div>
            </motion.button>

            {/* Desktop Nav - Center Aligned */}
            <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  onClick={() => window.location.hash = link.href}
                  className="relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm overflow-hidden group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...liquidTransition, delay: i * 0.05 }}
                  whileHover={{ y: -2 }}
                >
                  <span className="relative z-10">{link.name}</span>
                  
                  {/* Liquid background on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={liquidTransition}
                  />
                </motion.button>
              ))}
            </div>

            {/* Get Started Button - Right Side */}
            <div className="hidden lg:flex items-center">
              <motion.button
                onClick={() => window.location.hash = '#join'}
                className="relative px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg overflow-hidden group shadow-md hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={liquidTransition}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                {/* Liquid shine animation */}
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
                
                <span className="relative z-10 font-medium text-sm flex items-center gap-1.5">
                  Get Started
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg bg-gray-50/80 backdrop-blur-sm hover:bg-gray-100/80 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.95 }}
              transition={liquidTransition}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={liquidTransition}
                  >
                    <X className="w-5 h-5 text-gray-700" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={liquidTransition}
                  >
                    <Menu className="w-5 h-5 text-gray-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 lg:hidden bg-gray-900/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
            />
            
            <motion.div
              className="fixed top-20 left-4 right-4 z-50 lg:hidden bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={liquidTransition}
            >
              {/* Liquid gradient background */}
              <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                  background: [
                    'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)',
                    'linear-gradient(225deg, rgba(99, 102, 241, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
                    'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)',
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              <div className="p-4 relative z-10">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.name}
                    onClick={() => {
                      window.location.hash = link.href;
                      setMobileOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 rounded-lg hover:bg-blue-50/80 transition-colors font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...liquidTransition, delay: i * 0.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.name}
                  </motion.button>
                ))}
                
                <motion.button
                  onClick={() => {
                    window.location.hash = '#join';
                    setMobileOpen(false);
                  }}
                  className="w-full mt-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium shadow-lg relative overflow-hidden group"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...liquidTransition, delay: 0.3 }}
                  whileTap={{ scale: 0.98 }}
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
                  <span className="relative z-10">Get Started</span>
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
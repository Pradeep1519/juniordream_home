import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin, Youtube, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const springConfig = {
  type: 'spring',
  stiffness: 260,
  damping: 20,
};

export function PremiumFooter() {
  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Programs', href: '#programs' },
      { name: 'Mentors', href: '#mentors' },
      { name: 'Pricing', href: '#pricing' },
    ],
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Blog', href: '#blog' },
      { name: 'Contact', href: '#contact' },
    ],
    Resources: [
      { name: 'Help Center', href: '#help' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Community', href: '#home' },
      { name: 'Events', href: '#home' },
    ],
    Legal: [
      { name: 'Privacy', href: '#privacy' },
      { name: 'Terms', href: '#terms' },
      { name: 'Cookies', href: '#privacy' },
      { name: 'Licenses', href: '#terms' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', color: 'hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500' },
    { icon: Twitter, href: '#', color: 'hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500' },
    { icon: Linkedin, href: '#', color: 'hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-600' },
    { icon: Youtube, href: '#', color: 'hover:bg-gradient-to-br hover:from-red-500 hover:to-pink-500' },
  ];

  return (
    <footer className="relative pt-16 sm:pt-20 pb-10 sm:pb-12 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* CTA Section */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-16 sm:mb-20">
        <motion.div
          className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 overflow-hidden shadow-2xl shadow-blue-200/50"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-2xl" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xl text-white/90 mb-10">
              Join 10,000+ students learning from the best mentors in the industry
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                onClick={() => window.location.hash = '#join'}
                className="group px-8 py-4 bg-white text-blue-600 rounded-xl font-medium shadow-xl"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={springConfig}
              >
                <span className="flex items-center gap-2">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              
              <motion.button
                onClick={() => window.location.hash = '#contact'}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all font-medium"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={springConfig}
              >
                Contact Sales
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={springConfig}
            >
              {/* Logo Image - Larger Size */}
              <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shadow-lg overflow-hidden">
                <img 
                  src="./logo/logobr.png" 
                  alt="JuniorDream Logo"
                  className="w-14 h-14 object-contain"
                />
              </div>
              <div>
                <div className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  JuniorDream
                </div>
                <div className="text-sm text-gray-500">Learn • Grow • Achieve</div>
              </div>
            </motion.div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              India's leading mentorship platform connecting ambitious students with industry achievers.
            </p>

            {/* Contact */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="w-4 h-4" />
                <span>hello@juniordream.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                <MapPin className="w-4 h-4" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, ...springConfig }}
            >
              <h4 className="text-gray-900 font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.button
                      onClick={() => window.location.hash = link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                      whileHover={{ x: 3 }}
                      transition={springConfig}
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © 2025 JuniorDream. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-11 h-11 rounded-xl bg-gray-100 hover:text-white ${social.color} flex items-center justify-center transition-all shadow-sm`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={springConfig}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Made with love */}
            <p className="text-gray-500 text-sm flex items-center gap-2">
              Made with <span className="text-red-500">❤️</span> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
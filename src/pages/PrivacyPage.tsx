import React from 'react';
import { motion } from 'motion/react';

export function PrivacyPage() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 bg-white min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <section>
              <h2>1. Information We Collect</h2>
              <p>We collect information you provide directly, such as name, email, and profile details. We also collect usage data to improve our services.</p>
            </section>
            
            <section>
              <h2>2. How We Use Your Information</h2>
              <p>Your information is used to provide mentorship services, process payments, communicate updates, and improve platform experience.</p>
            </section>

            <section>
              <h2>3. Data Security</h2>
              <p>We implement industry-standard security measures to protect your data. All payment information is encrypted and securely processed.</p>
            </section>

            <section>
              <h2>4. Third-Party Services</h2>
              <p>We use trusted third-party services for payments, analytics, and communication. These services have their own privacy policies.</p>
            </section>

            <section>
              <h2>5. Your Rights</h2>
              <p>You have the right to access, update, or delete your personal information. Contact us to exercise these rights.</p>
            </section>

            <section>
              <h2>6. Cookies</h2>
              <p>We use cookies to enhance user experience and analyze platform usage. You can control cookie preferences in your browser.</p>
            </section>

            <p className="text-sm text-gray-500 mt-8">Last updated: January 2025</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

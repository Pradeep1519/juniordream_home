import React from 'react';
import { motion } from 'motion/react';

export function TermsPage() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 bg-white min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <section>
              <h2>1. Acceptance of Terms</h2>
              <p>By accessing and using JuniorDream, you accept and agree to be bound by these Terms of Service.</p>
            </section>
            
            <section>
              <h2>2. User Accounts</h2>
              <p>You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.</p>
            </section>

            <section>
              <h2>3. Mentorship Services</h2>
              <p>JuniorDream provides a platform to connect students with mentors. We do not guarantee specific outcomes or results from mentorship sessions.</p>
            </section>

            <section>
              <h2>4. Payment Terms</h2>
              <p>All payments are processed securely. Subscriptions auto-renew unless cancelled. Refunds are provided as per our refund policy.</p>
            </section>

            <section>
              <h2>5. Code of Conduct</h2>
              <p>Users must maintain respectful communication. Harassment, discrimination, or inappropriate behavior will result in account termination.</p>
            </section>

            <section>
              <h2>6. Intellectual Property</h2>
              <p>All content on JuniorDream is protected by copyright. Users may not reproduce or distribute platform content without permission.</p>
            </section>

            <p className="text-sm text-gray-500 mt-8">Last updated: January 2025</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

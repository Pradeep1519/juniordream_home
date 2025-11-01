import React, { useState, useEffect } from 'react';
import { GlassNavbar } from './components/GlassNavbar';
import { LiquidHero } from './components/LiquidHero';
import { PremiumFeatures } from './components/PremiumFeatures';
import { PremiumMentors } from './components/PremiumMentors';
import { AdvancedPrograms } from './components/AdvancedPrograms';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PremiumFooter } from './components/PremiumFooter';

// Import all pages
import { FeaturesPage } from './pages/FeaturesPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { MentorsPage } from './pages/MentorsPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { CareersPage } from './pages/CareersPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { HelpCenterPage } from './pages/HelpCenterPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { FAQPage } from './pages/FAQPage';
import { ParentOnboardingFlow } from './pages/OnboardingFlow';

// Homepage component
function HomePage() {
  return (
    <>
      <LiquidHero />
      <PremiumFeatures />
      <PremiumMentors />
      <AdvancedPrograms />
      <TestimonialsSection />
    </>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Handle hash changes for navigation
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentPage(hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Render page based on current route
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'features':
        return <FeaturesPage />;
      case 'programs':
        return <ProgramsPage />;
      case 'mentors':
        return <MentorsPage />;
      case 'pricing':
        return <PricingPage />;
      case 'about':
        return <AboutPage />;
      case 'careers':
        return <CareersPage />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage />;
      case 'help':
        return <HelpCenterPage />;
      case 'terms':
        return <TermsPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'faq':
        return <FAQPage />;
      case 'join':
        return <ParentOnboardingFlow />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="relative bg-white text-gray-900 overflow-hidden">
      {/* Main content */}
      <GlassNavbar />
      
      {renderPage()}

      {/* Show footer on all pages except onboarding */}
      {currentPage !== 'join' && <PremiumFooter />}
    </div>
  );
}

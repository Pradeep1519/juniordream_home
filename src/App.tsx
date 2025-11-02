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
import { PaymentPage } from './pages/PaymentPage';
import { EnrollmentForm } from './components/EnrollmentForm';
import { SuccessPage } from './components/SuccessPage';

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

// Enrollment Flow Types
interface PlanDetails {
  name: string;
  classRange: string;
  monthlyFee: string;
  annualFee: string;
  color: string;
  buttonColor: string;
}

interface EnrollmentData {
  studentName: string;
  currentClass: string;
  schoolName: string;
  careerGoal: string;
  parentName: string;
  phone: string;
  preferredBatch: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [enrollmentFlow, setEnrollmentFlow] = useState<'pricing' | 'enrollment' | 'payment' | 'success'>('pricing');
  const [selectedPlan, setSelectedPlan] = useState<PlanDetails | null>(null);
  const [enrollmentData, setEnrollmentData] = useState<EnrollmentData | null>(null);

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

  // Handle enrollment flow
  const handleEnrollClick = (plan: PlanDetails) => {
    setSelectedPlan(plan);
    setEnrollmentFlow('enrollment');
  };

  const handleEnrollmentComplete = (data: any) => {
    setEnrollmentData(data);
    setEnrollmentFlow('payment');
  };

  const handlePaymentSuccess = () => {
    setEnrollmentFlow('success');
  };

  const handleBackToHome = () => {
    setEnrollmentFlow('pricing');
    setCurrentPage('home');
  };

  // Render enrollment flow
  const renderEnrollmentFlow = () => {
    switch (enrollmentFlow) {
      case 'enrollment':
        return (
          <EnrollmentForm
            selectedPlan={selectedPlan!}
            onComplete={handleEnrollmentComplete}
            onBack={() => setEnrollmentFlow('pricing')}
          />
        );
      case 'payment':
        return (
          <PaymentPage
            plan={selectedPlan!}
            formData={enrollmentData!}
            billingCycle="monthly"
            onBack={() => setEnrollmentFlow('enrollment')}
            onPaymentSuccess={handlePaymentSuccess}
          />
        );
      case 'success':
        return (
          <SuccessPage
            studentName={enrollmentData!.studentName}
            planName={selectedPlan!.name}
            onBackToHome={handleBackToHome}
          />
        );
      default:
        return <PricingPage onEnrollClick={handleEnrollClick} />;
    }
  };

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
        return renderEnrollmentFlow();
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
      {/* Show navbar only if not in enrollment flow */}
      {enrollmentFlow === 'pricing' && <GlassNavbar />}
      
      {renderPage()}

      {/* Show footer only if not in enrollment flow and not on onboarding */}
      {enrollmentFlow === 'pricing' && currentPage !== 'join' && <PremiumFooter />}
    </div>
  );
}
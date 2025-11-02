import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, Check, Sparkles, User, Mail, Phone, GraduationCap, Target, Calendar, Heart, MapPin, BookOpen, Award, Star, Loader, X, Home } from 'lucide-react';

const steps = [
  { id: 1, title: 'Welcome', description: 'Begin the journey' },
  { id: 2, title: 'Basic Info', description: 'About you & your child' },
  { id: 3, title: 'Your Dream', description: 'Vision for your child' },
  { id: 4, title: 'Child\'s Strengths', description: 'Natural talents' },
  { id: 5, title: 'Challenges', description: 'Current difficulties' },
  { id: 6, title: 'Submit', description: 'Complete registration' },
];

const careerOptions = [
  { 
    icon: '🏥', 
    title: 'Doctor', 
    description: 'My child becomes a doctor and saves lives' 
  },
  { 
    icon: '🔧', 
    title: 'Engineer', 
    description: 'My child becomes an engineer from IIT/NIT' 
  },
  { 
    icon: '👨‍💼', 
    title: 'IAS/UPSC Officer', 
    description: 'My child serves the nation' 
  },
  { 
    icon: '💼', 
    title: 'MBA/Business Leader', 
    description: 'My child becomes a successful business leader' 
  },
  { 
    icon: '🔬', 
    title: 'Scientist/Researcher', 
    description: 'My child makes new discoveries and inventions' 
  },
  { 
    icon: '❓', 
    title: 'Not decided yet', 
    description: 'We need guidance to choose the right path' 
  },
];

const strengths = [
  'Academically Strong',
  'Good Communication', 
  'Leadership Qualities',
  'Curious Mind',
  'Determined',
];

const challenges = [
  'Concentration Issues',
  'Low Marks',
  'Exam Fear',
  'Lacks Direction',
  'Weak Communication',
  'Other Challenges',
];

export function ParentOnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    childClass: '',
    location: '',
    mobileNumber: '',
    dreamCareer: '',
    strengths: [] as string[],
    challenges: [] as string[],
    meetingDate: '',
    meetingTime: '',
    meetingAddress: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showScheduling, setShowScheduling] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Go to Home function
  const handleGoToHome = () => {
    window.location.href = '/';
  };

  // Mobile number validation - only numbers
  const handleMobileNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setFormData({ ...formData, mobileNumber: value });
    }
  };

  // Validation for each step
  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return true;
      case 2:
        return formData.parentName.trim() !== '' && 
               formData.childName.trim() !== '' && 
               formData.childAge.trim() !== '' && 
               formData.childClass !== '' && 
               formData.location.trim() !== '' &&
               formData.mobileNumber.trim() !== '' &&
               formData.mobileNumber.length === 10;
      case 3:
        return formData.dreamCareer !== '';
      case 4:
        return formData.strengths.length > 0;
      case 5:
        return formData.challenges.length > 0;
      case 6:
        return true;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length && isStepValid()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleStrength = (strength: string) => {
    setFormData(prev => ({
      ...prev,
      strengths: prev.strengths.includes(strength)
        ? prev.strengths.filter(s => s !== strength)
        : [...prev.strengths, strength],
    }));
  };

  const toggleChallenge = (challenge: string) => {
    setFormData(prev => ({
      ...prev,
      challenges: prev.challenges.includes(challenge)
        ? prev.challenges.filter(c => c !== challenge)
        : [...prev.challenges, challenge],
    }));
  };

  const handleSubmitForm = async () => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScheduleSession = () => {
    setShowScheduling(true);
  };

  const handleConfirmSchedule = () => {
    if (!formData.meetingDate || !formData.meetingTime || !formData.meetingAddress) {
      alert('Please fill all scheduling details');
      return;
    }

    const schedulingData = {
      ...formData,
      scheduledAt: `${formData.meetingDate} ${formData.meetingTime}`
    };
    
    console.log('Scheduling confirmed:', schedulingData);
    setShowSuccessPopup(true);
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
    handleGoToHome();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 parent-onboarding-flow">
      <div className="w-full max-w-4xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center flex-1">
                <motion.div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    currentStep >= step.id
                      ? 'bg-gradient-to-br from-rose-500 to-orange-500 border-orange-500 text-white'
                      : 'bg-white border-gray-300 text-gray-400'
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {currentStep > step.id ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span className="text-sm">{step.id}</span>
                  )}
                </motion.div>
                <div className="text-xs text-gray-600 mt-2 text-center hidden md:block">
                  {step.title}
                </div>
              </div>
            ))}
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-rose-500 to-orange-500"
              initial={{ width: '0%' }}
              animate={{ width: `${(currentStep / steps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Step Content - Fixed Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-orange-100">
          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col"
              >
                {/* Step 1: Welcome */}
                {currentStep === 1 && (
                  <div className="flex-1 flex flex-col justify-center text-center">
                    <motion.div
                      className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    >
                      <Heart className="w-10 h-10 text-white" />
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent font-bold">
                      Your Child's Dream, Our Mission
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                      We begin this journey with the dreams you hold in your heart for your child
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { icon: Heart, text: 'Parent\'s Dreams', color: 'from-rose-500 to-pink-500' },
                        { icon: Target, text: 'Clear Vision', color: 'from-orange-500 to-amber-500' },
                        { icon: Star, text: 'Proven Success', color: 'from-amber-500 to-yellow-500' },
                      ].map((feature, i) => (
                        <motion.div
                          key={i}
                          className="p-4 rounded-xl bg-gradient-to-br from-rose-50 to-orange-50 border border-orange-100"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-3`}>
                            <feature.icon className="w-6 h-6 text-white" />
                          </div>
                          <p className="text-sm text-gray-700 font-medium">{feature.text}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Basic Info */}
                {currentStep === 2 && (
                  <div className="flex-1 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl mb-2 text-gray-800">About You & Your Child</h2>
                    <p className="text-gray-600 mb-8">Let us get to know your family better</p>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Name (Parent) *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                              placeholder="Enter your name"
                              value={formData.parentName}
                              onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Child's Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                              placeholder="Enter child's name"
                              value={formData.childName}
                              onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Child's Age *
                          </label>
                          <input
                            type="number"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            placeholder="Enter age"
                            value={formData.childAge}
                            onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Current Class *
                          </label>
                          <select
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            value={formData.childClass}
                            onChange={(e) => setFormData({ ...formData, childClass: e.target.value })}
                            required
                          >
                            <option value="">Select Class</option>
                            <option value="5th-8th">5th - 8th</option>
                            <option value="9th-10th">9th - 10th</option>
                            <option value="11th-12th">11th - 12th</option>
                            <option value="College">College</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Mobile Number *
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="tel"
                              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                              placeholder="9876543210"
                              value={formData.mobileNumber}
                              onChange={handleMobileNumberChange}
                              maxLength={10}
                              required
                            />
                          </div>
                          {formData.mobileNumber && formData.mobileNumber.length !== 10 && (
                            <p className="text-rose-500 text-xs mt-1">Please enter 10 digit mobile number</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            City/Area *
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                              placeholder="Enter your city/area"
                              value={formData.location}
                              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Dream Career */}
                {currentStep === 3 && (
                  <div className="flex-1 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl mb-2 text-gray-800">What do you dream for your child's future? *</h2>
                    <p className="text-gray-600 mb-8">Every parent carries a dream in their heart - we want to help make that dream come true</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {careerOptions.map((career) => (
                        <motion.button
                          key={career.title}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            formData.dreamCareer === career.title
                              ? 'border-orange-500 bg-orange-50 shadow-md'
                              : 'border-gray-200 hover:border-orange-300 hover:shadow-sm'
                          }`}
                          onClick={() => setFormData({ ...formData, dreamCareer: career.title })}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-start gap-3">
                            <span className="text-2xl">{career.icon}</span>
                            <div className="flex-1">
                              <div className="font-semibold text-gray-800 mb-1">{career.title}</div>
                              <div className="text-xs text-gray-600">{career.description}</div>
                            </div>
                            {formData.dreamCareer === career.title && (
                              <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                            )}
                          </div>
                        </motion.button>
                      ))}
                    </div>
                    {!formData.dreamCareer && (
                      <p className="text-rose-500 text-sm mt-4 text-center">Please select your dream for your child to continue</p>
                    )}
                  </div>
                )}

                {/* Step 4: Strengths */}
                {currentStep === 4 && (
                  <div className="flex-1 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl mb-2 text-gray-800">What is your child naturally good at? *</h2>
                    <p className="text-gray-600 mb-8">Recognizing your child's natural talents is the first step toward their success</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {strengths.map((strength) => (
                        <motion.button
                          key={strength}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            formData.strengths.includes(strength)
                              ? 'border-green-500 bg-green-50'
                              : 'border-gray-200 hover:border-green-300'
                          }`}
                          onClick={() => toggleStrength(strength)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-800">{strength}</span>
                            {formData.strengths.includes(strength) && (
                              <Check className="w-5 h-5 text-green-600" />
                            )}
                          </div>
                        </motion.button>
                      ))}
                    </div>
                    {formData.strengths.length === 0 && (
                      <p className="text-rose-500 text-sm mt-4 text-center">Please select at least one strength to continue</p>
                    )}
                  </div>
                )}

                {/* Step 5: Challenges */}
                {currentStep === 5 && (
                  <div className="flex-1 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl mb-2 text-gray-800">Is your child facing any challenges? *</h2>
                    <p className="text-gray-600 mb-8">Every child is unique - we understand their individual difficulties</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {challenges.map((challenge) => (
                        <motion.button
                          key={challenge}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            formData.challenges.includes(challenge)
                              ? 'border-rose-500 bg-rose-50'
                              : 'border-gray-200 hover:border-rose-300'
                          }`}
                          onClick={() => toggleChallenge(challenge)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-800">{challenge}</span>
                            {formData.challenges.includes(challenge) && (
                              <Check className="w-5 h-5 text-rose-600" />
                            )}
                          </div>
                        </motion.button>
                      ))}
                    </div>
                    {formData.challenges.length === 0 && (
                      <p className="text-rose-500 text-sm mt-4 text-center">Please select at least one challenge to continue</p>
                    )}
                  </div>
                )}

                {/* Step 6: Submit Form */}
                {currentStep === 6 && (
                  <div className="flex-1 flex flex-col justify-center">
                    {!isSubmitted ? (
                      <div className="text-center">
                        <motion.div
                          className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        >
                          <Award className="w-10 h-10 text-white" />
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl mb-4 text-gray-800">Complete Your Registration</h2>
                        <p className="text-lg text-gray-600 mb-8">
                          You're almost there! Submit your information to begin {formData.childName}'s journey towards becoming a {formData.dreamCareer}.
                        </p>
                        
                        {/* Form Summary */}
                        <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl p-6 mb-8 border border-orange-200">
                          <h3 className="text-lg font-semibold mb-4 text-gray-800">Your Information Summary</h3>
                          <div className="space-y-3 text-left">
                            <div className="flex justify-between p-3 bg-white rounded-lg">
                              <span className="font-medium text-gray-700">Parent Name:</span>
                              <span className="text-gray-900">{formData.parentName}</span>
                            </div>
                            <div className="flex justify-between p-3 bg-white rounded-lg">
                              <span className="font-medium text-gray-700">Child's Name:</span>
                              <span className="text-gray-900">{formData.childName}</span>
                            </div>
                            <div className="flex justify-between p-3 bg-white rounded-lg">
                              <span className="font-medium text-gray-700">Mobile Number:</span>
                              <span className="text-gray-900">{formData.mobileNumber}</span>
                            </div>
                            <div className="flex justify-between p-3 bg-white rounded-lg">
                              <span className="font-medium text-gray-700">Dream Career:</span>
                              <span className="text-gray-900">{formData.dreamCareer}</span>
                            </div>
                            <div className="flex justify-between p-3 bg-white rounded-lg">
                              <span className="font-medium text-gray-700">Location:</span>
                              <span className="text-gray-900">{formData.location}</span>
                            </div>
                          </div>
                        </div>

                        <motion.button
                          className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mx-auto flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleSubmitForm}
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader className="w-5 h-5 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Check className="w-5 h-5" />
                              Submit Registration
                            </>
                          )}
                        </motion.button>
                      </div>
                    ) : !showScheduling ? (
                      /* Success Screen after submission */
                      <div className="text-center">
                        <motion.div
                          className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        >
                          <Award className="w-10 h-10 text-white" />
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl mb-4 text-gray-800">Registration Successful! 🎉</h2>
                        <p className="text-lg text-gray-600 mb-8">
                          Thank you, {formData.parentName}! We're honored to help {formData.childName} achieve their dreams.
                        </p>
                        
                        <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl p-6 mb-8 border border-orange-200">
                          <h3 className="text-lg font-semibold mb-4 text-gray-800">What Happens Next?</h3>
                          <div className="space-y-3 text-left">
                            <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                              <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold">
                                1
                              </div>
                              <div>
                                <div className="font-medium text-gray-800">Free Personal Session</div>
                                <div className="text-sm text-gray-600">Our expert will visit you for detailed discussion</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                              <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold">
                                2
                              </div>
                              <div>
                                <div className="font-medium text-gray-800">Understand Your Needs</div>
                                <div className="text-sm text-gray-600">We'll analyze {formData.childName}'s requirements</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                              <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold">
                                3
                              </div>
                              <div>
                                <div className="font-medium text-gray-800">Personalized Plan</div>
                                <div className="text-sm text-gray-600">Custom roadmap for {formData.dreamCareer} journey</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <motion.button
                          className="px-8 py-4 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mx-auto"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleScheduleSession}
                        >
                          <Calendar className="w-5 h-5 mr-2 inline" />
                          Schedule Free Session
                        </motion.button>
                        
                        <p className="text-sm text-gray-500 mt-4">
                          Choose your preferred date and time for personal meeting
                        </p>
                      </div>
                    ) : (
                      /* Scheduling Screen */
                      <div className="text-center">
                        <motion.div
                          className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        >
                          <Calendar className="w-10 h-10 text-white" />
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl mb-4 text-gray-800">Schedule Your Free Session</h2>
                        <p className="text-lg text-gray-600 mb-8">
                          Choose when our mentor should visit you for personal consultation
                        </p>
                        
                        <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl p-6 mb-8 border border-orange-200">
                          <h3 className="text-lg font-semibold mb-4 text-gray-800">Meeting Details</h3>
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Preferred Date *
                              </label>
                              <input
                                type="date"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                value={formData.meetingDate}
                                onChange={(e) => setFormData({ ...formData, meetingDate: e.target.value })}
                                min={new Date().toISOString().split('T')[0]}
                                required
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Preferred Time *
                              </label>
                              <select
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                value={formData.meetingTime}
                                onChange={(e) => setFormData({ ...formData, meetingTime: e.target.value })}
                                required
                              >
                                <option value="">Select Time Slot</option>
                                <option value="09:00 AM">09:00 AM</option>
                                <option value="10:00 AM">10:00 AM</option>
                                <option value="11:00 AM">11:00 AM</option>
                                <option value="12:00 PM">12:00 PM</option>
                                <option value="02:00 PM">02:00 PM</option>
                                <option value="03:00 PM">03:00 PM</option>
                                <option value="04:00 PM">04:00 PM</option>
                                <option value="05:00 PM">05:00 PM</option>
                                <option value="06:00 PM">06:00 PM</option>
                              </select>
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Complete Address for Meeting *
                              </label>
                              <textarea
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                                rows={3}
                                placeholder="Enter your complete address with landmark..."
                                value={formData.meetingAddress}
                                onChange={(e) => setFormData({ ...formData, meetingAddress: e.target.value })}
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <motion.button
                            className="px-6 py-3 border-2 border-orange-500 text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowScheduling(false)}
                          >
                            Back
                          </motion.button>
                          <motion.button
                            className="px-8 py-4 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleConfirmSchedule}
                          >
                            Confirm Schedule
                          </motion.button>
                        </div>
                        
                        <p className="text-sm text-gray-500 mt-4">
                          Our mentor will visit you at the scheduled time and address
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons - WITH GO TO HOME BUTTON */}
          {currentStep !== 6 && (
            <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-200">
              <div className="flex gap-3">
                {/* Go to Home Button - Back button ke side mein */}
                <motion.button
                  onClick={handleGoToHome}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200 border border-gray-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Home className="w-4 h-4" />
                  <span className="text-sm font-medium">Home</span>
                </motion.button>

                <motion.button
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className={`px-6 py-3 rounded-xl border-2 font-medium transition-all ${
                    currentStep === 1 
                      ? 'border-gray-300 text-gray-400 cursor-not-allowed' 
                      : 'border-orange-500 text-orange-600 hover:bg-orange-50'
                  }`}
                  whileHover={currentStep !== 1 ? { scale: 1.05 } : {}}
                  whileTap={currentStep !== 1 ? { scale: 0.95 } : {}}
                >
                  <ArrowLeft className="w-4 h-4 mr-2 inline" />
                  Back
                </motion.button>
              </div>
              
              <motion.button
                onClick={handleNext}
                disabled={!isStepValid()}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  isStepValid()
                    ? 'bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                whileHover={isStepValid() ? { scale: 1.05 } : {}}
                whileTap={isStepValid() ? { scale: 0.95 } : {}}
              >
                Continue
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </motion.button>
            </div>
          )}
        </div>
      </div>

      {/* Success Popup */}
      <AnimatePresence>
        {showSuccessPopup && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 w-full max-w-md mx-auto text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <Check className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Session Scheduled Successfully!
              </h3>
              
              <p className="text-gray-600 mb-6">
                Our mentor will visit your location on time as per your schedule.
              </p>

              <div className="bg-green-50 rounded-xl p-4 mb-6 border border-green-200">
                <div className="text-sm text-green-800 text-left">
                  <div className="font-semibold mb-2">Meeting Details:</div>
                  <div>Date: {formData.meetingDate}</div>
                  <div>Time: {formData.meetingTime}</div>
                  <div className="truncate">Location: {formData.location}</div>
                </div>
              </div>

              <motion.button
                className="w-full py-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleClosePopup}
              >
                Got it, Thank you!
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
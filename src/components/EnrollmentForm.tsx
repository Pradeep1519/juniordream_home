import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, User, Users, Clock, ArrowLeft } from 'lucide-react';

interface FormData {
  // Student Details
  studentName: string;
  dateOfBirth: string;
  currentClass: string;
  schoolName: string;
  board: string;
  careerGoal: string;
  
  // Parent Details
  parentName: string;
  relationship: string;
  email: string;
  phone: string;
  alternatePhone: string;
  
  // Batch Selection
  preferredBatch: string;
}

interface EnrollmentFormProps {
  selectedPlan: {
    name: string;
    classRange: string;
    monthlyFee: string;
    annualFee: string;
  };
  onComplete: (data: FormData) => void;
  onBack?: () => void;
}

export function EnrollmentForm({ selectedPlan, onComplete, onBack }: EnrollmentFormProps) {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    // Student Details
    studentName: '',
    dateOfBirth: '',
    currentClass: '',
    schoolName: '',
    board: '',
    careerGoal: '',
    
    // Parent Details
    parentName: '',
    relationship: '',
    email: '',
    phone: '',
    alternatePhone: '',
    
    // Batch Selection
    preferredBatch: ''
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    } else {
      onComplete(formData);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else if (onBack) {
      onBack();
    }
  };

  const isStepValid = (): boolean => {
    switch (currentStep) {
      case 1:
        return !!(formData.studentName && formData.dateOfBirth && formData.currentClass && 
                 formData.schoolName && formData.board && formData.careerGoal);
      case 2:
        return !!(formData.parentName && formData.relationship && formData.phone);
      case 3:
        return !!formData.preferredBatch;
      default:
        return false;
    }
  };

  // Step 1: Student Details
  const renderStudentDetails = () => (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <User className="w-12 h-12 mx-auto mb-4 text-blue-500" />
        <h2 className="text-2xl font-bold text-gray-800">Student Information</h2>
        <p className="text-gray-600">Tell us about your child</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Student Full Name *
          </label>
          <input
            type="text"
            value={formData.studentName}
            onChange={(e) => updateFormData('studentName', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter student's full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth *
          </label>
          <input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => updateFormData('dateOfBirth', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Class *
          </label>
          <select
            value={formData.currentClass}
            onChange={(e) => updateFormData('currentClass', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Class</option>
            <option value="6">Class 6</option>
            <option value="7">Class 7</option>
            <option value="8">Class 8</option>
            <option value="9">Class 9</option>
            <option value="10">Class 10</option>
            <option value="11">Class 11</option>
            <option value="12">Class 12</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Board *
          </label>
          <select
            value={formData.board}
            onChange={(e) => updateFormData('board', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Board</option>
            <option value="CBSE">CBSE</option>
            <option value="ICSE">ICSE</option>
            <option value="State Board">State Board</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            School Name *
          </label>
          <input
            type="text"
            value={formData.schoolName}
            onChange={(e) => updateFormData('schoolName', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter school name"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What do you want your child to become? *
          </label>
          <select
            value={formData.careerGoal}
            onChange={(e) => updateFormData('careerGoal', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Career Goal</option>
            <option value="Engineer">Engineer</option>
            <option value="Doctor">Doctor</option>
            <option value="IAS Officer">IAS Officer</option>
            <option value="Scientist">Scientist</option>
            <option value="CA">CA (Chartered Accountant)</option>
            <option value="Lawyer">Lawyer</option>
            <option value="Software Developer">Software Developer</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
    </motion.div>
  );

  // Step 2: Parent Details
  const renderParentDetails = () => (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <Users className="w-12 h-12 mx-auto mb-4 text-green-500" />
        <h2 className="text-2xl font-bold text-gray-800">Parent Information</h2>
        <p className="text-gray-600">Tell us about yourself</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Parent Name *
          </label>
          <input
            type="text"
            value={formData.parentName}
            onChange={(e) => updateFormData('parentName', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter parent's name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Relationship *
          </label>
          <select
            value={formData.relationship}
            onChange={(e) => updateFormData('relationship', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Relationship</option>
            <option value="Father">Father</option>
            <option value="Mother">Mother</option>
            <option value="Guardian">Guardian</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => updateFormData('email', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter email address"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => updateFormData('phone', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter WhatsApp number"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Alternate Phone Number
          </label>
          <input
            type="tel"
            value={formData.alternatePhone}
            onChange={(e) => updateFormData('alternatePhone', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter alternate contact number"
          />
        </div>
      </div>
    </motion.div>
  );

  // Step 3: Batch Selection
  const renderBatchSelection = () => (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <Clock className="w-12 h-12 mx-auto mb-4 text-purple-500" />
        <h2 className="text-2xl font-bold text-gray-800">Select Batch Timing</h2>
        <p className="text-gray-600">Choose your preferred class time</p>
      </div>

      <div className="space-y-4">
        {[
          { time: '5:00 PM - 6:00 PM', value: '5-6' },
          { time: '6:00 PM - 7:00 PM', value: '6-7' },
          { time: '7:00 PM - 8:00 PM', value: '7-8' }
        ].map((batch) => (
          <div
            key={batch.value}
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
              formData.preferredBatch === batch.value
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-blue-300'
            }`}
            onClick={() => updateFormData('preferredBatch', batch.value)}
          >
            <div className="flex items-center gap-3">
              <div className={`w-4 h-4 rounded-full border-2 ${
                formData.preferredBatch === batch.value
                  ? 'border-blue-500 bg-blue-500'
                  : 'border-gray-400'
              }`} />
              <div>
                <div className="font-medium text-gray-800">{batch.time}</div>
                <div className="text-sm text-gray-600">Daily 1 hour classes</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
        <p className="text-sm text-yellow-800">
          <strong>Note:</strong> Batch confirmation is subject to availability. 
          We'll contact you to finalize the timing.
        </p>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Enroll in {selectedPlan.name}
          </h1>
          <p className="text-gray-600">
            Complete the enrollment process in 3 simple steps
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <React.Fragment key={step}>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  currentStep >= step 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-300 text-gray-600'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-12 h-1 ${
                    currentStep > step ? 'bg-blue-500' : 'bg-gray-300'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          {/* Current Step Content */}
          {currentStep === 1 && renderStudentDetails()}
          {currentStep === 2 && renderParentDetails()}
          {currentStep === 3 && renderBatchSelection()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={prevStep}
              className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {currentStep === 1 ? 'Back to Plans' : 'Previous'}
            </button>

            <button
              onClick={nextStep}
              disabled={!isStepValid()}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                isStepValid()
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {currentStep === 3 ? 'Proceed to Payment' : 'Next Step'}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
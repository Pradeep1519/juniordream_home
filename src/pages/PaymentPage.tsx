import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CreditCard, Smartphone, Building, CheckCircle, ArrowLeft, Shield } from 'lucide-react';

interface PlanDetails {
  name: string;
  classRange: string;
  monthlyFee: string;
  annualFee: string;
  color: string;
}

interface FormData {
  studentName: string;
  currentClass: string;
  schoolName: string;
  careerGoal: string;
  parentName: string;
  phone: string;
  preferredBatch: string;
}

interface PaymentPageProps {
  plan: PlanDetails;
  formData: FormData;
  billingCycle: 'monthly' | 'yearly';
  onBack: () => void;
  onPaymentSuccess: () => void;
}

export function PaymentPage({ plan, formData, billingCycle, onBack, onPaymentSuccess }: PaymentPageProps) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const paymentMethods = [
    {
      id: 'upi',
      name: 'UPI',
      icon: Smartphone,
      description: 'Google Pay, PhonePe, Paytm'
    },
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: CreditCard,
      description: 'Visa, Mastercard, RuPay'
    },
    {
      id: 'netbanking',
      name: 'Net Banking',
      icon: Building,
      description: 'All major banks'
    }
  ];

  const getAmount = () => {
    return billingCycle === 'yearly' ? plan.annualFee : plan.monthlyFee;
  };

  const calculateSavings = () => {
    if (billingCycle === 'yearly') {
      const monthly = parseInt(plan.monthlyFee.replace('₹', '').replace(',', ''));
      const yearly = parseInt(plan.annualFee.replace('₹', '').replace(',', ''));
      return monthly * 12 - yearly;
    }
    return 0;
  };

  const handlePayment = async () => {
    if (!selectedPaymentMethod) return;
    
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentSuccess();
    }, 2000);
  };

  const savings = calculateSavings();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Complete Your Enrollment
          </h1>
          <p className="text-gray-600">
            Secure payment - Start your learning journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
              
              {/* Plan Details */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-800">{plan.name}</h3>
                    <p className="text-sm text-gray-600">{plan.classRange}</p>
                    <p className="text-sm text-gray-600">Student: {formData.studentName}</p>
                    <p className="text-sm text-gray-600">Batch: {formData.preferredBatch === '5-6' ? '5:00-6:00 PM' : 
                      formData.preferredBatch === '6-7' ? '6:00-7:00 PM' : '7:00-8:00 PM'}</p>
                  </div>
                  <div className="text-right">
                    <div className={`text-lg font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                      {getAmount()}
                    </div>
                    <div className="text-sm text-gray-500">
                      {billingCycle === 'yearly' ? 'per year' : 'per month'}
                    </div>
                  </div>
                </div>

                {savings > 0 && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-green-700">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        You save ₹{savings.toLocaleString()} with yearly plan!
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="border-t border-gray-200 mt-4 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Plan price</span>
                  <span>{getAmount()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>GST (18%)</span>
                  <span>₹{Math.round(parseInt(getAmount().replace('₹', '').replace(',', '')) * 0.18).toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t border-gray-200 pt-2">
                  <span>Total Amount</span>
                  <span>₹{(
                    parseInt(getAmount().replace('₹', '').replace(',', '')) * 1.18
                  ).toLocaleString()}</span>
                </div>
              </div>
            </motion.div>

            {/* Student Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4">Student Details</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Name:</span>
                  <span className="font-medium">{formData.studentName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Class:</span>
                  <span className="font-medium">Class {formData.currentClass}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">School:</span>
                  <span className="font-medium">{formData.schoolName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Career Goal:</span>
                  <span className="font-medium">{formData.careerGoal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Batch Time:</span>
                  <span className="font-medium">
                    {formData.preferredBatch === '5-6' ? '5:00-6:00 PM' : 
                     formData.preferredBatch === '6-7' ? '6:00-7:00 PM' : '7:00-8:00 PM'}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Payment Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Select Payment Method</h2>
              
              {/* Payment Methods */}
              <div className="space-y-3 mb-6">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedPaymentMethod === method.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:border-blue-300'
                    }`}
                    onClick={() => setSelectedPaymentMethod(method.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedPaymentMethod === method.id
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-400'
                      }`}>
                        {selectedPaymentMethod === method.id && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                      <method.icon className="w-6 h-6 text-gray-600" />
                      <div className="flex-1">
                        <div className="font-medium text-gray-800">{method.name}</div>
                        <div className="text-sm text-gray-600">{method.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Security Badge */}
              <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600">
                  Your payment is secure and encrypted
                </span>
              </div>
            </div>

            {/* Payment Button */}
            <motion.button
              whileHover={{ scale: selectedPaymentMethod && !isProcessing ? 1.02 : 1 }}
              whileTap={{ scale: selectedPaymentMethod && !isProcessing ? 0.98 : 1 }}
              onClick={handlePayment}
              disabled={!selectedPaymentMethod || isProcessing}
              className={`w-full py-4 rounded-xl font-semibold text-lg transition-all relative ${
                selectedPaymentMethod && !isProcessing
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg hover:shadow-xl'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isProcessing ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Processing Payment...
                </div>
              ) : (
                `Pay ₹${(parseInt(getAmount().replace('₹', '').replace(',', '')) * 1.18).toLocaleString()}`
              )}
            </motion.button>

            {/* Back Button */}
            <button
              onClick={onBack}
              className="flex items-center justify-center gap-2 w-full py-3 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Enrollment Form
            </button>

            {/* Guarantee */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                7-day money-back guarantee
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface SuccessPageProps {
  studentName: string;
  planName: string;
  onBackToHome: () => void;
}

export function SuccessPage({ studentName, planName, onBackToHome }: SuccessPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
      <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to JuniorDream!</h1>
        <p className="text-lg text-gray-600 mb-2">
          Congratulations {studentName}! 🎉
        </p>
        <p className="text-gray-600 mb-6">
          You've successfully enrolled in {planName}
        </p>
        <button
          onClick={onBackToHome}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
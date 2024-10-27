import React from 'react';
import { Send } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import { SubmissionForm } from './components/SubmissionForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="px-6 py-8">
          <div className="flex items-center justify-center mb-8">
            <Send className="h-8 w-8 text-indigo-600" />
            <h2 className="ml-3 text-2xl font-bold text-gray-900">User Submission Form</h2>
          </div>
          <SubmissionForm />
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
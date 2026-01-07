import React, { useState, useEffect, memo } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';

interface PasswordProtectionProps {
  onAuthenticated: () => void;
}

const CORRECT_PASSWORD = 'chatbot2026'; // Change this to your desired password

export const PasswordProtection = memo(({ onAuthenticated }: PasswordProtectionProps) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Check if already authenticated
    const isAuth = sessionStorage.getItem('chatbot_authenticated');
    if (isAuth === 'true') {
      onAuthenticated();
    }
  }, [onAuthenticated]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem('chatbot_authenticated', 'true');
      setError(false);
      onAuthenticated();
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mb-4 shadow-lg">
              <Lock className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Ads Assistant Chatbot
            </h1>
            <p className="text-sm text-gray-600">
              This demo is password protected. Please enter the password to continue.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(false);
                  }}
                  className={`w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                    error ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Enter password"
                  autoFocus
                  autoComplete="off"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {error && (
                <p className="mt-2 text-sm text-red-600 animate-in slide-in-from-top duration-200">
                  ❌ Incorrect password. Please try again.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-purple-600 hover:to-purple-700 focus:ring-4 focus:ring-purple-300 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Access Chatbot
            </button>
          </form>

          {/* Demo hint */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-600 text-center">
              🔐 Demo Password: <code className="bg-gray-200 px-2 py-1 rounded">chatbot2026</code>
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              (You can change this in the code)
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Protected with session-based authentication
        </p>
      </div>
    </div>
  );
});

PasswordProtection.displayName = 'PasswordProtection';


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, Github, Chrome, Check } from 'lucide-react';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    setIsLoading(true);
    
    // Simulate signup
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to IDE or onboarding
      window.location.href = '/home';
    }, 2000);
  };

  const passwordRequirements = [
    { text: 'At least 8 characters', met: formData.password.length >= 8 },
    { text: 'Contains uppercase letter', met: /[A-Z]/.test(formData.password) },
    { text: 'Contains lowercase letter', met: /[a-z]/.test(formData.password) },
    { text: 'Contains number', met: /\d/.test(formData.password) },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-primary p-3 rounded-full">
              <User className="text-primary-content" size={24} />
            </div>
          </div>
          <h1 className="text-3xl font-bold">Create Account</h1>
          <p className="text-base-content/70 mt-2">
            Join thousands of developers building with AI
          </p>
        </div>

        {/* Signup Form */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Full Name</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50" size={20} />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="input input-bordered w-full pl-12"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="input input-bordered w-full pl-12"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50" size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    className="input input-bordered w-full pl-12 pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-base-content/50 hover:text-base-content"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                
                {/* Password Requirements */}
                {formData.password && (
                  <div className="mt-2 space-y-1">
                    {passwordRequirements.map((req, index) => (
                      <div key={index} className={`flex items-center text-xs ${req.met ? 'text-success' : 'text-base-content/50'}`}>
                        <Check size={12} className={`mr-2 ${req.met ? 'text-success' : 'text-base-content/30'}`} />
                        {req.text}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Confirm Password</span>
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50" size={20} />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className="input input-bordered w-full pl-12 pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-base-content/50 hover:text-base-content"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                  <label className="label">
                    <span className="label-text-alt text-error">Passwords do not match</span>
                  </label>
                )}
              </div>

              {/* Terms Agreement */}
              <div className="form-control">
                <label className="label cursor-pointer justify-start">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="checkbox checkbox-primary checkbox-sm"
                    required
                  />
                  <span className="label-text ml-3 text-sm">
                    I agree to the{' '}
                    <Link to="/terms" className="link link-primary">Terms of Service</Link>
                    {' '}and{' '}
                    <Link to="/privacy" className="link link-primary">Privacy Policy</Link>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || !formData.agreeToTerms}
                className="btn btn-primary w-full"
              >
                {isLoading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Creating account...
                  </>
                ) : (
                  'Create Account'
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="divider">or continue with</div>

            {/* Social Signup */}
            <div className="grid grid-cols-2 gap-3">
              <button className="btn btn-outline">
                <Github size={20} />
                GitHub
              </button>
              <button className="btn btn-outline">
                <Chrome size={20} />
                Google
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center mt-6">
              <p className="text-base-content/70">
                Already have an account?{' '}
                <Link to="/login" className="link link-primary font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mt-8 text-center">
          <p className="text-sm text-base-content/60 mb-4">
            What you'll get with PromptStack
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs text-base-content/60">
            <span>✨ AI Code Generation</span>
            <span>🤖 Smart Assistant</span>
            <span>📁 Project Management</span>
            <span>👥 Team Collaboration</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

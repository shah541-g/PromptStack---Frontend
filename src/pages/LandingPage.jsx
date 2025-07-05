import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Zap, 
  Brain, 
  Users, 
  ArrowRight,
  Star,
  Play
} from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: Code,
      title: 'Smart Code Editor',
      description: 'Advanced code editor with syntax highlighting, auto-completion, and real-time error detection.'
    },
    {
      icon: Brain,
      title: 'AI-Powered Assistant',
      description: 'Get intelligent code suggestions and explanations powered by advanced AI models.'
    },
    {
      icon: Zap,
      title: 'Instant Code Generation',
      description: 'Generate complete functions, components, and modules from natural language descriptions.'
    },
    {
      icon: Users,
      title: 'Collaborative Coding',
      description: 'Share your workspace and collaborate with team members in real-time.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Frontend Developer',
      avatar: '👩‍💻',
      comment: 'PromptStack has revolutionized my development workflow. The AI suggestions are incredibly accurate!'
    },
    {
      name: 'Mike Johnson',
      role: 'Full Stack Engineer',
      avatar: '👨‍💻',
      comment: 'The code generation feature saves me hours every day. It\'s like having a senior developer as my pair programming partner.'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Tech Lead',
      avatar: '👩‍💼',
      comment: 'Our team productivity increased by 40% after adopting PromptStack. The collaboration features are outstanding.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">PromptStack</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Features</a>
              <a href="#demo" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Demo</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Contact</a>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              <Link 
                to="/login" 
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 min-h-screen relative overflow-hidden flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">AI-Powered Development Platform</span>
              <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Build Apps with
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI-Powered Precision
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Transform your ideas into production-ready applications with intelligent code generation, 
              real-time AI assistance, and modern development tools.
            </p>

            {/* CTA Buttons */}
            <div className="flex justify-center">
              <Link 
                to="/home" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Building Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything you need to build amazing apps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From idea to deployment, our AI-powered platform provides all the tools and features modern developers need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">See it in Action</h2>
            <p className="text-xl text-gray-600">Watch how PromptStack transforms your coding experience</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="ml-4 text-sm text-gray-600 bg-white px-3 py-1 rounded">https://promptstack.dev</div>
                </div>
              </div>
              <div className="flex justify-center items-center px-4 py-16 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Code className="text-white" size={32} />
                  </div>
                  <p className="text-lg text-gray-600 mb-4">Interactive Demo Coming Soon</p>
                  <div className="inline-flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-2"></div>
                    Experience AI-powered development
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Developers Say</h2>
            <p className="text-xl text-gray-600">Join thousands of developers who love PromptStack</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-4 w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.comment}"</p>
                  <div className="flex justify-end">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 w-4 h-4" fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Supercharge Your Development?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of developers building the future with AI-powered tools
          </p>
          <Link 
            to="/signup" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get Started for Free
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">PromptStack</span>
          </div>
          <p className="font-semibold text-gray-300 mb-2">
            PromptStack Ltd.
          </p>
          <p className="text-gray-400 mb-4">
            Revolutionizing development since 2024
          </p>
          <p className="text-sm text-gray-500">Copyright © 2024 - All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

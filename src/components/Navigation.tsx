import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Menu, X, User, LogIn, CreditCard, UserPlus } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'academics', label: 'Academics' },
    { id: 'events', label: 'Events' },
    { id: 'results', label: 'Results' },
    { id: 'creativity', label: 'Creativity' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/10 backdrop-blur-xl shadow-2xl border-b border-white/20' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <GraduationCap className="h-10 w-10 text-blue-400" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-blue-400/20"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <div>
                <span className="font-bold text-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  FutureEd Academy
                </span>
                <p className="text-xs text-gray-300">Excellence in Education</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => onSectionClick(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Auth & Payment Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <motion.button
                onClick={() => {
                  setAuthMode('login');
                  setShowAuthModal(true);
                }}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(34, 197, 94, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </motion.button>

              <motion.button
                onClick={() => {
                  setAuthMode('signup');
                  setShowAuthModal(true);
                }}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-full shadow-lg transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <UserPlus className="h-4 w-4" />
                <span>Sign Up</span>
              </motion.button>

              <motion.button
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 rounded-full shadow-lg transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(249, 115, 22, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <CreditCard className="h-4 w-4" />
                <span>Pay Fees</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white transition-colors p-2"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden bg-black/90 backdrop-blur-xl rounded-2xl mt-4 py-6 shadow-2xl border border-white/10"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-2 px-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSectionClick(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                <div className="border-t border-white/10 pt-4 mt-4 space-y-2">
                  <button
                    onClick={() => {
                      setAuthMode('login');
                      setShowAuthModal(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-2 w-full px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
                  >
                    <LogIn className="h-4 w-4" />
                    <span>Login</span>
                  </button>
                  
                  <button
                    onClick={() => {
                      setAuthMode('signup');
                      setShowAuthModal(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-2 w-full px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl"
                  >
                    <UserPlus className="h-4 w-4" />
                    <span>Sign Up</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 w-full px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-red-600 rounded-xl">
                    <CreditCard className="h-4 w-4" />
                    <span>Pay Fees</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Auth Modal */}
      {showAuthModal && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowAuthModal(false)}
          />
          
          <motion.div
            className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 w-full max-w-md border border-white/20 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {authMode === 'login' ? 'Welcome Back' : 'Join Us Today'}
              </h2>
              <button
                onClick={() => setShowAuthModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <form className="space-y-4">
              {authMode === 'signup' && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Enter your password"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {authMode === 'login' ? 'Sign In' : 'Create Account'}
              </motion.button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                {authMode === 'login' 
                  ? "Don't have an account? Sign up" 
                  : "Already have an account? Sign in"
                }
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Navigation;
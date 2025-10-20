import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { loadStripe } from '@stripe/stripe-js';
import { User, BookOpen, Users, Settings, Calendar, Bell, Mail, FileText, CreditCard, Shield } from 'lucide-react';

const stripePromise = loadStripe('pk_test_51RtT9ZCV00evzvTQwuCkhBsLH3tSizh9ItMsVC0JqgmfxVU4ZAyFlhxeBaa7HaZ77plrD6wmtyWTct96Mbk8n1jH00MAXGfpRh'); // Replace with your publishable key

interface IFeature {
  icon: React.ElementType;
  title: string;
  description: string;
  action?: string;
}

const DashboardSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedRole, setSelectedRole] = useState('student');
  const [isProcessing, setIsProcessing] = useState(false);

  const roles = [
    { id: 'student', label: 'Student Dashboard', icon: User, color: 'blue' },
    { id: 'teacher', label: 'Teacher Dashboard', icon: BookOpen, color: 'green' },
    { id: 'parent', label: 'Parent Dashboard', icon: Users, color: 'purple' },
    { id: 'admin', label: 'Admin Panel', icon: Settings, color: 'red' }
  ];

  const dashboardFeatures: { [key: string]: IFeature[] } = {
    student: [
      { icon: Calendar, title: 'Class Schedule', description: 'View daily schedule and upcoming classes' },
      { icon: FileText, title: 'Assignments', description: 'Submit assignments and track progress' },
      { icon: BookOpen, title: 'Grades', description: 'Check your academic performance' },
      { icon: Bell, title: 'Notifications', description: 'Stay updated with school announcements' },
      { icon: Mail, title: 'Messages', description: 'Communicate with teachers and peers' },
      { icon: User, title: 'Profile', description: 'Manage your personal information' }
    ],
    teacher: [
      { icon: Users, title: 'Class Management', description: 'Manage student attendance and grades' },
      { icon: FileText, title: 'Assignment Hub', description: 'Create and review assignments' },
      { icon: Calendar, title: 'Schedule', description: 'View and manage class timetables' },
      { icon: BookOpen, title: 'Grade Book', description: 'Record and track student performance' },
      { icon: Mail, title: 'Communications', description: 'Message students and parents' },
      { icon: Bell, title: 'Announcements', description: 'Post class and school updates' }
    ],
    parent: [
      { icon: User, title: 'Child Profile', description: 'View your child\'s academic information' },
      { icon: BookOpen, title: 'Progress Reports', description: 'Track academic performance and grades' },
      { icon: Calendar, title: 'Schedule & Events', description: 'View school calendar and activities' },
      { icon: CreditCard, title: 'Fee Management', description: 'Pay fees and view payment history', action: 'pay' },
      { icon: Mail, title: 'Teacher Communication', description: 'Connect with teachers and staff' },
      { icon: Bell, title: 'Alerts', description: 'Receive important school notifications' }
    ],
    admin: [
      { icon: Users, title: 'User Management', description: 'Manage students, teachers, and staff' },
      { icon: FileText, title: 'Academic Records', description: 'Oversee all academic documentation' },
      { icon: Shield, title: 'Security Settings', description: 'Manage system security and permissions' },
      { icon: Calendar, title: 'School Calendar', description: 'Manage events and academic schedule' },
      { icon: BookOpen, title: 'Curriculum Management', description: 'Oversee courses and subjects' },
      { icon: Settings, title: 'System Settings', description: 'Configure school system preferences' }
    ]
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      red: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      const response = await fetch('http://localhost:5000/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const session = await response.json();
      const stripe = await stripePromise;

      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId: session.id });
        if (error) {
          console.error('Stripe redirect error:', error);
        }
      }
    } catch (error) {
      console.error('Payment error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Dashboard <span className="text-blue-600">Login</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access your personalized dashboard with role-based features and comprehensive tools
          </p>
        </motion.div>

        {/* Role Selection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {roles.map((role) => (
            <motion.button
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                selectedRole === role.id
                  ? `bg-gradient-to-r ${getColorClasses(role.color)} text-white shadow-lg`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <role.icon className="h-6 w-6" />
              <span>{role.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          key={selectedRole}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboardFeatures[selectedRole as keyof typeof dashboardFeatures].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${
                    getColorClasses(roles.find(r => r.id === selectedRole)?.color || 'blue')
                  } flex items-center justify-center`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-4">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
                {feature.action === 'pay' && selectedRole === 'parent' && (
                  <motion.button
                    onClick={handlePayment}
                    disabled={isProcessing}
                    className="mt-4 w-full py-2 px-4 rounded-lg font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isProcessing ? 'Processing...' : 'Pay Fees Now'}
                  </motion.button>
                )}
              </motion.div>
            ))}
          </div>

          {/* Login Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 max-w-md mx-auto"
          >
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
                {roles.find(r => r.id === selectedRole)?.label} Login
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
                    Forgot password?
                  </a>
                </div>
                
                <button
                  type="submit"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-white bg-gradient-to-r ${
                    getColorClasses(roles.find(r => r.id === selectedRole)?.color || 'blue')
                  } transition-all duration-300 transform hover:scale-105`}
                >
                  Sign In to Dashboard
                </button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors font-semibold">
                    Contact Admin
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardSection;

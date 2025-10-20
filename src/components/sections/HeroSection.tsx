import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowDown, BookOpen, Users, Award, Globe } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center ">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-blue-400/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 border border-purple-400/30 rotate-45"
          animate={{ rotate: 405 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* School Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 mt-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Award className="h-5 w-5 text-yellow-400" />
            <span className="text-white font-medium">Excellence in Education Since 1990</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Welcome to{' '}
            <motion.span 
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              FutureEd Academy
            </motion.span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Shaping tomorrow's leaders through innovative education, cutting-edge technology, and holistic development
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {[
              { icon: Users, label: 'Students', value: '2,500+' },
              { icon: BookOpen, label: 'Courses', value: '50+' },
              { icon: Award, label: 'Awards', value: '150+' },
              { icon: Globe, label: 'Countries', value: '25+' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4 border border-white/20">
                  <stat.icon className="h-8 w-8 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.button
              onClick={onExploreClick}
              className="group relative bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 hover:from-blue-600 hover:via-purple-700 hover:to-pink-700 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl transition-all duration-500 overflow-hidden"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Explore Our World</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-700 to-blue-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>

            <motion.button
              className="group flex items-center space-x-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-5 rounded-full font-bold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span>Watch Our Story</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <motion.div
            className="flex flex-col items-center space-y-2 text-white/60"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  );
};

export default HeroSection;
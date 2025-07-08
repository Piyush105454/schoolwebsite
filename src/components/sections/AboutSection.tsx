import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Award, BookOpen, Globe } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { icon: Users, label: 'Students', value: '2,500+' },
    { icon: Award, label: 'Awards Won', value: '150+' },
    { icon: BookOpen, label: 'Courses', value: '50+' },
    { icon: Globe, label: 'Countries', value: '25+' }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Embracing cutting-edge technology and modern teaching methods',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Excellence',
      description: 'Striving for the highest standards in education and character',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Integrity',
      description: 'Building trust through honesty, respect, and ethical practices',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Community',
      description: 'Fostering collaboration and lifelong connections',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">FutureEd Academy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over three decades, we've been nurturing young minds and preparing them for the challenges of tomorrow through innovative education and holistic development.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Principal's Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-20"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold">
              DR
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Sarah Johnson</h3>
              <p className="text-blue-600 mb-4">Principal</p>
              <p className="text-gray-700 text-lg leading-relaxed">
                "At FutureEd Academy, we believe that every child has the potential to change the world. 
                Our mission is to provide a nurturing environment where students can explore, learn, and grow into compassionate leaders who will shape tomorrow's society."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className="relative bg-white rounded-xl p-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${value.color} rounded-full mb-4`}>
                    <div className="w-6 h-6 bg-white rounded-full" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
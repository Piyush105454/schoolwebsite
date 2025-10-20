import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Search, Download, BarChart3, PieChart, TrendingUp, User, Calendar } from 'lucide-react';

const ResultsSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeTab, setActiveTab] = useState('search');

  const tabs = [
    { id: 'search', label: 'Search Results', icon: Search },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'reports', label: 'Report Cards', icon: Download }
  ];

  const topPerformers = [
    { name: 'Emily Johnson', grade: '12th', percentage: 96.5, rank: 1 },
    { name: 'Michael Chen', grade: '11th', percentage: 95.2, rank: 2 },
    { name: 'Sarah Williams', grade: '10th', percentage: 94.8, rank: 3 },
    { name: 'David Rodriguez', grade: '12th', percentage: 93.5, rank: 4 },
    { name: 'Lisa Thompson', grade: '11th', percentage: 92.7, rank: 5 }
  ];

  const subjectAnalytics = [
    { subject: 'Mathematics', average: 87.5, trend: 'up' },
    { subject: 'Science', average: 89.2, trend: 'up' },
    { subject: 'English', average: 85.8, trend: 'down' },
    { subject: 'History', average: 88.1, trend: 'up' },
    { subject: 'Art', average: 91.3, trend: 'up' }
  ];

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
            Results & <span className="text-blue-600">Analytics</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track academic progress with comprehensive analytics and downloadable report cards
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-100 rounded-xl p-2 flex space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'search' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Search Form */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Search Student Results</h3>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Roll Number
                        </label>
                        <input
                          type="text"
                          placeholder="Enter roll number"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Class
                        </label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option>Select Class</option>
                          <option>Grade 9</option>
                          <option>Grade 10</option>
                          <option>Grade 11</option>
                          <option>Grade 12</option>
                        </select>
                      </div>
                    </div>
                    
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200">
                      Search Results
                    </button>
                  </div>
                </div>
              </div>

              {/* Top Performers */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Trophy className="h-8 w-8 text-yellow-500 mr-3" />
                  Top Performers
                </h3>
                
                <div className="space-y-4">
                  {topPerformers.map((student, index) => (
                    <motion.div
                      key={student.name}
                      className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                          student.rank === 1 ? 'bg-yellow-500' :
                          student.rank === 2 ? 'bg-gray-400' :
                          student.rank === 3 ? 'bg-orange-500' : 'bg-blue-500'
                        }`}>
                          {student.rank}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{student.name}</p>
                          <p className="text-sm text-gray-600">{student.grade}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">{student.percentage}%</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Subject Performance */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <BarChart3 className="h-8 w-8 text-green-600 mr-3" />
                  Subject Performance
                </h3>
                
                <div className="space-y-4">
                  {subjectAnalytics.map((subject, index) => (
                    <motion.div
                      key={subject.subject}
                      className="p-4 bg-white rounded-lg shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">{subject.subject}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-blue-600">{subject.average}%</span>
                          <TrendingUp className={`h-4 w-4 ${
                            subject.trend === 'up' ? 'text-green-500' : 'text-red-500'
                          }`} />
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${subject.average}%` }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Attendance Overview */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <PieChart className="h-8 w-8 text-orange-600 mr-3" />
                  Attendance Overview
                </h3>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="relative inline-flex items-center justify-center w-32 h-32 mx-auto">
                      <svg className="w-32 h-32 transform -rotate-90">
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="#e5e7eb"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="#3b82f6"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 56}`}
                          strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.952)}`}
                          className="transition-all duration-1000"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-blue-600">95.2%</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-2">Overall Attendance</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <p className="text-2xl font-bold text-green-600">182</p>
                      <p className="text-sm text-gray-600">Present Days</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <p className="text-2xl font-bold text-red-600">8</p>
                      <p className="text-sm text-gray-600">Absent Days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Download className="h-8 w-8 text-indigo-600 mr-3" />
                Downloadable Reports
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Mid-Term Report', date: '2024-01-15', type: 'PDF' },
                  { title: 'Final Term Report', date: '2024-03-15', type: 'PDF' },
                  { title: 'Annual Report Card', date: '2024-06-15', type: 'PDF' },
                  { title: 'Progress Summary', date: '2024-02-01', type: 'Excel' },
                  { title: 'Attendance Report', date: '2024-02-15', type: 'PDF' },
                  { title: 'Performance Analysis', date: '2024-02-20', type: 'Excel' }
                ].map((report, index) => (
                  <motion.div
                    key={report.title}
                    className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-gray-900">{report.title}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        report.type === 'PDF' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                      }`}>
                        {report.type}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{report.date}</span>
                    </div>
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
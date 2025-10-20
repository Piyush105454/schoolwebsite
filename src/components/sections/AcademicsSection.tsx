import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Calendar, CheckCircle, TrendingUp, Filter, Clock } from 'lucide-react';

const AcademicsSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedGrade, setSelectedGrade] = useState('all');

  const grades = [
    { id: 'all', label: 'All Grades' },
    { id: 'elementary', label: 'Elementary (K-5)' },
    { id: 'middle', label: 'Middle (6-8)' },
    { id: 'high', label: 'High School (9-12)' }
  ];

  const courses = [
    { id: 1, name: 'Advanced Mathematics', grade: 'high', teacher: 'Dr. Smith', students: 25, duration: '1 Year' },
    { id: 2, name: 'Creative Writing', grade: 'middle', teacher: 'Ms. Johnson', students: 30, duration: '1 Semester' },
    { id: 3, name: 'Science Discovery', grade: 'elementary', teacher: 'Mr. Brown', students: 20, duration: '1 Year' },
    { id: 4, name: 'World History', grade: 'high', teacher: 'Mrs. Davis', students: 28, duration: '1 Year' },
    { id: 5, name: 'Art & Design', grade: 'middle', teacher: 'Ms. Wilson', students: 22, duration: '1 Semester' },
    { id: 6, name: 'Computer Programming', grade: 'high', teacher: 'Mr. Taylor', students: 18, duration: '1 Year' }
  ];

  const upcomingEvents = [
    { date: '2024-01-15', event: 'Midterm Examinations Begin', type: 'exam' },
    { date: '2024-01-20', event: 'Science Fair Presentation', type: 'event' },
    { date: '2024-01-25', event: 'Parent-Teacher Conference', type: 'meeting' },
    { date: '2024-02-01', event: 'Winter Break', type: 'holiday' }
  ];

  const filteredCourses = selectedGrade === 'all' 
    ? courses 
    : courses.filter(course => course.grade === selectedGrade);

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
            Academic <span className="text-blue-600">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive curriculum designed to challenge and inspire students at every level
          </p>
        </motion.div>

        {/* Course Catalog */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
                Course Catalog
              </h3>
              
              {/* Grade Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <select
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(e.target.value)}
                  className="bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {grades.map(grade => (
                    <option key={grade.id} value={grade.id}>{grade.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{course.name}</h4>
                  <p className="text-blue-600 mb-4">{course.teacher}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{course.students} students</span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Academic Calendar & Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calendar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Calendar className="h-8 w-8 text-blue-600 mr-3" />
              Academic Calendar
            </h3>
            
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className={`w-3 h-3 rounded-full mr-4 ${
                    event.type === 'exam' ? 'bg-red-500' :
                    event.type === 'event' ? 'bg-blue-500' :
                    event.type === 'meeting' ? 'bg-green-500' : 'bg-purple-500'
                  }`} />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{event.event}</p>
                    <p className="text-sm text-gray-600">{event.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Performance Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
              Performance Overview
            </h3>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-700">Overall Grade Average</span>
                  <span className="text-2xl font-bold text-green-600">87.5%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full w-[87.5%]" />
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-700">Attendance Rate</span>
                  <span className="text-2xl font-bold text-blue-600">95.2%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-[95.2%]" />
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-700">Assignment Completion</span>
                  <span className="text-2xl font-bold text-purple-600">92.8%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full w-[92.8%]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
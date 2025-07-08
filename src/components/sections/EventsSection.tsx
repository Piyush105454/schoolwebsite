import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Users, Camera, Filter, Clock, Star } from 'lucide-react';

const EventsSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Events' },
    { id: 'academic', label: 'Academic' },
    { id: 'sports', label: 'Sports' },
    { id: 'cultural', label: 'Cultural' },
    { id: 'social', label: 'Social' }
  ];

  const events = [
    {
      id: 1,
      title: 'Annual Science Fair',
      date: '2024-02-15',
      time: '10:00 AM',
      location: 'Main Auditorium',
      category: 'academic',
      attendees: 150,
      image: 'https://images.pexels.com/photos/8923841/pexels-photo-8923841.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Students showcase their innovative science projects'
    },
    {
      id: 2,
      title: 'Basketball Championship',
      date: '2024-02-20',
      time: '2:00 PM',
      location: 'Sports Complex',
      category: 'sports',
      attendees: 200,
      image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Inter-school basketball tournament finals'
    },
    {
      id: 3,
      title: 'Winter Musical Concert',
      date: '2024-02-25',
      time: '7:00 PM',
      location: 'Performing Arts Center',
      category: 'cultural',
      attendees: 300,
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Student choir and orchestra performance'
    },
    {
      id: 4,
      title: 'Career Day',
      date: '2024-03-01',
      time: '9:00 AM',
      location: 'Conference Hall',
      category: 'academic',
      attendees: 250,
      image: 'https://images.pexels.com/photos/1181624/pexels-photo-1181624.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Industry professionals share career insights'
    },
    {
      id: 5,
      title: 'Art Exhibition',
      date: '2024-03-05',
      time: '11:00 AM',
      location: 'Art Gallery',
      category: 'cultural',
      attendees: 180,
      image: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Student artwork display and competition'
    },
    {
      id: 6,
      title: 'Community Service Day',
      date: '2024-03-10',
      time: '8:00 AM',
      location: 'Various Locations',
      category: 'social',
      attendees: 100,
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Students volunteer in local community projects'
    }
  ];

  const galleryImages = [
    'https://images.pexels.com/photos/8923841/pexels-photo-8923841.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1181624/pexels-photo-1181624.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400'
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

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
            Events & <span className="text-blue-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover upcoming events and relive memorable moments from our vibrant school community
          </p>
        </motion.div>

        {/* Event Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center mb-4 sm:mb-0">
                <Calendar className="h-8 w-8 text-blue-600 mr-3" />
                Upcoming Events
              </h3>
              
              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                        event.category === 'academic' ? 'bg-blue-500' :
                        event.category === 'sports' ? 'bg-green-500' :
                        event.category === 'cultural' ? 'bg-purple-500' : 'bg-orange-500'
                      }`}>
                        {event.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>
                    
                    <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200">
                      RSVP Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <Camera className="h-8 w-8 text-purple-600 mr-3" />
              Photo Gallery
            </h3>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
              View All Photos
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-lg" />
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Star className="h-4 w-4 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, MessageCircle, Share2, Star, Filter, Upload, Eye } from 'lucide-react';

const CreativitySection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'art', label: 'Art & Design' },
    { id: 'writing', label: 'Creative Writing' },
    { id: 'music', label: 'Music' },
    { id: 'science', label: 'Science Projects' },
    { id: 'photography', label: 'Photography' }
  ];

  const posts = [
    {
      id: 1,
      title: 'Abstract Watercolor Painting',
      author: 'Emma Wilson',
      grade: '11th',
      category: 'art',
      likes: 45,
      comments: 12,
      views: 234,
      image: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Exploring emotions through vibrant colors and fluid forms.',
      featured: true
    },
    {
      id: 2,
      title: 'The Future of AI in Education',
      author: 'Alex Chen',
      grade: '12th',
      category: 'writing',
      likes: 38,
      comments: 8,
      views: 189,
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'A thought-provoking essay on artificial intelligence in learning.',
      featured: false
    },
    {
      id: 3,
      title: 'Solar System Model',
      author: 'Maya Rodriguez',
      grade: '9th',
      category: 'science',
      likes: 52,
      comments: 15,
      views: 298,
      image: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Interactive 3D model showing planetary movements and distances.',
      featured: true
    },
    {
      id: 4,
      title: 'School Life Photography Series',
      author: 'David Kim',
      grade: '10th',
      category: 'photography',
      likes: 67,
      comments: 22,
      views: 412,
      image: 'https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Capturing candid moments of our daily school experience.',
      featured: false
    },
    {
      id: 5,
      title: 'Original Piano Composition',
      author: 'Sofia Martinez',
      grade: '11th',
      category: 'music',
      likes: 41,
      comments: 9,
      views: 156,
      image: 'https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'A melancholic piece inspired by autumn seasons.',
      featured: false
    },
    {
      id: 6,
      title: 'Digital Portrait Study',
      author: 'Ryan Thompson',
      grade: '12th',
      category: 'art',
      likes: 59,
      comments: 18,
      views: 325,
      image: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Exploring digital art techniques and human expressions.',
      featured: true
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const featuredPosts = posts.filter(post => post.featured);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Student <span className="text-purple-600">Creativity Hub</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcase your talents, share your creativity, and inspire others in our vibrant community
          </p>
        </motion.div>

        {/* Featured Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Star className="h-8 w-8 text-yellow-500 mr-3" />
            Featured Works
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h4>
                  <p className="text-purple-600 text-sm mb-2">{post.author} • {post.grade}</p>
                  <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Heart className="h-4 w-4 mr-1" />
                        {post.likes}
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        {post.comments}
                      </span>
                    </div>
                    <span className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {post.views}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Submit Work Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 flex items-center mx-auto">
            <Upload className="h-5 w-5 mr-2" />
            Submit Your Work
          </button>
        </motion.div>

        {/* All Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">All Creative Works</h3>
            
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    {post.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900">{post.author}</h4>
                    <p className="text-sm text-gray-600">{post.grade}</p>
                  </div>
                </div>
                
                <h5 className="text-lg font-bold text-gray-900 mb-2">{post.title}</h5>
                <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center text-red-500 hover:text-red-600 transition-colors">
                      <Heart className="h-4 w-4 mr-1" />
                      {post.likes}
                    </button>
                    <button className="flex items-center text-blue-500 hover:text-blue-600 transition-colors">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      {post.comments}
                    </button>
                  </div>
                  <button className="flex items-center text-gray-500 hover:text-gray-600 transition-colors">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativitySection;
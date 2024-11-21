import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';

const blogPosts = [
  {
    title: "Understanding ETL Pipeline Optimization",
    excerpt: "Learn how to optimize your ETL pipelines for better performance and reliability.",
    author: "Sarah Chen",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    category: "Engineering"
  },
  {
    title: "The Future of Data Integration",
    excerpt: "Explore how AI and machine learning are transforming data integration processes.",
    author: "Michael Roberts",
    date: "March 12, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800",
    category: "AI & ML"
  },
  {
    title: "Best Practices for Data Mapping",
    excerpt: "Discover the essential best practices for effective data mapping in enterprise systems.",
    author: "Lisa Wong",
    date: "March 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    category: "Best Practices"
  }
];

const Blog = () => {
  return (
    <section className="py-20 bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest trends and insights in data integration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-100/50 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-orange/90 text-white text-sm px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <User className="w-4 h-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                
                <button className="group flex items-center text-brand-orange hover:text-brand-orange/80 transition-colors duration-200">
                  Read More 
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <button className="btn btn-secondary">
            View All Posts
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
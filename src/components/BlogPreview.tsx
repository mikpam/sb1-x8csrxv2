import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';

type BlogPost = {
  slug: string;
  data: {
    title: string;
    excerpt: string;
    author: string;
    date: Date;
    readTime: string;
    image: string;
    category: string;
  };
};

interface BlogPreviewProps {
  posts: BlogPost[];
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ posts }) => {
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
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-100/50 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <a href={`/blog/${post.slug}`}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.data.image}
                    alt={post.data.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-orange/90 text-white text-sm px-3 py-1 rounded-full">
                      {post.data.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-white mb-3">
                    {post.data.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {post.data.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.data.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.data.date.toLocaleDateString()}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.data.readTime}</span>
                  </div>
                  
                  <div className="group flex items-center text-brand-orange hover:text-brand-orange/80 transition-colors duration-200">
                    Read More 
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </a>
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
          <a href="/blog" className="btn btn-secondary">
            View All Posts
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;
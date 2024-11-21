import React from 'react';
import { motion } from 'framer-motion';
import { Database, FileText, Cog, Zap } from 'lucide-react';

const TaskBuilder = () => {
  const blocks = [
    {
      icon: Database,
      title: "Data Collection",
      color: "bg-brand-blue",
      delay: 0
    },
    {
      icon: FileText,
      title: "Document Processing",
      color: "bg-brand-orange",
      delay: 0.2
    },
    {
      icon: Cog,
      title: "Task Configuration",
      color: "bg-green-500",
      delay: 0.4
    },
    {
      icon: Zap,
      title: "Automation",
      color: "bg-purple-500",
      delay: 0.6
    }
  ];

  return (
    <section className="py-20 bg-dark-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Building Your Automation
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stack the building blocks of intelligent automation
          </p>
        </motion.div>

        <div className="relative max-w-lg mx-auto">
          <div className="flex flex-col items-center space-y-4">
            {blocks.map((block, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    delay: block.delay
                  }
                }}
                viewport={{ once: true }}
                className={`
                  ${block.color} 
                  w-full 
                  h-24 
                  rounded-lg 
                  shadow-lg 
                  flex 
                  items-center 
                  justify-center
                  transform
                  hover:scale-105
                  transition-transform
                  duration-300
                `}
              >
                <div className="flex items-center space-x-4">
                  <block.icon className="w-8 h-8 text-white" />
                  <span className="text-xl font-display font-semibold text-white">
                    {block.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connecting Lines */}
          <div className="absolute inset-y-0 left-1/2 w-1 bg-gradient-to-b from-brand-blue via-brand-orange to-purple-500 transform -translate-x-1/2 -z-10" />
        </div>
      </div>
    </section>
  );
};

export default TaskBuilder;
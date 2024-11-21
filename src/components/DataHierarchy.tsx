import React from 'react';
import { motion } from 'framer-motion';
import { Database, FileText, BarChart, Cog, Zap } from 'lucide-react';

const DataHierarchy = () => {
  const levels = [
    {
      title: "Operationalize",
      subtitle: "automate data put into use",
      color: "bg-purple-500",
      icon: Zap,
      width: "w-1/2",
      delay: 0.8
    },
    {
      title: "Reporting Needs",
      subtitle: "analysis, tracking progress",
      color: "bg-blue-500",
      icon: BarChart,
      width: "w-2/3",
      delay: 0.6
    },
    {
      title: "Transformation Needs",
      subtitle: "business context, synthesis",
      color: "bg-green-500",
      icon: Cog,
      width: "w-3/4",
      delay: 0.4
    },
    {
      title: "Extract and Load Needs",
      subtitle: "production, external tools",
      color: "bg-orange-500",
      icon: FileText,
      width: "w-5/6",
      delay: 0.2
    },
    {
      title: "Warehouse Storage Needs",
      subtitle: "read, write, performance, access",
      color: "bg-red-500",
      icon: Database,
      width: "w-full",
      delay: 0
    }
  ];

  return (
    <section className="py-20 bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Data Hierarchy of Needs
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building blocks for successful data integration
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center space-y-4">
            {levels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    delay: level.delay
                  }
                }}
                viewport={{ once: true }}
                className={`
                  ${level.width}
                  ${level.color}
                  h-24
                  rounded-lg
                  shadow-lg
                  flex
                  items-center
                  justify-center
                  relative
                  group
                  hover:scale-105
                  transition-transform
                  duration-300
                `}
              >
                <div className="absolute -right-32 lg:-right-48 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="bg-dark-100 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap">
                    {level.subtitle}
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <level.icon className="w-6 h-6 text-white" />
                  <span className="text-lg font-display font-semibold text-white">
                    {level.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Side Labels */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-start space-y-24">
            <div className="text-gray-400">
              <div className="font-display font-semibold">Operational needs</div>
            </div>
            <div className="text-gray-400">
              <div className="font-display font-semibold">Organizational needs</div>
            </div>
            <div className="text-gray-400">
              <div className="font-display font-semibold">Data needs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataHierarchy;
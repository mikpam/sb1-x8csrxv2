import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Bot, ArrowRight, FileSearch, Workflow, Zap, Brain, Database, GitMerge, Settings } from 'lucide-react';

const DataProcessingBlocks = () => {
  const sections = [
    {
      title: "Extract meaningful information from unstructured data",
      description: "Transform raw data into actionable insights with our advanced AI processing",
      features: [
        {
          icon: FileSearch,
          title: "Smart Document Processing",
          description: "Automatically extract and classify information from various document types"
        },
        {
          icon: Brain,
          title: "AI-Powered Analysis",
          description: "Leverage machine learning to understand complex data patterns"
        },
        {
          icon: Database,
          title: "Structured Output",
          description: "Convert unstructured data into organized, usable formats"
        }
      ]
    },
    {
      title: "Automate even the most complex manual workflows",
      description: "Our adaptive decision engines equip your team with the tools they need to make faster, replicable, reliable actions.",
      features: [
        {
          icon: Workflow,
          title: "End-to-end Automation",
          description: "Create seamless workflows that handle complex business processes"
        },
        {
          icon: GitMerge,
          title: "Process Orchestration",
          description: "Coordinate multiple workflows and systems efficiently"
        },
        {
          icon: Settings,
          title: "Adaptive Decision Engine",
          description: "Smart, data-driven decisions that improve over time"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative p-8 rounded-xl"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent rounded-xl" />

              <div className="relative space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-400">
                    {section.description}
                  </p>
                </div>

                <div className="grid gap-6">
                  {section.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + featureIndex * 0.1 }}
                      className="flex items-start space-x-4 bg-dark-100/50 rounded-lg p-4 hover:bg-dark-100 transition-colors duration-300"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center">
                          <feature.icon className="w-5 h-5 text-brand-orange" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-semibold text-white mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-brand-orange hover:text-brand-orange/80 transition-colors"
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataProcessingBlocks;
import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, Brain, Workflow, Bot } from 'lucide-react';

const ProcessingSections = () => {
  const sections = [
    {
      title: "Extract meaningful information from unstructured data",
      description: "Our AI-powered system automatically identifies and extracts key information from various document types, reducing manual effort and increasing accuracy.",
      features: [
        { icon: FileSearch, text: "Intelligent Document Recognition" },
        { icon: Brain, text: "Advanced Pattern Matching" },
        { icon: Bot, text: "Automated Data Extraction" }
      ]
    },
    {
      title: "Automate complex business processes with AI",
      description: "Transform your workflows with intelligent automation that adapts to your business rules and learns from your data patterns.",
      features: [
        { icon: Workflow, text: "Smart Process Automation" },
        { icon: Brain, text: "Adaptive Learning Systems" },
        { icon: Bot, text: "Intelligent Decision Making" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-dark-200 to-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-dark-100/50 rounded-xl p-8 border border-dark-50/10"
            >
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                {section.title}
              </h3>
              <p className="text-gray-400 mb-8">
                {section.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {section.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-3">
                      <feature.icon className="w-6 h-6 text-brand-orange" />
                    </div>
                    <span className="text-sm text-gray-300">{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessingSections;
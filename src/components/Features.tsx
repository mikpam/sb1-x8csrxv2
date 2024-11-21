import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Brain, Workflow, Lock } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-dark-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-dark-50/10"
    >
      <div className="flex items-center justify-center w-16 h-16 bg-brand-orange/10 rounded-full mb-6">
        <Icon className="w-8 h-8 text-brand-orange" />
      </div>
      <h3 className="text-xl font-display font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 font-body">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Process and analyze data instantly with our advanced AI algorithms",
    },
    {
      icon: Brain,
      title: "Adaptive Learning",
      description: "Our system continuously learns and improves from your data patterns",
    },
    {
      icon: Workflow,
      title: "Seamless Integration",
      description: "Easily integrate with your existing workflows and systems",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption for your data",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-dark-300 to-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
            Discover how <span className="text-brand-orange font-semibold">AdaptiveParse</span> can transform your business automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
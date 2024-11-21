import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Workflow, Zap } from 'lucide-react';
import FormScanAnimation from './FormScanAnimation';

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] bg-gradient-to-b from-dark-200 to-dark-300 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-12 pb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Automate Your Business Process<br />
              <span className="text-brand-orange text-3xl md:text-4xl">with Adaptive Parsing</span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 max-w-2xl font-body">
              Transform your workflow with intelligent automation powered by 
              <span className="text-brand-orange font-semibold"> AdaptiveParse</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="btn btn-primary flex items-center justify-center gap-2 text-lg">
                Schedule Demo <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-dark-100/50 backdrop-blur-sm p-4 rounded-xl border border-dark-50/10">
                <Bot className="w-6 h-6 text-brand-orange mb-2" />
                <h3 className="text-2xl font-bold mb-1 text-white">99.9%</h3>
                <p className="text-gray-400 text-sm">Automation Accuracy</p>
              </div>

              <div className="bg-dark-100/50 backdrop-blur-sm p-4 rounded-xl border border-dark-50/10">
                <Workflow className="w-6 h-6 text-brand-orange mb-2" />
                <h3 className="text-2xl font-bold mb-1 text-white">100x</h3>
                <p className="text-gray-400 text-sm">Faster Processing</p>
              </div>

              <div className="bg-dark-100/50 backdrop-blur-sm p-4 rounded-xl border border-dark-50/10">
                <Zap className="w-6 h-6 text-brand-orange mb-2" />
                <h3 className="text-2xl font-bold mb-1 text-white">24/7</h3>
                <p className="text-gray-400 text-sm">Continuous Operation</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[500px] block"
          >
            <div className="absolute inset-0 w-full md:w-[400px] mx-auto">
              <FormScanAnimation />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-brand-orange/5 to-transparent rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default Hero;
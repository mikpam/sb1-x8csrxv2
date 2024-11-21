import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = "" }: { className?: string }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className={`relative flex items-center ${className}`}
  >
    <img 
      src="/logo.png" 
      alt="AdaptiveParse Logo" 
      className="w-8 h-8 object-contain"
    />
  </motion.div>
);

export default Logo;
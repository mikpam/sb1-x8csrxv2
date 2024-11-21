import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FormScanAnimation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const scanDuration = 9;
  const scanOvershoot = 150;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const MobileVersion = () => (
    <div className="relative w-full h-[400px] bg-dark-100 rounded-lg shadow-lg border border-dark-50/10 overflow-hidden">
      {/* Purchase Order Document */}
      <div className="absolute inset-0 p-4 font-body text-[10px] text-gray-300">
        <div className="space-y-3">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-base font-display font-bold text-white mb-1">PURCHASE ORDER</h2>
              <p className="text-brand-orange font-medium">PO-2024-0123</p>
            </div>
            <div className="text-right">
              <p>Date: March 12, 2024</p>
              <p>Due: March 26, 2024</p>
            </div>
          </div>

          {/* Vendor Info */}
          <div className="grid grid-cols-2 gap-4 py-3 border-t border-b border-dark-50/10">
            <div>
              <p className="font-medium text-white mb-1">Vendor:</p>
              <p>Metrix Digital</p>
              <p>metrix@example.com</p>
            </div>
            <div>
              <p className="font-medium text-white mb-1">Bill To:</p>
              <p>AdaptiveParse Inc.</p>
              <p>billing@adaptiveparse.com</p>
            </div>
          </div>

          {/* Line Items */}
          <div className="space-y-2">
            <div className="grid grid-cols-12 gap-1 text-white font-medium text-[9px]">
              <div className="col-span-6">Description</div>
              <div className="col-span-2 text-right">Qty</div>
              <div className="col-span-2 text-right">Price</div>
              <div className="col-span-2 text-right">Total</div>
            </div>
            
            <div className="grid grid-cols-12 gap-1 text-[9px]">
              <div className="col-span-6">Enterprise Bolts</div>
              <div className="col-span-2 text-right">1</div>
              <div className="col-span-2 text-right">$5,000</div>
              <div className="col-span-2 text-right">$5,000</div>
            </div>
            
            <div className="grid grid-cols-12 gap-1 text-[9px]">
              <div className="col-span-6">Enterprise Sprockets</div>
              <div className="col-span-2 text-right">2</div>
              <div className="col-span-2 text-right">$400</div>
              <div className="col-span-2 text-right">$800</div>
            </div>

            <div className="grid grid-cols-12 gap-1 text-[9px]">
              <div className="col-span-6">Support Package</div>
              <div className="col-span-2 text-right">1</div>
              <div className="col-span-2 text-right">$1,200</div>
              <div className="col-span-2 text-right">$1,200</div>
            </div>

            <div className="grid grid-cols-12 gap-1 text-[9px]">
              <div className="col-span-6">Training Credits</div>
              <div className="col-span-2 text-right">2</div>
              <div className="col-span-2 text-right">$500</div>
              <div className="col-span-2 text-right">$1,000</div>
            </div>
          </div>

          {/* Total */}
          <div className="border-t border-dark-50/10 pt-3">
            <div className="flex justify-end">
              <div className="w-1/2">
                <div className="flex justify-between font-medium">
                  <span className="text-white">Total:</span>
                  <span className="text-brand-orange">$8,000.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scanning Effects */}
      <motion.div
        className="absolute left-0 w-full pointer-events-none"
        style={{
          height: '80px',
          background: 'linear-gradient(to bottom, transparent, rgba(255, 153, 102, 0.2), transparent)',
          filter: 'blur(8px)',
        }}
        initial={{ y: -40 }}
        animate={{ y: [`-10%`, `${scanOvershoot}%`] }}
        transition={{
          duration: scanDuration,
          repeat: Infinity,
          ease: 'linear',
          repeatDelay: 0.5
        }}
      />
      
      <motion.div
        className="absolute left-0 w-full pointer-events-none"
        style={{
          height: '2px',
          background: 'linear-gradient(to right, transparent 5%, #FF9966 50%, transparent 95%)',
          boxShadow: '0 0 15px #FF9966',
        }}
        initial={{ y: 0 }}
        animate={{ y: [`-10%`, `${scanOvershoot}%`] }}
        transition={{
          duration: scanDuration,
          repeat: Infinity,
          ease: 'linear',
          repeatDelay: 0.5
        }}
      />

      {/* Line Items Data Extraction Box */}
      <motion.div
        className="absolute right-0 w-48 bg-dark-200/90 p-3 rounded-l-lg border-l-2 border-brand-orange shadow-lg"
        style={{ top: '40%' }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ 
          opacity: [0, 1, 1, 0],
          x: [100, 0, 0, 100]
        }}
        transition={{
          duration: 4,
          delay: scanDuration * 0.4,
          repeat: Infinity,
          repeatDelay: scanDuration
        }}
      >
        <div className="text-[8px] space-y-1">
          <div className="text-brand-orange font-medium mb-2">Extracted Line Items:</div>
          <div className="space-y-1">
            <div className="flex justify-between">
              <span>Enterprise Bolts</span>
              <span>$5,000.00</span>
            </div>
            <div className="flex justify-between">
              <span>Enterprise Sprockets</span>
              <span>$800.00</span>
            </div>
            <div className="flex justify-between">
              <span>Support Package</span>
              <span>$1,200.00</span>
            </div>
            <div className="flex justify-between">
              <span>Training Credits</span>
              <span>$1,000.00</span>
            </div>
          </div>
          <div className="border-t border-dark-50/20 mt-2 pt-1">
            <div className="flex justify-between text-brand-orange font-medium">
              <span>Total:</span>
              <span>$8,000.00</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Extracted Data Elements */}
      {[
        { top: 15, text: "Vendor: Metrix Digital", delay: 0.15 },
        { top: 25, text: "Email: metrix@example.com", delay: 0.25 },
        { top: 35, text: "PO: #PO-2024-0123", delay: 0.35 },
        { top: 55, text: "Total: $8,000.00", delay: 0.55 }
      ].map((item, index) => (
        <React.Fragment key={index}>
          <motion.div
            className="absolute -right-2 transform translate-x-full"
            style={{ top: `${item.top}%` }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: [0, 1, 1, 0], x: [-20, 0, 0, -20] }}
            transition={{
              duration: 2,
              delay: scanDuration * item.delay,
              repeat: Infinity,
              repeatDelay: scanDuration
            }}
          >
            <div className="bg-brand-orange text-dark-200 px-2 py-1 rounded text-[8px] whitespace-nowrap font-medium">
              {item.text}
            </div>
          </motion.div>

          <motion.div
            className="absolute right-0"
            style={{ 
              top: `${item.top}%`,
              width: '20px',
              height: '2px',
              background: 'linear-gradient(to right, rgba(255, 153, 102, 0.3), #FF9966)',
              boxShadow: '0 0 10px rgba(255, 153, 102, 0.6)',
            }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: [0, 1, 1, 0], scaleX: [0, 1, 1, 0] }}
            transition={{
              duration: 2,
              delay: scanDuration * item.delay,
              repeat: Infinity,
              repeatDelay: scanDuration
            }}
          />
        </React.Fragment>
      ))}
    </div>
  );

  if (isMobile) {
    return <MobileVersion />;
  }

  return (
    <div className="relative w-full h-full">
      {/* Purchase Order Document */}
      <div className="absolute inset-0 bg-dark-100 rounded-lg shadow-lg p-6 font-body text-[11px] text-gray-300 border border-dark-50/10">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-display font-bold text-white mb-1">PURCHASE ORDER</h2>
              <p className="text-brand-orange font-medium">PO-2024-0123</p>
            </div>
            <div className="text-right">
              <p>Date: March 12, 2024</p>
              <p>Due: March 26, 2024</p>
            </div>
          </div>

          {/* Vendor Info */}
          <div className="grid grid-cols-2 gap-6 py-4 border-t border-b border-dark-50/10">
            <div>
              <p className="font-medium text-white mb-1">Vendor:</p>
              <p>Metrix Digital</p>
              <p>metrix@example.com</p>
              <p>1600 Amphitheatre Parkway</p>
              <p>Mountain View, California</p>
            </div>
            <div>
              <p className="font-medium text-white mb-1">Bill To:</p>
              <p>AdaptiveParse Inc.</p>
              <p>billing@adaptiveparse.com</p>
              <p>123 Innovation Drive</p>
              <p>San Francisco, CA 94105</p>
            </div>
          </div>

          {/* Line Items */}
          <div className="space-y-2">
            <div className="grid grid-cols-12 gap-2 text-white font-medium">
              <div className="col-span-6">Description</div>
              <div className="col-span-2 text-right">Qty</div>
              <div className="col-span-2 text-right">Price</div>
              <div className="col-span-2 text-right">Total</div>
            </div>
            
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-6">Enterprise Bolts</div>
              <div className="col-span-2 text-right">1</div>
              <div className="col-span-2 text-right">$5,000.00</div>
              <div className="col-span-2 text-right">$5,000.00</div>
            </div>
            
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-6">Enterprise Sprockets</div>
              <div className="col-span-2 text-right">2</div>
              <div className="col-span-2 text-right">$400.00</div>
              <div className="col-span-2 text-right">$800.00</div>
            </div>

            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-6">Support Package</div>
              <div className="col-span-2 text-right">1</div>
              <div className="col-span-2 text-right">$1,200.00</div>
              <div className="col-span-2 text-right">$1,200.00</div>
            </div>

            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-6">Training Credits</div>
              <div className="col-span-2 text-right">2</div>
              <div className="col-span-2 text-right">$500.00</div>
              <div className="col-span-2 text-right">$1,000.00</div>
            </div>
          </div>

          {/* Total */}
          <div className="border-t border-dark-50/10 pt-4">
            <div className="flex justify-end">
              <div className="w-1/3">
                <div className="flex justify-between font-medium">
                  <span className="text-white">Total:</span>
                  <span className="text-brand-orange">$8,000.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scanning Effects */}
      <motion.div
        className="absolute left-0 w-full pointer-events-none"
        style={{
          height: '160px',
          background: 'linear-gradient(to bottom, transparent, rgba(255, 153, 102, 0.2), transparent)',
          filter: 'blur(12px)',
        }}
        initial={{ y: -80 }}
        animate={{ y: [`-10%`, `${scanOvershoot}%`] }}
        transition={{
          duration: scanDuration,
          repeat: Infinity,
          ease: 'linear',
          repeatDelay: 0.5
        }}
      />
      
      <motion.div
        className="absolute left-0 w-full pointer-events-none"
        style={{
          height: '4px',
          background: 'linear-gradient(to right, transparent 5%, #FF9966 50%, transparent 95%)',
          boxShadow: '0 0 30px #FF9966',
        }}
        initial={{ y: 0 }}
        animate={{ y: [`-10%`, `${scanOvershoot}%`] }}
        transition={{
          duration: scanDuration,
          repeat: Infinity,
          ease: 'linear',
          repeatDelay: 0.5
        }}
      />

      {/* Line Items Data Extraction Box */}
      <motion.div
        className="absolute right-0 w-64 bg-dark-200/90 p-4 rounded-l-lg border-l-2 border-brand-orange shadow-lg"
        style={{ top: '45%' }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ 
          opacity: [0, 1, 1, 0],
          x: [100, 0, 0, 100]
        }}
        transition={{
          duration: 4,
          delay: scanDuration * 0.4,
          repeat: Infinity,
          repeatDelay: scanDuration
        }}
      >
        <div className="text-[10px] space-y-2">
          <div className="text-brand-orange font-medium mb-2">Extracted Line Items:</div>
          <div className="space-y-1.5">
            <div className="flex justify-between">
              <span>Enterprise Bolts</span>
              <span>$5,000.00</span>
            </div>
            <div className="flex justify-between">
              <span>Enterprise Sprockets</span>
              <span>$800.00</span>
            </div>
            <div className="flex justify-between">
              <span>Support Package</span>
              <span>$1,200.00</span>
            </div>
            <div className="flex justify-between">
              <span>Training Credits</span>
              <span>$1,000.00</span>
            </div>
          </div>
          <div className="border-t border-dark-50/20 mt-2 pt-2">
            <div className="flex justify-between text-brand-orange font-medium">
              <span>Total:</span>
              <span>$8,000.00</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Extracted Data Elements */}
      {[
        { top: 15, text: "Vendor: Metrix Digital", delay: 0.15 },
        { top: 25, text: "Email: metrix@example.com", delay: 0.25 },
        { top: 35, text: "PO: #PO-2024-0123", delay: 0.35 },
        { top: 55, text: "Total: $8,000.00", delay: 0.55 }
      ].map((item, index) => (
        <React.Fragment key={index}>
          <motion.div
            className="absolute -right-4 transform translate-x-full"
            style={{ top: `${item.top}%` }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: [0, 1, 1, 0], x: [-20, 0, 0, -20] }}
            transition={{
              duration: 2,
              delay: scanDuration * item.delay,
              repeat: Infinity,
              repeatDelay: scanDuration
            }}
          >
            <div className="bg-brand-orange text-dark-200 px-2 py-1 rounded text-[10px] whitespace-nowrap font-medium">
              {item.text}
            </div>
          </motion.div>

          <motion.div
            className="absolute right-0"
            style={{ 
              top: `${item.top}%`,
              width: '20px',
              height: '2px',
              background: 'linear-gradient(to right, rgba(255, 153, 102, 0.3), #FF9966)',
              boxShadow: '0 0 10px rgba(255, 153, 102, 0.6)',
            }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: [0, 1, 1, 0], scaleX: [0, 1, 1, 0] }}
            transition={{
              duration: 2,
              delay: scanDuration * item.delay,
              repeat: Infinity,
              repeatDelay: scanDuration
            }}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default FormScanAnimation;
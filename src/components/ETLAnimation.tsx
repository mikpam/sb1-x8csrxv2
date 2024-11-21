import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText, FolderTree, Cloud, Globe, Database, BarChart3, Settings, Calendar, Lock, Brain, Wand2, Network } from 'lucide-react';
import ETLConnector from './ETLConnector';

const ETLAnimation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [activeItems, setActiveItems] = useState<Record<string, string>>({});
  const [activeConnector, setActiveConnector] = useState(-1);
  const itemRefs = useRef<Record<string, HTMLElement>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sources = [
    { id: 'source1', icon: Mail, text: 'Email' },
    { id: 'source2', icon: FileText, text: 'Flat Files' },
    { id: 'source3', icon: FolderTree, text: 'Hierarchical Files' },
    { id: 'source4', icon: Cloud, text: 'Cloud Drives' },
    { id: 'source5', icon: Globe, text: 'Web Services' }
  ];

  const extraction = [
    { id: 'extract1', icon: Brain, text: 'Adaptive Parse AI' },
    { id: 'extract2', icon: Settings, text: 'AI Based' },
    { id: 'extract3', icon: FileText, text: 'Template Based' }
  ];

  const processing = [
    { id: 'process1', icon: Settings, text: 'Data Cleansing' },
    { id: 'process2', icon: Wand2, text: 'Data Transformation' },
    { id: 'process3', icon: Settings, text: 'Data Validation' }
  ];

  const mapping = [
    { id: 'map1', icon: Settings, text: 'Field Mapping' },
    { id: 'map2', icon: Network, text: 'Dynamic Data' },
    { id: 'map3', icon: Settings, text: 'Data Processing' }
  ];

  const destinations = [
    { id: 'dest1', icon: Database, text: 'Databases' },
    { id: 'dest2', icon: BarChart3, text: 'BI Tools' },
    { id: 'dest3', icon: Settings, text: 'ERP & CRM Systems' },
    { id: 'dest4', icon: Settings, text: 'APIs' }
  ];

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setActiveSection((prev) => (prev + 1) % 5);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  // Desktop animation logic
  useEffect(() => {
    if (!isMobile) {
      const flowSequence = async () => {
        setActiveItems({});
        setActiveConnector(-1);
        const sections = [
          { name: 'sources', items: sources },
          { name: 'extraction', items: extraction },
          { name: 'processing', items: processing },
          { name: 'mapping', items: mapping },
          { name: 'destinations', items: destinations }
        ];

        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          const randomItem = section.items[Math.floor(Math.random() * section.items.length)];
          setActiveItems(prev => ({
            ...prev,
            [section.name]: randomItem.id
          }));
          setActiveConnector(i - 1);
          await new Promise(resolve => setTimeout(resolve, 800));
        }
        
        await new Promise(resolve => setTimeout(resolve, 800));
        setActiveConnector(-1);
      };

      const interval = setInterval(flowSequence, 6000);
      flowSequence();
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const renderItem = (item, index, section, isColumn = false) => {
    const isActive = activeItems[section] === item.id;
    const Icon = item.icon;
  
    return (
      <div
        key={index}
        ref={(el) => {
          if (el) itemRefs.current[item.id] = el;
        }}
        data-id={item.id}
        className={`
          ${isColumn ? 'flex items-center space-x-2' : ''} 
          relative
          bg-dark-100/80
          border border-dark-50/20
          hover:border-brand-orange/30
          transition-all
          duration-200
          rounded-lg
          p-3
          ${isActive ? 'ring-2 ring-brand-orange shadow-lg shadow-brand-orange/30' : ''}
        `}
      >
        <div className={`flex items-center space-x-2 text-sm ${isActive ? 'text-brand-orange' : 'text-gray-300'}`}>
          <Icon className={`w-5 h-5 ${isActive ? 'text-brand-orange' : 'text-brand-blue'}`} />
          <span>{item.text}</span>
        </div>
        {isActive && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 rounded-lg"
            style={{
              background: 'radial-gradient(circle at center, rgba(255, 153, 102, 0.2) 0%, transparent 70%)',
              filter: 'blur(12px)',
              pointerEvents: 'none',
              boxShadow: '0 0 20px rgba(255, 153, 102, 0.4), inset 0 0 20px rgba(255, 153, 102, 0.2)'
            }}
          />
        )}
      </div>
    );
  };

  // Mobile Card Component with Fade Transitions
  const MobileCard = ({ title, items, isActive }) => (
    <div className={`
      bg-dark-100/80
      border border-dark-50/20
      rounded-lg
      p-4
      transition-all
      duration-500
      ${isActive ? 'ring-2 ring-brand-orange shadow-lg shadow-brand-orange/30' : ''}
    `}>
      <h3 className={`font-display font-semibold mb-3 ${isActive ? 'text-brand-orange' : 'text-gray-400'}`}>
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`
              bg-dark-100
              border border-dark-50/10
              hover:border-brand-orange/20
              px-3 py-2
              rounded-lg
              flex items-center
              space-x-2
              transition-all
              duration-300
              ${isActive ? 'ring-1 ring-brand-orange/30 shadow-lg shadow-brand-orange/20' : ''}
            `}
          >
            <item.icon className={`w-4 h-4 ${isActive ? 'text-brand-orange' : 'text-gray-500'}`} />
            <span className={`text-sm ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  const getActiveElements = () => {
    const sections = ['sources', 'extraction', 'processing', 'mapping', 'destinations'];
    const connections = [];
    
    for (let i = 0; i < sections.length - 1; i++) {
      const startId = activeItems[sections[i]];
      const endId = activeItems[sections[i + 1]];
      
      if (startId && endId) {
        connections.push({
          start: itemRefs.current[startId],
          end: itemRefs.current[endId],
          isActive: activeConnector === i
        });
      }
    }
    
    return connections;
  };

  return (
    <section className="py-20 bg-dark-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            End To End Data Integration
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Connect and transform your data from any source to any destination
          </p>
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div ref={containerRef} className="relative grid grid-cols-12 gap-4 etl-container">
            {/* Sources Column */}
            <div className="col-span-2">
              <div className="bg-dark-100/50 rounded-lg p-4 border border-dark-50/10">
                <h3 className="text-brand-orange font-display font-semibold mb-4">Sources</h3>
                <div className="space-y-4">
                  {sources.map((item, index) => renderItem(item, index, 'sources', true))}
                </div>
              </div>
            </div>

            {/* Processing Steps */}
            <div className="col-span-8">
              <div className="grid grid-cols-3 gap-4 h-full">
                {/* Data Extraction */}
                <div className="bg-dark-100/50 rounded-lg p-4 border border-dark-50/10">
                  <h3 className="text-brand-orange font-display font-semibold mb-4">Data Extraction</h3>
                  <div className="space-y-4">
                    {extraction.map((item, index) => renderItem(item, index, 'extraction'))}
                  </div>
                </div>

                {/* Data Preparation */}
                <div className="bg-dark-100/50 rounded-lg p-4 border border-dark-50/10">
                  <h3 className="text-brand-orange font-display font-semibold mb-4">Data Preparation</h3>
                  <div className="space-y-4">
                    {processing.map((item, index) => renderItem(item, index, 'processing'))}
                  </div>
                </div>

                {/* Data Mapping */}
                <div className="bg-dark-100/50 rounded-lg p-4 border border-dark-50/10">
                  <h3 className="text-brand-orange font-display font-semibold mb-4">Data Mapping</h3>
                  <div className="space-y-4">
                    {mapping.map((item, index) => renderItem(item, index, 'mapping'))}
                  </div>
                </div>
              </div>
            </div>

            {/* Destinations Column */}
            <div className="col-span-2">
              <div className="bg-dark-100/50 rounded-lg p-4 border border-dark-50/10">
                <h3 className="text-brand-orange font-display font-semibold mb-4">Destinations</h3>
                <div className="space-y-4">
                  {destinations.map((item, index) => renderItem(item, index, 'destinations', true))}
                </div>
              </div>
            </div>

            {/* Connectors */}
            {getActiveElements().map((connection, index) => (
              <ETLConnector
                key={index}
                startElement={connection.start}
                endElement={connection.end}
                isActive={connection.isActive}
              />
            ))}
          </div>
        </div>

        {/* Mobile Layout with Static Cards */}
        <div className="lg:hidden space-y-4">
          <MobileCard 
            title="Sources" 
            items={sources} 
            isActive={activeSection === 0}
          />
          <MobileCard 
            title="Extraction" 
            items={extraction} 
            isActive={activeSection === 1}
          />
          <MobileCard 
            title="Processing" 
            items={processing} 
            isActive={activeSection === 2}
          />
          <MobileCard 
            title="Mapping" 
            items={mapping} 
            isActive={activeSection === 3}
          />
          <MobileCard 
            title="Destinations" 
            items={destinations} 
            isActive={activeSection === 4}
          />
        </div>
      </div>
    </section>
  );
};

export default ETLAnimation;
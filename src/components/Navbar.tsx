import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import Logo from './Logo';
import SearchModal from './SearchModal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-200/95 backdrop-blur-sm border-b border-dark-50/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Logo className="h-8" />
              <span className="text-xl font-display font-bold text-white">AdaptiveParse</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Solutions Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-400 hover:text-brand-orange font-display">
                Solutions <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-dark-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <a href="/solutions/adaptive-parser" className="block px-4 py-2 text-sm text-gray-400 hover:text-brand-orange hover:bg-dark-200 rounded-lg">Adaptive Parser</a>
                  <a href="/solutions/adaptive-etl" className="block px-4 py-2 text-sm text-gray-400 hover:text-brand-orange hover:bg-dark-200 rounded-lg">Adaptive ETL</a>
                  <a href="/solutions/smart-routing" className="block px-4 py-2 text-sm text-gray-400 hover:text-brand-orange hover:bg-dark-200 rounded-lg">Smart Routing</a>
                  <a href="/solutions/integrations" className="block px-4 py-2 text-sm text-gray-400 hover:text-brand-orange hover:bg-dark-200 rounded-lg">Integrations</a>
                </div>
              </div>
            </div>

            {/* Industry Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-400 hover:text-brand-orange font-display">
                Industry <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-dark-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <a href="/industry/finance" className="block px-4 py-2 text-sm text-gray-400 hover:text-brand-orange hover:bg-dark-200 rounded-lg">Finance</a>
                  <a href="/industry/healthcare" className="block px-4 py-2 text-sm text-gray-400 hover:text-brand-orange hover:bg-dark-200 rounded-lg">Healthcare</a>
                  <a href="/industry/retail" className="block px-4 py-2 text-sm text-gray-400 hover:text-brand-orange hover:bg-dark-200 rounded-lg">Retail</a>
                </div>
              </div>
            </div>

            {/* Use Case Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-400 hover:text-brand-orange font-display">
                Use Case <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-dark-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <a href="/use-case/automation" className="block px-4 py-2 text-sm text-gray-400 hover:text-brand-orange hover:bg-dark-200 rounded-lg">Automation</a>
                  <a href="/use-case/integration" className="block px-4 py-2 text-sm text-gray-400 hover:text-brand-orange hover:bg-dark-200 rounded-lg">Integration</a>
                  <a href="/use-case/analytics" className="block px-4 py-2 text-sm text-gray-400 hover:text-brand-orange hover:bg-dark-200 rounded-lg">Analytics</a>
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-400 hover:text-brand-orange font-display">
                Resources <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-dark-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <a href="/blog" className="block px-4 py-2 text-sm text-gray-400 hover:text-brand-orange hover:bg-dark-200 rounded-lg">Blog</a>
                  <a href="/resources/documentation" className="block px-4 py-2 text-sm text-gray-400 hover:text-brand-orange hover:bg-dark-200 rounded-lg">Documentation</a>
                  <a href="/resources/case-studies" className="block px-4 py-2 text-sm text-gray-400 hover:text-brand-orange hover:bg-dark-200 rounded-lg">Case Studies</a>
                </div>
              </div>
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-400 hover:text-brand-orange font-display">
                Company <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-dark-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <a href="/about" className="block px-4 py-2 text-sm text-gray-400 hover:text-brand-orange hover:bg-dark-200 rounded-lg">About</a>
                  <a href="/contact" className="block px-4 py-2 text-sm text-gray-400 hover:text-brand-orange hover:bg-dark-200 rounded-lg">Contact</a>
                  <a href="/company/careers" className="block px-4 py-2 text-sm text-gray-400 hover:text-brand-orange hover:bg-dark-200 rounded-lg">Careers</a>
                </div>
              </div>
            </div>

            {/* Search Icon */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-gray-400 hover:text-brand-orange transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            <button className="btn btn-primary">Get Started</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-gray-400 hover:text-brand-orange transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, height: isMobileMenuOpen ? 'auto' : 0 }}
        className="md:hidden bg-dark-100"
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          <div className="px-3 py-2 text-gray-400 font-display font-medium">Solutions</div>
          <a href="/solutions/adaptive-parser" className="block px-6 py-2 text-sm text-gray-400 hover:text-brand-orange">Adaptive Parser</a>
          <a href="/solutions/adaptive-etl" className="block px-6 py-2 text-sm text-gray-400 hover:text-brand-orange">Adaptive ETL</a>
          <a href="/solutions/smart-routing" className="block px-6 py-2 text-sm text-gray-400 hover:text-brand-orange">Smart Routing</a>
          <a href="/solutions/integrations" className="block px-6 py-2 text-sm text-gray-400 hover:text-brand-orange">Integrations</a>

          <div className="px-3 py-2 text-gray-400 font-display font-medium">Industry</div>
          <a href="/industry/finance" className="block px-6 py-2 text-sm text-gray-400 hover:text-brand-orange">Finance</a>
          <a href="/industry/healthcare" className="block px-6 py-2 text-sm text-gray-400 hover:text-brand-orange">Healthcare</a>
          <a href="/industry/retail" className="block px-6 py-2 text-sm text-gray-400 hover:text-brand-orange">Retail</a>

          <div className="px-3 py-2 text-gray-400 font-display font-medium">Use Case</div>
          <a href="/use-case/automation" className="block px-6 py-2 text-sm text-gray-400 hover:text-brand-orange">Automation</a>
          <a href="/use-case/integration" className="block px-6 py-2 text-sm text-gray-400 hover:text-brand-orange">Integration</a>
          <a href="/use-case/analytics" className="block px-6 py-2 text-sm text-gray-400 hover:text-brand-orange">Analytics</a>

          <div className="px-3 py-2 text-gray-400 font-display font-medium">Resources</div>
          <a href="/blog" className="block px-6 py-2 text-sm text-gray-400 hover:text-brand-orange">Blog</a>
          <a href="/resources/documentation" className="block px-6 py-2 text-sm text-gray-400 hover:text-brand-orange">Documentation</a>
          <a href="/resources/case-studies" className="block px-6 py-2 text-sm text-gray-400 hover:text-brand-orange">Case Studies</a>

          <div className="px-3 py-2 text-gray-400 font-display font-medium">Company</div>
          <a href="/about" className="block px-6 py-2 text-sm text-gray-400 hover:text-brand-orange">About</a>
          <a href="/contact" className="block px-6 py-2 text-sm text-gray-400 hover:text-brand-orange">Contact</a>
          <a href="/company/careers" className="block px-6 py-2 text-sm text-gray-400 hover:text-brand-orange">Careers</a>

          <button className="w-full mt-4 btn btn-primary">Get Started</button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
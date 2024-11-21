import React from 'react';
import { MapPin, Calendar, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-dark-100/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Logo and Address */}
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0" />
            <div>
              <Logo className="h-6 mb-2" />
              <address className="text-gray-400 not-italic text-sm">
                310 S Grand Ave. STE 306<br />
                Glendora, CA 91741 USA
              </address>
            </div>
          </div>

          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-4">
            {/* Calendly Button */}
            <a
              href="https://calendly.com/your-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-brand-orange text-dark-200 rounded-lg hover:bg-brand-orange/90 transition-colors font-display w-full sm:w-auto justify-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Demo
            </a>

            {/* Contact Button */}
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-brand-orange text-brand-orange rounded-lg hover:bg-brand-orange/10 transition-colors font-display w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center mt-8 pt-8 border-t border-dark-50/10 space-y-4 sm:space-y-0">
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <a href="/terms" className="hover:text-brand-orange transition-colors">Terms of Service</a>
            <span className="text-gray-600">|</span>
            <a href="/sitemap-index.xml" className="hover:text-brand-orange transition-colors">Sitemap</a>
          </div>
          <span className="sm:ml-4 text-gray-400 text-xs">
            © 2024 AdaptiveParse Group
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
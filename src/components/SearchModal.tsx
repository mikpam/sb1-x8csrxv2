import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Loader2 } from 'lucide-react';
import { useSearchStore } from '../stores/searchStore';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { query, results, isLoading, setQuery, search } = useSearchStore();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    await search(query);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    search(newQuery);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 text-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
              onClick={onClose}
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="inline-block w-full max-w-2xl my-8 overflow-hidden text-left align-middle transition-all transform bg-dark-100 shadow-xl rounded-lg"
            >
              <div className="relative p-6">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <form onSubmit={handleSearch} className="mt-2">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      ref={inputRef}
                      type="text"
                      value={query}
                      onChange={handleChange}
                      placeholder="Search..."
                      className="w-full pl-12 pr-4 py-3 bg-dark-200 border border-dark-50/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                  </div>
                </form>
                
                {/* Results */}
                <div className="mt-6">
                  {isLoading ? (
                    <div className="flex items-center justify-center py-8">
                      <Loader2 className="w-6 h-6 text-brand-orange animate-spin" />
                    </div>
                  ) : query && results.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-gray-400">No results found for "{query}"</p>
                    </div>
                  ) : results.length > 0 ? (
                    <div className="space-y-4">
                      {results.map((result, index) => (
                        <a
                          key={index}
                          href={result.url}
                          className="block bg-dark-200 rounded-lg p-4 hover:bg-dark-300 transition-colors"
                        >
                          <span className="inline-block px-2 py-1 text-xs text-white bg-brand-orange rounded-full mb-2">
                            {result.category}
                          </span>
                          <h3 className="text-white font-display font-semibold mb-1">
                            {result.title}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {result.excerpt}
                          </p>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-6">
                      <h3 className="text-sm font-medium text-gray-400 mb-3">Popular Searches</h3>
                      <div className="flex flex-wrap gap-2">
                        <button 
                          onClick={() => {
                            setQuery('Data Integration');
                            search('Data Integration');
                          }}
                          className="px-3 py-1 text-sm text-gray-400 bg-dark-200 rounded-full hover:text-brand-orange transition-colors"
                        >
                          Data Integration
                        </button>
                        <button 
                          onClick={() => {
                            setQuery('ETL Process');
                            search('ETL Process');
                          }}
                          className="px-3 py-1 text-sm text-gray-400 bg-dark-200 rounded-full hover:text-brand-orange transition-colors"
                        >
                          ETL Process
                        </button>
                        <button 
                          onClick={() => {
                            setQuery('Automation');
                            search('Automation');
                          }}
                          className="px-3 py-1 text-sm text-gray-400 bg-dark-200 rounded-full hover:text-brand-orange transition-colors"
                        >
                          Automation
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
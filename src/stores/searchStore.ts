import { create } from 'zustand';

interface SearchResult {
  title: string;
  excerpt: string;
  url: string;
  category: string;
}

interface SearchStore {
  query: string;
  results: SearchResult[];
  isLoading: boolean;
  setQuery: (query: string) => void;
  search: (query: string) => Promise<void>;
}

export const useSearchStore = create<SearchStore>((set) => ({
  query: '',
  results: [],
  isLoading: false,
  setQuery: (query) => set({ query }),
  search: async (query) => {
    if (!query.trim()) {
      set({ results: [], isLoading: false });
      return;
    }

    set({ isLoading: true });

    // Simulated search results - replace with actual API call
    const mockResults: SearchResult[] = [
      {
        title: 'Understanding ETL Pipeline Optimization',
        excerpt: 'Learn how to optimize your ETL pipelines for better performance and reliability.',
        url: '/blog/etl-pipeline-optimization',
        category: 'Engineering'
      },
      {
        title: 'The Future of Data Integration',
        excerpt: 'Explore how AI and machine learning are transforming data integration processes.',
        url: '/blog/future-of-data-integration',
        category: 'AI & ML'
      },
      {
        title: 'Best Practices for Data Mapping',
        excerpt: 'Discover the essential best practices for effective data mapping in enterprise systems.',
        url: '/blog/data-mapping-best-practices',
        category: 'Best Practices'
      }
    ].filter(result => 
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.excerpt.toLowerCase().includes(query.toLowerCase())
    );

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    set({ results: mockResults, isLoading: false });
  }
}));
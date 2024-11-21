import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ETLAnimation from './components/ETLAnimation';
import DataProcessingBlocks from './components/DataProcessingBlocks';
import Features from './components/Features';
import Blog from './components/Blog';

function App() {
  return (
    <div className="min-h-screen bg-dark-200">
      <Navbar />
      <Hero />
      <ETLAnimation />
      <DataProcessingBlocks />
      <Features />
      <Blog />
    </div>
  );
}

export default App;
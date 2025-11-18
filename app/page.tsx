import React from 'react';
import DealPage from './components/DealPage';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex justify-center items-start">
      <div className="flex">
        {/* Position 1 */}
        <DealPage />
        
        {/* Separator */}
        <div className="w-px bg-gray-300 shadow-sm" />
        
        {/* Position 2 */}
        <DealPage />
        
        {/* Separator */}
        <div className="w-px bg-gray-300 shadow-sm" />
        
        {/* Position 3 */}
        <DealPage />
        
        {/* Separator */}
        <div className="w-px bg-gray-300 shadow-sm" />
        
        {/* Position 4 */}
        <DealPage />
      </div>
    </main>
  );
}


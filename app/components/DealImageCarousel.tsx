'use client';

import React from 'react';
import { ChevronLeft, Upload, Heart } from 'lucide-react';

export default function DealImageCarousel() {
  return (
    <div className="relative bg-white">
      {/* Hero Image */}
      <div className="relative h-64 bg-gradient-to-b from-blue-900 to-blue-700 overflow-hidden">
        {/* Placeholder for Chicago skyline image */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzFhMzU1OCIvPjwvc3ZnPg==')] bg-cover bg-center opacity-80" />
        
        {/* Overlay controls */}
        <div className="absolute top-4 left-4 right-4 flex items-start justify-between z-10">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex gap-2">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Upload className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Image count badge */}
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1.5 rounded-lg text-sm font-medium">
          +9 images
        </div>
        
        {/* Best Rated Badge */}
        <div className="absolute bottom-4 left-4 bg-purple-600 text-white px-3 py-1 rounded flex items-center gap-1 text-sm font-medium">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          Best Rated
        </div>
      </div>
    </div>
  );
}


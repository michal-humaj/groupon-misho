'use client';

import React from 'react';

interface CustomerPhotosProps {
  photos: string[];
}

export default function CustomerPhotos({ photos }: CustomerPhotosProps) {
  return (
    <div className="bg-white mt-2">
      <div className="px-4 py-6">
        <h2 className="text-xl font-bold mb-4">Customer Photos & Videos</h2>
        
        <div className="grid grid-cols-2 gap-2">
          {photos.slice(0, 3).map((photo, index) => (
            <div
              key={index}
              className="aspect-square bg-gradient-to-br from-blue-200 to-gray-300 rounded-lg overflow-hidden"
            >
              {/* Placeholder for customer photo */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          ))}
          {photos.length > 3 && (
            <div className="aspect-square bg-black bg-opacity-70 rounded-lg overflow-hidden flex items-center justify-center relative">
              <button className="text-white font-semibold text-lg">Show All</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


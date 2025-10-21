'use client';

import React, { useState, useEffect } from 'react';

export default function StickyBottomBar() {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past initial pricing section
      if (window.scrollY > 800) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-lg transition-transform duration-300 z-50 ${
        showBar ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="px-4 py-3 flex items-center justify-between">
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-gray-500 line-through text-[13px]">$49</span>
            <span className="text-groupon-green font-bold text-[22px]">$29</span>
            <span className="text-groupon-green font-semibold text-[13px]">-41%</span>
          </div>
          <div className="text-purple-600 text-[12px] font-semibold">
            $23.49 <span className="font-normal">with code</span> HALLOWEEN
          </div>
        </div>
        
        <button className="bg-groupon-green hover:bg-groupon-green-dark text-white font-bold px-6 py-2.5 rounded-lg transition-colors text-[14px] shadow-sm">
          Choose Option
        </button>
      </div>
    </div>
  );
}


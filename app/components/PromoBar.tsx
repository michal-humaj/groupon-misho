'use client';

import React, { useState, useEffect } from 'react';

export default function PromoBar() {
  const [timeLeft, setTimeLeft] = useState('47:51:07');

  useEffect(() => {
    // Mock countdown timer
    const interval = setInterval(() => {
      // This is just for display, not a real countdown
      setTimeLeft('47:51:07');
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 text-white px-3 py-1.5 flex items-center justify-between text-[11px] sticky top-0 z-50">
      <div className="flex-1 leading-tight">
        <span className="font-medium">Spooky Sale is Here! Use code </span>
        <span className="font-bold">HALLOWEEN</span>
        <span className="font-medium"> & save up to 75%</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-right leading-tight">
          <div className="text-[10px] opacity-90">Ends in</div>
          <div className="font-semibold text-[11px]">{timeLeft}</div>
        </div>
        <button className="bg-white text-purple-700 px-3 py-1 rounded-full font-bold text-[11px] whitespace-nowrap">
          Shop Now!
        </button>
      </div>
    </div>
  );
}


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
    <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 text-white px-4 py-2 flex items-center justify-between text-[13px] sticky top-0 z-50">
      <div className="flex-1">
        <span className="font-semibold">Spooky Sale is Here! Use code </span>
        <span className="font-bold">HALLOWEEN</span>
        <span className="font-semibold"> & save up to 75%</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <div className="text-xs opacity-90">Ends in</div>
          <div className="font-semibold">{timeLeft}</div>
        </div>
        <button className="bg-white text-purple-700 px-4 py-1.5 rounded-full font-semibold text-[13px] whitespace-nowrap">
          Shop Now!
        </button>
      </div>
    </div>
  );
}


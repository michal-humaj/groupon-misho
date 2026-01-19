import React from 'react';
import { Menu, Heart, ShoppingCart, Bell, Search } from 'lucide-react';

export const MobileHeader: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Row 1: Nav (h-12) */}
      <div className="h-12 px-4 flex items-center justify-between">
        {/* Left: Menu Icon */}
        <button className="p-1">
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
        
        {/* Center: Groupon Logo */}
        <div className="text-[#53A318] font-[800] tracking-tighter text-2xl">
          GROUPON
        </div>
        
        {/* Right: Icons */}
        <div className="flex gap-4">
          {/* Heart with red dot badge */}
          <button className="relative p-1">
            <Heart className="w-5 h-5 text-gray-700" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <button className="p-1">
            <ShoppingCart className="w-5 h-5 text-gray-700" />
          </button>
          
          <button className="p-1">
            <Bell className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
      
      {/* Row 2: Search Pill */}
      <div className="px-4 pb-2">
        <div className="w-full h-10 bg-white border border-gray-300 rounded-full flex items-center px-4 shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <span className="text-gray-500 font-medium text-sm">Search Groupon</span>
        </div>
      </div>
      
      {/* Row 3: Categories */}
      <div className="pl-4 pb-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <span className="text-xs font-bold text-gray-700 mr-4 inline-block">New Year Sale</span>
        <span className="text-xs font-bold text-gray-700 mr-4 inline-block">Beauty & Spas</span>
        <span className="text-xs font-bold text-gray-700 mr-4 inline-block">Things To Do</span>
        <span className="text-xs font-bold text-gray-700 mr-4 inline-block">Auto</span>
        <span className="text-xs font-bold text-gray-700 mr-4 inline-block">Food & Drink</span>
        <span className="text-xs font-bold text-gray-700 mr-4 inline-block">Health</span>
      </div>
    </div>
  );
};

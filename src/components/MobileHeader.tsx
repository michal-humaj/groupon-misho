import React from 'react';
import { Menu, Heart, ShoppingCart, Bell, Search } from 'lucide-react';

const GrouponLogo: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="none" viewBox="0 0 123 24" className="w-[90px] text-[#177C1F]">
    <path fill="currentColor" d="M19.634 10.78c.027.433.055.865.055 1.271 0 2.162-.54 3.999-1.647 5.62a9.955 9.955 0 0 1-8.184 4.295c-2.836 0-5.24-1.053-7.13-3.053C.917 16.995 0 14.617 0 11.78c0-2.648 1.026-5.079 2.916-6.944C4.807 2.972 7.184 2 9.911 2c4.106 0 7.697 2.513 9.237 6.62H13.8c-1.188-1.242-2.431-1.864-3.943-1.864-2.808 0-5.023 2.296-5.023 5.051 0 3.053 2.376 5.403 5.023 5.403 1.783 0 3.376-.918 4.321-2.594H8.696V10.78h10.938Zm10.724 4.215 4.699 6.592H29.25L25.577 15.4v6.187l-4.699.001V2.378h6.374c2.025 0 3.565.135 4.861 1.055 1.702 1.188 2.593 2.999 2.593 5.376.001 3.107-1.62 5.429-4.348 6.186Zm-.406-6.078c0-1.594-.999-2.243-3.079-2.243h-1.296v4.566h.918c2.323 0 3.457-.595 3.457-2.323Zm88.326-6.539V13.05l-7.05-10.672h-4.239v19.21h4.698V10.89l7.157 10.699h4.132V2.378h-4.698Zm-15.181 2.487c1.945 1.918 2.972 4.377 2.972 6.998 0 2.755-.973 5.214-2.782 7.079-1.864 1.945-4.404 2.999-7.077 2.999-2.836 0-5.267-1.026-7.157-3.026-1.81-1.918-2.729-4.295-2.729-7.133 0-2.649 1.026-5.081 2.916-6.945 1.891-1.864 4.267-2.809 6.996-2.809 2.568 0 4.998 1 6.861 2.837Zm-1.89 6.97c0-2.81-2.242-5.052-4.943-5.052-2.863 0-5.105 2.242-5.105 5.052 0 3.026 2.404 5.349 5.052 5.349 2.754 0 4.996-2.216 4.996-5.349Zm-48.999-6.97c1.945 1.918 2.972 4.377 2.972 6.998 0 2.755-.973 5.214-2.782 7.079-1.864 1.945-4.403 2.999-7.077 2.999-2.836 0-5.267-1.026-7.157-3.026-1.81-1.918-2.728-4.295-2.728-7.133 0-2.649 1.026-5.081 2.917-6.945 1.891-1.864 4.267-2.809 6.996-2.809 2.565 0 4.995 1 6.859 2.837Zm-1.891 6.97c0-2.81-2.242-5.052-4.943-5.052-2.863 0-5.105 2.242-5.105 5.052 0 3.026 2.404 5.349 5.051 5.349 2.756 0 4.997-2.216 4.997-5.349Zm35.388-2.999c0 2.486-1.135 4.539-3.052 5.7-1.216.729-2.729.864-4.728.864h-1.351v6.187l-4.699.001V2.378h6.374c2.024 0 3.564.135 4.861 1.055 1.703 1.188 2.595 2.999 2.595 5.403Zm-4.755.081c0-1.594-.999-2.243-3.079-2.243h-1.242v4.566h.863c2.324 0 3.458-.595 3.458-2.323Zm-15.129 5.295c0 2.188-.783 3.269-2.431 3.269-1.593 0-2.269-1.108-2.269-3.269V2.378h-4.727v12.023c0 4.81 2.619 7.483 6.968 7.483 4.294 0 7.157-2.782 7.157-7.483V2.378h-4.698v11.834Z"></path>
  </svg>
);

export const MobileHeader: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Layer 1: Purple Global Promo Bar */}
      <div className="h-8 w-full bg-[#702082] flex items-center justify-center">
        <span className="text-xs font-bold text-white tracking-wide">Save up to 20% with code PROMO</span>
      </div>
      
      {/* Layer 2: Brand Nav */}
      <div className="h-14 flex items-center px-3 bg-white">
        {/* Left Side: Hamburger + Logo */}
        <div className="flex items-center gap-3">
          <button className="p-1">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <GrouponLogo />
        </div>
        
        {/* Right: Icons */}
        <div className="flex gap-4 items-center ml-auto">
          <button className="p-1">
            <Heart className="w-6 h-6 text-gray-700" />
          </button>
          
          <button className="p-1">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
          </button>
          
          <button className="p-1">
            <Bell className="w-6 h-6 text-gray-700" />
          </button>
          
          {/* User Avatar */}
          <button className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
            MH
          </button>
        </div>
      </div>
      
      {/* Layer 3: Active Search Bar */}
      <div className="px-3 pb-1 bg-white">
        <div className="w-full h-10 rounded-full border border-[#177C1F] bg-white shadow-sm flex items-center px-4 gap-2">
          <Search className="w-4 h-4 text-gray-400" />
          <span className="text-gray-400 font-medium text-sm">Search Groupon</span>
        </div>
      </div>
      
      {/* Layer 4: Category Strip */}
      <div className="pl-3 pb-2 mt-1 bg-white overflow-x-auto whitespace-nowrap scrollbar-hide">
        <span className="text-xs font-bold text-gray-700 mr-5 inline-block">New Year Sale</span>
        <span className="text-xs font-bold text-gray-700 mr-5 inline-block">Beauty & Spas</span>
        <span className="text-xs font-bold text-gray-700 mr-5 inline-block">Things To Do</span>
        <span className="text-xs font-bold text-gray-700 mr-5 inline-block">Auto</span>
        <span className="text-xs font-bold text-gray-700 mr-5 inline-block">Food & Drink</span>
        <span className="text-xs font-bold text-gray-700 mr-5 inline-block">Health</span>
      </div>
    </div>
  );
};

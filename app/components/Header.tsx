'use client';

import React from 'react';
import { ChevronLeft, Upload, Heart, Menu, ShoppingCart, Bell, User } from 'lucide-react';

export default function Header() {
  return (
    <>
      {/* Main Header */}
      <header className="bg-white sticky top-[52px] z-40 border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-2.5">
          <button className="p-2 -ml-2">
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex-1 flex justify-center">
            <svg className="h-8" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="22" fill="#53a318" fontSize="24" fontWeight="bold" fontFamily="Arial, sans-serif">
                GROUPON
              </text>
            </svg>
          </div>
          
          <div className="flex items-center gap-1">
            <button className="p-2">
              <Heart className="w-6 h-6" />
            </button>
            <button className="p-2 relative">
              <ShoppingCart className="w-6 h-6" />
            </button>
            <button className="p-2 relative">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-semibold">
                8
              </span>
            </button>
            <button className="p-2">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="px-4 pb-2.5">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Restaurant"
              className="w-full pl-10 pr-32 py-2.5 border-2 border-groupon-green rounded-full focus:outline-none focus:border-groupon-green-dark text-[15px]"
            />
            <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-100 px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
              <span className="font-semibold text-[14px]">Chicago</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Categories */}
        <div className="flex gap-6 px-4 pb-2.5 overflow-x-auto scrollbar-hide border-b">
          <a href="#" className="whitespace-nowrap text-[13px] font-medium pb-2">Beauty & Spas</a>
          <a href="#" className="whitespace-nowrap text-[13px] font-medium pb-2">Things To Do</a>
          <a href="#" className="whitespace-nowrap text-[13px] font-medium pb-2">Gifts</a>
          <a href="#" className="whitespace-nowrap text-[13px] font-medium pb-2">Auto & Home</a>
        </div>
      </header>
      
      {/* Breadcrumb Navigation */}
      <nav className="bg-white px-4 py-2.5 border-b">
        <div className="flex items-center gap-2 text-[12px] text-gray-600 overflow-x-auto scrollbar-hide">
          <a href="#" className="whitespace-nowrap hover:text-groupon-green">Local</a>
          <ChevronRight />
          <a href="#" className="whitespace-nowrap hover:text-groupon-green">Things To Do</a>
          <ChevronRight />
          <a href="#" className="whitespace-nowrap hover:text-groupon-green">Sightseeing & Tours</a>
          <ChevronRight />
          <a href="#" className="whitespace-nowrap hover:text-groupon-green">Boat Tours</a>
        </div>
      </nav>
    </>
  );
}

function ChevronRight() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}


'use client';

import React from 'react';
import { MapPin, Star } from 'lucide-react';

interface DealInfoProps {
  title: string;
  subtitle: string;
  location: string;
  rating: number;
  reviewCount: number;
  promoEndTime: string;
  promoCode: string;
  promoDiscount: number;
}

export default function DealInfo({
  title,
  subtitle,
  location,
  rating,
  reviewCount,
  promoEndTime,
  promoCode,
  promoDiscount,
}: DealInfoProps) {
  return (
    <div className="bg-white px-4 py-5">
      <h1 className="text-[21px] font-bold mb-3 leading-[1.3]">{title}</h1>
      
      <div className="flex items-start gap-2 mb-2.5">
        <svg className="w-[18px] h-[18px] text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
        <p className="text-[13px] text-gray-700">{subtitle}</p>
      </div>
      
      <div className="flex items-start gap-2 mb-3">
        <MapPin className="w-[18px] h-[18px] text-gray-500 mt-0.5 flex-shrink-0" />
        <a href="#location" className="text-[13px] text-gray-700 underline">
          {location}
        </a>
      </div>
      
      <div className="flex items-center gap-1.5 mb-5">
        <Star className="w-5 h-5 fill-orange-400 text-orange-400" />
        <span className="font-bold text-[16px]">{rating}</span>
        <a href="#reviews" className="text-[14px] text-gray-600 underline ml-0.5">
          ({reviewCount.toLocaleString()} reviews)
        </a>
      </div>
      
      {/* Promo Banner */}
      <div className="border-2 border-dashed border-purple-400 rounded-lg p-3.5 bg-purple-50">
        <div className="text-center">
          <div className="text-[16px] font-bold mb-0.5">Extra ${promoDiscount.toFixed(2)} off</div>
          <div className="text-[12px] mb-1.5">
            Promo <span className="font-bold text-purple-600">{promoCode}</span> ends in:{' '}
            <span className="font-semibold">{promoEndTime}</span>
          </div>
          <p className="text-[11px] text-purple-600">
            Groupon reserves the right to end the promo at any time
          </p>
        </div>
      </div>
    </div>
  );
}


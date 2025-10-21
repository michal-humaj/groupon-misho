'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../data/mockDeal';

interface ReviewsProps {
  reviews: Review[];
  rating: number;
  reviewCount: number;
}

export default function Reviews({ reviews, rating, reviewCount }: ReviewsProps) {
  return (
    <div className="bg-white mt-2">
      {/* Review Header */}
      <div className="px-4 pt-5 pb-4 border-b">
        <h2 className="text-[20px] font-bold mb-4">Customer Reviews</h2>
        
        <div className="flex items-center gap-3 mb-4">
          <div className="text-[42px] font-bold">{rating}</div>
          <div>
            <div className="flex gap-0.5 mb-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-5 h-5 ${
                    star <= Math.floor(rating)
                      ? 'fill-orange-400 text-orange-400'
                      : 'fill-gray-300 text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-[12px] text-gray-600">based on Groupon {reviewCount.toLocaleString()} reviews</p>
          </div>
        </div>

        {/* Verified Reviews Badge */}
        <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="w-8 h-8 bg-groupon-green rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold mb-1 text-[14px]">100% Verified Reviews</h3>
            <p className="text-[12px] text-gray-700">
              All Groupon reviews are from people who have redeemed deals with this merchant. Review requests are sent by email to customers who purchased the deal.
            </p>
          </div>
        </div>
      </div>

      {/* Review Tags */}
      <div className="px-4 py-3.5 border-b">
        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-1.5 border border-gray-300 rounded-full text-[12px] font-medium">tour</button>
          <button className="px-3 py-1.5 border border-gray-300 rounded-full text-[12px] font-medium">tour guide</button>
          <button className="px-3 py-1.5 border border-gray-300 rounded-full text-[12px] font-medium">guide</button>
          <button className="px-3 py-1.5 border border-gray-300 rounded-full text-[12px] font-medium">boat</button>
          <button className="px-3 py-1.5 border border-gray-300 rounded-full text-[12px] font-medium">experience</button>
          <button className="px-3 py-1.5 border border-gray-300 rounded-full text-[12px] font-medium bg-gray-100">Show More</button>
        </div>
      </div>

      {/* Review Badge */}
      <div className="px-4 py-3 bg-green-50 border-b border-green-200 flex items-center gap-2">
        <span className="text-sm font-semibold">Reviewed on</span>
        <svg className="h-4" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="15" fill="#53a318" fontSize="14" fontWeight="bold" fontFamily="Arial, sans-serif">
            GROUPON
          </text>
        </svg>
      </div>

      {/* Individual Reviews */}
      <div className="divide-y">
        {reviews.map((review) => (
          <div key={review.id} className="px-4 py-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-semibold">
                  {review.author[0]}
                </div>
                <div>
                  <h4 className="font-bold">{review.author}</h4>
                  {review.ratingCount && review.reviewCount && (
                    <p className="text-xs text-gray-600">
                      {review.ratingCount} ratings · {review.reviewCount} review{review.reviewCount > 1 ? 's' : ''}
                    </p>
                  )}
                </div>
              </div>
              <span className="text-sm text-gray-600">{review.date}</span>
            </div>

            <div className="flex gap-0.5 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-4 h-4 ${
                    star <= review.rating
                      ? 'fill-orange-400 text-orange-400'
                      : 'fill-gray-300 text-gray-300'
                  }`}
                />
              ))}
            </div>

            <p className="text-gray-800 leading-relaxed">{review.text}</p>
          </div>
        ))}
      </div>

      {/* See All Reviews Button */}
      <div className="px-4 py-4 border-t">
        <button className="w-full py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50">
          See all reviews ({reviewCount.toLocaleString()})
        </button>
      </div>
    </div>
  );
}


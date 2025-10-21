'use client';

import React from 'react';
import { Check } from 'lucide-react';

interface DealDetailsProps {
  amenities: string[];
  description: string;
  highlights: string[];
  generalInfo: {
    title: string;
    items: string[];
  };
  scheduling: {
    title: string;
    items: string[];
  };
  afterPurchaseInfo: string;
}

export default function DealDetails({
  amenities,
  description,
  highlights,
  generalInfo,
  scheduling,
  afterPurchaseInfo,
}: DealDetailsProps) {
  return (
    <div className="bg-white mt-2">
      {/* Amenities */}
      <div className="px-4 py-5 border-b">
        <h2 className="text-[17px] font-bold mb-3.5">Amenities</h2>
        <div className="flex flex-wrap gap-2">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full border border-gray-300"
            >
              <svg className="w-[18px] h-[18px] text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-[13px] font-medium">{amenity}</span>
              <Check className="w-[18px] h-[18px] text-groupon-green" />
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="px-4 py-5 border-b">
        <p className="text-gray-800 leading-relaxed text-[14px]">{description}</p>
      </div>

      {/* After Purchase Info */}
      <div className="px-4 py-6 bg-gray-50 border-b">
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">After Your Purchase</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {afterPurchaseInfo}{' '}
              <a href="#" className="text-blue-600 underline font-semibold">
                Learn more about redemption codes here.
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Best Way to Visit */}
      <div className="px-4 py-6 border-b">
        <h2 className="text-xl font-bold mb-4">The Best Way to Visit Chicago in the Spring, Summer & Fall</h2>
        <p className="text-gray-800 leading-relaxed mb-4">
          Chicago is famous for its architecture, and the best way to see it is on a cruise down the Chicago River. Each architecture river tour is narrated by a professional guide who leads passengers down the Chicago River to discover the city&apos;s most renowned landmarks. In addition to historical insight into well-known structures such as the Civic Opera House, Trump Tower & the Merchandise Mart, passengers will also get a chance to learn about current and upcoming developments. The Architecture River Cruise navigates the three primary branches of the river including the main branch to Navy Pier, the north branch to Goose Island, and the south branch to Chinatown.
        </p>

        <ul className="space-y-3">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex gap-3">
              <span className="text-gray-800 font-bold flex-shrink-0">•</span>
              <span className="text-gray-800">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* General Information */}
      <div className="px-4 py-6 border-b">
        <h2 className="text-xl font-bold mb-4">{generalInfo.title}</h2>
        <ul className="space-y-3">
          {generalInfo.items.map((item, index) => (
            <li key={index} className="flex gap-3">
              <span className="text-gray-800 font-bold flex-shrink-0">•</span>
              <span className="text-gray-800">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* How to Schedule */}
      <div className="px-4 py-6 border-b">
        <h2 className="text-xl font-bold mb-4">{scheduling.title}</h2>
        <ul className="space-y-3">
          {scheduling.items.map((item, index) => (
            <li key={index} className="flex gap-3">
              <span className="text-gray-800 font-bold flex-shrink-0">•</span>
              <span className="text-gray-800">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Reviews Snippet */}
      <div className="px-4 py-6 border-b">
        <h2 className="text-xl font-bold mb-4">Reviews from Happy Participants</h2>
        <ul className="space-y-4">
          <li className="italic text-gray-700 leading-relaxed">
            &ldquo;If you are visiting Chicago and want something awesome to do, Don&apos;t miss out on this great attraction. Great thing about the boat we were on was air conditioned at the bottom. Our tour guide was very knowledgeable and gave us a lot of insight on the different architecture in Chicago that we seen. This is a 5-STAR a must-go!&rdquo;
          </li>
          <li className="italic text-gray-700 leading-relaxed">
            &ldquo;The best boat tour ever! I and my friend were so happy that we did it. Definitely recommended a lot while enjoying the amazing views. I know there are tons of seemingly the same kind of tour out there though, but this is the one that you&apos;d want to join as they offer a further trip to the north and provide rich history and information. It&apos;s 10 out of 10. Highly recommended!&rdquo;
          </li>
        </ul>
      </div>
    </div>
  );
}


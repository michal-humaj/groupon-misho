'use client';

import React, { useState, useRef, useEffect } from 'react';
import PromoBar from './PromoBar';
import Header from './Header';
import DealImageCarousel from './DealImageCarousel';
import DealInfo from './DealInfo';
import PricingOptions from './PricingOptions';
import Reviews from './Reviews';
import DealDetails from './DealDetails';
import LocationMap from './LocationMap';
import CustomerPhotos from './CustomerPhotos';
import Footer from './Footer';
import { mockDeal } from '../data/mockDeal';

export default function DealPage() {
  const [showBar, setShowBar] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        // Show sticky bar after scrolling past initial pricing section
        if (scrollContainerRef.current.scrollTop > 800) {
          setShowBar(true);
        } else {
          setShowBar(false);
        }
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="h-screen bg-gray-100 w-[390px] relative overflow-hidden">
      <div 
        ref={scrollContainerRef}
        className="h-full overflow-y-auto"
      >
        <PromoBar />
        <Header />
        
        <div className="pb-20">
          <DealImageCarousel />
          
          <DealInfo
            title={mockDeal.title}
            subtitle={mockDeal.subtitle}
            location={mockDeal.location}
            rating={mockDeal.rating}
            reviewCount={mockDeal.reviewCount}
            promoEndTime={mockDeal.promoEndTime}
            promoCode={mockDeal.promoCode}
            promoDiscount={mockDeal.promoDiscount}
          />
          
          <PricingOptions options={mockDeal.options} />
          
          <DealDetails
            amenities={mockDeal.amenities}
            description={mockDeal.description}
            highlights={mockDeal.highlights}
            generalInfo={mockDeal.generalInfo}
            scheduling={mockDeal.scheduling}
            afterPurchaseInfo={mockDeal.afterPurchaseInfo}
          />
          
          <LocationMap redemptionLocation={mockDeal.redemptionLocation} />
          
          <CustomerPhotos photos={mockDeal.customerPhotos} />
          
          <Reviews
            reviews={mockDeal.reviews}
            rating={mockDeal.rating}
            reviewCount={mockDeal.reviewCount}
          />
          
          <Footer />
        </div>
      </div>
      
      {/* Sticky Bottom Bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-lg transition-transform duration-300 z-50 ${
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
          
          <button className="bg-groupon-green hover:bg-groupon-green-dark text-white font-bold px-6 py-2.5 rounded-full transition-colors text-[14px] shadow-sm">
            Choose Option
          </button>
        </div>
      </div>
    </div>
  );
}


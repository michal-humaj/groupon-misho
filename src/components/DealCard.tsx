import React, { useRef, useEffect, useState } from 'react';
import { CleanDeal } from '../types/deal';
import { FeatureFlags, SlotId } from '../context/PrototypeContext';
import { usePrototypeContext } from '../context/PrototypeContext';
import { HeroImage } from './HeroImage';
import { OptionSelector } from './OptionSelector';
import { StickyFooter } from './StickyFooter';
import { MapPin, Star } from 'lucide-react';

interface DealCardProps {
  deal: CleanDeal;
  selectedOptionId: string | null;
  featureFlags: FeatureFlags;
  slotId: SlotId;
}

export const DealCard: React.FC<DealCardProps> = ({ 
  deal, 
  selectedOptionId, 
  featureFlags, 
  slotId 
}) => {
  const { actions } = usePrototypeContext();
  const selectedOption = deal.options.find(o => o.id === selectedOptionId);
  
  // Track if user has scrolled past options section
  const [showStickyFooter, setShowStickyFooter] = useState(true);
  const optionsSectionRef = useRef<HTMLDivElement>(null);
  
  // Parse highlights into bullet points
  const highlightsList = deal.highlights
    ? deal.highlights.split('\n').filter(line => line.trim().length > 0)
    : [];
  
  // Set up IntersectionObserver to detect when options section is scrolled past
  useEffect(() => {
    if (!featureFlags.stickyAfterOptions || !optionsSectionRef.current) {
      setShowStickyFooter(true);
      return;
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Show footer when options section is NOT in view (scrolled past)
        setShowStickyFooter(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '-100px 0px 0px 0px', // Trigger when options are 100px past the top
      }
    );
    
    observer.observe(optionsSectionRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, [featureFlags.stickyAfterOptions]);
  
  return (
    <>
      {/* Hero Image */}
      <HeroImage 
        src={deal.images.hero} 
        alt={deal.title}
        enlarged={featureFlags.enlargedImages}
      />
      
      {/* Title Section */}
      <div className="px-4 py-4 bg-white">
        <h1 className="text-[20px] leading-[26px] font-[800] text-[#2D2D2D]">
          {deal.title}
        </h1>
        <div className="flex items-center gap-1 mt-2">
          <MapPin className="w-3 h-3 text-gray-500" />
          <p className="text-xs text-gray-500">{deal.merchant.name}</p>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex text-[#F5A623]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-current" />
            ))}
          </div>
          <span className="text-[12px] text-gray-500 underline">{deal.soldQuantityMessage} bought</span>
        </div>
      </div>
      
      {/* Option Selector */}
      <div ref={optionsSectionRef} className="px-4 py-4 bg-[#F6F7F9]">
        <h2 className="text-[18px] font-bold text-[#2D2D2D] mb-3">Choose Your Option</h2>
        <OptionSelector 
          options={deal.options}
          selectedId={selectedOptionId}
          onSelect={(id) => actions.selectOption(slotId, id)}
        />
      </div>
      
      {/* Highlights Section */}
      {highlightsList.length > 0 && (
        <div className="px-4 py-4 bg-white">
          <h2 className="text-[18px] font-bold text-[#2D2D2D] mb-3">Highlights</h2>
          <ul className="list-disc pl-5 space-y-2">
            {highlightsList.map((highlight, index) => (
              <li key={index} className="text-[14px] leading-[22px] text-[#2D2D2D]">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* About This Deal Section */}
      {deal.description && (
        <div className="px-4 py-4 bg-[#F6F7F9]">
          <h2 className="text-[18px] font-bold text-[#2D2D2D] mb-3">About This Deal</h2>
          <div className="text-[14px] leading-[22px] text-[#2D2D2D] space-y-3">
            {deal.description.split('\n\n').slice(0, 3).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      )}
      
      {/* Where to Redeem (Location) */}
      {deal.locations.length > 0 && (
        <div className="px-4 py-4 bg-white">
          <h2 className="text-[18px] font-bold text-[#2D2D2D] mb-3">Where to Redeem</h2>
          
          {/* Map Placeholder */}
          <div className="w-full h-48 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
            <MapPin className="w-12 h-12 text-gray-400" />
          </div>
          
          {/* Location Details */}
          <div className="space-y-1">
            <p className="text-[16px] font-bold text-[#2D2D2D]">{deal.locations[0].name}</p>
            <p className="text-[14px] text-[#757575]">{deal.locations[0].address}</p>
            <p className="text-[14px] text-[#757575]">
              {deal.locations[0].city}, {deal.locations[0].state}
            </p>
          </div>
        </div>
      )}
      
      {/* Customer Reviews Section */}
      {featureFlags.showReviews && deal.soldQuantity > 100 && (
        <div className="px-4 py-4 bg-[#F6F7F9]">
          <h2 className="text-[18px] font-bold text-[#2D2D2D] mb-3">Customer Reviews</h2>
          
          {/* Rating Summary */}
          <div className="flex items-center gap-3 mb-4">
            <div className="text-[32px] font-bold text-[#2D2D2D]">4.8</div>
            <div>
              <div className="flex text-[#F5A623] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-[12px] text-[#757575]">{deal.soldQuantityMessage} reviews</p>
            </div>
          </div>
          
          {/* Sample Review */}
          <div className="bg-white rounded-lg p-4 border border-[#E0E0E0]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#53A318] flex items-center justify-center text-white font-bold text-sm">
                JD
              </div>
              <div>
                <p className="text-[14px] font-bold text-[#2D2D2D]">Jessica D.</p>
                <div className="flex text-[#F5A623]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[14px] leading-[22px] text-[#2D2D2D]">
              "Amazing experience! Great value for the price. The staff was friendly and the whole process was seamless. Highly recommend!"
            </p>
            <p className="text-[12px] text-[#757575] mt-2">2 days ago</p>
          </div>
        </div>
      )}
      
      {/* Fine Print */}
      {deal.finePrint && (
        <div className="px-4 py-4 bg-white">
          <h2 className="text-[18px] font-bold text-[#2D2D2D] mb-3">Fine Print</h2>
          <p className="text-[12px] leading-[18px] text-[#757575]">
            {deal.finePrint.substring(0, 300)}...
          </p>
        </div>
      )}
      
      {/* Sticky Footer */}
      {showStickyFooter && (
        <StickyFooter 
          option={selectedOption}
          deal={deal}
          featureFlags={featureFlags}
        />
      )}
    </>
  );
};

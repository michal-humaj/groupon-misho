import React, { useRef, useState, useEffect } from 'react';
import { CleanDeal } from '../types/deal';
import { SlotId } from '../context/PrototypeContext';
import { usePrototypeContext } from '../context/PrototypeContext';
import { HeroImage } from './HeroImage';
import { OptionSelector } from './OptionSelector';
import { StickyFooter } from './StickyFooter';
import { MapPin, Star, ChevronRight } from 'lucide-react';

interface DealCardProps {
  deal: CleanDeal;
  selectedOptionId: string | null;
  slotId: SlotId;
}

export const DealCard: React.FC<DealCardProps> = ({ 
  deal, 
  selectedOptionId, 
  slotId 
}) => {
  const { actions } = usePrototypeContext();
  const selectedOption = deal.options.find(o => o.id === selectedOptionId);
  const optionsSectionRef = useRef<HTMLDivElement>(null);
  const [areOptionsVisible, setAreOptionsVisible] = useState(true);

  // Track options section visibility with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAreOptionsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Consider visible when 30% is in view
        rootMargin: '-80px 0px -80px 0px' // Account for header/footer
      }
    );

    if (optionsSectionRef.current) {
      observer.observe(optionsSectionRef.current);
    }

    return () => {
      if (optionsSectionRef.current) {
        observer.unobserve(optionsSectionRef.current);
      }
    };
  }, []);

  const scrollToOptions = () => {
    optionsSectionRef.current?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  };
  
  // Parse highlights into bullet points
  const highlightsList = deal.highlights
    ? deal.highlights.split('\n').filter(line => line.trim().length > 0)
    : [];
  
  return (
    <>
      {/* Breadcrumbs Navigation */}
      {deal.breadcrumbs && deal.breadcrumbs.length > 0 && (
        <div className="w-full bg-[#F6F7F9] px-4 py-2">
          <div className="flex items-center gap-1 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {deal.breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                <span 
                  className={`text-[11px] font-medium ${
                    index === deal.breadcrumbs.length - 1 
                      ? 'text-gray-900' 
                      : 'text-[#757575]'
                  }`}
                >
                  {crumb}
                </span>
                {index < deal.breadcrumbs.length - 1 && (
                  <ChevronRight className="w-3 h-3 text-gray-400 flex-shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
      
      {/* Hero Image with Video Support */}
      <HeroImage 
        src={deal.images.hero} 
        alt={deal.title}
        enlarged={false}
        hasVideo={deal.hasVideo}
        isVertical={deal.isVertical}
      />
      
      {/* Title Section */}
      <div className="px-4 py-4 bg-white">
        <h1 className="text-[20px] leading-tight font-[800] text-[#2D2D2D]">
          {deal.title}
        </h1>
        <div className="flex items-center gap-1 mt-1">
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
      <div ref={optionsSectionRef} className="px-4 pt-3 pb-4 bg-[#F6F7F9]">
        <h2 className="text-[18px] font-bold text-[#2D2D2D] mb-2">Select Option</h2>
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
      <StickyFooter 
        option={selectedOption}
        deal={deal}
        areOptionsVisible={areOptionsVisible}
        onScrollToOptions={scrollToOptions}
      />
    </>
  );
};

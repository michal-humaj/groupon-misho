import React from 'react';
import { CleanOption, CleanDeal } from '../types/deal';
import { FeatureFlags } from '../context/PrototypeContext';

interface StickyFooterProps {
  option: CleanOption | undefined;
  deal?: CleanDeal;
  featureFlags: FeatureFlags;
}

export const StickyFooter: React.FC<StickyFooterProps> = ({ option, deal, featureFlags }) => {
  // Determine button text based on deal type
  const getButtonText = () => {
    if (!deal) return 'Buy Now';
    const isTicketDeal = deal.category?.toLowerCase().includes('park') || 
                         deal.category?.toLowerCase().includes('attraction') ||
                         deal.title.toLowerCase().includes('ticket');
    return isTicketDeal ? 'Choose Option' : 'Buy Now';
  };
  
  // V2: Simplified layout (if feature flag is on)
  if (featureFlags.stickyFooterV2) {
    return (
      <div className="absolute bottom-0 left-0 w-full bg-white z-50 px-4 py-3 border-t border-gray-100 shadow-[0_-4px_10px_-2px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between">
          {/* Left: Price */}
          <div>
            <div className="text-[20px] font-bold text-[#53A318]">
              {option?.priceFormatted || '$0.00'}
            </div>
          </div>
          
          {/* Right: Action Button */}
          <button className="h-[48px] w-[180px] bg-[#2E7D32] hover:bg-[#1b5e20] text-white font-bold text-[16px] rounded-full flex items-center justify-center transition-colors">
            {getButtonText()}
          </button>
        </div>
      </div>
    );
  }
  
  // V1: Original layout (Control)
  return (
    <div className="absolute bottom-0 left-0 w-full bg-white z-50 px-4 py-3 border-t border-gray-100 shadow-[0_-4px_10px_-2px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between">
        {/* Left Side: Price Stack */}
        <div>
          {/* Main Price */}
          <div className="flex items-baseline gap-2">
            {!option && <span className="text-sm text-gray-600">From</span>}
            <span className="text-[20px] font-bold text-[#53A318]">
              {option?.priceFormatted || (deal?.options[0]?.priceFormatted) || '$0.00'}
            </span>
          </div>
          
          {/* Subtext: Original Price (if discount exists) */}
          {option && option.valueInCents > option.priceInCents && (
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-xs text-gray-400 line-through">
                {option.valueFormatted}
              </span>
              <span className="text-xs font-bold text-[#53A318]">
                Save {option.discountPercent}%
              </span>
            </div>
          )}
        </div>
        
        {/* Right Side: Action Button (Pill Shape) */}
        <button className="h-[48px] w-[180px] bg-[#2E7D32] hover:bg-[#1b5e20] text-white font-bold text-[16px] rounded-full flex items-center justify-center transition-colors shadow-sm">
          {getButtonText()}
        </button>
      </div>
    </div>
  );
};

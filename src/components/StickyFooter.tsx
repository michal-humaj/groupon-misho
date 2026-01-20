import React from 'react';
import { CleanOption, CleanDeal } from '../types/deal';

interface StickyFooterProps {
  option: CleanOption | undefined;
  deal?: CleanDeal;
  areOptionsVisible: boolean;
  onScrollToOptions: () => void;
}

export const StickyFooter: React.FC<StickyFooterProps> = ({ 
  option, 
  deal, 
  areOptionsVisible,
  onScrollToOptions
}) => {
  // Determine button text and behavior based on options visibility
  const getButtonText = () => {
    // When options are visible, show "Buy Now"
    if (areOptionsVisible) {
      return 'Buy Now';
    }
    // When options are not visible, show "Select Option" to prompt scrolling
    return 'Select Option';
  };

  const handleButtonClick = () => {
    if (!areOptionsVisible) {
      // Scroll to options if they're not visible
      onScrollToOptions();
    } else {
      // Proceed with purchase (implement purchase logic here)
      console.log('Proceeding to purchase...');
    }
  };
  
  // Determine price color based on urgency
  const isUrgent = deal?.isUrgent || false;
  const priceColor = isUrgent ? 'text-[#E02B2B]' : 'text-[#177C1F]';
  
  return (
    <div className="absolute bottom-0 left-0 w-full bg-white z-50 px-4 py-3 border-t border-gray-100 shadow-[0_-4px_6px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between">
        {/* Left Side: Price Stack */}
        <div>
          {/* Main Price with Dynamic Color */}
          <div className="flex items-baseline gap-2">
            {!option && <span className="text-sm text-gray-600">From</span>}
            <span className={`text-[20px] font-[800] ${priceColor}`}>
              {option?.priceFormatted || (deal?.options[0]?.priceFormatted) || '$0.00'}
            </span>
          </div>
          
          {/* Subtext: Original Price (if discount exists) */}
          {option && option.valueInCents > option.priceInCents && (
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-xs text-gray-400 line-through">
                {option.valueFormatted}
              </span>
              <span className={`text-xs font-[700] ${priceColor}`}>
                Save {option.discountPercent}%
              </span>
            </div>
          )}
          
          {/* Urgency Text in Purple */}
          {isUrgent && deal?.urgencyText && (
            <div className="mt-1">
              <span className="text-[#702082] font-bold text-xs">
                {deal.urgencyText}
              </span>
            </div>
          )}
        </div>
        
        {/* Right Side: Action Button (Pill Shape) */}
        <button 
          onClick={handleButtonClick}
          className="h-[48px] w-[180px] bg-[#177C1F] hover:bg-[#136619] text-white font-bold text-[16px] rounded-full flex items-center justify-center transition-colors shadow-[0_-4px_6px_rgba(0,0,0,0.1)]"
        >
          {getButtonText()}
        </button>
      </div>
    </div>
  );
};

import React from 'react';
import { CleanOption } from '../types/deal';

interface OptionSelectorProps {
  options: CleanOption[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export const OptionSelector: React.FC<OptionSelectorProps> = ({ options, selectedId, onSelect }) => {
  return (
    <div className="flex flex-col gap-2">
      {options.map(option => {
        const isSelected = option.id === selectedId;
        const hasDiscount = option.valueInCents > option.priceInCents;
        
        return (
          <div 
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={`
              relative border rounded-xl p-3 cursor-pointer bg-white
              ${isSelected 
                ? 'border-[#0073EA] border-[2px]' 
                : 'border-gray-200'}
            `}
          >
            <div className="grid grid-cols-[24px_1fr] gap-2 items-start">
              {/* Custom Radio Button (Blue Selection Indicator) */}
              <div className={`
                h-6 w-6 rounded-full border-2 flex items-center justify-center flex-shrink-0
                ${isSelected 
                  ? 'border-[#0073EA] bg-white' 
                  : 'border-gray-300 bg-white'}
              `}>
                {isSelected && (
                  <div className="h-3 w-3 rounded-full bg-[#0073EA]" />
                )}
              </div>
              
              {/* Content Column */}
              <div>
                {/* Row 1: Title */}
                <h3 className="font-bold text-gray-900 text-[15px] leading-tight mb-1">
                  {option.title}
                </h3>
                
                {/* Row 2: Price Stack */}
                <div className="flex items-baseline flex-wrap">
                  <span className="text-[#177C1F] text-[18px] font-[800] tracking-tight">
                    {option.priceFormatted}
                  </span>
                  
                  {hasDiscount && (
                    <>
                      <span className="text-gray-400 text-[11px] line-through ml-2">
                        {option.valueFormatted}
                      </span>
                      <span className="ml-2 bg-[#E8F5E9] text-[#2E7D32] text-[10px] font-bold px-1.5 py-0.5 rounded">
                        {option.discountPercent}% OFF
                      </span>
                    </>
                  )}
                </div>
                
                {/* Row 3: Promo Box (Conditional - if salePrice exists) */}
                {option.salePrice && option.salePrice.saleLabel && (
                  <div className="mt-2 border border-dashed border-purple-300 bg-purple-50 rounded p-2 flex items-center gap-2">
                    <svg className="w-3 h-3 text-[#702082]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#702082] text-xs font-bold">
                      {option.salePrice.saleLabel}
                    </span>
                  </div>
                )}
                
                {/* Row 4: Social Proof (if available) */}
                {!option.isSoldOut && option.quantityRemaining && option.quantityRemaining < 100 && (
                  <div className="mt-2 text-xs text-gray-500 font-medium">
                    Only {option.quantityRemaining} left!
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

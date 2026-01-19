import React from 'react';
import { CleanOption } from '../types/deal';

interface OptionSelectorProps {
  options: CleanOption[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export const OptionSelector: React.FC<OptionSelectorProps> = ({ options, selectedId, onSelect }) => {
  return (
    <div className="flex flex-col gap-3">
      {options.map(option => {
        const isSelected = option.id === selectedId;
        return (
          <div 
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={`
              bg-white rounded-[8px] p-4 cursor-pointer transition-all
              ${isSelected ? 'border-[#2D2D2D] border-[2px]' : 'border-[#E0E0E0] border'}
            `}
          >
            <div className="flex items-start gap-3">
              {/* Radio Button */}
              <div className={`
                h-5 w-5 rounded-full flex-shrink-0 mt-0.5 transition-all
                ${isSelected 
                  ? 'border-[6px] border-blue-600 bg-white' 
                  : 'border border-gray-400 bg-white'}
              `} />
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="font-bold text-[14px] text-[#2D2D2D] mb-2">{option.title}</h3>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-[22px] leading-[24px] font-extrabold text-[#53A318]">
                    {option.priceFormatted}
                  </span>
                  {option.valueInCents > option.priceInCents && (
                    <>
                      <span className="text-[14px] line-through text-[#BDBDBD]">
                        {option.valueFormatted}
                      </span>
                      <span className="bg-[#53A318] rounded-[4px] px-1.5 py-0.5 text-xs font-bold text-white">
                        {option.discountPercent}% OFF
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

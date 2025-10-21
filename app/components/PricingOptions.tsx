'use client';

import React, { useState } from 'react';
import { Gift, Info } from 'lucide-react';
import { DealOption } from '../data/mockDeal';

interface PricingOptionsProps {
  options: DealOption[];
}

export default function PricingOptions({ options }: PricingOptionsProps) {
  const [selectedOption, setSelectedOption] = useState(options[0].id);
  const [quantities, setQuantities] = useState<Record<string, number>>(
    options.reduce((acc, opt) => ({ ...acc, [opt.id]: 1 }), {})
  );

  const selectedOptionData = options.find(opt => opt.id === selectedOption);

  return (
    <div className="bg-white mt-2">
      {/* Gift Option and Select Option Header */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-[17px] font-bold">Select Option:</h2>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="gift" className="w-[18px] h-[18px] border-2 border-gray-400 rounded" />
            <label htmlFor="gift" className="text-[13px] font-medium">Buy as a gift</label>
            <button className="p-0.5">
              <Info className="w-[17px] h-[17px] text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Options List */}
      <div className="border-t">
        {options.map((option) => (
          <div
            key={option.id}
            className={`p-4 cursor-pointer transition-colors border-b last:border-b-0 ${
              selectedOption === option.id ? 'bg-blue-50 border-l-4 border-l-blue-500 -ml-px' : ''
            }`}
            onClick={() => setSelectedOption(option.id)}
          >
            <div className="flex items-start gap-3">
              {/* Radio Button */}
              <div className="mt-0.5">
                <div className={`w-[20px] h-[20px] rounded-full border-2 flex items-center justify-center ${
                  selectedOption === option.id ? 'border-blue-500' : 'border-gray-400'
                }`}>
                  {selectedOption === option.id && (
                    <div className="w-[11px] h-[11px] rounded-full bg-blue-500" />
                  )}
                </div>
              </div>

              {/* Option Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-[15px] leading-tight pr-2">{option.title}</h3>
                  <Gift className="w-[20px] h-[20px] text-gray-400 flex-shrink-0" />
                </div>

                {/* Pricing */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-gray-500 line-through text-[15px]">${option.originalPrice}</span>
                  <span className="text-groupon-green font-bold text-[24px]">${option.discountedPrice}</span>
                  <span className="text-groupon-green font-semibold text-[15px]">{option.discountPercent}%</span>
                </div>

                {/* Promo Price */}
                {selectedOption === option.id && (
                  <div className="border-2 border-dashed border-purple-300 rounded-md p-2.5 bg-white mb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-purple-600 font-bold text-[18px]">${option.promoPrice}</span>
                        <span className="text-[12px]">with code <span className="font-bold">{option.promoCode}</span></span>
                      </div>
                      <button className="text-purple-600 font-bold text-[13px] underline">Apply</button>
                    </div>
                  </div>
                )}

                {/* Klarna Payment Option */}
                {option.klarnaPayments && selectedOption === option.id && (
                  <div className="bg-pink-50 border border-pink-200 rounded-md p-2.5 mb-3">
                    <div className="text-[12px]">
                      <span className="font-semibold">4 interest-free payments of ${option.klarnaPayments.amount}</span>
                      {' '}with{' '}
                      <span className="font-bold">Klarna</span>
                      <a href="#" className="ml-1 underline">Learn more</a>
                    </div>
                  </div>
                )}

                {/* Quantity Selector */}
                {selectedOption === option.id && (
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <button
                      className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center text-lg font-medium text-gray-600 hover:bg-gray-50"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (quantities[option.id] > 1) {
                          setQuantities({ ...quantities, [option.id]: quantities[option.id] - 1 });
                        }
                      }}
                    >
                      −
                    </button>
                    
                    <div className="relative">
                      <select
                        value={quantities[option.id]}
                        onChange={(e) => {
                          e.stopPropagation();
                          setQuantities({ ...quantities, [option.id]: parseInt(e.target.value) });
                        }}
                        className="w-16 h-9 border-2 border-gray-300 rounded-md px-2 appearance-none text-center font-medium text-[15px] bg-white"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                      <svg className="w-3 h-3 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    
                    <button
                      className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center text-lg font-medium text-gray-600 hover:bg-gray-50"
                      onClick={(e) => {
                        e.stopPropagation();
                        setQuantities({ ...quantities, [option.id]: quantities[option.id] + 1 });
                      }}
                    >
                      +
                    </button>
                  </div>
                )}

                {/* Sold Count */}
                <p className="text-[13px] text-gray-600">{option.soldCount} bought</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Buy Now Button */}
      <div className="p-4 border-t">
        <button className="w-full bg-groupon-green hover:bg-groupon-green-dark text-white font-bold py-3.5 rounded-lg text-[16px] transition-colors shadow-sm">
          Buy now
        </button>
      </div>
    </div>
  );
}


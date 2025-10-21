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
            className={`p-4 cursor-pointer transition-all border-b last:border-b-0 ${
              selectedOption === option.id ? 'bg-blue-50 border-2 border-blue-500 rounded-lg mx-3 my-2' : ''
            }`}
            onClick={() => setSelectedOption(option.id)}
          >
            <div className="flex items-start gap-3">
              {/* Radio Button */}
              <div className="mt-1">
                <div className={`w-5 h-5 rounded-full border-[2px] flex items-center justify-center ${
                  selectedOption === option.id ? 'border-blue-500' : 'border-gray-400'
                }`}>
                  {selectedOption === option.id && (
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  )}
                </div>
              </div>

              {/* Option Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2.5">
                  <h3 className="font-semibold text-[15px] leading-[1.3] pr-2">{option.title}</h3>
                  <Gift className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </div>

                {/* Pricing */}
                <div className="flex items-baseline gap-2 mb-2.5">
                  <span className="text-gray-400 line-through text-[15px]">${option.originalPrice}</span>
                  <span className="text-groupon-green font-bold text-[26px] leading-none">${option.discountedPrice}</span>
                  <span className="text-groupon-green font-semibold text-[14px]">{option.discountPercent}%</span>
                </div>

                {/* Promo Price */}
                {selectedOption === option.id && (
                  <div className="border-2 border-dashed border-purple-400 rounded-md p-2 bg-white mb-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-baseline gap-1 flex-wrap">
                        <span className="text-purple-600 font-bold text-[16px]">${option.promoPrice}</span>
                        <span className="text-[11px] text-gray-800">with code <span className="font-bold text-black">{option.promoCode}</span></span>
                      </div>
                      <button className="text-purple-600 font-bold text-[13px] underline whitespace-nowrap">Apply</button>
                    </div>
                  </div>
                )}

                {/* Klarna Payment Option */}
                {option.klarnaPayments && selectedOption === option.id && (
                  <div className="bg-pink-50 border border-pink-200 rounded-md p-2 mb-2.5">
                    <div className="text-[11px] text-gray-800">
                      <span className="font-semibold">4 interest-free payments of ${option.klarnaPayments.amount}</span>
                      {' '}with{' '}
                      <span className="font-bold">Klarna</span>
                      <a href="#" className="ml-1 underline text-gray-700">Learn more</a>
                    </div>
                  </div>
                )}

                {/* Quantity Selector */}
                {selectedOption === option.id && (
                  <div className="flex items-center gap-2.5 mb-2">
                    <button
                      className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-xl font-light text-gray-700 hover:bg-gray-50 active:bg-gray-100"
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
                        className="w-[70px] h-10 border border-gray-300 rounded-md px-2 pr-7 appearance-none text-center font-normal text-[15px] bg-white text-gray-900"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                      <svg className="w-3.5 h-3.5 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    
                    <button
                      className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-xl font-light text-gray-700 hover:bg-gray-50 active:bg-gray-100"
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
        <button className="w-full bg-groupon-green hover:bg-groupon-green-dark text-white font-bold py-3.5 rounded-full text-[16px] transition-colors shadow-sm">
          Buy now
        </button>
      </div>
    </div>
  );
}


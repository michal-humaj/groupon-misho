import React from 'react';
import { SlotId, usePrototypeContext } from '../context/PrototypeContext';
import { MobileHeader } from './MobileHeader';
import { DealCard } from './DealCard';

interface SlotProps {
  id: SlotId;
}

export const Slot: React.FC<SlotProps> = ({ id }) => {
  const { state } = usePrototypeContext();
  
  // Determine which deal to show
  const dealId = state.viewMode === 'gallery' 
    ? state.gallerySlots[id] 
    : state.activeDealId;
  
  const deal = state.deals.find(d => d.id === dealId);
  const flags = state.slotFeatureFlags[id];
  const selectedOptionId = state.slotSelectedOptions[id] || deal?.defaultOptionId || null;
  
  // Empty slot
  if (!deal) {
    return (
      <div 
        className="relative flex flex-col bg-[#F6F7F9] border-2 border-[#E0E0E0] rounded-xl shadow-lg overflow-hidden"
        style={{
          width: '393px',
          height: '852px',
        }}
      >
        <MobileHeader />
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="text-center text-[#757575]">
            <p className="text-[16px] font-bold mb-2">No Deal Selected</p>
            <p className="text-[14px]">Select a deal from the control panel above</p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div 
      className="relative flex flex-col bg-[#F6F7F9] border-2 border-[#E0E0E0] rounded-xl shadow-lg overflow-hidden"
      style={{
        width: '393px',
        height: '852px',
      }}
    >
      {/* Mobile Header (Fixed at top) */}
      <div className="flex-none">
        <MobileHeader />
      </div>
      
      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto pb-[140px]">
        <DealCard 
          deal={deal} 
          selectedOptionId={selectedOptionId}
          featureFlags={flags}
          slotId={id}
        />
      </div>
    </div>
  );
};

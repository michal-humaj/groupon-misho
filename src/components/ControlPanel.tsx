import React from 'react';
import { usePrototypeContext, SlotId } from '../context/PrototypeContext';

export const ControlPanel: React.FC = () => {
  const { state, actions } = usePrototypeContext();
  
  return (
    <div className="bg-white border-b border-gray-200 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Mode Toggle */}
        <div className="flex items-center gap-4 mb-4">
          <label className="text-sm font-bold text-[#2D2D2D]">Mode:</label>
          <select 
            value={state.viewMode}
            onChange={(e) => actions.setViewMode(e.target.value as 'gallery' | 'prototype')}
            className="border border-[#CCCCCC] rounded px-3 py-2 text-sm"
          >
            <option value="gallery">AS-IS Deal Page</option>
            <option value="prototype">Prototype (1 Deal, 4 Variants)</option>
          </select>
        </div>
        
        {/* Gallery Mode: 4 Deal Dropdowns */}
        {state.viewMode === 'gallery' && (
          <div className="grid grid-cols-4 gap-4">
            {(['slot1', 'slot2', 'slot3', 'slot4'] as SlotId[]).map(slot => (
              <div key={slot}>
                <label className="text-xs font-bold text-[#2D2D2D] mb-1 block">
                  Slot {slot.slice(-1)}
                </label>
                <select 
                  value={state.gallerySlots[slot] || ''}
                  onChange={(e) => actions.setGallerySlot(slot, e.target.value || null)}
                  className="w-full border border-[#CCCCCC] rounded px-2 py-1.5 text-xs"
                >
                  <option value="">-- None --</option>
                  {state.deals.map(deal => (
                    <option key={deal.id} value={deal.id}>
                      {deal.shortTitle.substring(0, 30)}...
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        )}
        
        {/* Prototype Mode: 1 Deal Selector (no features yet) */}
        {state.viewMode === 'prototype' && (
          <div className="space-y-4">
            {/* Deal Selector */}
            <div>
              <label className="text-sm font-bold text-[#2D2D2D] mr-2">Active Deal:</label>
              <select 
                value={state.activeDealId || ''}
                onChange={(e) => actions.setActiveDeal(e.target.value || null)}
                className="border border-[#CCCCCC] rounded px-3 py-2 text-sm"
              >
                <option value="">-- None --</option>
                {state.deals.map(deal => (
                  <option key={deal.id} value={deal.id}>
                    {deal.shortTitle}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Placeholder for future features */}
            <div className="text-sm text-gray-500 italic">
              Feature controls will be added here...
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

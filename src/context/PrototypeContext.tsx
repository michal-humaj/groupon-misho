import { createContext, useContext, useState, ReactNode } from 'react';
import { CleanDeal } from '../types/deal';
import { deals } from '../data/deals';

export type SlotId = 'slot1' | 'slot2' | 'slot3' | 'slot4';

interface PrototypeState {
  viewMode: 'gallery' | 'prototype';
  
  // Available deals
  deals: CleanDeal[];
  
  // Gallery Mode: Each slot shows a different deal
  gallerySlots: Record<SlotId, string | null>;
  
  // Prototype Mode: All slots show the same deal
  activeDealId: string | null;
  
  // Currently selected option per slot (for price updates)
  slotSelectedOptions: Record<SlotId, string | null>;
}

interface PrototypeActions {
  setViewMode: (mode: 'gallery' | 'prototype') => void;
  setGallerySlot: (slot: SlotId, dealId: string | null) => void;
  setActiveDeal: (dealId: string | null) => void;
  selectOption: (slot: SlotId, optionId: string) => void;
}

interface PrototypeContextType {
  state: PrototypeState;
  actions: PrototypeActions;
}

const PrototypeContext = createContext<PrototypeContextType | undefined>(undefined);

export const PrototypeProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<PrototypeState>({
    viewMode: 'gallery',
    deals: deals,
    gallerySlots: {
      slot1: deals[0]?.id || null,
      slot2: deals[1]?.id || null,
      slot3: deals[2]?.id || null,
      slot4: deals[3]?.id || null,
    },
    activeDealId: deals[0]?.id || null,
    slotSelectedOptions: {
      slot1: null,
      slot2: null,
      slot3: null,
      slot4: null,
    },
  });

  const actions: PrototypeActions = {
    setViewMode: (mode) => {
      setState(prev => ({ ...prev, viewMode: mode }));
    },
    
    setGallerySlot: (slot, dealId) => {
      setState(prev => ({
        ...prev,
        gallerySlots: {
          ...prev.gallerySlots,
          [slot]: dealId,
        },
      }));
    },
    
    setActiveDeal: (dealId) => {
      setState(prev => ({ ...prev, activeDealId: dealId }));
    },
    
    selectOption: (slot, optionId) => {
      setState(prev => ({
        ...prev,
        slotSelectedOptions: {
          ...prev.slotSelectedOptions,
          [slot]: optionId,
        },
      }));
    },
  };

  return (
    <PrototypeContext.Provider value={{ state, actions }}>
      {children}
    </PrototypeContext.Provider>
  );
};

export const usePrototypeContext = (): PrototypeContextType => {
  const context = useContext(PrototypeContext);
  if (!context) {
    throw new Error('usePrototypeContext must be used within PrototypeProvider');
  }
  return context;
};

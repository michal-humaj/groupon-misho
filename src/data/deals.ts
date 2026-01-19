import { cleanDealData } from '../utils/transformDeals';
import { CleanDeal } from '../types/deal';

// Import all deal JSON files
import bowlmorDeal from '../../deals/bowlmor-lanes-nat-bowlero-corp-2024-fall-b.json';
import georgiaDeal from '../../deals/gl-georgia-aquarium-1.json';
import seaworldDeal from '../../deals/gl-seaworld-orlando-54.json';
import universalDeal from '../../deals/gl-universal-studios-hollywood-1-14.json';
import kingSpaDeal from '../../deals/king-spa-and-sauna-chicago-35.json';
import regalDeal from '../../deals/regal-cinemas-premiere-ticket-2023.json';
import weightcareDeal from '../../deals/weightcare.json';

// Transform and export all deals
export const deals: CleanDeal[] = [
  cleanDealData(georgiaDeal),
  cleanDealData(seaworldDeal),
  cleanDealData(universalDeal),
  cleanDealData(kingSpaDeal),
  cleanDealData(regalDeal),
  cleanDealData(weightcareDeal),
  cleanDealData(bowlmorDeal),
];

// Helper to get deal by ID
export function getDealById(id: string): CleanDeal | undefined {
  return deals.find(deal => deal.id === id);
}

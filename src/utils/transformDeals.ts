import { CleanDeal, CleanOption, CleanLocation } from '../types/deal';

// Helper to strip HTML tags
function stripHtml(html: string): string {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '').trim();
}

// Calculate discount if missing (for ticket deals)
function calculateDiscount(option: any): number {
  if (option.discountPercent) return option.discountPercent;
  if (option.value?.amount && option.price?.amount) {
    return Math.round(
      ((option.value.amount - option.price.amount) / option.value.amount) * 100
    );
  }
  return 0;
}

// Build carousel from available image URLs
function buildCarousel(deal: any): string[] {
  const urls = [
    deal.largeImageUrl,
    deal.grid6ImageUrl,
    deal.sidebarImageUrl
  ].filter(Boolean);
  return [...new Set(urls)]; // Remove duplicates
}

export function cleanDealData(raw: any): CleanDeal {
  const deal = raw.deal;
  
  return {
    id: deal.id,
    title: deal.title,
    shortTitle: deal.shortAnnouncementTitle || deal.title,
    merchant: {
      name: deal.merchant?.name || 'Unknown Merchant',
      websiteUrl: deal.merchant?.websiteUrl,
    },
    images: {
      hero: deal.largeImageUrl || deal.grid6ImageUrl || '',
      thumbnail: deal.mediumImageUrl || deal.smallImageUrl || '',
      carousel: buildCarousel(deal),
    },
    options: (deal.options || []).map((opt: any): CleanOption => ({
      id: opt.id || opt.uuid,
      title: opt.title,
      priceInCents: opt.price?.amount || 0,
      valueInCents: opt.value?.amount || opt.price?.amount || 0,
      discountInCents: opt.discount?.amount || 0,
      discountPercent: calculateDiscount(opt),
      priceFormatted: opt.price?.formattedAmount || '$0.00',
      valueFormatted: opt.value?.formattedAmount || opt.price?.formattedAmount || '$0.00',
      discountFormatted: opt.discount?.formattedAmount || '$0.00',
      salePrice: opt.regularPrice ? {
        priceInCents: opt.regularPrice.amount,
        priceFormatted: opt.regularPrice.formattedAmount,
        saleLabel: opt.pricingMetadata?.offerLabel,
      } : undefined,
      isSoldOut: opt.isSoldOut || false,
      quantityRemaining: opt.limitedQuantityRemaining,
    })),
    defaultOptionId: deal.options?.[0]?.id || deal.options?.[0]?.uuid || '',
    highlights: stripHtml(deal.highlightsHtml || ''),
    description: stripHtml(deal.pitchHtml || ''),
    finePrint: stripHtml(deal.finePrint || ''),
    soldQuantity: deal.soldQuantity || 0,
    soldQuantityMessage: deal.soldQuantityMessage || '0',
    locations: ((deal.options?.[0]?.redemptionLocations || []) as any[]).map((loc: any): CleanLocation => ({
      name: loc.name,
      address: `${loc.streetAddress1}${loc.streetAddress2 ? ', ' + loc.streetAddress2 : ''}, ${loc.city}, ${loc.state} ${loc.postalCode}`,
      city: loc.city,
      state: loc.state,
      lat: loc.lat,
      lng: loc.lng,
    })),
    dealUrl: deal.dealUrl || '',
    category: deal.tags?.[0]?.name || 'Deal',
  };
}

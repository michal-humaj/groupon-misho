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

// Extract or build breadcrumb navigation
function buildBreadcrumbs(deal: any): string[] {
  // Try to extract from taxonomy array if available
  if (deal.taxonomy && Array.isArray(deal.taxonomy) && deal.taxonomy.length > 0) {
    return deal.taxonomy.map((t: any) => t.name).slice(0, 4);
  }
  
  // Fallback: Build synthetic breadcrumbs based on deal type
  const breadcrumbs: string[] = [];
  const city = deal.options?.[0]?.redemptionLocations?.[0]?.city || '';
  const category = deal.tags?.[0]?.name || '';
  const merchantCategory = deal.merchant?.category || '';
  
  // Determine if it's a ticket/attraction deal or local deal
  const isTicketDeal = deal.title?.toLowerCase().includes('ticket') || 
                       deal.title?.toLowerCase().includes('admission') ||
                       category?.toLowerCase().includes('park') ||
                       category?.toLowerCase().includes('attraction');
  
  if (isTicketDeal) {
    breadcrumbs.push('Things To Do');
    if (city) breadcrumbs.push(city);
    if (category && category !== 'Things To Do') breadcrumbs.push(category);
  } else {
    breadcrumbs.push('Local');
    if (city) breadcrumbs.push(city);
    if (merchantCategory) {
      breadcrumbs.push(merchantCategory);
    } else if (category && category !== 'Local') {
      breadcrumbs.push(category);
    }
  }
  
  // Limit to 3-4 items max
  return breadcrumbs.slice(0, 4);
}

export function cleanDealData(raw: any): CleanDeal {
  const deal = raw.deal;
  
  // Transform options first to calculate priceType
  const options = (deal.options || []).map((opt: any): CleanOption => ({
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
  }));
  
  // Determine urgency and priceType based on discount of first option
  const maxDiscount = options[0]?.discountPercent || 0;
  const isUrgent = maxDiscount > 45;
  const priceType = isUrgent ? 'urgency' : 'standard';
  const urgencyText = isUrgent ? 'Ends in: 16:59:09' : undefined;
  
  // Check if hero image is a video
  const heroUrl = deal.largeImageUrl || deal.grid6ImageUrl || '';
  const hasVideo = heroUrl.includes('.mp4') || heroUrl.includes('.webm');
  
  return {
    id: deal.id,
    title: deal.title,
    shortTitle: deal.shortAnnouncementTitle || deal.title,
    merchant: {
      name: deal.merchant?.name || 'Unknown Merchant',
      websiteUrl: deal.merchant?.websiteUrl,
    },
    images: {
      hero: heroUrl,
      thumbnail: deal.mediumImageUrl || deal.smallImageUrl || '',
      carousel: buildCarousel(deal),
    },
    hasVideo,
    isVertical: false, // Can be updated based on metadata if available
    options,
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
    breadcrumbs: buildBreadcrumbs(deal),
    priceType,
    isUrgent,
    urgencyText,
  };
}

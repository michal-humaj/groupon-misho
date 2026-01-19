export interface CleanDeal {
  id: string;
  title: string;
  shortTitle: string;
  merchant: {
    name: string;
    websiteUrl?: string;
  };
  
  // Images
  images: {
    hero: string;           // largeImageUrl
    thumbnail: string;      // mediumImageUrl
    carousel: string[];     // Array of available images
  };
  
  // Options (user selectable)
  options: CleanOption[];
  defaultOptionId: string;  // First option by default
  
  // Content
  highlights: string;       // highlightsHtml (sanitized)
  description: string;      // pitchHtml (sanitized)
  finePrint: string;        // finePrint (sanitized)
  
  // Social proof
  soldQuantity: number;
  soldQuantityMessage: string;  // "10,000+"
  
  // Location
  locations: CleanLocation[];
  
  // Deal metadata
  dealUrl: string;
  category: string;         // Derived from tags
}

export interface CleanOption {
  id: string;
  title: string;
  
  // Pricing (all in cents)
  priceInCents: number;
  valueInCents: number;     // Original price
  discountInCents: number;
  discountPercent: number;
  
  // Formatted for display
  priceFormatted: string;   // "$63.45"
  valueFormatted: string;   // "$70.77"
  discountFormatted: string;// "$7.32"
  
  // Sale info (optional)
  salePrice?: {
    priceInCents: number;
    priceFormatted: string;
    saleLabel?: string;     // "Extra $5 Off Ends 1/20"
  };
  
  // Inventory
  isSoldOut: boolean;
  quantityRemaining?: number;
}

export interface CleanLocation {
  name: string;
  address: string;          // Formatted full address
  city: string;
  state: string;
  lat: number;
  lng: number;
}

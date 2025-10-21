export interface DealOption {
  id: string;
  title: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercent: number;
  promoPrice: number;
  promoCode: string;
  soldCount: string;
  klarnaPayments?: {
    amount: number;
    installments: number;
  };
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  reviewCount?: number;
  ratingCount?: number;
}

export interface Deal {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  rating: number;
  reviewCount: number;
  images: string[];
  promoEndTime: string;
  promoCode: string;
  promoDiscount: number;
  options: DealOption[];
  amenities: string[];
  description: string;
  highlights: string[];
  generalInfo: {
    title: string;
    items: string[];
  };
  scheduling: {
    title: string;
    items: string[];
  };
  reviews: Review[];
  customerPhotos: string[];
  redemptionLocation: {
    name: string;
    address: string;
    distance: string;
  };
  afterPurchaseInfo: string;
  bestRated: boolean;
}

export const mockDeal: Deal = {
  id: "1",
  title: "90-Minute Chicago Architecture Boat Tour & Cruise - Multiple Options (Up to 42% Off)",
  subtitle: "Tours and Boats - Architecture Tour - Chicago",
  location: "900 South Wells Street, Chicago",
  rating: 4.8,
  reviewCount: 9698,
  images: [
    "/images/deal-1.jpg",
    "/images/deal-2.jpg",
    "/images/deal-3.jpg",
    "/images/deal-4.jpg",
  ],
  promoEndTime: "1 day 23:51:06",
  promoCode: "HALLOWEEN",
  promoDiscount: 5.51,
  bestRated: true,
  options: [
    {
      id: "opt-1",
      title: "90-Minute Chicago Architecture Boat Tour for One",
      originalPrice: 49,
      discountedPrice: 29,
      discountPercent: 41,
      promoPrice: 23.49,
      promoCode: "HALLOWEEN",
      soldCount: "1,000+",
    },
    {
      id: "opt-2",
      title: "90-Minute Chicago Architecture Boat Tour for Two",
      originalPrice: 98,
      discountedPrice: 58,
      discountPercent: 41,
      promoPrice: 46.98,
      promoCode: "HALLOWEEN",
      soldCount: "1,000+",
    },
    {
      id: "opt-3",
      title: "90-Minute Chicago Architecture Boat Tour for Three",
      originalPrice: 147,
      discountedPrice: 87,
      discountPercent: 41,
      promoPrice: 70.47,
      promoCode: "HALLOWEEN",
      soldCount: "1,000+",
      klarnaPayments: {
        amount: 29,
        installments: 4,
      },
    },
    {
      id: "opt-4",
      title: "90-Minute Chicago Architecture Boat Tour for Four",
      originalPrice: 196,
      discountedPrice: 116,
      discountPercent: 41,
      promoPrice: 93.96,
      promoCode: "HALLOWEEN",
      soldCount: "1,000+",
      klarnaPayments: {
        amount: 29,
        installments: 4,
      },
    },
    {
      id: "opt-5",
      title: "90-Minute Chicago Architecture Boat Tour for Five",
      originalPrice: 245,
      discountedPrice: 145,
      discountPercent: 41,
      promoPrice: 117.45,
      promoCode: "HALLOWEEN",
      soldCount: "1,000+",
      klarnaPayments: {
        amount: 36.25,
        installments: 4,
      },
    },
    {
      id: "opt-6",
      title: "90-Minute Chicago Architecture Boat Tour for Six (Six-Pack Saver)",
      originalPrice: 294,
      discountedPrice: 170,
      discountPercent: 42,
      promoPrice: 137.70,
      promoCode: "HALLOWEEN",
      soldCount: "1,000+",
      klarnaPayments: {
        amount: 42.5,
        installments: 4,
      },
    },
  ],
  amenities: ["Good for Groups"],
  description: "Picturesque Chicago river cruise is paired with architecture and history lessons about the city's most popular landmarks - Don't miss this \"best rated\" tour!",
  highlights: [
    "Discover the story of Chicago and learn about its architectural wonders.",
    "In-depth commentary from the tour guide provides insights on different artistic styles throughout the decades.",
    "Get a glimpse at the buildings from the ship's open-air upper deck or its enclosed, air-conditioned main deck.",
    "The ship's 360° viewing capabilities allows you to admire incredible city panoramas from all sides",
    "Take wonderful skyline photos from your unique onboard position.",
  ],
  generalInfo: {
    title: "General Information",
    items: [
      "What's included: a leisurely architecture boat tour of downtown Chicago",
      "Departure times: Click here to see the schedule and availability as well as information on parking and directions.",
      "Alcoholic and nonalcoholic beverages and snacks are available for purchase onboard.",
      "Kids under 3 and younger can boat free, but must be included in your online reservation on the merchant website.",
      "Parking: located right next to the marina.",
      "Vessel: full-service bathrooms, bars, and staff assist with passenger's needs",
    ],
  },
  scheduling: {
    title: "How to Schedule Your Tour",
    items: [
      "With this flexible voucher, you can secure a great deal now and book your tour at your convenience",
      "After purchase, you'll receive a link with instructions to schedule your tour",
      "Check the current schedule here before purchasing if you have specific dates in mind",
      "All sales are final due to the special discounted pricing and open schedule flexibility. You're free to book any available date or time during the full boat season — even holidays — with no hassles or blackout restrictions. Please Note: dates and times do fill up quickly, especially on weekends and peak days, so don't delay booking once you make your purchase.",
    ],
  },
  reviews: [
    {
      id: "rev-1",
      author: "Sue",
      rating: 5,
      date: "2 hours ago",
      text: "Our tour guide was the best. Comedy + History",
      ratingCount: 2,
      reviewCount: 1,
    },
    {
      id: "rev-2",
      author: "Scott",
      rating: 5,
      date: "3 hours ago",
      text: "This was a very informative and beautiful boat tour. The architecture of Chicago is amazing. The skyline is",
      ratingCount: 2,
      reviewCount: 2,
    },
    {
      id: "rev-3",
      author: "Wendelin",
      rating: 5,
      date: "1 day ago",
      text: "It was an awesome fun funny educational beautiful tour. Must do it!",
      ratingCount: 1,
      reviewCount: 1,
    },
  ],
  customerPhotos: [
    "/images/photo-1.jpg",
    "/images/photo-2.jpg",
    "/images/photo-3.jpg",
    "/images/photo-4.jpg",
  ],
  redemptionLocation: {
    name: "River City Marina",
    address: "900 South Wells Street, Chicago",
    distance: "0.8 mi",
  },
  afterPurchaseInfo: "After purchasing this deal, you will need to visit the website listed on your voucher to complete redemption. For help on locating your redemption instructions or additional info, please contact Groupon or Tours and Boats at (312) 858-6955.",
};


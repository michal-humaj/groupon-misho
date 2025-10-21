# Groupon Clone - Deal Page

A pixel-perfect recreation of Groupon's mobile web deal page built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 📱 Mobile-responsive deal page
- 🎨 Pixel-perfect UI matching Groupon's design
- ⚡ Built with Next.js 14 and TypeScript
- 🎯 Mock data for demonstration
- 🔄 Interactive pricing options with promo codes
- ⭐ Reviews and ratings section
- 📍 Location map integration
- 🖼️ Customer photos gallery
- 💚 Sticky promo bar and CTA button

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
groupon-misho/
├── app/
│   ├── components/          # React components
│   │   ├── PromoBar.tsx
│   │   ├── Header.tsx
│   │   ├── DealImageCarousel.tsx
│   │   ├── DealInfo.tsx
│   │   ├── PricingOptions.tsx
│   │   ├── Reviews.tsx
│   │   ├── DealDetails.tsx
│   │   ├── LocationMap.tsx
│   │   ├── CustomerPhotos.tsx
│   │   ├── Footer.tsx
│   │   └── StickyBottomBar.tsx
│   ├── data/
│   │   └── mockDeal.ts      # Mock deal data
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Features Implemented

### Components

1. **PromoBar** - Sticky promotional banner with countdown timer
2. **Header** - Navigation with search, menu, and user icons
3. **DealImageCarousel** - Hero image section with badges
4. **DealInfo** - Deal title, location, rating, and promo information
5. **PricingOptions** - Interactive pricing tiers with radio buttons and quantity selectors
6. **Reviews** - Customer reviews with ratings and verified badge
7. **DealDetails** - Amenities, description, highlights, and scheduling info
8. **LocationMap** - Redemption location with map placeholder
9. **CustomerPhotos** - Gallery of customer-submitted photos
10. **Footer** - Complete footer with categories, deals, and links
11. **StickyBottomBar** - Fixed bottom CTA that appears on scroll

### Design Elements

- Groupon green (#53a318) primary color
- Purple accents for promos
- Star ratings with orange color
- Rounded buttons and cards
- Proper spacing and typography
- Border styles matching Groupon

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Mock Data

The application uses mock data defined in `app/data/mockDeal.ts`. This includes:

- Deal information (title, pricing, location)
- Multiple pricing options (1-6 people)
- Customer reviews
- Amenities and highlights
- Location details

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a demonstration project for educational purposes.


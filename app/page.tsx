import React from 'react';
import PromoBar from './components/PromoBar';
import Header from './components/Header';
import DealImageCarousel from './components/DealImageCarousel';
import DealInfo from './components/DealInfo';
import PricingOptions from './components/PricingOptions';
import Reviews from './components/Reviews';
import DealDetails from './components/DealDetails';
import LocationMap from './components/LocationMap';
import CustomerPhotos from './components/CustomerPhotos';
import Footer from './components/Footer';
import StickyBottomBar from './components/StickyBottomBar';
import { mockDeal } from './data/mockDeal';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <PromoBar />
      <Header />
      
      <div className="pb-20">
        <DealImageCarousel />
        
        <DealInfo
          title={mockDeal.title}
          subtitle={mockDeal.subtitle}
          location={mockDeal.location}
          rating={mockDeal.rating}
          reviewCount={mockDeal.reviewCount}
          promoEndTime={mockDeal.promoEndTime}
          promoCode={mockDeal.promoCode}
          promoDiscount={mockDeal.promoDiscount}
        />
        
        <PricingOptions options={mockDeal.options} />
        
        <DealDetails
          amenities={mockDeal.amenities}
          description={mockDeal.description}
          highlights={mockDeal.highlights}
          generalInfo={mockDeal.generalInfo}
          scheduling={mockDeal.scheduling}
          afterPurchaseInfo={mockDeal.afterPurchaseInfo}
        />
        
        <LocationMap redemptionLocation={mockDeal.redemptionLocation} />
        
        <CustomerPhotos photos={mockDeal.customerPhotos} />
        
        <Reviews
          reviews={mockDeal.reviews}
          rating={mockDeal.rating}
          reviewCount={mockDeal.reviewCount}
        />
        
        <Footer />
      </div>
      
      <StickyBottomBar />
    </main>
  );
}


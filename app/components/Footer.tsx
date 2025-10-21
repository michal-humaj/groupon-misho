'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white mt-2 border-t">
      {/* Explore Categories */}
      <div className="px-4 py-4 border-b">
        <h3 className="font-bold mb-3">Explore more</h3>
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-full text-sm">
            Nearby <ChevronRight />
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-full text-sm">
            Things To Do <ChevronRight />
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-full text-sm">
            Flight Tours <ChevronRight />
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-full text-sm">
            Food Tours <ChevronRight />
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-full text-sm">
            Bus Tours & Rentals <ChevronRight />
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-full text-sm">
            Bike & Segway Rentals & Tours <ChevronRight />
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-full text-sm">
            Wine Tours <ChevronRight />
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-full text-sm">
            Holiday and Seasonal Tours <ChevronRight />
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-full text-sm">
            Museums & Galleries <ChevronRight />
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-full text-sm">
            Hot Air Balloon Rides <ChevronRight />
          </button>
        </div>
      </div>

      {/* Similar Deals */}
      <div className="px-4 py-6 border-b">
        <h3 className="font-bold text-lg mb-4">Similar deals</h3>
        <div className="space-y-4">
          <DealCard
            title="Boat Tours at Wendella Tours & Cruises"
            address="400 N Michigan Ave, Chicago"
            distance="0.7 mi"
            rating={4.8}
            reviewCount={5217}
            price={28}
          />
          <DealCard
            title="Shoreline Boat Tour"
            address="401 N. Michigan"
            distance="0.8 mi"
            rating={4.6}
            reviewCount={3421}
            price={32.50}
          />
        </div>
      </div>

      {/* Recommended Deals */}
      <div className="px-4 py-6 border-b">
        <h3 className="font-bold text-lg mb-4">Recommended deals</h3>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
          <RecommendedDealCard
            title="General Admission to 360 Chicago Observation Deck"
            address="875 North Michigan Avenue, Chicago"
            distance="1.3 mi"
            rating={4.6}
            reviewCount={6930}
            price={30}
            badge="Book Online"
          />
          <RecommendedDealCard
            title="City Cruise"
            address="600 East Grand"
            distance="0.9 mi"
            rating={4.5}
            reviewCount={2134}
            price={30.94}
            badge="Popular"
          />
        </div>
      </div>

      {/* Trending Section */}
      <div className="px-4 py-6 bg-gray-50">
        <h3 className="font-bold text-lg mb-2">Trending in Groupon</h3>
        <p className="text-sm text-gray-600 mb-4">
          Groupon is your place for savings and discovery while exploring fun activities in your city and around the country.
        </p>
        <button className="w-full py-3 border border-gray-300 rounded-lg font-medium flex items-center justify-center gap-2">
          Explore categories
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* App Download */}
      <div className="px-4 py-6 bg-white border-b">
        <div className="flex gap-4">
          <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-groupon-green mb-1">Get the Groupon App</h3>
            <p className="text-sm text-gray-700 mb-3">
              Unlock up to <strong>90% discounts on the go</strong> with the Groupon app!
            </p>
            <p className="text-xs text-gray-600 mb-3">
              Exclusive deals, push notifications, and digital vouchers at your fingertips.
            </p>
            <button className="w-full bg-groupon-green text-white font-semibold py-3 rounded-lg">
              Get the App
            </button>
            <div className="flex items-center gap-1 mt-2 justify-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-3 h-3 fill-orange-400 text-orange-400" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-gray-600 ml-1">100M+ downloads</span>
            </div>
          </div>
        </div>
      </div>

      {/* Country Selector */}
      <div className="px-4 py-4 border-b">
        <h3 className="font-bold mb-3">Groupon Sites</h3>
        <button className="w-full flex items-center justify-between py-3 px-4 border border-gray-300 rounded-lg">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">USA</span>
          </div>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Email Signup */}
      <div className="px-4 py-6 bg-white border-b">
        <h3 className="font-bold mb-3">Sign up for the latest deals</h3>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-groupon-green"
          />
          <button className="bg-groupon-green text-white p-3 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
        <p className="text-xs text-gray-600 mt-3">
          By subscribing, I agree to the <a href="#" className="underline">Terms of Use</a> and have read the{' '}
          <a href="#" className="underline">Privacy Statement</a>.
        </p>
      </div>

      {/* Social Media */}
      <div className="px-4 py-6 bg-white border-b">
        <h3 className="font-bold mb-3">Follow Us</h3>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
              <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Support Section */}
      <div className="px-4 py-4 bg-gray-50">
        <h3 className="font-bold mb-3">Support</h3>
        <div className="flex flex-col gap-2 text-sm text-gray-700">
          <a href="#" className="hover:text-groupon-green">Help Center</a>
          <a href="#" className="hover:text-groupon-green">Refund Policies</a>
          <a href="#" className="hover:text-groupon-green">Report Infringement</a>
          <a href="#" className="hover:text-groupon-green">Vendor Code of Conduct</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="px-4 py-4 bg-white text-center text-xs text-gray-600">
        © 2025 Groupon, Inc. All Rights Reserved.
      </div>
    </footer>
  );
}

function ChevronRight() {
  return (
    <svg className="w-3 h-3 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

function DealCard({ title, address, distance, rating, reviewCount, price }: any) {
  return (
    <div className="flex gap-3">
      <div className="w-24 h-24 bg-gradient-to-br from-blue-200 to-gray-300 rounded-lg flex-shrink-0" />
      <div className="flex-1">
        <h4 className="font-semibold text-sm mb-1 line-clamp-2">{title}</h4>
        <p className="text-xs text-gray-600 mb-1">{address}</p>
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-xs text-gray-600">{distance}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold">{rating}</span>
            <svg className="w-3 h-3 fill-orange-400 text-orange-400" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          </div>
          <span className="text-xs text-gray-600">({reviewCount.toLocaleString()})</span>
          <span className="ml-auto text-lg font-bold text-groupon-green">${price}</span>
        </div>
      </div>
    </div>
  );
}

function RecommendedDealCard({ title, address, distance, rating, reviewCount, price, badge }: any) {
  return (
    <div className="flex-shrink-0 w-64">
      <div className="relative h-40 bg-gradient-to-br from-blue-200 to-gray-300 rounded-t-lg overflow-hidden">
        <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
          {badge === 'Book Online' && (
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          )}
          {badge === 'Popular' && (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          )}
          {badge}
        </div>
        <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
      <div className="bg-white p-3 rounded-b-lg border border-t-0">
        <h4 className="font-semibold text-sm mb-1 line-clamp-2">{title}</h4>
        <p className="text-xs text-gray-600 mb-1">{address}</p>
        <div className="flex items-center gap-1 mb-2">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          <span className="text-xs text-gray-600">{distance}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3 fill-orange-400 text-orange-400" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <span className="text-sm font-semibold">{rating}</span>
            <span className="text-xs text-gray-600">({reviewCount.toLocaleString()})</span>
          </div>
          <span className="text-lg font-bold text-groupon-green">${price}</span>
        </div>
      </div>
    </div>
  );
}


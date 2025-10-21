'use client';

import React from 'react';
import { MapPin, Phone } from 'lucide-react';

interface LocationMapProps {
  redemptionLocation: {
    name: string;
    address: string;
    distance: string;
  };
}

export default function LocationMap({ redemptionLocation }: LocationMapProps) {
  return (
    <div className="bg-white mt-2">
      <div className="px-4 py-6">
        <h2 className="text-xl font-bold mb-4">Where to Redeem</h2>
        
        {/* Map Placeholder */}
        <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden mb-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <MapPin className="w-12 h-12 text-red-500" />
          </div>
          {/* Map placeholder - in real app would be Google Maps */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 opacity-50" />
          <div className="absolute bottom-2 right-2 text-xs text-gray-600 bg-white px-2 py-1 rounded">
            © MapTiler © OpenStreetMap contributors
          </div>
        </div>

        {/* Location Details */}
        <div className="border-t pt-4">
          <h3 className="font-bold text-lg mb-2">{redemptionLocation.name}</h3>
          <div className="flex items-start gap-2 mb-3">
            <MapPin className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-gray-800">{redemptionLocation.address}</p>
              <p className="text-sm text-gray-600 mt-1">{redemptionLocation.distance}</p>
            </div>
          </div>
          
          <button className="flex items-center gap-2 w-full justify-center py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50">
            <Phone className="w-5 h-5" />
            Call
          </button>
        </div>
      </div>
    </div>
  );
}


import React from 'react';
import { ArrowLeft, Share2 } from 'lucide-react';

interface HeroImageProps {
  src: string;
  alt: string;
  enlarged?: boolean;
}

export const HeroImage: React.FC<HeroImageProps> = ({ src, alt, enlarged = false }) => {
  return (
    <div className="relative w-full aspect-[4/3] bg-gray-200">
      <img 
        src={src} 
        alt={alt}
        className={`w-full h-full object-cover ${enlarged ? 'scale-110' : ''}`}
        style={{ transformOrigin: 'center top' }}
      />
      
      {/* Back Arrow Icon (Top Left) - White Circle */}
      <button className="absolute top-4 left-4 w-9 h-9 bg-white/90 rounded-full shadow-md flex items-center justify-center text-gray-700 hover:bg-white">
        <ArrowLeft className="w-5 h-5" />
      </button>
      
      {/* Share Icon (Top Right) - White Circle */}
      <button className="absolute top-4 right-4 w-9 h-9 bg-white/90 rounded-full shadow-md flex items-center justify-center text-gray-700 hover:bg-white">
        <Share2 className="w-5 h-5" />
      </button>
      
      {/* Image Badge (Bottom Right) */}
      <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">
        +9 images
      </div>
    </div>
  );
};

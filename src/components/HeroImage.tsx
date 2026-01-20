import React from 'react';
import { ArrowLeft, Share2 } from 'lucide-react';

interface HeroImageProps {
  src: string;
  alt: string;
  enlarged?: boolean;
  hasVideo?: boolean;
  isVertical?: boolean;
}

export const HeroImage: React.FC<HeroImageProps> = ({ 
  src, 
  alt, 
  enlarged = false, 
  hasVideo = false,
  isVertical = false 
}) => {
  const isVideo = hasVideo || src.includes('.mp4') || src.includes('.webm');
  const aspectRatio = isVertical ? 'aspect-[3/4]' : 'aspect-[4/3]';
  
  return (
    <div className={`relative w-full ${aspectRatio} bg-gray-200`}>
      {isVideo ? (
        <video 
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-cover ${enlarged ? 'scale-110' : ''}`}
          style={{ transformOrigin: 'center top' }}
        />
      ) : (
        <img 
          src={src} 
          alt={alt}
          className={`w-full h-full object-cover ${enlarged ? 'scale-110' : ''}`}
          style={{ transformOrigin: 'center top' }}
        />
      )}
      
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

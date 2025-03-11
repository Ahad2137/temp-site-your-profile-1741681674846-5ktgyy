
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ProfileImage = ({ src, alt, className }: ProfileImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImageLoaded(true);
  }, [src]);

  return (
    <div 
      className={cn(
        'relative w-[280px] h-[280px] rounded-full overflow-hidden',
        'border-4 border-white shadow-xl animate-float',
        'transition-opacity duration-700',
        !imageLoaded && 'opacity-0',
        imageLoaded && 'opacity-100',
        className
      )}
    >
      {!imageLoaded && (
        <div className="w-full h-full bg-gray-200 animate-pulse-subtle" />
      )}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onLoad={() => setImageLoaded(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
    </div>
  );
};

export default ProfileImage;

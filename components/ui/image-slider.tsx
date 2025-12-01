'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ImageSliderProps {
  images: string[];
  alt: string;
  className?: string;
  autoPlayInterval?: number;
}

export function ImageSlider({
  images,
  alt,
  className,
  autoPlayInterval = 5000,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isHovered, autoPlayInterval, nextSlide]);

  if (!images || images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className={cn('relative w-full !h-full overflow-hidden rounded-lg', className)}>
        <Image
          src={images[0]}
          alt={alt}
          width={800}
          height={600}
          className=" w-full !h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={cn('relative w-full h-full  overflow-hidden rounded-lg group/slider', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="min-w-full h-full relative flex items-center justify-center">
            <Image
              src={src}
              alt={`${alt} - Image ${index + 1}`}
              width={800}
              height={600}
              className="w-full !h-full object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300"
        onClick={(e) => {
          e.preventDefault();
          prevSlide();
        }}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300"
        onClick={(e) => {
          e.preventDefault();
          nextSlide();
        }}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-300',
              currentIndex === index ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/80'
            )}
            onClick={(e) => {
              e.preventDefault();
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}

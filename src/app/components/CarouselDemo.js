
import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const CarouselDemo = () => {
  const images = ['/ipoji_1.webp', '/ipoji_2.webp', '/ipoji_3.webp'];

  return (
    <div className="relative w-full">
      <Carousel className="relative lg:w-full">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full aspect-[16/9] lg:h-[41vh] h-[10vh] md:h-[26vh] sm:h-[18vh] rounded-lg overflow-hidden shadow-md">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Previous Button */}
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full">
          <span className="text-3xl font-bold text-gray-700">❮</span>
        </CarouselPrevious>

        {/* Custom Next Button */}
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full">
          <span className="text-3xl font-bold text-gray-700">❯</span>
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default CarouselDemo;

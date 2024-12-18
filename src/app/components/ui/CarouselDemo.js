

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselDemo = () => {
  const images = ["/ipoji_1.webp", "/ipoji_2.webp", "/ipoji_3.webp"];

  return (
    <div className="relative w-full flex justify-center bg-[#D0EDFF]">
      <Carousel className="relative w-full xl:w-[1173px] lg:w-[1100px] md:w-[770px] sm:w-[640px]">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index} className="w-full">
              <div
                className="
                  relative w-full
                  h-[10vh] sm:h-[20vh] md:h-[25vh] lg:h-[30vh] xl:h-[242px] 
                  bg-white rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
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

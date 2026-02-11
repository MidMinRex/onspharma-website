import React, { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { PRODUCTS, getProductPath } from '../constants';
import { TiltCard } from './TiltCard';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const ProductCarousel: React.FC<{ onProductClick: (id: string) => void }> = ({ onProductClick }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', skipSnaps: false },
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative group">
      <div className="overflow-hidden px-4" ref={emblaRef}>
        <div className="flex -ml-4 py-10">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
              <a
                href={getProductPath(product.id)}
                onClick={(event) => {
                  event.preventDefault();
                  onProductClick(product.id);
                }}
                className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4BD] focus-visible:ring-offset-2 rounded-2xl"
                aria-label={`View ${product.name}`}
              >
                <TiltCard>
                  <div className="product-card bg-white rounded-2xl overflow-hidden shadow-sm border border-[#002D62]/10 h-full flex flex-col cursor-pointer">
                    <div className="aspect-[4/3] relative overflow-hidden bg-white">
                      <ImageWithFallback
                        src={product.images?.[0] || product.image || ""}
                        alt={product.name}
                        className="product-card__image w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#00A4BD] border border-[#00A4BD]/20">
                        {product.category}
                      </div>
                    </div>
                    <div className="p-8 flex-grow flex flex-col">
                      <h3 className="text-2xl font-semibold text-[#002D62] mb-3">{product.name}</h3>
                      <p className="text-[#002D62]/75 text-sm font-light leading-relaxed mb-6 flex-grow line-clamp-2">
                        {product.description}
                      </p>
                      <div className="product-card__cta flex items-center text-[#002D62] text-sm font-semibold">
                        View Composition <ChevronRight size={16} className="ml-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </a>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-md border border-[#002D62]/10 flex items-center justify-center text-[#002D62]/70 hover:text-[#00A4BD] transition-all z-20 opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-md border border-[#002D62]/10 flex items-center justify-center text-[#002D62]/70 hover:text-[#00A4BD] transition-all z-20 opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

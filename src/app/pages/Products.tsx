import React from 'react';
import { SectionHeader, MotionSection } from '../components/LayoutUtils';
import { PRODUCTS, COMPANY_INFO, getProductPath } from '../constants';
import { TiltCard } from '../components/TiltCard';
import { ChevronRight, Info } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const Products: React.FC<{ 
  setActivePage: (page: string, productId?: string) => void
}> = ({ setActivePage }) => {
  
  const handleProductClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    setActivePage('product-detail', id);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#F6F3EC]">
      <div className="container mx-auto px-6">
        <MotionSection>
          <div className="max-w-3xl mb-20">
            <h1 className="text-4xl md:text-5xl font-extralight text-[#002D62] mb-6">
              Our Pharmaceutical <span className="font-semibold text-[#00A4BD]">Portfolio.</span>
            </h1>
            <p className="text-xl text-[#002D62]/75 font-light leading-relaxed">
              We distribute a curated range of high-quality formulations designed for efficacy, safety, and clinical success.
            </p>
          </div>
        </MotionSection>

        {/* Disclaimer Banner */}
        <MotionSection className="bg-[#00A4BD]/10 border border-[#00A4BD]/25 rounded-2xl p-6 mb-16 flex items-start gap-4">
          <Info className="text-[#00A4BD] shrink-0 mt-0.5" size={24} />
          <div>
            <h2 className="font-bold text-[#002D62] mb-1">Professional Disclaimer</h2>
            <p className="text-sm text-[#002D62]/80 font-light leading-relaxed">
              {COMPANY_INFO.disclaimer} Product information provided on this website is for informational purposes for healthcare professionals and should not be used for self-diagnosis or treatment.
            </p>
          </div>
        </MotionSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, i) => (
            <MotionSection key={product.id} delay={i * 0.1}>
              <a
                href={getProductPath(product.id)}
                onClick={(event) => handleProductClick(event, product.id)}
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4BD] focus-visible:ring-offset-2 rounded-2xl"
                aria-label={`View ${product.name}`}
              >
                <TiltCard>
                  <div className="product-card bg-white rounded-2xl overflow-hidden shadow-sm border border-[#002D62]/10 h-full flex flex-col cursor-pointer">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <ImageWithFallback
                        src={product.images?.[0] || product.image || ""}
                        alt={product.name}
                        className="product-card__image w-full h-full object-cover"
                      />
                      <div className="absolute top-6 left-6 bg-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#00A4BD] shadow-sm border border-[#00A4BD]/20">
                        {product.category}
                      </div>
                    </div>
                    <div className="p-7 flex-grow flex flex-col">
                      <h3 className="text-2xl font-semibold text-[#002D62] mb-3">{product.name}</h3>
                      <p className="text-[#002D62]/75 text-sm font-light leading-relaxed mb-6 flex-grow line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between pt-5 border-t border-[#002D62]/10">
                        <span className="product-card__cta text-sm font-semibold text-[#002D62] inline-flex items-center gap-2">
                          View Product Data <ChevronRight size={18} />
                        </span>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </a>
            </MotionSection>
          ))}
        </div>
      </div>
    </div>
  );
};

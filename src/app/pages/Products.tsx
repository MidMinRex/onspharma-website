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
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="container mx-auto px-6">
        <MotionSection>
          <div className="max-w-3xl mb-20">
            <h1 className="text-4xl md:text-5xl font-extralight text-slate-900 mb-6">
              Our Pharmaceutical <span className="font-semibold text-blue-600">Portfolio.</span>
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              We distribute a curated range of high-quality formulations designed for efficacy, safety, and clinical success.
            </p>
          </div>
        </MotionSection>

        {/* Disclaimer Banner */}
        <MotionSection className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-16 flex items-start gap-4">
          <Info className="text-blue-600 shrink-0 mt-0.5" size={24} />
          <div>
            <h4 className="font-bold text-blue-900 mb-1">Professional Disclaimer</h4>
            <p className="text-sm text-blue-800 font-light leading-relaxed">
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
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-3xl"
                aria-label={`View ${product.name}`}
              >
                <TiltCard>
                  <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 h-full flex flex-col group hover:shadow-2xl hover:border-blue-200 transition-all duration-500 cursor-pointer">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <ImageWithFallback
                        src={product.images?.[0] || product.image || ""}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-blue-600 shadow-sm border border-blue-50">
                        {product.category}
                      </div>
                    </div>
                    <div className="p-10 flex-grow flex flex-col">
                      <h3 className="text-3xl font-light text-slate-900 mb-4">{product.name}</h3>
                      <p className="text-slate-600 font-light leading-relaxed mb-8 flex-grow">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                        <span className="text-sm font-bold text-blue-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
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

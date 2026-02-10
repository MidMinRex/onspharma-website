import React from 'react';
import { MotionSection } from '../components/LayoutUtils';
import { PRODUCTS, COMPANY_INFO } from '../constants';
import { ChevronLeft, ChevronRight, CheckCircle2, FileText, Share2, Info, X, Pill } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const ProductDetail: React.FC<{ 
  productId: string, 
  setActivePage: (page: string, productId?: string) => void 
}> = ({ productId, setActivePage }) => {
  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);
  const [lightboxIndex, setLightboxIndex] = React.useState(0);

  const dosageForm = product.composition?.[0] || '';
  const images = product.images && product.images.length > 0 ? product.images : [product.image || ""];
  const currentImage = images[selectedImageIndex] || images[0];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedImageIndex(0);
  }, [productId]);

  React.useEffect(() => {
    if (!isLightboxOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isLightboxOpen]);

  React.useEffect(() => {
    if (!isLightboxOpen) return;
    setSelectedImageIndex(lightboxIndex);
  }, [isLightboxOpen, lightboxIndex]);

  React.useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }
      if (event.key === 'ArrowLeft') {
        handlePrev();
      }
      if (event.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, images.length]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6">
        <MotionSection>
          <a
            href="/products"
            onClick={(event) => {
              event.preventDefault();
              setActivePage('products');
            }}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 font-semibold mb-12 transition-colors group rounded-full px-3 py-2 -ml-3 touch-manipulation cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            aria-label="Back to Portfolio"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
          </a>
        </MotionSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <MotionSection className="space-y-8">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative">
              <button
                type="button"
                onClick={() => openLightbox(selectedImageIndex)}
                className="w-full block cursor-zoom-in bg-transparent"
                aria-label="Open product image viewer"
              >
                <ImageWithFallback
                  src={currentImage}
                  alt={product.name}
                  className="w-full h-auto object-contain"
                />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {images.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onMouseEnter={() => setSelectedImageIndex(i)}
                  onFocus={() => setSelectedImageIndex(i)}
                  onClick={() => openLightbox(i)}
                  className={`aspect-square rounded-2xl bg-slate-50 overflow-hidden border-2 cursor-pointer transition-all ${
                    selectedImageIndex === i ? 'border-blue-600' : 'border-slate-100 hover:border-blue-300'
                  }`}
                  aria-label={`View ${product.name} image ${i + 1}`}
                >
                  <ImageWithFallback
                    src={img}
                    alt={`${product.name} View ${i + 1}`}
                    className={`w-full h-full object-cover transition-opacity ${selectedImageIndex === i ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                  />
                </button>
              ))}
            </div>
          </MotionSection>

          <MotionSection delay={0.2}>
            <div className="inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              {product.category}
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-slate-900 mb-8 leading-tight">
              {product.name}
            </h1>
            
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-10 pb-10 border-b border-slate-100">
              {product.description}
            </p>

            <div className="space-y-8 mb-12">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <FileText size={24} className="text-blue-600" /> Key Uses
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.uses.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5 mb-12">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <Pill size={22} className="text-blue-600" /> Dosage Form
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full bg-slate-50 border border-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                  {dosageForm}
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100 flex items-start gap-4">
              <Info className="text-amber-600 shrink-0 mt-0.5" size={20} />
              <p className="text-xs text-amber-900 font-medium italic leading-relaxed">
                Caution: {COMPANY_INFO.disclaimer} This information is not intended for the general public.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button 
                onClick={() => setActivePage('contact')}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 flex items-center gap-3"
              >
                Request Quote / Inquiry <Share2 size={18} />
              </button>
            </div>
          </MotionSection>
        </div>
      </div>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative z-10 h-full w-full flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4 text-white">
              <div className="text-sm font-semibold tracking-wide">
                {product.name} <span className="text-white/70">- {lightboxIndex + 1} / {images.length}</span>
              </div>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  closeLightbox();
                }}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="relative flex-1 flex items-center justify-center">
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} className="text-white" />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={20} className="text-white" />
              </button>

              <div
                className="max-h-[85vh] w-full max-w-[1200px] h-full flex items-center justify-center"
                onClick={(event) => event.stopPropagation()}
              >
                <ImageWithFallback
                  src={images[lightboxIndex]}
                  alt={`${product.name} enlarged view ${lightboxIndex + 1}`}
                  className="max-h-[85vh] w-auto max-w-[92vw] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

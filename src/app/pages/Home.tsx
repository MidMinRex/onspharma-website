import React from 'react';
import { Hero } from '../components/Hero';
import { SectionHeader, MotionSection } from '../components/LayoutUtils';
import { ProductCarousel } from '../components/ProductCarousel';
import { COMPANY_INFO } from '../constants';
import { ShieldCheck, Microscope, Truck, History, Briefcase } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const Home: React.FC<{ 
  setActivePage: (page: string, productId?: string) => void
}> = ({ setActivePage }) => {
  
  const handleProductClick = (id: string) => {
    setActivePage('product-detail', id);
  };

  return (
    <main className="min-h-screen">
      <Hero onCtaClick={setActivePage} />

      {/* About Snapshot */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <MotionSection>
              <SectionHeader 
                title="A Legacy of Pharmaceutical Excellence" 
                subtitle="Established in 2009, ONS Pharma has grown from a regional distributor to a trusted name in high-quality pharmaceutical wholesale."
              />
              <p className="text-slate-600 mb-8 font-light leading-relaxed">
                Headquartered in the historic city of Agra, we specialize in the distribution of critical pharmaceutical formulations. Our focus remains steadfast on ensuring that life-saving medicines reach hospitals and clinics with the highest standards of integrity and efficiency.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-blue-100 transition-colors">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <History size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">15+ Years</div>
                    <p className="text-xs text-slate-500">Industry leadership</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-blue-100 transition-colors">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Agra Based</div>
                    <p className="text-xs text-slate-500">Regional powerhouse</p>
                  </div>
                </div>
              </div>
            </MotionSection>

            <MotionSection delay={0.2} className="relative">
              <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1627915589334-14a3c3e3a741?auto=format&fit=crop&q=80&w=1000"
                  alt="Quality Control"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full -z-10 animate-pulse"></div>
            </MotionSection>
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <MotionSection className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <SectionHeader 
              title="Our Pharmaceutical Portfolio" 
              subtitle="Specialized formulations designed for precision and clinical efficacy."
            />
            <a
              href="/products"
              onClick={(event) => {
                event.preventDefault();
                setActivePage('products');
              }}
              className="text-slate-600 font-semibold hover:text-blue-600 transition-colors mb-6 border-b-2 border-slate-200 hover:border-blue-600 pb-1"
            >
              View Full Range
            </a>
          </MotionSection>
          
          <MotionSection delay={0.2}>
            <ProductCarousel onProductClick={handleProductClick} />
          </MotionSection>
        </div>
      </section>

      {/* Quality & Distribution Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <MotionSection>
              <h2 className="text-3xl font-light text-slate-900 mb-6 uppercase tracking-widest">Core Values</h2>
              <p className="text-slate-600 font-light text-lg">
                Integrity in every transaction, quality in every shipment, and care in every distribution.
              </p>
            </MotionSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: ShieldCheck,
                title: "Quality Assurance",
                desc: "Every batch distributed by ONS Pharma undergoes rigorous vetting to ensure compliance with global healthcare standards."
              },
              {
                icon: Truck,
                title: "Seamless Distribution",
                desc: "Our logistics network in Agra and North India is optimized for temperature-controlled handling and on-time delivery."
              },
              {
                icon: Microscope,
                title: "Scientific Integrity",
                desc: "We prioritize medicines that are backed by clinical research and manufactured in WHO-GMP certified facilities."
              }
            ].map((feature, i) => (
              <MotionSection key={i} delay={i * 0.1} className="text-center p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-600/20">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 text-sm font-light leading-relaxed">
                  {feature.desc}
                </p>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[150px] -mr-40 -mt-40"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <MotionSection>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
              Ready to partner with <span className="font-semibold">ONS Pharma?</span>
            </h2>
            <p className="text-blue-100 text-xl font-light mb-12 max-w-2xl mx-auto">
              Connect with us for wholesale inquiries, hospital supplies, or to learn more about our distribution network in North India.
            </p>
            <button 
              onClick={() => setActivePage('contact')}
              className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl"
            >
              Contact Our Sales Team
            </button>
            <p className="mt-10 text-blue-200 text-sm font-medium tracking-widest uppercase">
              {COMPANY_INFO.disclaimer}
            </p>
          </MotionSection>
        </div>
      </section>
    </main>
  );
};

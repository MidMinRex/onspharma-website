import React from 'react';
import { ChevronRight, ShieldCheck, Truck, History } from 'lucide-react';
import { MotionSection } from '../components/LayoutUtils';
import { COMPANY_INFO } from '../constants';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const Hero: React.FC<{ onCtaClick: (page: string) => void }> = ({ onCtaClick }) => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400 rounded-full blur-[120px] -mr-40 -mt-40"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-300 rounded-full blur-[100px] -ml-20 -mb-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <MotionSection>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Trusted Partner Since {COMPANY_INFO.established}
          </div>
          <h1 className="text-5xl lg:text-7xl font-extralight text-slate-900 leading-[1.1] mb-6">
            Advancing Healthcare <br />
            <span className="font-semibold text-blue-600">Through Excellence.</span>
          </h1>
          <p className="text-xl text-slate-600 font-light leading-relaxed mb-10 max-w-lg">
            A premier pharmaceutical <span className="text-blue-600 font-semibold">wholesale</span> and <span className="text-blue-600 font-semibold">distribution</span> powerhouse based in Agra, committed to delivering quality medical formulations to hospitals and healthcare providers.
          </p>

        </MotionSection>

        <MotionSection delay={0.2} className="relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-white">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?auto=format&fit=crop&q=80&w=1200"
              alt="ONS Pharma Laboratory"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>

        </MotionSection>
      </div>

      {/* Trust Strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/50 backdrop-blur-sm border-t border-slate-100 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center gap-8">
            {[
              { icon: History, label: "Established 2009", sub: "Trusted legacy" },
              { icon: ShieldCheck, label: "WHO-GMP Focused", sub: "Quality standards" },
              { icon: Truck, label: "Agile Distribution", sub: "Regional reach" },
              { icon: ShieldCheck, label: "Agra HQ", sub: "Uttar Pradesh" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <item.icon size={22} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">{item.label}</div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-500 font-medium">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

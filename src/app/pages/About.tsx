import React from 'react';
import { SectionHeader, MotionSection } from '../components/LayoutUtils';
import { COMPANY_INFO } from '../constants';
import { Shield, Target, Eye, Users, Building, Award, ShieldCheck, Clock, Zap, TrendingUp, Handshake, Globe } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import aboutImage from '../assets/about.jpg';

export const About: React.FC = () => {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Quality First Approach",
      desc: "We exclusively distribute pharmaceutical products from WHO-GMP certified facilities, ensuring every tablet and vial meets stringent safety standards."
    },
    {
      icon: Clock,
      title: "Timely Deliveries",
      desc: "Our robust supply chain management ensures that critical medicines reach our partners exactly when they are needed, minimizing stock-outs."
    },
    {
      icon: Award,
      title: "15+ Years Experience",
      desc: "Established in 2009, we bring over a decade of industry expertise and a deep understanding of the North Indian pharmaceutical landscape."
    },
    {
      icon: Handshake,
      title: "Ethical Business Practices",
      desc: "Transparency and integrity are the cornerstones of ONS Pharma. we believe in building long-term relationships through trust."
    },
    {
      icon: Users,
      title: "Customer-Centric Service",
      desc: "Our dedicated sales and support teams are always available to assist with order management, technical queries, and distribution needs."
    },
    {
      icon: Globe,
      title: "Extensive Network",
      desc: "With a strong presence in Agra and across Uttar Pradesh, we provide unparalleled reach to hospitals, clinics, and pharmacies."
    },
    {
      icon: Zap,
      title: "Rapid Response",
      desc: "In the healthcare sector, every second counts. We pride ourselves on our ability to respond quickly to emergency pharmaceutical requirements."
    },
    {
      icon: TrendingUp,
      title: "Continuous Innovation",
      desc: "We leverage modern logistics and inventory management technologies to optimize our distribution processes and provide better value."
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <MotionSection>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-extralight text-[#002D62] mb-6">
              Our Journey of <span className="font-semibold text-[#00A4BD]">Integrity.</span>
            </h1>
            <p className="text-xl text-[#002D62]/75 font-light leading-relaxed">
              Serving the healthcare community since 2009 with a commitment to quality and ethical distribution.
            </p>
          </div>
        </MotionSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <MotionSection className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={aboutImage}
                alt="ONS Pharma Facility"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#002D62] text-white p-8 rounded-2xl shadow-xl">
              <div className="text-4xl font-bold mb-1">2009</div>
              <div className="text-xs uppercase tracking-widest font-bold">Year of Establishment</div>
            </div>
          </MotionSection>

          <MotionSection delay={0.2}>
            <SectionHeader title="A Legacy in Agra" subtitle="Founded with a vision to streamline pharmaceutical distribution in Uttar Pradesh." />
            <div className="space-y-6 text-[#002D62]/75 font-light leading-relaxed">
              <p>
                ONS Pharma was established in 2009 in Agra, Uttar Pradesh, with the core mission of bridging the gap between pharmaceutical manufacturers and healthcare providers. Over the past 15 years, we have evolved into a leading wholesale and distribution firm, known for our reliability and professional ethics.
              </p>
              <p>
                Our operations are rooted in the belief that every patient deserves access to high-quality medicine. By maintaining a robust supply chain and fostering strong relationships with hospitals, clinics, and pharmacists, we ensure a seamless flow of essential formulations across the region.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <div className="text-2xl font-bold text-[#002D62] mb-1">500+</div>
                  <div className="text-xs uppercase tracking-widest text-[#00A4BD] font-bold">Pharmacies Served</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#002D62] mb-1">100+</div>
                  <div className="text-xs uppercase tracking-widest text-[#00A4BD] font-bold">Clinical Partners</div>
                </div>
              </div>
            </div>
          </MotionSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To provide efficient and ethical pharmaceutical distribution services that enhance healthcare accessibility and patient outcomes."
            },
            {
              icon: Eye,
              title: "Our Vision",
              text: "To become the most trusted pharmaceutical partner in North India, recognized for our commitment to quality and service excellence."
            },
            {
              icon: Shield,
              title: "Our Values",
              text: "Integrity, transparency, and reliability form the foundation of our business operations and relationships."
            }
          ].map((item, i) => (
            <MotionSection key={i} delay={i * 0.1} className="bg-white p-10 rounded-2xl border border-[#002D62]/10">
              <div className="w-14 h-14 bg-white text-[#00A4BD] rounded-xl shadow-sm flex items-center justify-center mb-8">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#002D62] mb-4">{item.title}</h3>
              <p className="text-[#002D62]/75 text-sm font-light leading-relaxed">
                {item.text}
              </p>
            </MotionSection>
          ))}
        </div>

        {/* Integrated Why Choose Us Section */}
        <div className="mb-32">
          <MotionSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-[#00A4BD] uppercase tracking-widest mb-4">Why Choose ONS Pharma</h2>
            <h2 className="text-4xl font-light text-[#002D62] leading-tight">Trusted by Healthcare Professionals Across North India</h2>
          </MotionSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, i) => (
              <MotionSection key={i} delay={i * 0.05} className="group h-full">
                <div className="h-full bg-white p-8 rounded-3xl border border-[#002D62]/10 hover:border-[#00A4BD]/40 transition-all hover:shadow-xl hover:shadow-blue-600/5 flex flex-col">
                  <div className="w-14 h-14 bg-[#00A4BD]/12 text-[#00A4BD] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00A4BD] group-hover:text-white transition-all duration-500">
                    <reason.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[#002D62] mb-4">{reason.title}</h3>
                  <p className="text-[#002D62]/70 text-sm font-light leading-relaxed flex-grow">
                    {reason.desc}
                  </p>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>

        <MotionSection className="bg-[#002D62] rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
  <div className="absolute inset-0 flex justify-end pointer-events-none">
    <div className="w-96 h-96 bg-[#00A4BD]/10 rounded-full blur-[6.25rem] transform translate-x-20 translate-y-[-1.25rem]"></div>
  </div>

  <div className="relative z-10 max-w-3xl mx-auto text-left">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-8">
      Operational Excellence
    </h2>

    <div className="space-y-10">
      {[
        { icon: Building, title: "Modern Infrastructure", desc: "Temperature-controlled warehousing facility in Agra." },
        { icon: Award, title: "Quality Compliance", desc: "Strict adherence to WHO-GMP distribution standards." },
        { icon: Users, title: "Expert Team", desc: "Professionals dedicated to logistics and client satisfaction." }
      ].map((item, i) => (
        <div key={i} className="flex items-start gap-6">
          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/6 border border-white/8 flex items-center justify-center">
            <item.icon size={20} className="text-[#00A4BD]" />
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-semibold text-white leading-snug mb-1">
              {item.title}
            </h4>
            <p className="text-[#E6EEFF] text-sm md:text-base font-light max-w-xl">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</MotionSection>
      </div>
    </div>
  );
};

import React from 'react';
import { SectionHeader, MotionSection } from '../components/LayoutUtils';
import { Mail, Phone, MapPin, Info } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export const Contact: React.FC = () => {

  return (
    <div className="pt-32 pb-24 bg-[#F6F3EC] min-h-screen">
      <div className="container mx-auto px-6">
        <MotionSection>
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-6xl font-extralight text-[#002D62] mb-6">
              Connect With <span className="font-semibold text-[#00A4BD]">Us.</span>
            </h1>
            <p className="text-xl text-[#002D62]/75 font-light leading-relaxed">
              For wholesale inquiries, distribution partnerships, or clinical support, our team is ready to assist you.
            </p>
          </div>
        </MotionSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <MotionSection className="lg:col-span-3">
            <div className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-sm border border-[#002D62]/10 contact-info-card">
              <h2 className="text-3xl font-bold text-[#002D62] mb-12">Contact Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 contact-info-grid">
                {/* Address */}
                <div className="space-y-6">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-[#00A4BD]/12 text-[#00A4BD] rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-[#002D62] mb-2 text-lg">Our Address</div>
                      <p className="text-base text-[#002D62]/75 font-light leading-relaxed">
                        {COMPANY_INFO.contact.address}<br />
                        {COMPANY_INFO.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-6">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-[#00A4BD]/12 text-[#00A4BD] rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-[#002D62] mb-2 text-lg">Email</div>
                      <p className="text-base text-[#002D62]/75 font-light">
                        <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-[#00A4BD] transition-colors">
                          {COMPANY_INFO.contact.email}
                        </a>
                      </p>
                      <p className="text-sm text-[#002D62]/60 font-light mt-2">Sales inquiries welcome</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-6">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-[#00A4BD]/12 text-[#00A4BD] rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-[#002D62] mb-2 text-lg">Call Us</div>
                      <p className="text-base text-[#002D62]/75 font-light">
                        <a href={`tel:${COMPANY_INFO.contact.phone}`} className="hover:text-[#00A4BD] transition-colors">
                          {COMPANY_INFO.contact.phone}
                        </a>
                      </p>
                      <p className="text-sm text-[#002D62]/60 font-light mt-2">24/7 available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-16 pt-12 border-t border-[#002D62]/10">
                <h3 className="text-2xl font-bold text-[#002D62] mb-8">Business Hours</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 contact-hours-grid">
                  <div className="flex justify-between items-center bg-white p-6 rounded-xl border border-[#002D62]/10">
                    <span className="font-semibold text-[#002D62]">Monday - Saturday</span>
                    <span className="text-[#002D62]/75 font-light">09:00 AM - 08:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center bg-white p-6 rounded-xl border border-[#002D62]/10">
                    <span className="font-semibold text-[#002D62]">Sunday</span>
                    <span className="text-[#002D62]/75 font-light">Closed</span>
                  </div>
                </div>
                <div className="mt-8 flex items-start gap-4 bg-[#00A4BD]/10 p-6 rounded-xl border border-[#00A4BD]/25">
                  <Info size={20} className="text-[#00A4BD] shrink-0 mt-0.5" />
                  <p className="text-base text-[#002D62] font-medium">
                    Emergency supplies for hospitals can be coordinated via our priority line. Contact us anytime.
                  </p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-16 pt-12 border-t border-[#002D62]/10">
                <div className="flex items-start gap-4 bg-[#E6EEFF] p-6 rounded-xl border border-[#00A4BD]/30">
                  <Info className="text-[#00A4BD] shrink-0 mt-0.5" size={20} />
                  <p className="text-base text-[#002D62] font-medium">
                    For registered medical practitioners and pharmacists only. This website does not sell products directly to consumers.
                  </p>
                </div>
              </div>
            </div>
          </MotionSection>
        </div>
      </div>
    </div>
  );
};

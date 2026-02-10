import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS, getProductPath } from '../constants';
import logoIcon from '../assets/logo-icon.png';

export const Footer: React.FC<{ setActivePage: (page: string, productId?: string) => void }> = ({ setActivePage }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logoIcon}
                alt="ONS Pharma logo"
                className="h-5 sm:h-6 w-auto"
                style={{ display: 'inline-block' }}
              />
              <span className="text-white font-black text-xl">{COMPANY_INFO.name}</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 font-light">
              Trusted pharmaceutical wholesale and distribution partner based in Agra, serving the healthcare community since {COMPANY_INFO.established}.
            </p>
            <div className="flex gap-4">
              {/* external-link icon intentionally removed per design spec */}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-base">
              <li>
                <a
                  href="/"
                  onClick={(event) => {
                    event.preventDefault();
                    setActivePage('home');
                  }}
                  className="hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(event) => {
                    event.preventDefault();
                    setActivePage('about');
                  }}
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  onClick={(event) => {
                    event.preventDefault();
                    setActivePage('products');
                  }}
                  className="hover:text-blue-400 transition-colors"
                >
                  Our Products
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(event) => {
                    event.preventDefault();
                    setActivePage('contact');
                  }}
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Our Products</h4>
            <ul className="space-y-4 text-base font-light">
              {PRODUCTS.map((product) => (
                <li key={product.id}>
                  <a
                    href={getProductPath(product.id)}
                    onClick={(event) => {
                      event.preventDefault();
                      setActivePage('product-detail', product.id);
                    }}
                    className="hover:text-blue-400 cursor-pointer transition-colors"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Details</h4>
            <ul className="space-y-4 text-base font-light">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 shrink-0" />
                <span>{COMPANY_INFO.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <span>{COMPANY_INFO.contact.email}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500 shrink-0" />
                <span>{COMPANY_INFO.contact.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[11px] uppercase tracking-widest font-medium text-slate-500">
            (c) {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.
          </div>
          <div className="text-[10px] text-slate-500 max-w-md text-center md:text-right italic">
            Disclaimer: {COMPANY_INFO.disclaimer} This website does not sell products directly to consumers.
          </div>
        </div>
      </div>
    </footer>
  );
};

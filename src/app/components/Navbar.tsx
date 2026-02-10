import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import logoIcon from '../assets/logo-icon.png';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string, productId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home', href: '/' },
    { name: 'About Us', id: 'about', href: '/about' },
    { name: 'Products', id: 'products', href: '/products' },
    { name: 'Contact', id: 'contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a
          className="flex items-center gap-4 md:gap-5 cursor-pointer group"
          href="/"
          onClick={(event) => {
            event.preventDefault();
            setActivePage('home');
          }}
        >
          {/* Logo Icon - Primary Visual Anchor */}
          <div className={`p-3 rounded-lg transition-all duration-500 flex-shrink-0 ${
            isScrolled ? 'bg-blue-50 shadow-md' : 'bg-white/50 backdrop-blur-sm'
          }`}>
            <img src={logoIcon} alt="ONS Pharma" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </div>

          {/* Brand Text Stack - HTML Rendered */}
          <div className="flex flex-col justify-center gap-0.5">
            {/* Brand Name - Extra Bold & Prominent */}
            <h1 className={`font-black text-2xl md:text-3xl lg:text-4xl tracking-tight transition-colors duration-500 leading-none ${
              isScrolled ? 'text-slate-900' : 'text-slate-900'
            }`}>
              ONS Pharma
            </h1>
            {/* Tagline - Secondary & Refined */}
            <p className={`text-xs md:text-sm font-semibold tracking-widest transition-colors duration-500 ${
              isScrolled ? 'text-blue-600' : 'text-blue-700'
            }`}>
              Dedicated To Wellness
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(event) => {
                event.preventDefault();
                setActivePage(link.id);
              }}
              className={`text-base font-medium transition-colors ${
                activePage === link.id 
                  ? 'text-blue-600' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(event) => {
                event.preventDefault();
                setActivePage(link.id);
                setIsMenuOpen(false);
              }}
              className={`text-left text-lg font-medium ${
                activePage === link.id ? 'text-blue-600' : 'text-slate-600'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

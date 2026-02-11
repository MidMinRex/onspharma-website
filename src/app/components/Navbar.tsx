import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import logoIcon from '../assets/logo-icon.png';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string, productId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 8) {
        setIsHeaderVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (scrollDelta > 6) {
        setIsHeaderVisible(false);
        setIsMenuOpen(false);
      } else if (scrollDelta < -6) {
        setIsHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home', href: '/' },
    { name: 'About Us', id: 'about', href: '/about' },
    { name: 'Products', id: 'products', href: '/products' },
    { name: 'Contact', id: 'contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-[#F6F3EC] py-5 transition-transform duration-300 ease-out ${
      isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
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
          <div className="p-3 rounded-lg transition-all duration-500 flex-shrink-0 bg-white shadow-sm ring-1 ring-[#002D62]/10">
            <img src={logoIcon} alt="ONS Pharma" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </div>

          {/* Brand Text Stack - HTML Rendered */}
          <div className="flex flex-col justify-center gap-0.5">
            {/* Brand Name - Extra Bold & Prominent */}
            <h1 className="font-black text-2xl md:text-3xl lg:text-4xl tracking-tight transition-colors duration-500 leading-none text-[#002D62]">
              ONS Pharma
            </h1>
            {/* Tagline - Secondary & Refined */}
            <p className="text-xs md:text-sm font-semibold tracking-widest transition-colors duration-500 text-[#00A4BD]">
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
                  ? 'text-[#002D62]' 
                  : 'text-[#002D62]/70 hover:text-[#00A4BD]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#002D62]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#F6F3EC] border-t border-[#002D62]/10 p-6 flex flex-col gap-4 shadow-sm">
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
                activePage === link.id ? 'text-[#002D62]' : 'text-[#002D62]/70 hover:text-[#00A4BD]'
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

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PageId } from '../types';

interface NavbarProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage, isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when page changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [activePage]);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'about', label: 'Our Story' },
    { id: 'catering', label: 'Catering' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNav = (page: PageId) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-900/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`} aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={() => handleNav('home')}
          className="cursor-pointer font-black text-2xl md:text-3xl uppercase tracking-tighter text-white flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 rounded p-1"
          aria-label="El Primo Home"
        >
          El Primo<span className="text-red-600">.</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`text-sm font-bold uppercase tracking-widest hover:text-red-500 transition-colors focus:outline-none focus:text-red-500 ${activePage === link.id ? 'text-red-500' : 'text-white'}`}
              aria-current={activePage === link.id ? 'page' : undefined}
            >
              {link.label}
            </button>
          ))}
          <button 
            className="bg-red-600 text-white px-5 py-2 font-bold uppercase text-sm rounded hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => window.open('https://toasttab.com', '_blank')}
            aria-label="Order Online (Opens in new tab)"
          >
            Order Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-zinc-900 border-t border-zinc-800 shadow-xl flex flex-col p-4 animate-fade-in md:hidden h-screen">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="py-4 text-white font-bold uppercase tracking-widest border-b border-zinc-800 text-left text-xl active:text-red-500"
            >
              {link.label}
            </button>
          ))}
          <button 
            className="mt-6 bg-red-600 text-white w-full py-4 font-bold uppercase rounded text-lg"
             onClick={() => window.open('https://toasttab.com', '_blank')}
          >
            Order Online
          </button>
        </div>
      )}
    </nav>
  );
};

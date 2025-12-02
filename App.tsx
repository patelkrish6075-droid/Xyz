import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Menu } from './pages/Menu';
import { Catering } from './pages/Catering';
import { Contact } from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // SEO: Dynamic Title Updates
  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: "El Primo Austin | The King of Breakfast Tacos",
      menu: "Menu | El Primo Austin",
      about: "Our Story | El Primo Austin",
      catering: "Catering Services | El Primo Austin",
      contact: "Contact & Hours | El Primo Austin"
    };
    document.title = titles[activePage] || "El Primo Austin";
  }, [activePage]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-zinc-900 bg-white min-h-screen">
      <Navbar activePage={activePage} setActivePage={setActivePage} isScrolled={isScrolled} />
      
      <main className="min-h-screen" role="main">
        {activePage === 'home' && <Home navigate={setActivePage} />}
        {activePage === 'about' && <About />}
        {activePage === 'menu' && <Menu />}
        {activePage === 'catering' && <Catering />}
        {activePage === 'contact' && <Contact />}
      </main>

      <Footer navigate={setActivePage} />
    </div>
  );
}

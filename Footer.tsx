import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { PageId } from '../types';

interface FooterProps {
  navigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => (
  <footer className="bg-zinc-900 text-zinc-400 py-12 border-t border-zinc-800">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-white text-2xl font-black uppercase mb-4 tracking-tighter">El Primo<span className="text-red-600">.</span></h2>
          <p className="max-w-xs mb-4">Serving authentic Michoacán breakfast tacos to South Austin since 2010.</p>
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors" 
              aria-label="Visit our Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors" 
              aria-label="Visit our Facebook"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-white font-bold uppercase mb-4">Explore</h3>
          <ul className="space-y-2">
            <li><button onClick={() => navigate('menu')} className="hover:text-red-500 transition-colors">Menu</button></li>
            <li><button onClick={() => navigate('about')} className="hover:text-red-500 transition-colors">Our Story</button></li>
            <li><button onClick={() => navigate('catering')} className="hover:text-red-500 transition-colors">Catering</button></li>
            <li><button onClick={() => navigate('contact')} className="hover:text-red-500 transition-colors">Contact</button></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold uppercase mb-4">Find Us</h3>
          <address className="mb-2 not-italic">2011 S 1st St, Austin, TX</address>
          <p className="text-sm">Mon-Fri: 8am-5pm</p>
          <p className="text-sm">Sat: 8am-4pm</p>
          <p className="text-sm text-red-500 mt-2 font-bold">Sun: Closed</p>
        </div>
      </div>
      
      <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} El Primo Austin. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white">Privacy Policy</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);
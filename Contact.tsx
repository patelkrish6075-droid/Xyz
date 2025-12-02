import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Button } from '../components/Button';

export const Contact: React.FC = () => (
  <div className="pt-24 pb-20 animate-fade-in bg-zinc-50 min-h-screen w-full">
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-black uppercase mb-4 text-zinc-900">Visit El Primo</h1>
        <p className="text-xl text-zinc-600">Look for the white trailer in the lot with the coffee shop.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Info Card */}
        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-600">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="text-red-600 mt-1 flex-shrink-0" size={24} aria-hidden="true" />
              <div>
                <h3 className="font-black uppercase text-xl mb-1 text-zinc-900">Location</h3>
                <address className="text-zinc-600 not-italic">2011 S 1st St,<br/>Austin, TX 78704</address>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-red-600 mt-1 flex-shrink-0" size={24} aria-hidden="true" />
              <div>
                <h3 className="font-black uppercase text-xl mb-1 text-zinc-900">Hours</h3>
                <p className="text-zinc-600 flex justify-between w-48"><span>Mon - Fri:</span> <span>8am – 5pm</span></p>
                <p className="text-zinc-600 flex justify-between w-48"><span>Saturday:</span> <span>8am – 4pm</span></p>
                <p className="text-red-600 font-bold mt-1">Sunday: CLOSED</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-red-600 mt-1 flex-shrink-0" size={24} aria-hidden="true" />
              <div>
                <h3 className="font-black uppercase text-xl mb-1 text-zinc-900">Contact</h3>
                <a href="tel:5122275060" className="text-zinc-600 hover:text-red-600 block">(512) 227-5060</a>
                <a href="mailto:burritofactoryatx@gmail.com" className="text-zinc-500 text-sm mt-1 hover:text-red-600 block">burritofactoryatx@gmail.com</a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-zinc-100">
            <Button className="w-full" onClick={() => window.open('https://maps.google.com/?q=2011+S+1st+St,+Austin,+TX+78704')}>Get Directions</Button>
          </div>
        </div>

        {/* Map Placeholder - Accessible Fallback */}
        <div className="bg-zinc-200 rounded-xl overflow-hidden min-h-[400px] relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.5684748682046!2d-97.75704102364663!3d30.24945410885289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b4d081267861%3A0xc392150130932822!2sEl%20Primo!5e0!3m2!1sen!2sus!4v1709560000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{border:0, filter: 'grayscale(100%)'}} 
            allowFullScreen={false}
            loading="lazy" 
            className="absolute inset-0"
            title="Google Maps Location of El Primo at 2011 S 1st St"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
);

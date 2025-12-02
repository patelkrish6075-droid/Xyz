import React from 'react';
import { ArrowRight, Star, Truck, Flame, Clock } from 'lucide-react';
import { PageId } from '../types';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { TESTIMONIALS, FAQS } from '../constants';

interface HomeProps {
  navigate: (page: PageId) => void;
}

export const Home: React.FC<HomeProps> = ({ navigate }) => {
  return (
    <div className="animate-fade-in w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black" aria-label="Welcome to El Primo">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-50">
           <img 
             src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=2880&auto=format&fit=crop"
             alt="Close up of taco preparation on a grill"
             className="w-full h-full object-cover grayscale contrast-125"
             loading="eager"
           />
        </div>
        {/* Enhanced gradient for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <span className="inline-block py-1 px-3 border border-white/30 bg-black/50 backdrop-blur-sm text-white text-xs font-bold tracking-[0.2em] uppercase mb-6 rounded-full">
            Est. 2010 • Austin, TX
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8 drop-shadow-xl">
            Austin's Breakfast<br/> 
            <span className="text-red-500">Taco King</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-200 max-w-2xl mx-auto mb-10 font-medium drop-shadow-md">
            Authentic Michoacán style. Family owned. <br className="hidden md:block"/>Served hot on South First Street for over 14 years.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button onClick={() => window.open('https://toasttab.com', '_blank')} ariaLabel="Order food online">
              Order Online <ArrowRight size={20} aria-hidden="true" />
            </Button>
            <Button variant="secondary" onClick={() => navigate('menu')} ariaLabel="View our menu">
              View Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-zinc-900 border-b border-zinc-800 py-8 overflow-hidden" aria-label="Awards and Recognition">
        <div className="flex justify-center flex-wrap gap-8 md:gap-16 items-center px-4 opacity-80">
          <span className="text-zinc-300 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
            <Star size={16} className="text-yellow-500" fill="#EAB308" aria-hidden="true"/> 4.8 Stars on Google
          </span>
          <span className="text-zinc-300 font-bold uppercase tracking-widest text-sm">As Seen on VICE / Munchies</span>
          <span className="text-zinc-300 font-bold uppercase tracking-widest text-sm">First Plates Winner</span>
          <span className="text-zinc-300 font-bold uppercase tracking-widest text-sm">Est. 2010</span>
        </div>
      </section>

      {/* Benefit Sections */}
      <section className="py-20 px-4 bg-white" aria-label="Why Choose Us">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <article className="text-center p-6 border border-zinc-100 shadow-sm hover:shadow-md transition-shadow rounded-lg">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
              <Truck size={32} />
            </div>
            <h3 className="text-xl font-black uppercase mb-3 text-zinc-900">14 Years. One Spot.</h3>
            <p className="text-zinc-600 leading-relaxed">
              We don’t do "fusion." We do authentic, home-style Mexican recipes passed down through generations. Parking at the same spot since 2010.
            </p>
          </article>
          <article className="text-center p-6 border border-zinc-100 shadow-sm hover:shadow-md transition-shadow rounded-lg">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
              <Flame size={32} />
            </div>
            <h3 className="text-xl font-black uppercase mb-3 text-zinc-900">Michoacán Style</h3>
            <p className="text-zinc-600 leading-relaxed">
              We don't dry out meat on a griddle. We use steam tables to keep our Asada, Pastor, and Lengua tender, moist, and packed with flavor.
            </p>
          </article>
          <article className="text-center p-6 border border-zinc-100 shadow-sm hover:shadow-md transition-shadow rounded-lg">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
              <Clock size={32} />
            </div>
            <h3 className="text-xl font-black uppercase mb-3 text-zinc-900">Skip the Line</h3>
            <p className="text-zinc-600 leading-relaxed">
              We’ve modernized. No more "Cash Only." Order online, skip the wait, and grab the best taco in the 78704 on your commute.
            </p>
          </article>
        </div>
      </section>

      {/* Featured Favorites */}
      <section className="py-20 bg-zinc-50" aria-label="Featured Menu Items">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading 
            title="Fan Favorites" 
            subtitle="The items that built our reputation on South First Street." 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Item 1 */}
            <article 
              className="bg-white rounded-lg overflow-hidden shadow-lg group cursor-pointer focus-within:ring-2 focus-within:ring-red-600" 
              onClick={() => navigate('menu')}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate('menu')}
            >
              <div className="h-48 bg-zinc-200 overflow-hidden relative">
                 <img 
                    src="https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=800&auto=format&fit=crop" 
                    alt="Migas Taco with cheese and pico de gallo" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    loading="lazy"
                 />
                 <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 uppercase rounded shadow-sm">
                   Top Seller
                 </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black uppercase mb-2 text-zinc-900">The Migas</h3>
                <p className="text-zinc-600 mb-4">Crispy tortilla strips, fluffy eggs, melted cheese, pico de gallo.</p>
                <span className="text-red-600 font-bold">$4.50</span>
              </div>
            </article>

             {/* Item 2 */}
             <article 
              className="bg-white rounded-lg overflow-hidden shadow-lg group cursor-pointer focus-within:ring-2 focus-within:ring-red-600" 
              onClick={() => navigate('menu')}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate('menu')}
            >
              <div className="h-48 bg-zinc-200 overflow-hidden relative">
                 <img 
                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop" 
                    alt="Large Torta Sandwich with avocado and meat" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    loading="lazy"
                  />
                 <div className="absolute top-2 right-2 bg-zinc-900 text-white text-xs font-bold px-2 py-1 uppercase rounded shadow-sm">
                   Unsung Hero
                 </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black uppercase mb-2 text-zinc-900">The Super Torta</h3>
                <p className="text-zinc-600 mb-4">A massive Mexican sandwich. Toasted bread, Asada, Pastor, Ham & Avocado.</p>
                <span className="text-red-600 font-bold">$12.40</span>
              </div>
            </article>

             {/* Item 3 */}
             <article 
              className="bg-white rounded-lg overflow-hidden shadow-lg group cursor-pointer focus-within:ring-2 focus-within:ring-red-600" 
              onClick={() => navigate('menu')}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate('menu')}
            >
              <div className="h-48 bg-zinc-200 overflow-hidden relative">
                 <img 
                    src="https://images.unsplash.com/photo-1593584785033-9c7604d0863f?q=80&w=800&auto=format&fit=crop" 
                    alt="Scrambled eggs with chorizo sausage" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    loading="lazy"
                 />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black uppercase mb-2 text-zinc-900">House Chorizo</h3>
                <p className="text-zinc-600 mb-4">Spicy pork sausage made in-house, scrambled with fresh eggs.</p>
                <span className="text-red-600 font-bold">$4.25</span>
              </div>
            </article>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" onClick={() => navigate('menu')}>View Full Menu</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zinc-900 text-white border-t border-zinc-800" aria-label="Customer Reviews">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeading title="What Austin Is Saying" light />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {TESTIMONIALS.map((t, i) => (
              <blockquote key={i} className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 shadow-md">
                <div className="flex justify-center gap-1 text-yellow-500 mb-4" aria-label="5 out of 5 stars">
                  {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="#EAB308" aria-hidden="true" />)}
                </div>
                <p className="italic text-zinc-300 mb-4">"{t.text}"</p>
                <footer className="font-bold text-red-500">— {t.name}, <cite className="text-zinc-500 text-sm font-normal not-italic">{t.source}</cite></footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-white" aria-label="Frequently Asked Questions">
        <div className="max-w-3xl mx-auto px-4">
           <SectionHeading title="FAQ" subtitle="Common questions from new and regular customers." />
           <div className="space-y-6">
             {FAQS.map((faq, index) => (
               <article key={index} className="border-b border-zinc-200 pb-6">
                 <h4 className="text-xl font-bold text-zinc-900 mb-2">{faq.q}</h4>
                 <p className="text-zinc-600">{faq.a}</p>
               </article>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};
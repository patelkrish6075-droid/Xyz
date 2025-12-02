import React from 'react';
import { Star } from 'lucide-react';
import { Button } from '../components/Button';
import { MENU_ITEMS } from '../constants';

export const Menu: React.FC = () => (
  <div className="pt-24 pb-20 animate-fade-in bg-zinc-50 min-h-screen w-full">
    <div className="bg-red-600 text-white py-16 px-4 mb-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-black uppercase mb-4">The Menu</h1>
        <p className="text-xl text-red-100">Authentic Street Food. No Filler.</p>
      </div>
    </div>

    <div className="max-w-5xl mx-auto px-4">
      {MENU_ITEMS.map((section, idx) => (
        <section key={idx} className="mb-16 bg-white p-6 md:p-10 rounded-xl shadow-sm border border-zinc-200" aria-labelledby={`cat-${idx}`}>
          <div className="border-b border-zinc-100 pb-4 mb-8">
            <h2 id={`cat-${idx}`} className="text-3xl font-black uppercase text-zinc-900 mb-2">{section.category}</h2>
            <p className="text-zinc-500 italic">{section.description}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
            {section.items.map((item, i) => (
              <div key={i} className="flex gap-5 group items-start">
                {item.image && (
                   <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 rounded-lg overflow-hidden bg-zinc-100 shadow-sm border border-zinc-100">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        loading="lazy"
                      />
                   </div>
                )}
                <div className="flex flex-col justify-start flex-grow min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-800 group-hover:text-red-600 transition-colors leading-tight">
                      {item.name} {item.featured && <Star size={14} className="inline text-yellow-500 ml-1 mb-1 fill-current" aria-label="Featured item"/>}
                    </h3>
                    <span className="text-red-600 font-bold ml-3 whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-zinc-600 text-sm leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <div className="text-center py-12">
        <h3 className="text-2xl font-bold mb-4 text-zinc-900">Hungry?</h3>
        <Button onClick={() => window.open('https://toasttab.com', '_blank')} ariaLabel="Start your order online">Start Your Order</Button>
      </div>
    </div>
  </div>
);
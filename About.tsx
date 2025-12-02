import React from 'react';

export const About: React.FC = () => (
  <div className="pt-24 pb-20 animate-fade-in w-full">
    <div className="bg-zinc-900 text-white py-20 px-4 mb-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-black uppercase mb-6">From Michoacán<br/>To Austin</h1>
        <p className="text-xl text-zinc-400">The El Primo Story</p>
      </div>
    </div>

    <div className="max-w-4xl mx-auto px-4 space-y-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
           <img 
             src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=800&auto=format&fit=crop" 
             alt="Black and white photo of a chef working at a grill, symbolizing the hard work and dedication behind El Primo's authentic tacos" 
             className="rounded-lg shadow-xl grayscale"
             loading="lazy" 
           />
        </div>
        <div>
          <h2 className="text-3xl font-black uppercase text-zinc-900 mb-4">It Started with "Échenle Ganas"</h2>
          <p className="text-zinc-600 mb-4 leading-relaxed">
            Long before the trailer on South First became a local landmark, Jose Luis Perez learned the value of hard work in his father’s meat market in Michoacán, Mexico. His father’s motto was simple: "Échenle ganas" (Give it your all).
          </p>
          <p className="text-zinc-600 leading-relaxed">
            Jose brought that work ethic to Austin in 2004. In 2010, he parked a modest white trailer on South First Street. Fourteen years later, the lines haven't stopped.
          </p>
        </div>
      </div>

      <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200">
        <h2 className="text-3xl font-black uppercase text-center mb-6 text-zinc-900">More Than a Business. It’s Familia.</h2>
        <p className="text-zinc-600 text-center max-w-2xl mx-auto leading-relaxed">
          When you eat at El Primo, you aren't just a customer; you're a guest of the Perez family. The operation is run by siblings—Jose Luis, Juan Luis, and Ana Bertha. That consistency is our secret ingredient. You see the same faces every morning because we care about every taco we serve.
        </p>
      </div>
    </div>
  </div>
);
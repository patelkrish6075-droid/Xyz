import React, { useState } from 'react';
import { Clock, ChefHat, CheckCircle } from 'lucide-react';
import { Button } from '../components/Button';

export const Catering: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="pt-24 pb-20 animate-fade-in w-full">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <span className="text-red-600 font-bold tracking-widest uppercase text-sm mb-2 block">Catering Services</span>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-zinc-900 mb-6">Feed Your Team the Best Tacos in Austin.</h1>
          <p className="text-zinc-600 mb-8 text-lg leading-relaxed">
            Tired of dry sandwiches at corporate meetings? Bring the soul of South Austin to your office, wedding, or private event. We provide bulk orders of our famous breakfast tacos, lunch burritos, and sides.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-2 rounded text-red-600"><Clock size={20} aria-hidden="true"/></div>
              <div>
                <h4 className="font-bold text-zinc-900">Reliability</h4>
                <p className="text-sm text-zinc-600">We’ve been feeding Austin for 14 years. We show up on time.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="bg-red-100 p-2 rounded text-red-600"><ChefHat size={20} aria-hidden="true"/></div>
              <div>
                <h4 className="font-bold text-zinc-900">Volume</h4>
                <p className="text-sm text-zinc-600">We can handle large orders for offices, film crews, and parties.</p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-50 p-6 rounded-lg border border-zinc-200">
            {formStatus === 'success' ? (
              <div className="text-center py-12 animate-fade-in">
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-black text-zinc-900 mb-2">Message Sent!</h3>
                <p className="text-zinc-600">We'll get back to you within 24 hours to confirm details.</p>
                <button onClick={() => setFormStatus('idle')} className="mt-4 text-red-600 font-bold underline">Send another inquiry</button>
              </div>
            ) : (
              <>
                <h3 className="font-bold mb-4 uppercase text-zinc-900">Request Catering</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="sr-only">Name</label>
                      <input id="name" type="text" placeholder="Name" required className="w-full p-3 border border-zinc-300 rounded focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600" />
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">Email</label>
                      <input id="email" type="email" placeholder="Email" required className="w-full p-3 border border-zinc-300 rounded focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="details" className="sr-only">Date & Headcount</label>
                    <input id="details" type="text" placeholder="Date & Headcount" required className="w-full p-3 border border-zinc-300 rounded focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600" />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea id="message" placeholder="Tell us about your event..." required className="w-full p-3 border border-zinc-300 rounded h-32 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"></textarea>
                  </div>
                  <Button className="w-full" type="submit" disabled={formStatus === 'submitting'}>
                    {formStatus === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
        <div className="order-1 md:order-2 h-full min-h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop" 
            alt="Spread of taco ingredients for catering" 
            className="w-full h-full object-cover rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" 
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
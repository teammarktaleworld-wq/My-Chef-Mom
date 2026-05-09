'use client';

import React from 'react';
import { PhoneCall, CheckCircle2 } from 'lucide-react';

const WHATSAPP_NUMBER = "+971557998925";

export default function HeroSection() {
  const scrollToPlans = () => {
    document.getElementById('meal-plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background elements derived from logo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-rose-50/50 rounded-bl-[100px] -z-10" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-sky-100/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-green-100/40 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Hero Content */}
        <div className="max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 font-bold text-xs mb-6 tracking-wide shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            NOW DELIVERING ACROSS DUBAI
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6">
            Mom's Indian Flavours in <span className="text-rose-500 font-logo font-normal italic pr-2">Dubai</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Fresh homemade meals cooked with <span className="text-rose-500 font-bold">love</span>, delivered to your doorstep. Crafted home-style meal subscriptions for busy professionals, families, and students.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button 
              onClick={scrollToPlans}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-bold rounded-full shadow-lg shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/40 hover:-translate-y-1 transition-all"
            >
              View Meal Plans
            </button>
            <a 
              href={`tel:${WHATSAPP_NUMBER}`}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 font-bold rounded-full border border-slate-200 shadow-sm hover:bg-slate-50 hover:-translate-y-1 transition-all"
            >
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white">
                <PhoneCall size={12} />
              </div>
              +971 55 799 8925
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-6 mt-10 text-sm font-bold text-slate-500">
            <div className="flex items-center gap-2"><CheckCircle2 className="text-green-500" size={18} /> Fresh Ingredients</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="text-green-500" size={18} /> Zero Preservatives</div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative z-10 flex justify-center lg:justify-end">
          <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px]">
            {/* Decorative Blob */}
            <div className="absolute inset-0 bg-green-200 blob-shape opacity-40 transform rotate-12 scale-110" />
            <div className="absolute inset-0 bg-rose-200 blob-shape opacity-30 transform -rotate-12 scale-105 animation-delay-2000" />
            {/* Main Image */}
            <img 
              src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1000&auto=format&fit=crop" 
              alt="Delicious Indian Thali" 
              className="absolute inset-0 w-full h-full object-cover rounded-full shadow-2xl border-8 border-white z-10"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-2xl">🍲</div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Taste</p>
                <p className="text-slate-900 font-black">Ghar Jaisa!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .blob-shape {
          border-radius: 41% 59% 47% 53% / 41% 44% 56% 59%;
          animation: morph 8s ease-in-out infinite;
        }
        @keyframes morph {
          0%, 100% { border-radius: 41% 59% 47% 53% / 41% 44% 56% 59%; }
          34% { border-radius: 54% 46% 39% 61% / 54% 56% 44% 46%; }
          67% { border-radius: 46% 54% 58% 42% / 46% 41% 59% 54%; }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}} />
    </section>
  );
}
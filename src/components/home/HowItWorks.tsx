'use client';

import React from 'react';
import { Calendar, Utensils, Truck, Smile } from 'lucide-react';

const HOW_IT_WORKS = [
  { 
    step: 1, 
    title: 'Choose Your Plan', 
    desc: 'Select from our weekly or monthly veg and non-veg options.', 
    icon: Calendar 
  },
  { 
    step: 2, 
    title: 'We Cook With Love', 
    desc: 'Our chefs prepare fresh meals daily using premium ingredients.', 
    icon: Utensils 
  },
  { 
    step: 3, 
    title: 'Daily Delivery', 
    desc: 'Get your meals delivered right to your doorstep, fresh and hot.', 
    icon: Truck 
  },
  { 
    step: 4, 
    title: 'Enjoy Your Meal', 
    desc: 'Relish the authentic, home-cooked taste without the hassle.', 
    icon: Smile 
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">How It Works</h2>
          <div className="w-24 h-1.5 bg-rose-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOW_IT_WORKS.map((item) => {
            const Icon = item.icon;
            
            return (
              <div 
                key={item.step} 
                className="bg-white rounded-[2rem] p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 hover:-translate-y-2 transition-transform duration-300 relative group"
              >
                {/* Icon Container */}
                <div className="w-20 h-20 mx-auto bg-slate-50 rounded-full flex items-center justify-center text-slate-700 shadow-inner border border-slate-100 mb-6 relative z-10 group-hover:scale-110 group-hover:bg-rose-50 group-hover:text-rose-500 transition-all duration-300">
                  <Icon size={32} />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center text-white text-xs font-black shadow-sm">
                    {item.step}
                  </div>
                </div>
                
                {/* Text Content */}
                <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
'use client';

import React from 'react';
import { Star } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Image & Testimonial Overlay */}
        <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-xl group border border-slate-100">
          <img 
            src="https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?q=80&w=1000&auto=format&fit=crop" 
            alt="Indian Roti and Curry" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
          
          <div className="absolute bottom-8 left-8 text-white pr-8">
            <div className="flex text-amber-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="font-bold text-2xl drop-shadow-lg mb-2">
              "Best tiffin service in Dubai!"
            </p>
            <p className="text-sm font-medium opacity-90 drop-shadow-md text-slate-200">
              - Priya S.
            </p>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <span className="text-rose-500 font-black text-sm uppercase tracking-[3px] mb-3 block">
            About The Chef Mom
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            From a Delhi Kitchen to Dubai Homes
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            The Chef Mom was created with a simple mission — to bring the comforting taste of authentic Delhi-style home cooking to people living in Dubai.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            For many people living away from home, the biggest thing they miss is <strong className="text-slate-900 bg-rose-50 px-2 py-0.5 rounded">ghar ka khana</strong> — fresh, simple, and full of flavour. Every meal is prepared by female home chefs using fresh ingredients, traditional spices, and recipes passed through generations.
          </p>
          
          {/* Highlight Box */}
          <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl border-l-4 border-l-green-500 flex items-start gap-4 shadow-sm">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm text-2xl">
              👩‍🍳
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg">Our Goal is Simple:</h4>
              <p className="text-slate-600 mt-1 leading-relaxed">
                To make every meal feel like it was cooked in your mom's kitchen. Less oil, balanced spices, maximum love.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
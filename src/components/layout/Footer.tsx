'use client';

import React from 'react';
import { PhoneCall, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & About */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center text-white">
                <span className="text-2xl">👩‍🍳</span>
              </div>
              <span className="font-logo text-3xl font-normal text-white leading-none">
                The Chef Mom
              </span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed mb-6 font-medium">
              Bringing the authentic taste of Delhi to Dubai. Healthy, homemade, and hygienic daily meals.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all text-white shadow-sm"
              >
                IG
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all text-white shadow-sm"
              >
                FB
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black uppercase tracking-wider mb-6 text-sm">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#about" className="hover:text-rose-400 transition-colors">About Us</a></li>
              <li><a href="#meal-plans" className="hover:text-rose-400 transition-colors">Meal Plans</a></li>
              <li><a href="#how-it-works" className="hover:text-rose-400 transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-black uppercase tracking-wider mb-6 text-sm">
              Contact
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-3">
                <PhoneCall size={18} className="text-rose-400" /> 
                +971 55 799 8925
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-green-400" /> 
                WhatsApp Orders
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-sky-400 shrink-0" /> 
                Delivering across major locations in Dubai.
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-sm font-medium text-slate-500">
          © {new Date().getFullYear()} The Chef Mom Dubai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
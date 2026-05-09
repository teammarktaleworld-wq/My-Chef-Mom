'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu } from 'lucide-react';

interface NavbarProps {
  onOpenCart?: () => void;
  cartItemCount?: number;
}

export default function Navbar({ onOpenCart, cartItemCount = 3 }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener for sticky navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Ensure the custom logo font is available */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
        .font-logo { font-family: 'Pacifico', cursive; }
      `}} />

      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">👩‍🍳</span>
            </div>
            <div className="flex flex-col">
              <span className="font-logo text-2xl font-normal text-rose-500 leading-none tracking-wide">
                The Chef Mom
              </span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8 font-medium text-slate-600">
            <a href="#about" className="hover:text-rose-500 transition-colors">About Us</a>
            <a href="#meal-plans" className="text-slate-900 border-b-2 border-rose-500 pb-1">Meal Plans</a>
            <a href="#how-it-works" className="hover:text-rose-500 transition-colors">How It Works</a>
            <a href="#delivery" className="hover:text-rose-500 transition-colors">Delivery</a>
            <button className="px-5 py-2.5 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-all shadow-md hover:shadow-lg shadow-rose-500/30 font-bold">
              Order Now
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-5">
            <button className="text-slate-600 hover:text-rose-500 transition-colors hidden sm:block">
              <Search size={20} />
            </button>
            
            <button 
              className="relative text-slate-600 hover:text-rose-500 transition-colors"
              onClick={onOpenCart}
            >
              <ShoppingBag size={22} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-white">
                  {cartItemCount}
                </span>
              )}
            </button>

            <button className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-slate-100 text-slate-700 font-bold rounded-full hover:bg-slate-200 transition-colors">
              <span className="text-sm">Login</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden text-slate-800">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
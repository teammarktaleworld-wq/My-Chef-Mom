'use client';

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { MEAL_PLANS } from '@/components/data/mealPlans';

const WHATSAPP_NUMBER = "+971557998925";

export default function MealPlans() {
  const [activePlanTab, setActivePlanTab] = useState<'veg' | 'nonveg'>('veg');

  const activeData = MEAL_PLANS[activePlanTab];
  const ActiveIcon = activeData.icon;

  return (
    <section id="meal-plans" className="py-24 bg-white relative">
      {/* Soft Background Accent */}
      <div className="absolute top-0 w-full h-[400px] bg-slate-900" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-sky-400 font-bold text-sm uppercase tracking-[3px] mb-3 block">
            Subscription
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Choose Your Meal Plan
          </h2>
          <p className="text-slate-400 mt-4 text-lg">
            6 Days a Week • 26 Days a Month • Free Delivery
          </p>
        </div>

        {/* Toggle Veg / Non-Veg */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800 p-1.5 rounded-full inline-flex shadow-inner">
            <button 
              onClick={() => setActivePlanTab('veg')}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all ${
                activePlanTab === 'veg' 
                  ? 'bg-white text-green-600 shadow-sm' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <MEAL_PLANS.veg.icon size={18} /> Veg Plans
            </button>
            <button 
              onClick={() => setActivePlanTab('nonveg')}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all ${
                activePlanTab === 'nonveg' 
                  ? 'bg-white text-rose-600 shadow-sm' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <MEAL_PLANS.nonveg.icon size={18} /> Non-Veg Plans
            </button>
          </div>
        </div>

        {/* Plan Content Container */}
        <div className="bg-slate-50 rounded-[3rem] p-6 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-200">
          
          {/* Header for Category */}
          <div className="text-center mb-12">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${activeData.color} text-white shadow-lg ${activeData.shadow} mb-4`}>
              <ActiveIcon size={32} />
            </div>
            <h3 className="text-3xl font-black text-slate-900">{activeData.brand}</h3>
            <p className="text-slate-500 font-medium mt-1">{activeData.tagline}</p>
          </div>

          {/* 1 Meal / Day Plans */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h4 className="text-xl font-black text-slate-900 whitespace-nowrap">1 Meal / Day</h4>
              <div className="h-px bg-slate-200 w-full"></div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">Lunch OR Dinner</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {activeData.oneMeal.map((plan, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                  <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${activeData.color}`} />
                  
                  <h5 className="text-2xl font-black text-slate-900 mb-2">{plan.name}</h5>
                  
                  <div className="flex gap-6 mt-6 mb-8 pb-8 border-b border-slate-100">
                    <div>
                      <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Weekly</p>
                      <p className="text-3xl font-black text-slate-800">AED {plan.weekly}</p>
                    </div>
                    <div className="w-px bg-slate-200"></div>
                    <div>
                      <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Monthly</p>
                      <p className={`text-3xl font-black ${activePlanTab === 'veg' ? 'text-green-600' : 'text-rose-600'}`}>AED {plan.monthly}</p>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-slate-600 font-medium">
                        <CheckCircle2 size={18} className={activePlanTab === 'veg' ? 'text-green-500' : 'text-rose-500'} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="block w-full text-center py-4 rounded-xl border-2 border-slate-200 text-slate-800 font-bold hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all"
                  >
                    Subscribe Now
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* 2 Meals / Day Plans */}
          <div>
             <div className="flex items-center gap-4 mb-8">
              <h4 className="text-xl font-black text-slate-900 whitespace-nowrap">2 Meals / Day</h4>
              <div className="h-px bg-slate-200 w-full"></div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">Lunch & Dinner</span>
            </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {activeData.twoMeals.map((plan, idx) => (
                <div key={idx} className={`bg-white rounded-3xl p-8 border ${plan.badge ? (activePlanTab === 'veg' ? 'border-green-500 shadow-green-100' : 'border-rose-500 shadow-rose-100') + ' shadow-2xl relative scale-100 md:scale-105 z-10' : 'border-slate-200 shadow-sm'} hover:shadow-xl transition-all flex flex-col`}>
                  {plan.badge && (
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 ${activeData.badgeBg} text-white text-xs font-black uppercase tracking-widest py-1.5 px-4 rounded-b-xl shadow-sm whitespace-nowrap`}>
                      {plan.badge}
                    </div>
                  )}
                  
                  <h5 className={`text-xl font-black text-slate-900 mb-2 ${plan.badge ? 'mt-4' : ''}`}>{plan.name}</h5>
                  <div className="mb-6">
                    <span className="text-4xl font-black text-slate-900">AED {plan.price}</span>
                    <span className="text-slate-400 font-medium ml-1">/ month</span>
                  </div>

                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-slate-600 font-medium text-sm">
                        <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${activePlanTab === 'veg' ? 'text-green-500' : 'text-rose-500'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${plan.badge ? `bg-gradient-to-r ${activeData.color} text-white shadow-md hover:shadow-lg ${activeData.shadow}` : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}
                  >
                    Select Plan
                  </a>
                </div>
              ))}
             </div>
          </div>

          {/* Trial Banner */}
          <div className="mt-16 bg-sky-50 border border-sky-100 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-sky-200 rounded-full blur-3xl opacity-50 pointer-events-none" />
            <div className="flex items-center gap-5 relative z-10">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm">🎁</div>
              <div>
                <h4 className="text-xl font-black text-slate-900">Want to taste before subscribing?</h4>
                <p className="text-slate-600 font-medium mt-1">Try our 2-day trial meal option.</p>
              </div>
            </div>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`} 
              target="_blank" 
              rel="noreferrer" 
              className="relative z-10 px-8 py-4 bg-white border border-slate-200 rounded-full font-bold text-slate-800 hover:border-sky-500 hover:text-sky-600 hover:shadow-md transition-all whitespace-nowrap"
            >
              Book Trial
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
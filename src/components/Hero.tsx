import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Bold Color Streaks / Light Flares */}
      <div className="absolute top-[15%] left-[-5%] w-[30%] h-[12%] bg-[#0EA5A4]/80 blur-[30px] rounded-full rotate-[-10deg] animate-float-slow z-0" />
      <div className="absolute top-[15%] left-[-2%] w-[15%] h-[6%] bg-cyan-400/40 blur-[15px] rounded-full rotate-[-10deg] animate-float-slow z-0" />
      
      <div className="absolute top-[25%] right-[-5%] w-[25%] h-[10%] bg-[#F97316]/80 blur-[30px] rounded-full rotate-[10deg] animate-float-slower z-0" />
      <div className="absolute top-[25%] right-[-2%] w-[12%] h-[5%] bg-orange-400/40 blur-[15px] rounded-full rotate-[10deg] animate-float-slower z-0" />
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0EA5A4]/10 text-[#0EA5A4] text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3 h-3" />
              Next-Gen AI Intelligence
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
              Custom AI Solutions for <span className="text-[#003366] whitespace-nowrap">Modern Business</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-800 font-medium mb-10 max-w-2xl leading-relaxed">
              Turn AI into measurable business impact in under 6 months.<br className="hidden md:block" />
              We build production-ready intelligence that scales with your ambition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#F97316] text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#EA580C] transition-all shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1"
              >
                Book a call <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-all shadow-sm"
              >
                Explore more
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative z-10 w-full max-w-[450px]">
              <img 
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1000&h=1400" 
                alt="High-tech AI Visualization" 
                className="rounded-2xl shadow-2xl object-cover w-full aspect-[3/4]"
                referrerPolicy="no-referrer"
              />
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 glass-card p-6 rounded-xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Processing Efficiency</div>
                    <div className="text-lg font-bold text-slate-900">+142%</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <div className="w-4 h-4 bg-orange-500 rounded-full" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">ROI Delivered</div>
                    <div className="text-lg font-bold text-slate-900">6.4x</div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-[#0EA5A4]/30 to-[#F97316]/30 blur-[60px] -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

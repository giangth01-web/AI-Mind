import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, ArrowRight, User, Briefcase, Building2, Globe, Phone, Calendar, Clock, ChevronDown } from 'lucide-react';

const CTA = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    companyName: '',
    businessEmail: '',
    phone: '',
    website: '',
    industry: '',
    otherIndustry: '',
    companySize: '',
    meetingType: 'General Consultation (30m)',
    preferredDate: '',
    preferredTime: '',
    additionalInfo: ''
  });

  const industries = ['Finance', 'Manufacturing', 'E-commerce', 'Education', 'SaaS', 'Healthcare', 'Other'];
  const companySizes = ['<50 employees', '50 – 200', '200 – 1,000', '1,000+'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add submission logic here
    alert('Thank you for your request. We will contact you shortly.');
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[3rem] overflow-hidden bg-slate-900 p-8 md:p-16 lg:p-20">
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,#0EA5A4_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-slate-900/90" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side: Content */}
            <div className="max-w-xl">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1]"
              >
                Ready to Operationalize AI?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-slate-300 mb-12 leading-relaxed"
              >
                Join the forward-thinking enterprises that are already transforming their operations with AI Mind. Let's build your future today.
              </motion.p>
              
              <div className="space-y-8 pt-12 border-t border-white/10">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <Mail className="w-6 h-6 text-[#0EA5A4]" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Email Us</div>
                    <div className="text-white text-lg font-medium">hello@aimind.tech</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <MessageSquare className="w-6 h-6 text-[#F97316]" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">WhatsApp</div>
                    <div className="text-white text-lg font-medium">+84 123 456 789</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-slate-100"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Section: Basic Information */}
                <div>
                  <h3 className="text-sm font-black text-[#003366] uppercase tracking-widest mb-6 flex items-center gap-2">
                    Basic Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Full Name"
                        required
                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0EA5A4]/20 focus:border-[#0EA5A4] transition-all text-slate-900 placeholder:text-slate-400"
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      />
                    </div>
                    <div className="relative">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Job Title"
                        required
                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0EA5A4]/20 focus:border-[#0EA5A4] transition-all text-slate-900 placeholder:text-slate-400"
                        onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                      />
                    </div>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Company Name"
                        required
                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0EA5A4]/20 focus:border-[#0EA5A4] transition-all text-slate-900 placeholder:text-slate-400"
                        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        placeholder="Business Email"
                        required
                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0EA5A4]/20 focus:border-[#0EA5A4] transition-all text-slate-900 placeholder:text-slate-400"
                        onChange={(e) => setFormData({...formData, businessEmail: e.target.value})}
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        placeholder="Phone / WhatsApp"
                        required
                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0EA5A4]/20 focus:border-[#0EA5A4] transition-all text-slate-900 placeholder:text-slate-400"
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="url"
                        placeholder="Company Website"
                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0EA5A4]/20 focus:border-[#0EA5A4] transition-all text-slate-900 placeholder:text-slate-400"
                        onChange={(e) => setFormData({...formData, website: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                {/* Section: Company Overview */}
                <div>
                  <h3 className="text-sm font-black text-[#003366] uppercase tracking-widest mb-6 flex items-center gap-2">
                    Company Overview
                  </h3>
                  <div className="space-y-6">
                    <div className="relative">
                      <select
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0EA5A4]/20 focus:border-[#0EA5A4] transition-all text-slate-900 appearance-none cursor-pointer"
                        onChange={(e) => setFormData({...formData, industry: e.target.value})}
                        defaultValue=""
                      >
                        <option value="" disabled>Select Industry</option>
                        {industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>

                    {formData.industry === 'Other' && (
                      <motion.input
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        type="text"
                        placeholder="Please specify industry"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0EA5A4]/20 focus:border-[#0EA5A4] transition-all text-slate-900"
                        onChange={(e) => setFormData({...formData, otherIndustry: e.target.value})}
                      />
                    )}

                    <div className="relative">
                      <select
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0EA5A4]/20 focus:border-[#0EA5A4] transition-all text-slate-900 appearance-none cursor-pointer"
                        onChange={(e) => setFormData({...formData, companySize: e.target.value})}
                        defaultValue=""
                      >
                        <option value="" disabled>Select Company Size</option>
                        {companySizes.map(size => <option key={size} value={size}>{size}</option>)}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Section: Scheduling */}
                <div>
                  <h3 className="text-sm font-black text-[#003366] uppercase tracking-widest mb-6 flex items-center gap-2">
                    Meeting Details
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                      <span className="text-slate-900 font-medium">General Consultation</span>
                      <span className="text-xs font-bold text-[#0EA5A4] bg-[#0EA5A4]/10 px-3 py-1 rounded-full">30m</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="date"
                          required
                          className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0EA5A4]/20 focus:border-[#0EA5A4] transition-all text-slate-900"
                          onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                        />
                      </div>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="time"
                          required
                          className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0EA5A4]/20 focus:border-[#0EA5A4] transition-all text-slate-900"
                          onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section: Additional Information */}
                <div>
                  <h3 className="text-sm font-black text-[#003366] uppercase tracking-widest mb-6 flex items-center gap-2">
                    Additional Information
                  </h3>
                  <textarea
                    placeholder="Tell us about your project or specific requirements..."
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0EA5A4]/20 focus:border-[#0EA5A4] transition-all text-slate-900 placeholder:text-slate-400 resize-none"
                    onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#003366] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#002244] transition-all flex items-center justify-center gap-3 shadow-xl group"
                >
                  Request Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

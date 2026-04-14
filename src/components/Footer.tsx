import React, { useState } from 'react';
import { BrainCircuit, Github, Linkedin, Twitter } from 'lucide-react';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import TermsOfServiceModal from './TermsOfServiceModal';

const Footer = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <BrainCircuit className="w-8 h-8 text-[#0EA5A4]" />
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                AI <span className="text-[#F97316]">Mind</span>
              </span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed mb-8">
              Operationalizing intelligence for the modern enterprise. We build custom AI solutions that deliver measurable business impact.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-[#0EA5A4] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-[#0EA5A4] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-[#0EA5A4] transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-500 hover:text-[#0EA5A4] transition-colors">Home</a></li>
              <li><a href="#about" className="text-slate-500 hover:text-[#0EA5A4] transition-colors">About Us</a></li>
              <li><a href="#solutions" className="text-slate-500 hover:text-[#0EA5A4] transition-colors">Solutions</a></li>
              <li><a href="#contact" className="text-slate-500 hover:text-[#0EA5A4] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => setIsPrivacyModalOpen(true)}
                  className="text-slate-500 hover:text-[#0EA5A4] transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setIsTermsModalOpen(true)}
                  className="text-slate-500 hover:text-[#0EA5A4] transition-colors"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2026 AI Mind. All rights reserved.
          </p>
        </div>
      </div>

      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />

      <TermsOfServiceModal 
        isOpen={isTermsModalOpen} 
        onClose={() => setIsTermsModalOpen(false)} 
      />
    </footer>
  );
};

export default Footer;

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-3xl max-h-[85vh] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="relative h-48 bg-[#003366] flex items-center justify-center overflow-hidden flex-shrink-0">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#0EA5A4_0%,transparent_70%)]" />
              </div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-black text-white tracking-tight">Privacy Policy</h2>
              </div>
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl text-white transition-all z-20 border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 sm:p-10 overflow-y-auto custom-scrollbar">
              <div className="space-y-8">
                <p className="text-slate-600 leading-relaxed font-medium text-lg">
                  At AI Mind, we are committed to protecting your data and ensuring transparency in how we collect, use, and secure your information.
                </p>

                <section>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#0EA5A4] mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[#0EA5A4]/10 flex items-center justify-center text-[10px]">1</span>
                    Information We Collect
                  </h3>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <p className="text-slate-500 text-sm mb-4 font-bold">We may collect:</p>
                    <ul className="space-y-3">
                      {[
                        'Account information (name, email, company)',
                        'Usage data (features used, interactions, logs)',
                        'Uploaded data (documents, inputs processed by AI)'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5A4] mt-2 flex-shrink-0" />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#F97316] mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[#F97316]/10 flex items-center justify-center text-[10px]">2</span>
                    How We Use Your Data
                  </h3>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <p className="text-slate-500 text-sm mb-4 font-bold">Your data is used to:</p>
                    <ul className="space-y-3">
                      {[
                        'Provide and improve our services',
                        'Generate AI-driven insights and recommendations',
                        'Ensure system performance, security, and reliability'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F97316] mt-2 flex-shrink-0" />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#003366] mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[#003366]/10 flex items-center justify-center text-[10px]">3</span>
                    Data Security
                  </h3>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <p className="text-slate-600 leading-relaxed font-medium">
                      We implement industry-standard security measures, including encryption, access control, and monitoring, to protect your data at all times.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-indigo-600 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-indigo-600/10 flex items-center justify-center text-[10px]">4</span>
                    Data Access & Control
                  </h3>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <ul className="space-y-4">
                      {[
                        'Role-based access ensures only authorized users can view specific data',
                        'You retain ownership of your data',
                        'You can request data access, export, or deletion at any time'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-emerald-600/10 flex items-center justify-center text-[10px]">5</span>
                    Third-Party Services
                  </h3>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <p className="text-slate-600 leading-relaxed font-medium">
                      We may use trusted third-party services for infrastructure and analytics, all compliant with strict data protection standards.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-rose-600 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-rose-600/10 flex items-center justify-center text-[10px]">6</span>
                    Updates
                  </h3>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <p className="text-slate-600 leading-relaxed font-medium">
                      We may update this policy from time to time. Continued use of the platform means you accept the latest version.
                    </p>
                  </div>
                </section>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-center flex-shrink-0">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-[#003366] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#002244] transition-all shadow-lg shadow-[#003366]/20"
              >
                Close Policy
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyPolicyModal;

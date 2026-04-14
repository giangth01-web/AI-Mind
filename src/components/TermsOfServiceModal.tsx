import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, FileText } from 'lucide-react';

interface TermsOfServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfServiceModal: React.FC<TermsOfServiceModalProps> = ({ isOpen, onClose }) => {
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
            <div className="relative h-48 bg-[#0EA5A4] flex items-center justify-center overflow-hidden flex-shrink-0">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#003366_0%,transparent_70%)]" />
              </div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-black text-white tracking-tight">Terms of Service</h2>
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
                  By using AI Mind, you agree to the following terms:
                </p>

                <section>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#0EA5A4] mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[#0EA5A4]/10 flex items-center justify-center text-[10px]">1</span>
                    Use of Service
                  </h3>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <p className="text-slate-600 leading-relaxed font-medium">
                      You agree to use the platform only for lawful business purposes and in compliance with all applicable regulations.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#F97316] mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[#F97316]/10 flex items-center justify-center text-[10px]">2</span>
                    Account Responsibility
                  </h3>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <p className="text-slate-500 text-sm mb-4 font-bold">You are responsible for:</p>
                    <ul className="space-y-3">
                      {[
                        'Maintaining account security',
                        'Managing access permissions within your organization'
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
                    AI-Generated Content
                  </h3>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <p className="text-slate-600 leading-relaxed font-medium">
                      AI Mind provides insights and recommendations to support decision-making. Final decisions and actions remain the responsibility of the user.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-indigo-600 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-indigo-600/10 flex items-center justify-center text-[10px]">4</span>
                    Data & Privacy
                  </h3>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <p className="text-slate-600 leading-relaxed font-medium">
                      Your data remains yours. We do not sell your data to third parties. All data is handled according to our Privacy Policy.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-emerald-600/10 flex items-center justify-center text-[10px]">5</span>
                    Service Availability
                  </h3>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <p className="text-slate-600 leading-relaxed font-medium">
                      We strive to ensure high availability but do not guarantee uninterrupted or error-free operation at all times.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-rose-600 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-rose-600/10 flex items-center justify-center text-[10px]">6</span>
                    Limitation of Liability
                  </h3>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <p className="text-slate-500 text-sm mb-4 font-bold">AI Mind is not liable for:</p>
                    <ul className="space-y-3">
                      {[
                        'Business losses resulting from decisions made using AI outputs',
                        'Indirect or consequential damages'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-600 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-slate-600/10 flex items-center justify-center text-[10px]">7</span>
                    Termination
                  </h3>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <p className="text-slate-600 leading-relaxed font-medium">
                      We reserve the right to suspend or terminate accounts that violate these terms.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-600/10 flex items-center justify-center text-[10px]">8</span>
                    Changes to Terms
                  </h3>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <p className="text-slate-600 leading-relaxed font-medium">
                      We may update these terms periodically. Continued use of the platform constitutes acceptance of the updated terms.
                    </p>
                  </div>
                </section>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-center flex-shrink-0">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-[#0EA5A4] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#0C8E8D] transition-all shadow-lg shadow-[#0EA5A4]/20"
              >
                Accept Terms
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TermsOfServiceModal;

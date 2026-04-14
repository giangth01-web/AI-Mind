import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ArrowDown } from 'lucide-react';

const Deployment = () => {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "Identify high-impact use cases with clear ROI.",
      details: ["ROI projection", "Strategic alignment", "Use case mapping"],
      accent: "from-blue-500 to-indigo-600",
      bg: "bg-blue-50/50",
      border: "border-blue-100"
    },
    {
      number: "02",
      title: "Build",
      description: "Deploy production-ready AI integrated into workflows.",
      details: ["Workflow integration", "Production-ready AI", "Seamless deployment"],
      accent: "from-orange-500 to-red-600",
      bg: "bg-orange-50/50",
      border: "border-orange-100"
    },
    {
      number: "03",
      title: "Operate",
      description: "Govern, monitor and optimize performance.",
      details: ["Performance monitoring", "Governance framework", "Continuous optimization"],
      accent: "from-emerald-500 to-teal-600",
      bg: "bg-emerald-50/50",
      border: "border-emerald-100"
    },
    {
      number: "04",
      title: "Scale",
      description: "Expand into cross-functional intelligence systems.",
      details: ["Multi-agent systems", "Cross-functional AI", "Enterprise-wide scale"],
      accent: "from-violet-500 to-purple-600",
      bg: "bg-violet-50/50",
      border: "border-violet-100"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-[#003366] leading-tight mb-4">How We Deploy AI</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">A streamlined path to intelligence</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`group relative p-8 rounded-[2rem] ${step.bg} border ${step.border} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col`}
                >
                  {/* Step Number Badge */}
                  <div className={`absolute -top-4 left-8 px-4 py-1 rounded-full bg-gradient-to-r ${step.accent} text-white text-xs font-black shadow-lg`}>
                    STEP {step.number}
                  </div>

                  <div className="flex justify-between items-start mb-6 mt-2">
                    <div className={`p-3 rounded-2xl bg-white shadow-sm group-hover:shadow-md transition-all`}>
                      <CheckCircle2 className={`w-6 h-6 bg-gradient-to-br ${step.accent} text-white rounded-full p-0.5`} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#003366] mb-3 group-hover:translate-x-1 transition-transform">{step.title}</h3>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed font-medium flex-grow">
                    {step.description}
                  </p>

                  <div className="pt-6 border-t border-slate-100">
                    <ul className="space-y-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-500">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.accent}`} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Connector Arrows */}
                {index < steps.length - 1 && (
                  <>
                    {/* Desktop Arrow */}
                    <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-8 h-8 rounded-full bg-white border border-slate-100 shadow-md text-slate-300 group-hover:text-slate-600 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    {/* Tablet/Mobile Arrow */}
                    <div className="lg:hidden flex justify-center py-4 text-slate-200">
                      <ArrowDown className="w-6 h-6 animate-bounce" />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deployment;

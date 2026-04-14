import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Globe, BarChart3, Layers } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Proven enterprise architecture",
      description: "Built on an enterprise-grade architecture that ensures reliability, security and seamless integration across complex systems.",
      icon: Layers,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "Designed for scalability",
      description: "Engineered to grow with your business from initial use cases to large-scale deployments without performance compromise.",
      icon: Zap,
      color: "text-amber-500",
      bg: "bg-amber-50"
    },
    {
      title: "Strong compliance readiness",
      description: "Aligned with international standards and best practices, enabling easier adaptation to regulatory requirements across markets.",
      icon: ShieldCheck,
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    },
    {
      title: "Market-fit for Japan, Korea & APAC",
      description: "Designed to meet the unique operational, cultural and business expectations of key Asian markets.",
      icon: Globe,
      color: "text-indigo-500",
      bg: "bg-indigo-50"
    },
    {
      title: "Built for long-term value",
      description: "Focused on sustainable impact, helping businesses create lasting competitive advantage through AI.",
      icon: BarChart3,
      color: "text-rose-500",
      bg: "bg-rose-50"
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-[#003366] leading-[1.1] mb-6">
            Why AI Mind
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We bridge the gap between AI potential and real-world operational excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all border border-slate-100 group"
            >
              <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Mail, MessageCircle } from 'lucide-react';

const Experts = () => {
  const experts = [
    {
      name: "David Truong",
      role: "Chairman, AI Mind",
      email: "david@aimind.vn",
      whatsapp: "https://wa.me/84934888363",
      avatar: "https://picsum.photos/seed/phuc/400/400"
    },
    {
      name: "Resoln Nguyen",
      role: "Co-founder, CEO, AI Mind",
      email: "resoln@aimind.vn",
      whatsapp: "https://wa.me/8438104272",
      avatar: "https://picsum.photos/seed/khoa/400/400"
    },
    {
      name: "Parrell Nguyen",
      role: "Co-founder, CTO, AI Mind",
      email: "pharrell@aimind.vn",
      whatsapp: "https://wa.me/84762366204",
      avatar: "https://picsum.photos/seed/anh/400/400"
    },
    {
      name: "Alan Dang",
      role: "Sr. Business Transformation Advisor",
      whatsapp: "https://wa.me/84854383738",
      linkedin: "https://www.linkedin.com/in/thanhdang3011/",
      avatar: "https://picsum.photos/seed/thanh/400/400"
    },
    {
      name: "Tracy Ha",
      role: "Director of Business Consulting",
      whatsapp: "https://wa.me/84946251995",
      linkedin: "https://www.linkedin.com/in/tracy-ngoc/",
      avatar: "https://picsum.photos/seed/tracy/400/400"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-[#003366] leading-[1.1] mb-6">Meet Our Experts</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {experts.map((expert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-8 inline-block">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0EA5A4] to-[#F97316] rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <img 
                  src={expert.avatar} 
                  alt={expert.name} 
                  className="w-48 h-48 rounded-full object-cover relative z-10 border-4 border-white shadow-xl grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{expert.name}</h3>
              <p className="text-[#0EA5A4] font-bold text-sm uppercase tracking-wider mb-8">{expert.role}</p>
              
              <div className="flex justify-center items-center gap-4">
                {expert.email && (
                  <a 
                    href={`mailto:${expert.email}`}
                    className="p-3 bg-slate-50 rounded-full text-slate-400 hover:text-[#0EA5A4] hover:bg-slate-100 transition-all duration-300"
                    title={expert.email}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                )}
                {expert.whatsapp && (
                  <a 
                    href={expert.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-50 rounded-full text-slate-400 hover:text-[#0EA5A4] hover:bg-slate-100 transition-all duration-300"
                    title="WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                )}
                {expert.linkedin && (
                  <a 
                    href={expert.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-50 rounded-full text-slate-400 hover:text-[#0EA5A4] hover:bg-slate-100 transition-all duration-300"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;

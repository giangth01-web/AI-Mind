import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Rocket, 
  TrendingUp, 
  Building2, 
  Search, 
  Lock,
  X,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Shield,
  Zap,
  Users,
  Layers,
  Database,
  Cpu,
  Sparkles,
  BarChart3,
  Target,
  Palette,
  Share2,
  ShoppingBag,
  LineChart,
  PieChart,
  Activity,
  FileText,
  Briefcase,
  Globe,
  Eye,
  BarChart,
  ShieldCheck,
  FileCheck,
  AlertTriangle,
  UserCheck,
  Server,
  Package,
  Lightbulb
} from 'lucide-react';

const ModalLayout = ({ 
  isOpen, 
  onClose, 
  title, 
  subtitle, 
  icon: Icon, 
  headerGradient, 
  children 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  title: string; 
  subtitle: string; 
  icon: any; 
  headerGradient: string; 
  children: React.ReactNode;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-900/40 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white/95 w-full max-w-6xl max-h-[90vh] rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] flex flex-col relative border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* High-tech Header */}
            <div className={`relative h-56 md:h-72 flex-shrink-0 ${headerGradient} overflow-hidden`}>
              {/* Futuristic Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                <motion.div 
                  animate={{ 
                    opacity: [0.1, 0.3, 0.1],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
              </div>

              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-8 right-8 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all z-20 border border-white/20 group"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
              </button>

              <div className="absolute bottom-10 left-10 md:left-16 right-16 z-10">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4 mb-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center text-white shadow-2xl border border-white/20">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="h-px w-12 bg-white/30" />
                  <span className="text-white/70 text-sm font-black tracking-[0.3em] uppercase">{subtitle}</span>
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none"
                >
                  {title}
                </motion.h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="flex-grow overflow-y-auto custom-scrollbar">
              <div className="p-10 md:p-16">
                {children}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-8 border-t border-slate-100 bg-slate-50/50 flex justify-center flex-shrink-0">
              <button 
                onClick={onClose}
                className="group relative px-12 py-4 rounded-2xl bg-slate-900 text-white font-bold overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10">Close Deep Dive</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Services = () => {
  const [isAcceleratorModalOpen, setIsAcceleratorModalOpen] = useState(false);
  const [isGrowthModalOpen, setIsGrowthModalOpen] = useState(false);
  const [isFinanceModalOpen, setIsFinanceModalOpen] = useState(false);
  const [isScoutModalOpen, setIsScoutModalOpen] = useState(false);
  const [isGovernanceModalOpen, setIsGovernanceModalOpen] = useState(false);

  const services = [
    {
      title: "ENTERPRISE & CORE AI INTELLIGENCE",
      subtitle: "AI-powered enterprise operations at scale",
      description: "AI-powered enterprise operations at scale.\nStreamline processes, connect data, and drive faster, data-driven decisions.",
      features: ["Intelligent process automation", "AI agents across departments", "Unified enterprise data layer"],
      icon: Rocket,
      image: "https://picsum.photos/seed/enterprise-ai/800/600",
      accent: "from-blue-600 to-indigo-600",
      bgAccent: "bg-blue-50",
      textAccent: "text-blue-600",
      shadowAccent: "hover:shadow-blue-500/20",
      ctaPrimary: "Try Demo",
      ctaPrimaryLink: "https://docsend.com/view/5tcixdqxsyvxg6qu",
      ctaSecondary: "Explore More"
    },
    {
      title: "MARKETING, BRAND & GROWTH AI",
      subtitle: "Scale your marketing with AI-driven growth",
      description: "Scale your marketing with AI-driven growth.\nCreate, optimize, and personalize campaigns in real time without increasing team size.",
      features: [
        "AI content creation (text, image, video)",
        "Customer persona & behavior intelligence",
        "Cross-channel campaign optimization",
        "AI influencers & digital brand ambassadors",
        "Personalized customer experiences at scale"
      ],
      icon: TrendingUp,
      image: "https://picsum.photos/seed/growth-ai/800/600",
      accent: "from-rose-500 to-pink-600",
      bgAccent: "bg-rose-50",
      textAccent: "text-rose-600",
      shadowAccent: "hover:shadow-rose-500/20",
      ctaPrimary: "Try Demo",
      ctaPrimaryLink: "https://docsend.com/view/aprrak6sb6tjct7z",
      ctaSecondary: "Explore More"
    },
    {
      title: "COMMERCE & EXPERIENCE AI",
      subtitle: "Enhance customer experience and drive revenue with AI",
      description: "Enhance customer experience and drive revenue with AI.\nEnable real-time interactions, intelligent ordering, and personalized journeys across every touchpoint.",
      features: [
        "AI-powered ordering & recommendation",
        "Conversational commerce (chat & voice)",
        "Real-time multilingual communication",
        "Customer experience personalization",
        "Smart upsell & revenue optimization"
      ],
      icon: ShoppingBag,
      image: "https://picsum.photos/seed/commerce-ai/800/600",
      accent: "from-violet-600 to-purple-700",
      bgAccent: "bg-violet-50",
      textAccent: "text-violet-600",
      shadowAccent: "hover:shadow-violet-500/20",
      ctaPrimary: "Try Demo",
      ctaPrimaryLink: "https://docsend.com/view/n7xbdm5iywunhipn",
      ctaSecondary: "Explore More"
    },
    {
      title: "AI BUSINESS INTELLIGENCE SCOUT",
      subtitle: "AI-Driven Enterprise Insights",
      description: "Turn complex enterprise data into clear insights using intelligent search and automated analytics.",
      features: ["AI enterprise search", "Natural language queries", "Automated insights generation"],
      icon: Search,
      image: "https://picsum.photos/seed/data-ai/800/600",
      accent: "from-amber-500 to-orange-600",
      bgAccent: "bg-amber-50",
      textAccent: "text-amber-600",
      shadowAccent: "hover:shadow-amber-500/20",
      ctaPrimary: "Try Demo",
      ctaPrimaryLink: "https://docsend.com/view/9mxr9x9xbn66xmsd",
      ctaSecondary: "Explore More"
    },
    {
      title: "AI GOVERNANCE SECURITY",
      subtitle: "Secure and Responsible AI Deployment",
      description: "Secure your business and ensure compliance with AI.\nProtect sensitive data, detect risks in real time, and automate compliance across operations.",
      features: [
        "Sensitive data detection & protection (PII)",
        "AI-powered risk & fraud monitoring",
        "Automated audit & compliance workflows",
        "Accounting automation & document processing",
        "Regulatory compliance & reporting"
      ],
      icon: Lock,
      image: "https://picsum.photos/seed/security-ai/800/600",
      accent: "from-cyan-500 to-blue-600",
      bgAccent: "bg-cyan-50",
      textAccent: "text-cyan-600",
      shadowAccent: "hover:shadow-cyan-500/20",
      ctaPrimary: "Try Demo",
      ctaPrimaryLink: "https://docsend.com/view/j7zqyctezbvhqngm",
      ctaSecondary: "Explore More"
    }
  ];

  return (
    <section id="solutions" className="py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-bold text-[#003366] leading-[1.1] mb-6">Solution Portfolio</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Fully customizable architecture by industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl ${service.shadowAccent} transition-all duration-500`}
            >
              {/* Image Banner */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60`} />
                <div className="absolute top-6 left-6">
                  <div className={`w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg ${service.textAccent}`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow flex flex-col">
                <div className="mb-6">
                  <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-2 ${service.textAccent}`}>
                    {service.subtitle}
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                    {service.title}
                  </h3>
                </div>

                <p className="text-slate-600 leading-relaxed mb-8 text-sm">
                  {service.description}
                </p>

                <div className="space-y-3 mb-10 flex-grow">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3 text-xs font-medium text-slate-500">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.accent}`} />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => {
                      if ('ctaPrimaryLink' in service && service.ctaPrimaryLink) {
                        window.open(service.ctaPrimaryLink as string, '_blank', 'noopener,noreferrer');
                      } else {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`flex-1 py-3.5 px-4 rounded-xl bg-gradient-to-r ${service.accent} text-white text-xs font-bold shadow-lg shadow-slate-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300`}
                  >
                    {service.ctaPrimary}
                  </button>
                  <button 
                    onClick={() => {
                      if (service.title === "ENTERPRISE & CORE AI INTELLIGENCE") {
                        setIsAcceleratorModalOpen(true);
                      } else if (service.title === "MARKETING, BRAND & GROWTH AI") {
                        setIsGrowthModalOpen(true);
                      } else if (service.title === "COMMERCE & EXPERIENCE AI") {
                        setIsFinanceModalOpen(true);
                      } else if (service.title === "AI BUSINESS INTELLIGENCE SCOUT") {
                        setIsScoutModalOpen(true);
                      } else if (service.title === "AI GOVERNANCE SECURITY") {
                        setIsGovernanceModalOpen(true);
                      } else {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="flex-1 py-3.5 px-4 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
                  >
                    {service.ctaSecondary}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* AI Enterprise Accelerator Modal */}
      <ModalLayout
        isOpen={isAcceleratorModalOpen}
        onClose={() => setIsAcceleratorModalOpen(false)}
        title="ENTERPRISE & CORE AI INTELLIGENCE"
        subtitle="Solution Deep Dive"
        icon={Rocket}
        headerGradient="bg-[#003366]"
      >
        <div className="max-w-4xl mx-auto space-y-12 py-8">
          {/* Overview */}
          <section className="space-y-4">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                <Sparkles className="w-6 h-6" />
              </div>
              Overview
            </h3>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Operate on AI as a unified operating system, replacing fragmented systems and manual processes with intelligent automation.
            </p>
          </section>

          {/* Capabilities */}
          <section className="space-y-6">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600">
                <Zap className="w-6 h-6" />
              </div>
              Capabilities
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Intelligent process automation",
                "AI agents across departments",
                "Unified enterprise data layer",
                "Cross-functional workflow orchestration"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span className="text-slate-700 font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Solutions */}
          <section className="space-y-6">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-violet-50 text-violet-600">
                <Package className="w-6 h-6" />
              </div>
              Solutions
            </h3>
            <div className="grid gap-4">
              {[
                { title: "AI Enterprise Accelerator", desc: "Enterprise-wide AI orchestration platform for workflow automation" },
                { title: "Enterprise AI Agents System", desc: "Department-level AI agents for Sales, HR, Finance, and Operations" }
              ].map((solution, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-slate-900 font-black text-base">{solution.title}</h4>
                    <p className="text-slate-600 font-medium text-sm">{solution.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section className="space-y-6">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
                <Lightbulb className="w-6 h-6" />
              </div>
              Use Cases
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Automating multi-department approval workflows",
                "Real-time consolidation of global operational data",
                "Automated department-level reporting and analytics"
              ].map((useCase, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-amber-50/50 border border-amber-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                  <span className="text-slate-700 font-bold text-sm">{useCase}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Impact */}
          <section className="space-y-6">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                <TrendingUp className="w-6 h-6" />
              </div>
              Impact
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Reduce operational costs through automation",
                "Accelerate decision-making with real-time analytics",
                "Scale operations without increasing headcount",
                "Standardize operations and minimize errors"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700 font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </ModalLayout>

      {/* MARKETING, BRAND & GROWTH AI Modal */}
      <ModalLayout
        isOpen={isGrowthModalOpen}
        onClose={() => setIsGrowthModalOpen(false)}
        title="MARKETING, BRAND & GROWTH AI"
        subtitle="Growth Strategy"
        icon={TrendingUp}
        headerGradient="bg-gradient-to-br from-rose-600 to-pink-700"
      >
        <div className="max-w-4xl mx-auto space-y-12 py-8">
          {/* Overview */}
          <section className="space-y-4">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-rose-50 text-rose-600">
                <Sparkles className="w-6 h-6" />
              </div>
              Overview
            </h3>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Build and operate marketing with AI as a continuous growth engine that scales performance without increasing team size.
            </p>
          </section>

          {/* Capabilities */}
          <section className="space-y-6">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-rose-50 text-rose-600">
                <Zap className="w-6 h-6" />
              </div>
              Capabilities
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "AI content creation (text, image, video)",
                "Customer persona & behavior intelligence",
                "Cross-channel campaign optimization",
                "AI influencers & digital brand ambassadors"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-rose-50/50 border border-rose-100">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 flex-shrink-0" />
                  <span className="text-slate-700 font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Solutions */}
          <section className="space-y-6">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-purple-50 text-purple-600">
                <Package className="w-6 h-6" />
              </div>
              Solutions
            </h3>
            <div className="grid gap-4">
              {[
                { title: "Digital Twin Influencer Studio", desc: "24/7 brand ambassadors for consistent identity and engagement" },
                { title: "AI Content Factory", desc: "Multi-format content generation aligned with brand voice" }
              ].map((solution, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-slate-900 font-black text-base">{solution.title}</h4>
                    <p className="text-slate-600 font-medium text-sm">{solution.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section className="space-y-6">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
                <Lightbulb className="w-6 h-6" />
              </div>
              Use Cases
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Automated social media content production",
                "Real-time personalization of ad campaigns",
                "24/7 digital brand ambassador engagement"
              ].map((useCase, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-amber-50/50 border border-amber-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                  <span className="text-slate-700 font-bold text-sm">{useCase}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Impact */}
          <section className="space-y-6">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                <TrendingUp className="w-6 h-6" />
              </div>
              Impact
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Increase conversion and campaign effectiveness",
                "Reduce content production and marketing costs",
                "Personalize customer experiences at scale",
                "Scale operations without increasing headcount"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700 font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </ModalLayout>

      {/* COMMERCE & EXPERIENCE AI Modal */}
      <ModalLayout
        isOpen={isFinanceModalOpen}
        onClose={() => setIsFinanceModalOpen(false)}
        title="COMMERCE & EXPERIENCE AI"
        subtitle="Customer Experience"
        icon={ShoppingBag}
        headerGradient="bg-gradient-to-br from-violet-600 to-purple-800"
      >
        <div className="max-w-4xl mx-auto space-y-12 py-8">
          {/* Overview */}
          <section className="space-y-4">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-violet-50 text-violet-600">
                <Sparkles className="w-6 h-6" />
              </div>
              Overview
            </h3>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Optimize customer experience and drive revenue with AI-powered interactions, ordering, and personalization across every touchpoint.
            </p>
          </section>

          {/* Capabilities */}
          <section className="space-y-6">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-violet-50 text-violet-600">
                <Zap className="w-6 h-6" />
              </div>
              Capabilities
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "AI-powered ordering & recommendation",
                "Conversational commerce (chat & voice)",
                "Real-time multilingual communication",
                "Customer experience personalization"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-violet-50/50 border border-violet-100">
                  <CheckCircle2 className="w-4 h-4 text-violet-500 flex-shrink-0" />
                  <span className="text-slate-700 font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Solutions */}
          <section className="space-y-6">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-violet-50 text-violet-600">
                <Package className="w-6 h-6" />
              </div>
              Solutions
            </h3>
            <div className="grid gap-4">
              {[
                { title: "Beauty AI Experience", desc: "Facial analysis and virtual try-on for personalized beauty matching" },
                { title: "Order Intelligence Agent", desc: "Contextual recommendations based on real-time customer behavior" }
              ].map((solution, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-slate-900 font-black text-base">{solution.title}</h4>
                    <p className="text-slate-600 font-medium text-sm">{solution.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section className="space-y-6">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
                <Lightbulb className="w-6 h-6" />
              </div>
              Use Cases
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Virtual beauty consultations with personalized matching",
                "Automated multilingual support for global markets",
                "Intelligent upsell during the checkout process"
              ].map((useCase, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-amber-50/50 border border-amber-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                  <span className="text-slate-700 font-bold text-sm">{useCase}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Impact */}
          <section className="space-y-6">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                <TrendingUp className="w-6 h-6" />
              </div>
              Impact
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Increase average order value (AOV) and conversion",
                "Improve real-time customer experience",
                "Reduce errors and optimize sales processes",
                "Expand across markets with multilingual capabilities"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700 font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </ModalLayout>

      {/* AI BUSINESS INTELLIGENCE SCOUT Modal */}
      <ModalLayout
        isOpen={isScoutModalOpen}
        onClose={() => setIsScoutModalOpen(false)}
        title="AI BUSINESS INTELLIGENCE SCOUT"
        subtitle="Market Intelligence"
        icon={Search}
        headerGradient="bg-gradient-to-br from-amber-500 to-orange-700"
      >
        <div className="max-w-4xl mx-auto space-y-12 py-8">
          {/* Overview */}
          <section className="space-y-4">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
                <Sparkles className="w-6 h-6" />
              </div>
              Overview
            </h3>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Continuously monitor market, competitor, and industry data to deliver real-time strategic insights for smarter decision-making.
            </p>
          </section>

          {/* Capabilities */}
          <section className="space-y-6">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
                <Zap className="w-6 h-6" />
              </div>
              Capabilities
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Automated market & news monitoring",
                "Competitor analysis & tracking",
                "Trend and opportunity detection",
                "Executive insight dashboards"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-amber-50/50 border border-amber-100">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span className="text-slate-700 font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Solutions */}
          <section className="space-y-6">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
                <Package className="w-6 h-6" />
              </div>
              Solutions
            </h3>
            <div className="grid gap-4">
              {[
                { title: "Strategic Opportunity Alerts", desc: "Real-time notifications for emerging trends and market shifts" },
                { title: "Competitor Intelligence System", desc: "Continuous monitoring of competitor moves and market positioning" }
              ].map((solution, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-slate-900 font-black text-base">{solution.title}</h4>
                    <p className="text-slate-600 font-medium text-sm">{solution.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section className="space-y-6">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
                <Lightbulb className="w-6 h-6" />
              </div>
              Use Cases
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Daily competitor pricing and strategy monitoring",
                "Early detection of emerging industry trends for R&D",
                "Automated executive summary generation for leadership"
              ].map((useCase, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-amber-50/50 border border-amber-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                  <span className="text-slate-700 font-bold text-sm">{useCase}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Impact */}
          <section className="space-y-6">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                <TrendingUp className="w-6 h-6" />
              </div>
              Impact
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Stay ahead of market changes and competitors",
                "Reduce strategic risks with data-driven insights",
                "Accelerate decision-making for leadership",
                "Identify new opportunities faster"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700 font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </ModalLayout>

      {/* AI GOVERNANCE SECURITY Modal */}
      <ModalLayout
        isOpen={isGovernanceModalOpen}
        onClose={() => setIsGovernanceModalOpen(false)}
        title="AI GOVERNANCE SECURITY"
        subtitle="Secure & Responsible AI"
        icon={Lock}
        headerGradient="bg-gradient-to-br from-cyan-600 to-blue-700"
      >
        <div className="max-w-4xl mx-auto space-y-12 py-8">
          {/* Overview */}
          <section className="space-y-4">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-cyan-50 text-cyan-600">
                <Sparkles className="w-6 h-6" />
              </div>
              Overview
            </h3>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Protect data, ensure compliance, and manage financial operations with secure and responsible AI deployment.
            </p>
          </section>

          {/* Capabilities */}
          <section className="space-y-6">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-cyan-50 text-cyan-600">
                <Zap className="w-6 h-6" />
              </div>
              Capabilities
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Sensitive data detection & protection (PII)",
                "AI-powered risk & fraud monitoring",
                "Automated audit & compliance workflows",
                "Accounting automation & document processing"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-cyan-50/50 border border-cyan-100">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                  <span className="text-slate-700 font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Solutions */}
          <section className="space-y-6">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-cyan-50 text-cyan-600">
                <Package className="w-6 h-6" />
              </div>
              Solutions
            </h3>
            <div className="grid gap-4">
              {[
                { title: "AI Privacy & Compliance Guard", desc: "Automated detection and protection of sensitive enterprise data" },
                { title: "Japan Accounting AI OCR", desc: "High-accuracy automated processing for invoices and accounting documents" }
              ].map((solution, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-slate-900 font-black text-base">{solution.title}</h4>
                    <p className="text-slate-600 font-medium text-sm">{solution.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section className="space-y-6">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
                <Lightbulb className="w-6 h-6" />
              </div>
              Use Cases
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Automated PII detection in unstructured data",
                "Real-time fraud detection in financial transactions",
                "Automated invoice processing and accounting"
              ].map((useCase, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-amber-50/50 border border-amber-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                  <span className="text-slate-700 font-bold text-sm">{useCase}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Impact */}
          <section className="space-y-6">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                <TrendingUp className="w-6 h-6" />
              </div>
              Impact
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Reduce legal and financial risks",
                "Ensure consistent and automated compliance",
                "Improve data accuracy and transparency",
                "Reduce time and cost for accounting and auditing"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700 font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </ModalLayout>
    </section>
  );
};

export default Services;

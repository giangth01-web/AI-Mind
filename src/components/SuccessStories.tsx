import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, ChevronDown, Filter, Rocket, TrendingUp, Building2, Factory, Search, Lock, X } from 'lucide-react';

const SuccessStories = () => {
  const categories = [
    { id: 'all', title: 'All Stories', icon: null },
    { id: 'accelerator', title: 'AI Enterprise Accelerator', icon: Rocket },
    { id: 'growth', title: 'AI Growth & Personalization', icon: TrendingUp },
    { id: 'finance', title: 'Financial AI Command Center', icon: Building2 },
    { id: 'manufacturing', title: 'Smart Manufacturing Assistant', icon: Factory },
    { id: 'bi', title: 'AI Business Intelligence Scout', icon: Search },
    { id: 'security', title: 'AI Governance & Security', icon: Lock },
  ];

  const stories = [
    {
      company: "AGRIMEA Global Trade",
      category: "security",
      impact: "Deployed an AI-powered compliance platform to automate regulatory tracking and detect shipment risks early.",
      metrics: "50% faster document processing",
      image: "https://picsum.photos/seed/agrimea/400/300",
      details: {
        overview: "AGRIMEA Global Trade is an import-export company in the agricultural sector, with partners across Europe, the US, and the Middle East. The company regularly handles cross-border shipments with strict requirements for quality, traceability, and customs compliance.",
        challenge: "Regulations vary across markets and change frequently; Manual document checks are time-consuming and error-prone; Fragmented data (emails, files, ERP) without a single source of truth; Limited early risk detection (missing documents, wrong formats, compliance gaps) before shipment arrival, leading to storage fees, penalties, or rejections; High audit pressure requiring full process transparency.",
        solution: "Deploy an AI-powered compliance platform to: Automatically track and update market-specific regulations; Validate and cross-check shipment documents; Detect risks early and recommend actions.",
        implementation: [
          "Integrate data from email, ERP, documents, and logistics systems",
          "Use AI to extract, validate, and detect discrepancies across documents",
          "Centralized dashboard to monitor shipment-level compliance with real-time alerts",
          "Role-based access control with full audit logs",
          "AI assistant for quick regulatory queries and compliance support"
        ],
        results: [
          "↓ 50% document processing time",
          "↓ 60% manual workload",
          "↑ 70% faster response to regulatory changes",
          "Reduced document errors and port-related costs",
          "Improved transparency and partner trust",
          "Scaled to new markets without proportional increase in compliance headcount"
        ]
      }
    },
    {
      company: "Lumina Beauty",
      category: "growth",
      impact: "Implemented an AI-driven personalization engine to deliver real-time product recommendations and automated content scaling.",
      metrics: "35% higher conversion",
      image: "https://picsum.photos/seed/lumina-beauty/400/300",
      details: {
        overview: "Lumina Beauty is a global premium skincare brand with a rapidly expanding e-commerce presence across North America and Europe.",
        challenge: "The brand struggled with high cart abandonment rates and generic marketing campaigns that failed to resonate with diverse customer segments. Manual content creation for personalized emails was slow and difficult to scale.",
        solution: "We deployed an AI Growth & Personalization engine that analyzes customer behavior in real-time to deliver hyper-personalized product recommendations and automated creative assets.",
        implementation: [
          "Integrated AI engine with existing e-commerce and CRM platforms",
          "Deployed behavioral segmentation models to track user intent",
          "Automated personalized email and SMS content generation",
          "Implemented real-time product recommendation widgets on the storefront",
          "Configured A/B testing frameworks for continuous optimization"
        ],
        results: [
          "35% increase in overall conversion rate",
          "40% reduction in cart abandonment through personalized recovery flows",
          "2.5x higher engagement on marketing emails",
          "50% faster content creation cycle for digital campaigns",
          "Significant improvement in Customer Lifetime Value (CLV)"
        ]
      }
    },
    {
      company: "Novana Retail Group",
      category: "accelerator",
      impact: "Centralized fragmented data into a unified AI-powered dashboard for real-time insights.",
      metrics: "45% faster issue detection",
      image: "https://picsum.photos/seed/nova-retail/400/300",
      details: {
        overview: "Novana Retail Group is a fast-growing omnichannel retail company operating across Southeast Asia, managing thousands of daily orders and multi-channel customer interactions.",
        challenge: "As the business scaled, Novana faced fragmented data across operations, marketing, and customer support. Key issues such as delayed orders, rising customer complaints, and revenue fluctuations were difficult to detect in time, leading to slow decision-making and operational inefficiencies.",
        solution: "We deployed an AI Enterprise Accelerator to centralize all business data into a unified, real-time dashboard. The platform delivers AI-generated insights, risk alerts, and a built-in AI assistant to support both operational and strategic decisions.",
        implementation: "The system was implemented across operations, customer support, and marketing within 8 weeks. It integrates order tracking, customer conversations, campaign data, and KPI monitoring, with role-based access control and AI models configured for anomaly detection and performance analysis.",
        results: [
          "32% improvement in operational efficiency through workflow tracking and automation",
          "45% faster issue detection, including delays, revenue drops, and support risks",
          "27% reduction in customer complaints through sentiment monitoring and proactive alerts",
          "2.5x faster decision-making with real-time dashboards and AI-generated recommendations",
          "18% increase in campaign performance through deeper customer and conversion insights"
        ]
      }
    },
    {
      company: "BETA Precision Manufacturing",
      category: "manufacturing",
      impact: "Orchestrated AI Agents across multiple plants to transform fragmented data into proactive operational decision support.",
      metrics: "25% reduction in defects",
      image: "https://picsum.photos/seed/beta-manufacturing/400/300",
      details: {
        overview: "BETA Precision Manufacturing is a precision mechanical components manufacturer serving the automotive and industrial equipment sectors, operating multiple plants with a complex supply chain.",
        challenge: "AI initiatives were deployed in silos with no integration; Data was fragmented across MES, ERP, and sensor systems; Decision-making was slow and dependent on aggregated reports; No mechanism to monitor AI performance; Difficult to scale from pilot to multiple plants.",
        solution: "Connect data across MES, ERP, and operational systems; Orchestrate AI Agents aligned with real-world workflows (production, quality, supply chain); Standardize how AI is deployed and used across the organization; Shift from “AI for analysis” → “AI for decision support and action”.",
        implementation: [
          "Phase 1 – Pilot (6 weeks): Focused on Quality (defect detection) and Production (downtime analysis and improvement recommendations)",
          "Phase 2 – Data & Orchestration Setup: Integrated data from MES, ERP, and Sensor systems into a central orchestration layer",
          "Phase 3 – AI Workforce Deployment: Deployed specialized AI Agents for Quality, Production, and Supply Chain with human-in-the-loop approval",
          "Phase 4 – Scaling Across Plants: Expanded from 1 to 3 plants with standardized AI workflows and performance monitoring dashboards"
        ],
        results: [
          "~25% reduction in production defects through early anomaly detection",
          "20–30% reduction in unplanned downtime",
          "~2x faster operational decision-making (no longer reliant on manual reporting)",
          "~35% improvement in material demand forecasting accuracy",
          "Scaled from 1 use case → 6+ use cases within 4 months",
          "Established the ability to manage AI as an operational system, not just isolated experiments"
        ]
      }
    },
    {
      company: "Naxoic Logistics Group",
      category: "finance",
      impact: "Centralized financial data at the shipment level and deployed AI modules to control costs, cash flow, and profitability.",
      metrics: "50% faster reconciliation",
      image: "https://picsum.photos/seed/naxoic-logistics/400/300",
      details: {
        overview: "Naxoic Logistics Group is a logistics and freight forwarding company handling thousands of international shipments each month, with a global network of carriers, warehouses, and agents. The Finance team struggled to maintain clear visibility over profitability and cash flow at the shipment level due to complex cost components.",
        challenge: "Costs are fragmented across each shipment (freight, fuel, customs, etc.); Data is scattered across TMS, ERP, emails, and Excel; Invoice reconciliation is time-consuming and error-prone; No real-time visibility into cash flow; Difficult to detect anomalies like overcharges or duplicate invoices; CFO lacks tools for fast, route-level decisions.",
        solution: "Centralize financial data at the shipment level; Deploy AI modules for cost, cash flow, and profitability control; Automate invoice reconciliation and anomaly detection; Deliver real-time financial insights by route and customer.",
        implementation: [
          "Phase 1 – Data Integration (4–5 weeks): Integrated data from TMS, ERP, and documents using shipment ID as the core reference",
          "Phase 2 – AI Financial Modules Deployment: Deployed Invoice Reconciliation AI, Cost Intelligence, Cash Flow Monitoring, and Anomaly Detection",
          "Phase 3 – Decision Support Layer: AI-generated recommendations for underperforming routes and abnormal cost patterns; Dashboard by shipment, route, and customer",
          "Phase 4 – Governance & Scaling: Implemented approval workflows for high-value expenses and scaled from single-region to multi-region deployment"
        ],
        results: [
          "~50% reduction in invoice reconciliation time",
          "Early detection of ~90% of overcharge and duplicate cost cases",
          "~8–12% improvement in average margin through route-level cost optimization",
          "100% real-time visibility into cash flow at the shipment level",
          "Significant reduction in cost leakage (estimated ~10–15%)",
          "CFO can make decisions at the route level instead of relying on aggregated reports"
        ]
      }
    },
    {
      company: "AlphaEdge Capital",
      category: "finance",
      impact: "Deployed an AI-powered market intelligence platform for real-time trend detection and trading signals.",
      metrics: "40% faster identification of opportunities",
      image: "https://picsum.photos/seed/alphaedge/400/300",
      details: {
        overview: "AlphaEdge Capital is a digital asset trading firm managing multi-coin portfolios and real-time market strategies across global exchanges.",
        challenge: "The team struggled to keep up with fast-moving market data, including price volatility, whale activity, and emerging trends. Manual analysis made it difficult to detect opportunities early and respond quickly to risks.",
        solution: "We deployed an AI-powered market intelligence platform that aggregates real-time data, detects trends, and generates actionable trading signals tailored to each portfolio.",
        implementation: [
          "Integrated real-time market data feeds across multiple exchanges",
          "Connected user-selected portfolios for personalized analysis",
          "Deployed AI models for trend detection, signal generation, and anomaly alerts",
          "Enabled tracking of key events such as price spikes, volume surges, and whale activity",
          "Configured customizable risk preferences and notification settings"
        ],
        results: [
          "40% faster identification of trading opportunities",
          "35% improvement in signal accuracy",
          "3x faster reaction to market events",
          "25% reduction in manual analysis time",
          "More consistent decision-making with AI-driven insights"
        ]
      }
    }
  ];

  const [activeFilter, setActiveFilter] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStory, setSelectedStory] = useState<any>(null);
  const itemsPerPage = 3;
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredStories = useMemo(() => {
    return activeFilter === 'all' 
      ? stories 
      : stories.filter(story => story.category === activeFilter);
  }, [activeFilter]);

  const totalPages = Math.ceil(filteredStories.length / itemsPerPage);
  
  const currentStories = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredStories.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredStories, currentPage]);

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setCurrentPage(1);
    setIsDropdownOpen(false);
  };

  const activeCategory = categories.find(c => c.id === activeFilter);

  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center text-center mb-20 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold text-[#003366] leading-[1.1] mb-6">Our Success Stories</h2>
            <p className="text-xl text-slate-600 max-w-2xl font-medium mx-auto">Proven impact across industries</p>
          </div>

          {/* Compact Dropdown Filter */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 text-sm font-bold text-[#003366]"
            >
              <Filter className="w-4 h-4 text-slate-400" />
              <span className="min-w-[140px] text-left">
                {activeCategory?.title}
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50"
                >
                  <div className="p-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleFilterChange(category.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                          activeFilter === category.id
                            ? 'bg-[#003366] text-white'
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {category.icon && <category.icon className={`w-4 h-4 ${activeFilter === category.id ? 'text-white' : 'text-slate-400'}`} />}
                        {!category.icon && <div className="w-4" />}
                        {category.title}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence mode="wait">
            {currentStories.map((story, index) => (
              <motion.div
                key={`${story.company}-${activeFilter}-${currentPage}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setSelectedStory(story)}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full cursor-pointer group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.company} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 right-6">
                    <div className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-black uppercase tracking-widest text-[#003366] shadow-sm">
                      {categories.find(c => c.id === story.category)?.title.split(' ')[1]}
                    </div>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                      <Quote className="w-5 h-5 text-[#F97316]" />
                    </div>
                    <span className="font-black text-slate-900 tracking-tight">{story.company}</span>
                  </div>
                  <p className="text-slate-600 mb-8 leading-relaxed text-sm font-medium flex-grow">
                    "{story.impact}"
                  </p>
                  <div className="pt-8 border-t border-slate-100">
                    <div className="text-[10px] text-slate-400 uppercase font-black tracking-[0.2em] mb-2">Key Metric</div>
                    <div className="text-2xl font-black text-[#0EA5A4] tracking-tight">{story.metrics}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`p-3 rounded-full border border-slate-200 transition-all ${
                currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white hover:shadow-md text-[#003366]'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-full text-sm font-bold transition-all ${
                    currentPage === i + 1
                      ? 'bg-[#003366] text-white shadow-md'
                      : 'bg-white text-slate-400 hover:text-slate-600 border border-slate-100'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`p-3 rounded-full border border-slate-200 transition-all ${
                currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white hover:shadow-md text-[#003366]'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Modal */}
        <AnimatePresence>
          {selectedStory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedStory(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="relative h-64 flex-shrink-0">
                  <img 
                    src={selectedStory.image} 
                    alt={selectedStory.company} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <button 
                    onClick={() => setSelectedStory(null)}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-8 left-10">
                    <div className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-black uppercase tracking-widest text-[#003366] shadow-sm mb-4 inline-block">
                      {categories.find(c => c.id === selectedStory.category)?.title.split(' ')[1]}
                    </div>
                    <h2 className="text-4xl font-black text-white tracking-tight">{selectedStory.company}</h2>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-10 overflow-y-auto">
                  {selectedStory.details ? (
                    <div className="space-y-10">
                      <section>
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#0EA5A4] mb-4">Overview</h3>
                        <p className="text-slate-600 leading-relaxed font-medium">{selectedStory.details.overview}</p>
                      </section>

                      <div className="grid md:grid-cols-2 gap-10">
                        <section>
                          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#F97316] mb-4">Challenge</h3>
                          <p className="text-slate-600 leading-relaxed font-medium">{selectedStory.details.challenge}</p>
                        </section>
                        <section>
                          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#003366] mb-4">Solution</h3>
                          <p className="text-slate-600 leading-relaxed font-medium">{selectedStory.details.solution}</p>
                        </section>
                      </div>

                      <section>
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-indigo-600 mb-4">Implementation</h3>
                        {Array.isArray(selectedStory.details.implementation) ? (
                          <div className="grid sm:grid-cols-2 gap-4">
                            {selectedStory.details.implementation.map((item: string, iIndex: number) => (
                              <div key={iIndex} className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                                <p className="text-sm font-bold text-slate-700">{item}</p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-slate-600 leading-relaxed font-medium">{selectedStory.details.implementation}</p>
                        )}
                      </section>

                      <section className="bg-slate-50 rounded-3xl p-8">
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600 mb-6">Results / Impact</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {selectedStory.details.results.map((result: string, rIndex: number) => (
                            <div key={rIndex} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                              <p className="text-sm font-bold text-slate-700">{result}</p>
                            </div>
                          ))}
                        </div>
                      </section>
                    </div>
                  ) : (
                    <div className="py-20 text-center">
                      <Quote className="w-12 h-12 text-slate-200 mx-auto mb-6" />
                      <p className="text-xl text-slate-600 font-medium italic">"{selectedStory.impact}"</p>
                      <div className="mt-10 pt-10 border-t border-slate-100">
                        <div className="text-[10px] text-slate-400 uppercase font-black tracking-[0.2em] mb-2">Key Metric</div>
                        <div className="text-3xl font-black text-[#0EA5A4] tracking-tight">{selectedStory.metrics}</div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SuccessStories;

import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, Sprout, Leaf, Cloud, Sun, Zap, Search, Map, Target, Layers, Box, FileText, Database, ShieldCheck, ClipboardCheck, BarChart3, Clock, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Agriculture = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const supportCategories = [
    {
      title: "Crop Health & Stress Monitoring",
      description: "Annotating multispectral and RGB imagery from drones and satellites to identify early signs of crop stress, nutrient deficiency, and irrigation issues at the individual plant level.",
      features: [
        "Multispectral Data Tagging",
        "NDVI Mapping Assistance",
        "Crop Stress Identification",
        "Irrigation Pattern Analysis"
      ],
      icon: <Leaf />,
      image: "/agri/crop_health.png"
    },
    {
      title: "Yield Prediction & Analysis",
      description: "Supporting high-accuracy yield forecasting by labeling fruit/grain counts, plant density, and biomass metrics across various growth stages for intelligent crop forecasting.",
      features: [
        "Fruit & Grain Counting",
        "Plant Density Mapping",
        "Biomass Estimation Data",
        "Growth Stage Classification"
      ],
      icon: <BarChart3 size={24} />,
      image: "/agri/yield_prediction.png"
    },
    {
      title: "Pest & Disease Detection",
      description: "Creating datasets for automated pest and disease identification through high-resolution leaf and plant imagery, enabling targeted intervention and localized alerting.",
      features: [
        "Pathogen Signature Tagging",
        "Pest Species Identification",
        "Infection Severity Labeling",
        "Localized Alert Data"
      ],
      icon: <Search />,
      image: "/agri/pest_detection.png"
    },
    {
      title: "Livestock Monitoring",
      description: "Tracking livestock behavior, health, and movement through video and sensor data to optimize farm management and ensure absolute animal welfare in real-time.",
      features: [
        "Animal Behavior Tracking",
        "Health Incident Labeling",
        "Livestock Counting (Aerial)",
        "Grazing Pattern Analysis"
      ],
      icon: <Target />,
      image: "/agri/livestock.png"
    },
    {
      title: "Autonomous Farming Robotics",
      description: "Preparing datasets for robotic weeders, harvesters, and sprayers to navigate narrow rows and perform precision agricultural tasks safely in complex outdoor environments.",
      features: [
        "Weed vs. Crop Segmentation",
        "Robot Path Navigation",
        "Grasp Point (Harvesting)",
        "Obstacle Avoidance Data"
      ],
      icon: <Zap />,
      image: "/agri/autonomous.png"
    }
  ];

  const labelingTypes = [
    "Polygon (Crop Boundaries)",
    "Semantic Segmentation (Weeds)",
    "Instance Segmentation (Fruit)",
    "Point & Dot Counting",
    "Multispectral Tagging",
    "Temporal Action (Livestock)",
    "Object Detection (Pests)"
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900">
      
      {/* 1. Hero Section - Bold Case Study Style */}
      <section className="relative pt-32 md:pt-48 pb-20 overflow-hidden bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-slate-600 text-[11px] font-bold uppercase tracking-[0.2em] mb-8 text-center justify-center">
            <Link to="/" className="hover:text-brand-600 transition-colors">Home</Link>
            <ChevronRight size={10} strokeWidth={3} />
            <span>Industries</span>
            <ChevronRight size={10} strokeWidth={3} />
            <span className="text-brand-600 font-bold uppercase">Agriculture & AgriTech</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-600 text-[13px] font-semibold mb-8 border border-brand-100/50 uppercase tracking-widest shadow-sm shadow-brand-100">
            <Sparkles size={14} className="animate-pulse" />
            Data-Driven Precision Farming
          </div>

          <h1 className="text-4xl md:text-7xl font-semibold text-slate-900 leading-[1.05] tracking-tight mb-8">
            Sustainable <span className="text-brand-600 italic">Precision</span> <br className="hidden md:block" />
            for AgriTech Innovation.
          </h1>
          
          <p className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto mb-12">
            Optimizing yields and ensuring food security. We provide high-fidelity datasets that enable global AgriTech leaders to build the next generation of smart, autonomous farming technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/contact">
               <button className="flex items-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-full font-semibold text-base hover:bg-brand-600 transition-all hover:shadow-xl hover:shadow-brand-600/20 active:scale-95">
                 <ArrowRight size={18} /> Empower Your Agri AI
               </button>
             </Link>
          </div>
        </div>
      </section>

      {/* 2. Context & Highlights - Case Study Style Box */}
      <section className="py-24 border-t border-slate-50 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="p-12 md:p-16 bg-slate-50 border-2 border-slate-100 rounded-3xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/5 rounded-full blur-[80px] -mt-24 -mr-24"></div>
             
             <div className="relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
                <div className="w-full lg:w-1/2 space-y-8">
                   <div className="flex items-center gap-3 text-left">
                      <div className="h-[2px] w-12 bg-brand-600"></div>
                      <span className="text-brand-600 text-[11px] font-bold uppercase tracking-[0.3em]">Sustainable Intelligence</span>
                   </div>
                   <h2 className="text-3xl md:text-5xl font-semibold text-slate-950 tracking-tight leading-tight uppercase text-left">
                     Growth <br /> <span className="text-brand-600 font-bold">In-Precision.</span>
                   </h2>
                   <p className="text-slate-700 text-xl font-medium leading-relaxed italic text-left">
                      "As global food demand rises, AI is the key to efficiency. We support AgriTech companies with high-precision annotation for crop analysis and autonomous field operations."
                   </p>
                </div>
                
                <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-fit self-center">
                   {labelingTypes.map((type, i) => (
                     <div key={i} className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center gap-3 group hover:border-brand-600 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-600 group-hover:scale-150 transition-transform"></div>
                        <div className="text-slate-900 font-bold text-[11px] uppercase tracking-tight">{type}</div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Deep-Dive Services - Alternating Style */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-32">
          {supportCategories.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-32 items-center`}
            >
              {/* Text Part */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-left">
                    <div className="p-3 bg-brand-50 text-brand-600 rounded-2xl">
                       {service.icon}
                    </div>
                    <span className="text-brand-600 font-bold text-[11px] uppercase tracking-widest text-left">VERTICAL 0{index + 1}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-semibold text-slate-950 leading-tight tracking-tight uppercase text-left">
                    {service.title}
                  </h2>
                </div>
                
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium opacity-90 text-left">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-4">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-white text-[10px] font-bold group-hover:bg-brand-600 transition-colors shadow-lg shadow-slate-900/10">
                        {fIndex + 1}
                      </div>
                      <span className="text-slate-800 font-bold text-sm tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Part - Premium Frame */}
              <div className="w-full lg:w-1/2">
                 <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-brand-600/10 to-accent-cyan/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative rounded-2xl overflow-hidden transition-transform duration-700 group-hover:-translate-y-2">
                       <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-110"
                       />
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dark Workflow Section */}
      <section className="py-24 md:py-32 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 text-center space-y-12">
            <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1] uppercase">
                   Cultivating <br /><span className="text-brand-400 font-bold italic">Global Agricultural</span> <br /> Resilience.
                </h2>
                <div className="h-2 w-24 bg-brand-500 mx-auto"></div>
                <p className="text-slate-300 text-xl font-medium leading-relaxed max-w-3xl mx-auto italic opacity-80">
                   Join global AgriTech leaders and research institutions who trust LabelzAI for the high-accuracy datasets that fuel the future of precision farming.
                </p>
            </div>
            
            <div className="pt-8">
                <Link to="/contact">
                   <button className="flex items-center gap-4 bg-white text-slate-950 px-12 py-6 text-xl font-bold hover:bg-brand-600 hover:text-white transition-all rounded-full shadow-2xl shadow-brand-600/20 active:scale-95 group mx-auto">
                      Get Started with Agri Intelligence <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                   </button>
                </Link>
            </div>
        </div>
      </section>

    </div>
  );
};

export default Agriculture;

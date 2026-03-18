import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, Sprout, Leaf, Cloud, Sun, Zap, Search, Map, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const BarChart3 = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>;

const Agriculture = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const supportCategories = [
    {
      title: "Crop Health & Stress Monitoring",
      description: "Annotating multispectral and RGB imagery from drones and satellites to identify early signs of crop stress, nutrient deficiency, and irrigation issues.",
      features: [
        "Multispectral Data Tagging",
        "NDVI Mapping Assistance",
        "Crop Stress Identification",
        "Irrigation Pattern Analysis"
      ],
      icon: <Leaf size={24} />
    },
    {
      title: "Yield Prediction & Analysis",
      description: "Supporting high-accuracy yield forecasting by labeling fruit/grain counts, plant density, and biomass metrics across various growth stages.",
      features: [
        "Fruit & Grain Counting",
        "Plant Density Mapping",
        "Biomass Estimation Data",
        "Growth Stage Classification"
      ],
      icon: <BarChart3 size={24} />
    },
    {
      title: "Pest & Disease Detection",
      description: "Creating datasets for automated pest and disease identification through high-resolution leaf and plant imagery, enabling targeted intervention.",
      features: [
        "Pathogen Signature Tagging",
        "Pest Species Identification",
        "Infection Severity Labeling",
        "Localized Alert Data"
      ],
      icon: <Search size={24} />
    },
    {
      title: "Livestock Monitoring",
      description: "Tracking livestock behavior, health, and movement through video and sensor data to optimize farm management and ensure animal welfare.",
      features: [
        "Animal Behavior Tracking",
        "Health Incident Labeling",
        "Livestock Counting (Aerial)",
        "Grazing Pattern Analysis"
      ],
      icon: <Target size={24} />
    },
    {
      title: "Autonomous Farming Robotics",
      description: "Preparing datasets for robotic weeders, harvesters, and sprayers to navigate narrow rows and perform precision agricultural tasks safely.",
      features: [
        "Weed vs. Crop Segmentation",
        "Robot Path Navigation",
        "Grasp Point (Harvesting)",
        "Obstacle Avoidance Data"
      ],
      icon: <Zap size={24} />
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
    <div className="bg-white text-slate-900 min-h-screen pb-8 font-sans selection:bg-brand-100 selection:text-brand-900">
      {/* Hero - Simple & Premium Center Layout */}
      <div className="relative bg-white overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-50/60 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-cyan/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-slate-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-8">
            <Link to="/" className="hover:text-brand-600 transition-colors">Home</Link>
            <ChevronRight size={10} strokeWidth={3} />
            <span>Industries</span>
            <ChevronRight size={10} strokeWidth={3} />
            <span className="text-brand-600">Agriculture & AgriTech</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100/50 text-brand-600 text-[11px] font-semibold uppercase tracking-widest mb-6">
            <Sparkles size={14} />
            Data-Driven Precision Farming
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-4xl">
            Agriculture & AgriTech Data Annotation
          </h1>
          
          <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed mb-10 max-w-4xl">
            Optimize crop yields, detect pests early, and enable autonomous farming. We provide high-fidelity datasets that power the next generation of smart agricultural technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <button className="flex items-center gap-3 bg-slate-900 text-white px-10 py-3.5 rounded-full font-semibold text-base hover:bg-brand-600 transition-all hover:shadow-xl hover:shadow-brand-600/20 active:scale-95">
                <ArrowRight size={18} /> Request Agri Data Sample
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Intro Section - Description & Expertise */}
      <div className="relative z-10 -mt-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-10 bg-brand-600"></div>
                <span className="text-brand-600 text-[11px] font-semibold uppercase tracking-[0.3em]">Sustainable Intelligence</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-950 tracking-tight mb-6">
                Cultivating the Future of AgriTech
              </h2>
              
              <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed mb-12">
                As global food demand rises, AI is the key to sustainable and efficient farming. We support AgriTech companies, research institutions, and precision farming providers with high-precision annotation for crop analysis, livestock monitoring, and autonomous field operations.
                <br /><br />
                From detailed multispectral mapping to fruit-level instance segmentation, our specialized agricultural annotation services ensure your models can withstand the complexities of real-world farming environments.
              </p>
              
              <div className="h-[1px] w-full bg-slate-100 mb-12"></div>
              
              <h3 className="text-2xl font-semibold text-slate-900 mb-8">Specialized Data Labeling Types:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {labelingTypes.map((type, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-brand-50 hover:border-brand-100 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-600"></div>
                    <span className="font-semibold text-slate-800 text-sm whitespace-nowrap">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section - Premium Grid */}
      <div className="mt-24 space-y-0">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
           <h2 className="text-4xl font-semibold text-slate-900 tracking-tight mb-4">How We Support the Industry</h2>
           <p className="text-slate-500 font-medium max-w-2xl mx-auto">Scalable ground truth datasets tailored for drone-based scouting, automated greenhouses, and robotic harvesting.</p>
        </div>
        
        {supportCategories.map((service, index) => (
          <div
            key={index}
            className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50 border-y border-slate-100'}`}
          >
            <div className={`max-w-7xl mx-auto px-6 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}>
              <div className="flex-1 space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 border border-brand-100 mb-2">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-slate-950 leading-tight tracking-tight">
                    {service.title}
                  </h2>
                </div>
                <p className="text-slate-900 text-base md:text-lg leading-relaxed font-semibold max-w-2xl">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 pt-4">
                  {service.features?.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3 group/feat">
                      <div className="w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 border border-brand-100">
                        <CheckCircle2 size={12} strokeWidth={3} />
                      </div>
                      <span className="text-slate-700 font-semibold text-sm tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full max-w-lg">
                <div className="aspect-[16/9] bg-slate-950 rounded-[2.5rem] p-10 flex flex-col justify-center relative overflow-hidden shadow-sm border border-slate-800 group">
                    <div className="text-brand-600 font-mono text-[10px] tracking-widest uppercase mb-4">AgriTech_Scouting_Data_Sample</div>
                    <div className="space-y-3 font-mono text-xs md:text-sm">
                        <div className="text-white"><span className="text-brand-400">"scout_id"</span>: <span className="text-green-400">"Sector_C_Drone_04"</span></div>
                        <div className="text-white"><span className="text-brand-400">"crop_health"</span>: {"{"}</div>
                        <div className="pl-4 text-white"><span className="text-brand-400">"viability"</span>: <span className="text-accent-cyan">0.94</span></div>
                        <div className="pl-4 text-white"><span className="text-brand-400">"pest_risk"</span>: <span className="text-accent-cyan">"Low"</span></div>
                        <div className="text-white">{"}"}</div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-slate-950 text-white overflow-hidden relative">
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-[100px] -mb-48 -mr-48"></div>
         <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-semibold mb-8 tracking-tight">Scale your AgriTech impact</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto font-medium">
               Join global AgriTech leaders who trust LabelzAI for high-accuracy crop scouting and precision farming datasets.
            </p>
            <Link to="/contact">
               <button className="bg-brand-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-brand-500 transition-all hover:shadow-2xl hover:shadow-brand-600/20 active:scale-95">
                  Get Started with Agri Intelligence
               </button>
            </Link>
         </div>
      </div>
    </div>
  );
};

export default Agriculture;

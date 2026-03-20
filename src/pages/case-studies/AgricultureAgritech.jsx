import React, { useEffect } from 'react';
import { 
  CheckCircle2, Leaf, Sprout, Target, TrendingUp, Users, Database, 
  Zap, Search, Image, Tag, FileText, BarChart, Layers, Shield, 
  Map, Grid, Microscope, CloudSun, ChevronRight, AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AgricultureAgritechCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900">
      
      {/* 1. Hero Section - Premium Aesthetic */}
      <section className="relative pt-32 md:pt-48 pb-20 overflow-hidden bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-600 text-[13px] font-semibold mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse"></span>
            Case Study — Agriculture & AgriTech
          </div>
          <h1 className="text-4xl md:text-7xl font-semibold text-slate-900 leading-[1.05] tracking-tight mb-8">
             Agriculture & AgriTech <br className="hidden md:block" />
             <span className="text-brand-500">Data Annotation.</span>
          </h1>
          <p className="text-slate-500 text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto mb-12">
            Empowering precision agriculture through multi-level image and geospatial annotation for crop health and yield prediction.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3 text-slate-500 font-semibold text-sm">
              <Database size={18} className="text-brand-500" />
              120,000+ images processed
            </div>
            <div className="flex items-center gap-3 text-slate-500 font-semibold text-sm">
              <BarChart size={18} className="text-brand-500" />
              98% Accuracy Benchmark
            </div>
            <div className="flex items-center gap-3 text-slate-500 font-semibold text-sm">
              <Microscope size={18} className="text-brand-500" />
              +32% Detection Accuracy
            </div>
          </div>
        </div>
      </section>

      {/* 2. Visual Frame */}
      {/* <section className="pb-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="rounded-3xl overflow-hidden border-2 border-slate-100">
            <img 
              src="/ai_ml/nlp-annotation.png" 
              alt="Agriculture AI Annotation" 
              className="w-full h-[400px] md:h-[500px] object-cover" 
            />
          </div>
        </div>
      </section> */}

      {/* 3. Detailed Overview & Problem - Restoring All Original Text */}
      <section className="py-24 border-t border-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-24">
          
          {/* Overview */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 leading-tight">
              Project <span className="text-brand-600">Overview.</span>
            </h2>
            <div className="h-1.5 w-24 bg-brand-600"></div>
            <p className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed max-w-5xl">
              An India-based AgriTech company was developing an AI-driven platform for crop health monitoring, disease detection, and yield prediction using field images, drone footage, and satellite data. However, the model performance was inconsistent due to poor-quality training data, unstructured image collections, and lack of domain-specific annotations.
            </p>
          </div>

          {/* Detailed Problem Section */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 leading-tight">
                Primary <span className="text-brand-600">Challenges.</span>
              </h2>
              <div className="space-y-4">
                {[
                  "High variability in Indian farming conditions (lighting, soil types, mixed cropping)",
                  "Limited labeled datasets for regional crops and diseases",
                  "Difficulty identifying early-stage plant diseases and pest damage",
                  "Inaccurate field boundary detection affecting yield estimation",
                  "Large volumes of raw imagery without standardized labeling"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100/50">
                    <div className="w-5 h-5 rounded-full bg-brand-50 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="text-brand-600" size={12} />
                    </div>
                    <span className="text-slate-700 font-semibold text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2">
               <div className="p-10 bg-red-50/50 border-2 border-red-100 rounded-2xl space-y-8 h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-red-700 flex items-center gap-3">
                    <AlertTriangle className="text-red-600" /> Outcome of Limitations
                  </h3>
                  <p className="text-slate-700 text-xl font-bold leading-relaxed italic">
                    "AI models showed low accuracy, delayed insights, and reduced reliability for farmers and agribusiness decision-making."
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Solutions - Full Feature List */}
      <section className="py-24 md:py-32 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight uppercase leading-tight">
              The <span className="text-brand-400">AgriTech</span> Solution.
            </h2>
            <p className="text-slate-400 text-lg font-medium italic">
              Scalable, agriculture-focused annotation pipeline tailored to Indian crop ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Dataset Preparation", 
                items: [
                  "Processed 120,000+ images from smartphones, drones, and satellites",
                  "Data cleaning, normalization, and deduplication"
                ],
                icon: <CloudSun />
              },
              { 
                title: "Multi-Level Annotation", 
                items: [
                  "Image Classification (Healthy vs Diseased)",
                  "Object Detection (Pests, weeds, fruit counting)",
                  "Semantic Segmentation (Leaf disease regions)",
                  "Geospatial Boundary Mapping"
                ],
                icon: <Grid />
              },
              { 
                title: "Domain Expertise", 
                items: [
                  "Agronomy-based labeling guidelines",
                  "Multi-layer human QA with 98%+ accuracy",
                  "Scalable workforce for rapid turnaround"
                ],
                icon: <Microscope />
              }
            ].map((item, i) => (
              <div key={i} className="group p-10 bg-slate-900 border border-slate-800 rounded-2xl hover:border-brand-600 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-slate-800 text-brand-400 flex items-center justify-center mb-8 group-hover:bg-brand-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-6 text-white uppercase tracking-tight italic">{item.title}</h3>
                <ul className="space-y-4">
                  {item.items.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 group/li">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0 transition-transform group-hover/li:scale-150"></div>
                      <span className="text-slate-100 text-sm font-medium leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Results Section - Restoring Metrics */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center space-y-20">
           <div className="max-w-4xl mx-auto space-y-6">
             <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 leading-[1.1] tracking-tight">
               Results & <br className="hidden md:block" />
               Business <span className="text-brand-600">Impact.</span>
             </h2>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
             {[
               { val: "32%", label: "Disease Detection Improvement" },
               { val: "25%", label: "Better Yield Prediction" },
               { val: "Fast", label: "Model Training & Deployment" },
               { val: "98%+", label: "Annotation Accuracy" }
             ].map((item, i) => (
               <div key={i} className="space-y-4 group">
                 <div className="text-6xl md:text-7xl font-semibold text-slate-900 tracking-tighter group-hover:text-brand-600 transition-colors">{item.val}</div>
                 <div className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em]">{item.label}</div>
               </div>
             ))}
           </div>

           <div className="pt-20">
             <Link to="/contact" className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 text-lg font-semibold hover:bg-slate-800 transition-all rounded-full shadow-lg shadow-slate-900/10 active:scale-95">
               Start Your Project <ChevronRight size={20} />
            </Link>
           </div>
        </div>
      </section>

    </div>
  );
};

export default AgricultureAgritechCaseStudy;

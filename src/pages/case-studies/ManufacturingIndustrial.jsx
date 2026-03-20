import React, { useEffect } from 'react';
import { 
  CheckCircle2, Factory, Settings, Cpu, Target, TrendingUp, Users, Database, 
  Zap, Search, Image, Tag, FileText, BarChart, Layers, Shield, 
  Activity, Wrench, Video, Box, PenTool, ClipboardCheck, MonitorCheck, AlertTriangle, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ManufacturingIndustrialCaseStudy = () => {
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
            Case Study — Manufacturing & Industrial
          </div>
          <h1 className="text-4xl md:text-7xl font-semibold text-slate-900 leading-[1.05] tracking-tight mb-8">
             Machine Vision Annotation <br className="hidden md:block" />
             for <span className="text-brand-500">Smart Factories.</span>
          </h1>
          <p className="text-slate-500 text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto mb-12">
            Powering automated quality inspection and predictive maintenance through high-precision defect and anomaly labeling.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3 text-slate-500 font-semibold text-sm">
              <Database size={18} className="text-brand-500" />
              220,000+ Annotated Frames
            </div>
            <div className="flex items-center gap-3 text-slate-500 font-semibold text-sm">
              <Shield size={18} className="text-brand-500" />
              99%+ Accuracy Benchmark
            </div>
          </div>
        </div>
      </section>

      {/* 2. Visual Frame */}
      {/* <section className="pb-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="rounded-3xl overflow-hidden border-2 border-slate-100">
            <img 
              src="/ai_ml/computer-vision.png" 
              alt="Industrial AI Annotation" 
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
              Client & Project <span className="text-brand-600">Overview.</span>
            </h2>
            <div className="h-1.5 w-24 bg-brand-600"></div>
            <p className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed max-w-5xl">
              A leading industrial automation company in India was developing AI-powered machine vision systems for automated quality inspection, predictive maintenance, and robotic process monitoring across multiple manufacturing plants. The client required large-scale, high-precision annotated datasets to train deep learning models capable of identifying defects, equipment anomalies, and production inconsistencies in real-time.
            </p>
          </div>

          {/* Detailed Problem Section */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 leading-tight">
                The <span className="text-brand-600">Problem.</span>
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                Traditional inspection methods were failing to scale with high defect variability and complex robotic movement.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                {[
                  { title: "High Defect Variability", desc: "Components showed multiple defect types like cracks, dents, and welding faults. Models struggled with inconsistent patterns.", icon: <AlertTriangle size={18} /> },
                  { title: "Complex Environments", desc: "Assembly lines involved varying lighting, robotic movement, and motion blur that complicated annotation.", icon: <Settings size={18} /> },
                  { title: "Scalability Challenges", desc: "Required 200,000+ annotated frames within a tight timeline for rapid factory deployment.", icon: <TrendingUp size={18} /> },
                  { title: "Domain Expertise Needed", desc: "Generic teams lacked understanding of industrial components and engineering tolerances.", icon: <Wrench size={18} /> }
                ].map((item, i) => (
                  <div key={i} className="space-y-3 group bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:border-brand-600 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-white text-brand-600 flex items-center justify-center mb-4 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <h4 className="text-slate-900 font-bold leading-tight uppercase tracking-tight italic">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 font-medium leading-relaxed text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2">
               <div className="p-10 bg-brand-50/30 border-2 border-brand-100 rounded-2xl space-y-8 h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-slate-900 flex items-center gap-3">
                    <Zap className="text-brand-600" /> Industry 4.0 Advantage
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Automated visual inspection",
                      "Predictive maintenance",
                      "Robotics automation",
                      "Production optimization",
                      "Worker safety monitoring"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 bg-white/50 p-4 rounded-2xl border border-white">
                        <CheckCircle2 className="text-brand-600" size={16} />
                        <span className="text-slate-700 font-bold text-sm uppercase tracking-widest">{item}</span>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Solutions - Full Feature List */}
      <section className="py-24 md:py-32 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight uppercase leading-tight">
              Our <span className="text-brand-400">Solution.</span>
            </h2>
            <p className="text-slate-400 text-lg font-medium italic">
              Multi-layer annotation combined with domain training on manufacturing standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Industrial Ontology", 
                desc: "Defect-specific classification.",
                items: [
                  "Surface defects (scratch, crack)",
                  "Assembly errors (missing parts)",
                  "Welding & casting defects"
                ],
                icon: <Box />
              },
              { 
                title: "Multi-Level Services", 
                desc: "Precision feature mapping.",
                items: [
                  "Defect bounding boxes",
                  "Precision surface segmentation",
                  "Robotic keypoint labeling"
                ],
                icon: <PenTool />
              },
              { 
                title: "Quality Workflow", 
                desc: "Enterprise audit standards.",
                items: [
                  "Manufacturing standard training",
                  "Multi-layer Review & Audit",
                  "99%+ precision benchmarks"
                ],
                icon: <ClipboardCheck />
              },
              { 
                title: "Scalable Delivery", 
                desc: "High-volume ML readiness.",
                items: [
                  "220,000+ Image Frames",
                  "Cloud-based rapid turnaround",
                  "PyTorch & TensorFlow Ready"
                ],
                icon: <Database />
              }
            ].map((item, i) => (
              <div key={i} className="group p-10 bg-slate-900 border border-slate-800 rounded-2xl hover:border-brand-600 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-slate-800 text-brand-400 flex items-center justify-center mb-8 group-hover:bg-brand-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-300 font-bold uppercase text-[10px] tracking-[0.2em] mb-6">{item.desc}</p>
                <ul className="space-y-3">
                  {item.items.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 group/li">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0 transition-transform group-hover/li:scale-150"></div>
                      <span className="text-slate-200 text-sm font-medium leading-relaxed">{point}</span>
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
               Business <span className="text-brand-600">Results.</span>
             </h2>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
             {[
               { val: "35%", label: "Better Defect Detection Accuracy" },
               { val: "40%", label: "Reduced Manual Inspection Costs" },
               { val: "Live", label: "Real-time Quality Monitoring Enabled" },
               { val: "Fast", label: "Multi-Facility AI Deployment" }
             ].map((item, i) => (
               <div key={i} className="space-y-4 group">
                 <div className="text-6xl md:text-7xl font-semibold text-slate-900 tracking-tighter group-hover:text-brand-600 transition-colors">{item.val}</div>
                  <div className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em]">{item.label}</div>
               </div>
             ))}
           </div>

           <div className="pt-20">
             <Link to="/contact" className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 text-lg font-semibold hover:bg-slate-800 transition-all rounded-full shadow-lg shadow-slate-900/10 active:scale-95">
               Start Your Industrial AI Pilot <ChevronRight size={20} />
            </Link>
           </div>
        </div>
      </section>

    </div>
  );
};

export default ManufacturingIndustrialCaseStudy;

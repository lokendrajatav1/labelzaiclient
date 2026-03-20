import React, { useEffect } from 'react';
import { 
  CheckCircle2, Microscope, Stethoscope, Activity, Target, TrendingUp, Users, Database, 
  Zap, Search, Image, Tag, FileText, BarChart, Layers, Shield, 
  Brain, Video, Award, Heart, Scan, ClipboardList, Thermometer, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MedicalHealthcareCaseStudy = () => {
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
            Case Study — Medical & Healthcare
          </div>
          <h1 className="text-4xl md:text-7xl font-semibold text-slate-900 leading-[1.05] tracking-tight mb-8">
             Medical Imaging Annotation <br className="hidden md:block" />
             for <span className="text-brand-500">AI Disease Detection.</span>
          </h1>
          <p className="text-slate-500 text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto mb-12">
            Transforming 200,000+ clinical images into high-fidelity ground truth for radiology, oncology, and surgical AI.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3 text-slate-500 font-semibold text-sm">
              <Database size={18} className="text-brand-500" />
              200,000+ clinical images
            </div>
            <div className="flex items-center gap-3 text-slate-500 font-semibold text-sm">
              <Shield size={18} className="text-brand-500" />
              SME-Verified Accuracy
            </div>
            <div className="flex items-center gap-3 text-slate-500 font-semibold text-sm">
              <Activity size={18} className="text-brand-500" />
              +32% Diagnostic Accuracy
            </div>
          </div>
        </div>
      </section>

      {/* 2. Visual Frame */}
      {/* <section className="pb-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="rounded-3xl overflow-hidden border-2 border-slate-100">
            <img 
              src="/ai_ml/nlp-service-image-1.png" 
              alt="Medical AI Annotation" 
              className="w-full h-[400px] md:h-[500px] object-cover" 
            />
          </div>
        </div>
      </section> */}

      {/* 3. Detailed Overview & Problem-Solution - Restoring All Original Text */}
      <section className="py-24 border-t border-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
             <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 leading-tight">
                  The <span className="text-brand-600">Challenge.</span>
                </h2>
                <div className="h-1.5 w-24 bg-brand-600"></div>
                <p className="text-slate-600 text-xl font-medium leading-relaxed">
                  A health-tech company developing AI models for early disease detection struggled with inconsistent and low-quality labeled medical images. Their datasets included X-rays, CT scans, and MRI images, but lacked standardized annotations from trained professionals. This resulted in poor model accuracy, delayed development timelines, and regulatory concerns regarding data quality and clinical reliability.
                </p>
             </div>

             <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 leading-tight">
                  Strategic <span className="text-brand-600">Solution.</span>
                </h2>
                <div className="h-1.5 w-24 bg-brand-600"></div>
                <p className="text-slate-600 text-xl font-medium leading-relaxed">
                  Our data annotation team built a clinically guided annotation workflow using trained medical domain specialists. We delivered high-precision bounding boxes, segmentation masks, and classification labels for abnormalities such as tumors, fractures, and lesions. A multi-layer QA process ensured consistency across 200,000+ medical images, improving diagnostic accuracy by 32%.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Domain Specialties - Full List (7 items) */}
      <section className="py-24 md:py-32 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight uppercase leading-tight">
              Specialized <span className="text-brand-400">Medical Domains.</span>
            </h2>
            <p className="text-slate-400 text-lg font-medium italic">Pixel-level precision for life-critical AI applications.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "1) Radiology Image Segmentation", 
                desc: "Focus: Organs, tumors, and abnormalities.",
                use: ["Lung nodule segmentation (Cancer detection)", "Brain tumor delineation (Neuro-oncology)"],
                val: "Improves precision for early detection & volume mapping.",
                icon: <Scan />
              },
              { 
                title: "2) Disease Classification & Labeling", 
                desc: "Focus: Severity and disease type.",
                use: ["Pneumonia or TB detection from X-rays", "Benign vs malignant mammogram classification"],
                val: "Supports screening AI & reduces radiologist workload.",
                icon: <ClipboardList />
              },
              { 
                title: "3) Object Detection & Localization", 
                desc: "Focus: abnormalities location.",
                use: ["Fracture detection in orthopedic X-rays", "Polyp detection in endoscopy videos"],
                val: "Real-time triage and clinical decision support.",
                icon: <Target />
              },
              { 
                title: "4) 3D Volume Annotation", 
                desc: "Focus: CT/MRI volume sequences.",
                use: ["Tumor volume tracking over time", "Radiation therapy planning datasets"],
                val: "Enables longitudinal monitoring & surgical planning AI.",
                icon: <Layers />
              },
              { 
                title: "5) Medical Video Annotation", 
                desc: "Focus: Dynamic real-time imaging.",
                use: ["Cardiac function analysis (Echocardiograms)", "Minimally invasive procedure support"],
                val: "Real-time clinical AI for fetal growth & surgery.",
                icon: <Video />
              },
              { 
                title: "6) Landmark & Measurement", 
                desc: "Focus: Keypoint and clinical tagging.",
                use: ["Fetal biometric measurements", "Cardiac chamber dimension measurement"],
                val: "Supports automated reporting & precision diagnostics.",
                icon: <Zap />
              },
              { 
                title: "7) Multimodal & Metadata-Enriched", 
                desc: "Focus: Outcomes and demographics.",
                use: ["Predictive disease progression models", "Personalized diagnosis systems"],
                val: "Enables next-generation predictive healthcare AI.",
                icon: <Database />
              }
            ].map((item, i) => (
              <div key={i} className="group p-10 bg-slate-900 border border-slate-800 rounded-2xl hover:border-brand-600 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-slate-800 text-brand-400 flex items-center justify-center mb-8 group-hover:bg-brand-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white uppercase tracking-tight italic">{item.title}</h3>
                <p className="text-slate-200 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">{item.desc}</p>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Typical Use Cases</span>
                    <ul className="space-y-1">
                      {item.use.map((u, idx) => (
                        <li key={idx} className="text-slate-100 text-xs font-semibold">• {u}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[10px] font-bold text-brand-400 uppercase tracking-wide">
                    Value: {item.val}
                  </div>
                </div>
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
               Clinically <span className="text-brand-600">Verified.</span>
             </h2>
           </div>

           <div className="pt-8">
             <Link to="/contact" className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 text-lg font-semibold hover:bg-slate-800 transition-all rounded-full shadow-lg shadow-slate-900/10 active:scale-95">
               Start Your Medical AI Pilot <ChevronRight size={20} />
            </Link>
           </div>
        </div>
      </section>

    </div>
  );
};

export default MedicalHealthcareCaseStudy;

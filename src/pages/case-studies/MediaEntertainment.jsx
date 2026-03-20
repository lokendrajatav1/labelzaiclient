import React, { useEffect } from 'react';
import { 
  CheckCircle2, Video, Tv, Play, Target, TrendingUp, Users, Database, 
  Zap, Search, Image, Tag, FileText, BarChart, Layers, Shield, 
  Activity, Film, Globe, Clock, Lock, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MediaEntertainmentCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900">
      
      {/* 1. Hero Section - Premium Design */}
      <section className="relative pt-32 md:pt-48 pb-20 overflow-hidden bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-600 text-[13px] font-semibold mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse"></span>
            Case Study — Media & Entertainment
          </div>
          <h1 className="text-4xl md:text-7xl font-semibold text-slate-900 leading-[1.05] tracking-tight mb-8">
             Scaling AI Content <br className="hidden md:block" />
             Intelligence for <span className="text-brand-500">Global Media.</span>
          </h1>
          <p className="text-slate-500 text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto mb-12">
            Transforming 50,000+ hours of raw video into structured metadata, powering automated moderation and viewer engagement.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3 text-slate-500 font-semibold text-sm">
              <Video size={18} className="text-brand-500" />
              20k+ Hrs Content Volume
            </div>
            <div className="flex items-center gap-3 text-slate-500 font-semibold text-sm">
              <Shield size={18} className="text-brand-500" />
              +40% Moderation Workflow
            </div>
            <div className="flex items-center gap-3 text-slate-500 font-semibold text-sm">
              <TrendingUp size={18} className="text-brand-500" />
              -50% ROI Cost Reduction
            </div>
          </div>
        </div>
      </section>

      {/* 2. Visual Frame */}
      {/* <section className="pb-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="rounded-3xl overflow-hidden border-2 border-slate-100">
            <img 
              src="/ai_ml/multimodal-ai.png" 
              alt="Media AI Annotation" 
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
              A fast-growing OTT and digital media platform needed to enhance its AI capabilities for content recommendation, scene understanding, and automated moderation. However, inconsistent metadata, unstructured video libraries, and lack of high-quality labeled datasets were limiting model accuracy. LabelzAI delivered a scalable, high-precision annotation pipeline to transform raw media into AI-ready intelligence.
            </p>
          </div>

          {/* Detailed Problem Section */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 leading-tight">
                The <span className="text-brand-600">Problem.</span>
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                The client was managing 50,000+ hours of video content across movies, series, and user-generated media but faced several critical scaling challenges.
              </p>
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400">Primary Gaps</h4>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Poor recommendation accuracy due to incomplete content tagging",
                    "Difficulty in detecting sensitive or policy-violating scenes",
                    "Lack of structured metadata for genres, emotions, and visual elements",
                    "High manual workload for content classification and moderation",
                    "Inability to scale annotation for continuous content uploads"
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
            </div>
            <div className="w-full lg:w-1/2">
               <div className="p-10 bg-brand-50/30 border-2 border-brand-100 rounded-2xl space-y-8 h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-slate-900 flex items-center gap-3">
                    <Target className="text-brand-600" /> Business Impact
                  </h3>
                  <p className="text-slate-700 text-xl font-semibold italic leading-relaxed">
                    "These gaps were impacting viewer engagement, compliance, and platform growth, leading to higher churn and operational costs."
                  </p>
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
              The <span className="text-brand-400">Solution.</span>
            </h2>
            <p className="text-slate-400 text-lg font-medium italic">
              Our data annotation team designed a domain-specific media labeling framework with scalable workflows and multi-layered QA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "1. Multi-Level Video Annotation", 
                desc: "Timestamp and scene-level intelligence.",
                items: [
                  "Scene segmentation and timestamp labeling",
                  "Object and character identification",
                  "Emotion and mood tagging (action, suspense, etc.)",
                  "Context-based genre and theme classification"
                ],
                icon: <Film />
              },
              { 
                title: "2. Content Moderation Annotation", 
                desc: "Automated policy-based tagging.",
                items: [
                  "Detection of violence, adult content, and sensitive visuals",
                  "Policy-based tagging for regional compliance",
                  "Audio transcript tagging for abusive language"
                ],
                icon: <Shield />
              },
              { 
                title: "3. Metadata Enrichment", 
                desc: "Deep catalog optimization.",
                items: [
                  "Cast and character mapping",
                  "Activity and environment labeling (indoor, outdoor, crowd)",
                  "Thumbnail optimization tagging for AI previews"
                ],
                icon: <Tag />
              },
              { 
                title: "4. Scalable Production Pipeline", 
                desc: "High-volume secure delivery.",
                items: [
                  "Annotated 20,000+ hours of video content",
                  "QA accuracy maintained at 98%+",
                  "Secure and confidential data handling standards"
                ],
                icon: <Globe />
              }
            ].map((item, i) => (
              <div key={i} className="group p-10 bg-slate-900 border border-slate-800 rounded-2xl hover:border-brand-600 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-slate-800 text-brand-400 flex items-center justify-center mb-8 group-hover:bg-brand-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-300 text-sm font-medium leading-relaxed mb-6">{item.desc}</p>
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
               Results & <br className="hidden md:block" />
               Business <span className="text-brand-600">Impact.</span>
             </h2>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
             {[
               { val: "35%", label: "Better Recommendation Accuracy" },
               { val: "40%", label: "Faster Moderation Workflows" },
               { val: "50%", label: "Reduced Manual Tagging Costs" },
               { val: "Ready", label: "Scalable AI Deployment Ready" }
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

export default MediaEntertainmentCaseStudy;

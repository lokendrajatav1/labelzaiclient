import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, Merge, Link2, Share2, Timer, ScanFace, Activity, Zap, ShieldCheck, Box, Target, Search, ShoppingBag, Stethoscope, Trophy, BarChart3, Clock, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const MultimodalAnnotation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const annotationServices = [
    {
      title: "Image + Text Annotation",
      description:
        "We provide image caption validation, visual question answering (VQA), and document understanding datasets. Our annotators link textual descriptions with visual elements to help models understand the semantic relationship between what is seen and what is said.",
      image: "/multimodal/image-text.png",
      features: [
        "Visual Question Answering (VQA)",
        "Image Caption Validation",
        "Document-to-Text Mapping"
      ],
      icon: <ScanFace />
    },
    {
      title: "Video + Audio Annotation",
      description:
        "Synchronizing action with sound. We handle event detection, action-sound synchronization, and speaker-to-scene alignment, allowing AI models to learn from multi-sensory temporal data.",
      image: "/multimodal/video-audio.png",
      features: [
        "Action-Sound Synchronization",
        "Event Detection",
        "Speaker Aligned Metadata"
      ],
      icon: <Activity />
    },
    {
      title: "LiDAR + Camera Fusion",
      description:
        "The gold standard for autonomous systems. We provide 3D cuboids, object tracking, and sensor-aligned labeling where LiDAR point clouds are perfectly mapped to 2D camera frames for robust depth verification.",
      image: "/multimodal/lidar-camera.png",
      features: [
        "Sensor-Aligned Labeling",
        "3D Cuboid Projection",
        "Depth Verification Data"
      ],
      icon: <Merge />
    },
    {
      title: "Speech + Text Alignment",
      description:
        "Mapping transcripts to spoken words with millisecond precision. We provide intent tagging, emotion labeling, and sentiment categorization across both the acoustic and textual representations of language.",
      image: "/multimodal/speech-text.png",
      features: [
        "Transcription Mapping",
        "Multi-Modal Intent Tagging",
        "Emotion-Text Correlation"
      ],
      icon: <Link2 />
    },
    {
      title: "Cross-Modal Relationship Tagging",
      description:
        "Linking events, objects, and interactions across multiple data sources. We identify how a sound in an audio track relates to an object in a video frame or a mention in a text document.",
      image: "/multimodal/relationship-tagging.png",
      features: [
        "Inter-Modal Event Linking",
        "Object-to-Sound Mapping",
        "Semantic Interaction Data"
      ],
      icon: <Share2 />
    },
    {
      title: "Temporal & Spatial Synchronization",
      description:
        "Ensuring frame-level and time-based alignment across all modalities. This foundational service provides the synchronization required for complex real-world scene interpretation by AI models.",
      image: "/multimodal/synchronization.png",
      features: [
        "Frame-Level Alignment",
        "Zero-Lag Time Sync",
        "Spatial Consistency Checks"
      ],
      icon: <Timer />
    }
  ];

  const industryUseCases = [
    { title: "Autonomous Mobility", desc: "LiDAR and camera synchronization for high-accuracy perception.", icon: <Activity className="text-brand-600" size={24} /> },
    { title: "Healthcare Diagnostics", desc: "Cross-modal training for complex diagnostic models.", icon: <Stethoscope className="text-brand-600" size={24} /> },
    { title: "Retail Intelligence", desc: "Visual-textual mapping for advanced product search.", icon: <ShoppingBag className="text-brand-600" size={24} /> },
    { title: "Smart Surveillance", desc: "Event detection across multiple sensor modalities.", icon: <ShieldCheck className="text-brand-600" size={24} /> },
    { title: "Robotics & Automation", desc: "Spatial-temporal alignment for robotic precision.", icon: <Zap className="text-brand-600" size={24} /> },
    { title: "Foundational LLMs", desc: "Foundation models learning from combined data sources.", icon: <Sparkles className="text-brand-600" size={24} /> }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900">
      
      {/* 1. Hero Section - Bold Case Study Style */}
      <section className="relative pt-32 md:pt-48 pb-20 overflow-hidden bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-slate-600 text-[11px] font-bold uppercase tracking-[0.2em] mb-8">
            <Link to="/" className="hover:text-brand-600 transition-colors">Home</Link>
            <ChevronRight size={10} strokeWidth={3} />
            <span>Services</span>
            <ChevronRight size={10} strokeWidth={3} />
            <span className="text-brand-600 font-bold uppercase">Multimodal</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-600 text-[13px] font-semibold mb-8 border border-brand-100/50 uppercase tracking-widest">
            <Sparkles size={14} className="animate-pulse" />
            Unified Intelligence
          </div>

          <h1 className="text-4xl md:text-7xl font-semibold text-slate-900 leading-[1.05] tracking-tight mb-8">
            Synchronized <br className="hidden md:block" />
            <span className="text-brand-600 italic">Multimodal</span> Datasets.
          </h1>
          
          <p className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto mb-12">
            Beyond single-format labeling. We align visual, auditory, textual, and spatial signals to give machines a human-like understanding of context and relationships.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <button className="flex items-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-full font-semibold text-base hover:bg-brand-600 transition-all hover:shadow-xl hover:shadow-brand-600/20 active:scale-95">
                <ArrowRight size={18} /> Start Your Fusion Project
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
                   <div className="flex items-center gap-3">
                      <div className="h-[2px] w-12 bg-brand-600"></div>
                      <span className="text-brand-600 text-[11px] font-bold uppercase tracking-[0.3em]">Concept of Fusion</span>
                   </div>
                   <h2 className="text-3xl md:text-5xl font-semibold text-slate-950 tracking-tight leading-tight uppercase">
                     Cross-Modal <br /> <span className="text-brand-600 font-bold">Alignment.</span>
                   </h2>
                   <p className="text-slate-700 text-xl font-medium leading-relaxed italic">
                     "Multimodal annotation is about identifying relationships between diverse data streams to support next-generation foundational models."
                   </p>
                </div>
                
                <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                   {[
                     { label: "SYNC", val: "Temporal & Spatial Alignment" },
                     { label: "VQA", val: "Visual-Textual Questioning" },
                     { label: "SENSOR", val: "LiDAR-Camera Fusion" },
                     { label: "RELATIONS", val: "Inter-Modal Tagging" }
                   ].map((item, i) => (
                     <div key={i} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-2 group hover:border-brand-600 transition-colors">
                        <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest group-hover:text-brand-600 transition-colors">{item.label}</div>
                        <div className="text-slate-900 font-bold text-lg tracking-tight">{item.val}</div>
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
          {annotationServices.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-32 items-center`}
            >
              {/* Text Part */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-brand-50 text-brand-600 rounded-2xl">
                       {service.icon}
                    </div>
                    <span className="text-brand-600 font-bold text-[11px] uppercase tracking-widest">SERVICE 0{index + 1}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-semibold text-slate-950 leading-tight tracking-tight uppercase">
                    {service.title}
                  </h2>
                </div>
                
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium opacity-90 text-justify">
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

      {/* Industry Impacts - Use Case Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-16 text-center">
          <div className="space-y-4">
             <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight uppercase">
               Cross-Sector <span className="text-brand-600 font-bold">Utility.</span>
             </h2>
             <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed italic opacity-80">
                Deploying synchronized machine intelligence across global enterprise and foundational AI research.
             </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
             {industryUseCases.map((item, i) => (
               <div key={i} className="group relative p-12 bg-white border border-slate-100 rounded-3xl hover:border-brand-600 hover:shadow-2xl hover:shadow-brand-600/10 transition-all duration-500">
                  <div className="absolute top-8 right-10 text-slate-100 font-bold text-6xl group-hover:text-brand-50 transition-colors pointer-events-none">0{i + 1}</div>
                  <div className="relative z-10 space-y-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 shadow-lg shadow-brand-600/5">
                        {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-950 tracking-tight leading-tight uppercase underline decoration-brand-200 decoration-2 underline-offset-8 group-hover:decoration-brand-600 transition-all">{item.title}</h3>
                    <p className="text-slate-500 text-base font-medium leading-relaxed group-hover:text-slate-600 transition-colors opacity-90">{item.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Dark Workflow Section */}
      <section className="py-24 md:py-32 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1] uppercase">
                   Sync <br /><span className="text-brand-400 font-bold italic">Integrity</span> <br /> Pipeline.
                </h2>
                <div className="h-2 w-24 bg-brand-500"></div>
                <p className="text-slate-300 text-xl font-medium leading-relaxed max-w-xl italic opacity-80">
                   "Multimodal synchronization is the highest level of data complexity. We ensure frame-level alignment and cross-sensor integrity through expert adjudication."
                </p>
                
                <div className="grid grid-cols-2 gap-12 pt-8">
                    <div className="space-y-3">
                       <div className="text-5xl font-bold text-brand-400 font-mono tracking-tighter">0-Lag</div>
                       <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Temporal Sync</div>
                    </div>
                    <div className="space-y-3">
                       <div className="text-5xl font-bold text-brand-400 font-mono tracking-tighter">100%</div>
                       <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Sensor Calibration</div>
                    </div>
                </div>
             </div>
             
             <div className="grid grid-cols-1 gap-4">
                {[
                   { step: "01", title: "Stream Calibration", label: "Multi-Source Alignment" },
                   { step: "02", title: "Fused Annotation", label: "Simultaneous Tagging" },
                   { step: "03", title: "Cross-Audit", label: "Relational Accuracy" },
                   { step: "04", title: "Unified Export", label: "Model-Ready Metadata" }
                ].map((item, i) => (
                   <div key={i} className="flex justify-between items-center p-8 bg-slate-900 border border-slate-800 rounded-3xl group hover:border-brand-600 transition-all">
                      <div className="space-y-1">
                         <div className="text-brand-400 font-mono text-xs font-bold uppercase tracking-widest opacity-60">Phase 0{i+1}</div>
                         <div className="text-white font-bold text-xl tracking-tight uppercase">{item.title}</div>
                      </div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest group-hover:text-brand-400 transition-colors">
                         {item.label}
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
           <h2 className="text-4xl md:text-7xl font-semibold text-slate-900 leading-[1.1] tracking-tight uppercase">
             Ready to Build <br /> <span className="text-brand-600 italic font-bold">Synchronized</span> Systems.
           </h2>
           <div className="pt-8">
             <Link to="/contact" className="inline-flex items-center gap-4 bg-slate-900 text-white px-12 py-6 text-xl font-bold hover:bg-brand-600 transition-all rounded-full shadow-2xl shadow-slate-900/20 active:scale-95">
               Start A Project <ArrowRight size={24} />
             </Link>
           </div>
        </div>
      </section>

    </div>
  );
};

export default MultimodalAnnotation;

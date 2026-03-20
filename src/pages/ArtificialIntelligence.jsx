import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, BrainCircuit, Cpu, Zap, Microscope, Cog, Search, Activity, Target, Layers, Box, FileText, Database, ShieldCheck, ClipboardCheck, BarChart3, Clock, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArtificialIntelligence = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const supportCategories = [
    {
      title: "Computer Vision Annotation",
      description: "High-precision image and video labeling including bounding boxes, polygons, keypoints, and segmentation. Supporting autonomous systems, retail analytics, and healthcare imaging.",
      features: [
        "Bounding Boxes & Polygons",
        "Semantic & Instance Segmentation",
        "Object Detection & Tracking"
      ],
      icon: <Search />,
      image: "/ai_ml/computer-vision.png"
    },
    {
      title: "NLP Annotation",
      description: "Text annotation services including NER, intent classification, and sentiment analysis for virtual assistants and large language models (LLMs).",
      features: [
        "Named Entity Recognition (NER)",
        "Intent & Sentiment Analysis",
        "Text Summarization Data"
      ],
      icon: <BrainCircuit />,
      image: "/ai_ml/nlp-annotation.png"
    },
    {
      title: "Audio & Speech Annotation",
      description: "Structuring audio datasets for speech-to-text, speaker diarization, and emotion detection. Powering voice assistants and call analytics.",
      features: [
        "Speech-to-Text Transcription",
        "Speaker Diarization",
        "Accent & Language Class"
      ],
      icon: <Cpu />,
      image: "/ai_ml/audio-speech.png"
    },
    {
      title: "Multimodal & Generative AI",
      description: "Preparing datasets that combine text, image, audio, and video for advanced multimodal models, including prompt-response alignment and content filtering.",
      features: [
        "Prompt-Response Alignment",
        "Multi-Modal Synchronization",
        "Content Filter Validation"
      ],
      icon: <Zap />,
      image: "/ai_ml/generative-ai.png"
    },
    {
      title: "Model Quality Improvement",
      description: "Our workflows support data validation, model output review, and continuous refinement to ensure your models reach production-grade accuracy.",
      features: [
        "Data Validation & QA",
        "Model Output Review",
        "Edge Case Identification",
        "Continuous Dataset Refinement"
      ],
      icon: <Microscope />,
      image: "/service-audit.png"
    }
  ];

  const labelingTypes = [
    "Bounding Box Annotation",
    "Polygon Annotation",
    "Keypoint Annotation",
    "Semantic Annotation",
    "Entity Recognition",
    "Emotion & Sentiment Labeling",
    "Trajectory Annotation",
    "Behavior Labeling",
    "Multimodal Annotation"
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900">
      
      {/* 1. Hero Section - Bold Case Study Style */}
      <section className="relative pt-32 md:pt-48 pb-20 overflow-hidden bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-slate-600 text-[11px] font-bold uppercase tracking-[0.2em] mb-8">
            <Link to="/" className="hover:text-brand-600 transition-colors">Home</Link>
            <ChevronRight size={10} strokeWidth={3} />
            <span>Industries</span>
            <ChevronRight size={10} strokeWidth={3} />
            <span className="text-brand-600 font-bold uppercase">AI & Machine Learning</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-600 text-[13px] font-semibold mb-8 border border-brand-100/50 uppercase tracking-widest">
            <Sparkles size={14} className="animate-pulse" />
            Foundational Data for AI
          </div>

          <h1 className="text-4xl md:text-7xl font-semibold text-slate-900 leading-[1.05] tracking-tight mb-8">
            Advanced <span className="text-brand-600 italic">Intelligence</span> <br className="hidden md:block" />
            Infrastructure for AI/ML.
          </h1>
          
          <p className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto mb-12">
            Providing the ground-truth data required for the world's most sophisticated models. From Computer Vision to Generative AI, we provide precision at scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/contact">
               <button className="flex items-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-full font-semibold text-base hover:bg-brand-600 transition-all hover:shadow-xl hover:shadow-brand-600/20 active:scale-95">
                 <ArrowRight size={18} /> Empower Your Model
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
                      <span className="text-brand-600 text-[11px] font-bold uppercase tracking-[0.3em]">Industry Leadership</span>
                   </div>
                   <h2 className="text-3xl md:text-5xl font-semibold text-slate-950 tracking-tight leading-tight uppercase">
                     Foundational <br /> <span className="text-brand-600 font-bold">In-Ecosystem.</span>
                   </h2>
                   <p className="text-slate-700 text-xl font-medium leading-relaxed italic">
                     "The AI industry depends on high-quality, structured data to build accurate systems. We provide the precise, scalable, and domain-specific foundation."
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
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-brand-50 text-brand-600 rounded-2xl">
                       {service.icon}
                    </div>
                    <span className="text-brand-600 font-bold text-[11px] uppercase tracking-widest">DOMAIN 0{index + 1}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-semibold text-slate-950 leading-tight tracking-tight uppercase">
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
                       {service.image ? (
                          <img 
                            src={service.image} 
                            alt={service.title} 
                            className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-110"
                          />
                       ) : (
                          <div className="aspect-[4/3] bg-slate-950 p-12 flex flex-col justify-center relative overflow-hidden transition-all duration-1000 group-hover:bg-slate-900">
                              <div className="text-brand-600 font-mono text-[10px] tracking-widest uppercase mb-4">Verification_Log_0{index+1}</div>
                              <div className="space-y-4 font-mono text-sm md:text-base">
                                  <div className="text-white"><span className="text-brand-400">"input"</span>: <span className="text-green-400">"{service.title.split(' ')[0]}_core"</span></div>
                                  <div className="text-white"><span className="text-brand-400">"accuracy"</span>: <span className="text-accent-cyan">0.9997</span></div>
                                  <div className="text-white"><span className="text-brand-400">"verification"</span>: <span className="text-accent-cyan">"HUMAN_IN_LOOP"</span></div>
                              </div>
                              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-brand-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                          </div>
                       )}
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
                   Ready to Build <br /><span className="text-brand-400 font-bold italic">Production-Grade</span> <br /> Intelligence.
                </h2>
                <div className="h-2 w-24 bg-brand-500 mx-auto"></div>
                <p className="text-slate-300 text-xl font-medium leading-relaxed max-w-3xl mx-auto italic opacity-80">
                   Join leading AI labs and technology enterprises who trust LabelzAI for the high-accuracy, human-verified data that powers next-gen innovation.
                </p>
            </div>
            
            <div className="pt-8">
                <Link to="/contact">
                   <button className="flex items-center gap-4 bg-white text-slate-950 px-12 py-6 text-xl font-bold hover:bg-brand-600 hover:text-white transition-all rounded-full shadow-2xl shadow-brand-600/20 active:scale-95 group mx-auto">
                      Contact Our AI Experts <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                   </button>
                </Link>
            </div>
        </div>
      </section>

    </div>
  );
};

export default ArtificialIntelligence;

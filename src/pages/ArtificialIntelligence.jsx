import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, BrainCircuit, Cpu, Zap, Microscope, Cog, Search } from 'lucide-react';
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
      icon: <Search size={24} />
    },
    {
      title: "NLP Annotation",
      description: "Text annotation services including NER, intent classification, and sentiment analysis for virtual assistants and large language models (LLMs).",
      features: [
        "Named Entity Recognition (NER)",
        "Intent & Sentiment Analysis",
        "Text Summarization Data"
      ],
      icon: <BrainCircuit size={24} />
    },
    {
      title: "Audio & Speech Annotation",
      description: "Structuring audio datasets for speech-to-text, speaker diarization, and emotion detection. Powering voice assistants and call analytics.",
      features: [
        "Speech-to-Text Transcription",
        "Speaker Diarization",
        "Accent & Language Class"
      ],
      icon: <Cpu size={24} />
    },
    {
      title: "Multimodal & Generative AI",
      description: "Preparing datasets that combine text, image, audio, and video for advanced multimodal models, including prompt-response alignment and content filtering.",
      features: [
        "Prompt-Response Alignment",
        "Multi-Modal Synchronization",
        "Content Filter Validation"
      ],
      icon: <Zap size={24} />
    },
    {
      title: "Human-in-the-Loop (HITL) & Model Improvement",
      description: "Our workflows support data validation, model output review, and continuous refinement to ensure your models reach production-grade accuracy.",
      features: [
        "Data Validation & QA",
        "Model Output Review",
        "Edge Case Identification",
        "Continuous Dataset Refinement"
      ],
      icon: <Microscope size={24} />
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
            <span className="text-brand-600">AI & Machine Learning</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100/50 text-brand-600 text-[11px] font-semibold uppercase tracking-widest mb-6">
            <Sparkles size={14} />
            Foundational Data for AI
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-4xl">
            Artificial Intelligence & Machine Learning Data Annotation Services – Industry We Serve in India
          </h1>
          
          <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed mb-10 max-w-4xl">
            We provide high-quality data annotation services for AI and Machine Learning companies, including image and video labeling, NLP annotation, audio transcription, multimodal data preparation, and human-in-the-loop validation. Our expertise supports computer vision, conversational AI, speech recognition, generative AI, and advanced machine learning applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <button className="flex items-center gap-3 bg-slate-900 text-white px-10 py-3.5 rounded-full font-semibold text-base hover:bg-brand-600 transition-all hover:shadow-xl hover:shadow-brand-600/20 active:scale-95">
                <ArrowRight size={18} /> Get Free Sample
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
                <span className="text-brand-600 text-[11px] font-semibold uppercase tracking-[0.3em]">Excellence in AI</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-950 tracking-tight mb-6">
                Supporting the AI/ML Ecosystem
              </h2>
              
              <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed mb-12">
                The Artificial Intelligence & Machine Learning (AI/ML) industry depends on high-quality, structured data to build accurate, reliable, and scalable models. From computer vision and natural language processing to speech recognition and generative AI, data annotation is the foundation that enables machines to learn from real-world information. As a data annotation startup in India, we support AI companies, research labs, and technology enterprises with precise, scalable, and domain-specific labeling services across multiple data formats.
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
           <p className="text-slate-500 font-medium max-w-2xl mx-auto">Scalable and domain-specific labeling services tailored for major AI/ML domains.</p>
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
                    <div className="text-brand-600 font-mono text-[10px] tracking-widest uppercase mb-4">AI_Training_Data_Sample</div>
                    <div className="space-y-3 font-mono text-xs md:text-sm">
                        <div className="text-white"><span className="text-brand-400">"input"</span>: <span className="text-green-400">"{service.title.split(' ')[0]}...raw"</span></div>
                        <div className="text-white"><span className="text-brand-400">"gt_output"</span>: {"{"}</div>
                        <div className="pl-4 text-white"><span className="text-brand-400">"status"</span>: <span className="text-accent-cyan">"Verified"</span></div>
                        <div className="pl-4 text-white"><span className="text-brand-400">"accuracy"</span>: <span className="text-accent-cyan">0.999</span></div>
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
            <h2 className="text-3xl md:text-5xl font-semibold mb-8 tracking-tight">Ready to scale your AI model?</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto font-medium">
               Join leading AI labs and technology labs who trust LabelzAI for high-accuracy, human-in-the-loop data labeling.
            </p>
            <Link to="/contact">
               <button className="bg-brand-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-brand-500 transition-all hover:shadow-2xl hover:shadow-brand-600/20 active:scale-95">
                  Get Started with LabelzAI
               </button>
            </Link>
         </div>
      </div>
    </div>
  );
};

export default ArtificialIntelligence;

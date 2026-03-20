import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, Mic, Headphones, Volume2, Activity, Layers, Music, MessageSquare, ShieldCheck, Zap, Globe, Lock, Search, ShoppingBag, Stethoscope, Trophy, BarChart3, Clock, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const AudioAnnotation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const annotationServices = [
    {
      title: "Speech-to-Text Transcription",
      description:
        "Speech-to-Text Transcription is the process of converting spoken language from audio recordings into accurate, structured text to train and evaluate speech recognition and language understanding models. For data annotation workflows, transcription goes beyond simple typing—it involves precise listening, speaker differentiation, timestamp alignment, and linguistic normalization to produce machine-ready datasets.",
      image: "/audioannotation/stt.png",
      features: [
        "Verbatim Transcripts",
        "Timestamp Alignment",
        "Linguistic Normalization"
      ],
      icon: <Mic />
    },
    {
      title: "Speaker Diarization",
      description:
        "Speaker diarization is the process of segmenting an audio recording and identifying “who spoke when.” In audio annotation workflows, this involves detecting speaker boundaries, grouping speech segments by unique voices, and assigning consistent speaker labels (e.g., Speaker 1, Speaker 2, Agent, Customer). The result is a time-aligned transcript or metadata layer that clearly separates each participant’s speech across the entire recording.",
      image: "/audioannotation/diarization.png",
      features: [
        "Speaker Boundary Detection",
        "Unique Voice Grouping",
        "Agent-Customer Separation"
      ],
      icon: <Headphones />
    },
    {
      title: "Intent & Entity Tagging",
      description:
        "Intent & Entity Tagging for audio annotation transforms spoken conversations into structured data by identifying user intent and extracting key information from speech. This process involves transcribing audio, classifying the speaker’s objective—such as requests, complaints, bookings, or inquiries—and labeling important entities like names, dates, locations, product details, account numbers, and transaction information.",
      image: "/audioannotation/intent.png",
      features: [
        "User Objective Classification",
        "Spoken Entity Extraction",
        "Context-Aware Voice Data"
      ],
      icon: <MessageSquare />
    },
    {
      title: "Emotion & Sentiment Analysis",
      description:
        "Emotion & Sentiment Annotation helps businesses train AI models to recognize human emotions and attitudes from voice data. This specialized audio annotation process involves labeling speech recordings based on emotional states such as happiness, anger, sadness, frustration, excitement, calmness, or neutrality, along with sentiment categories like positive, negative, or neutral. By analyzing vocal characteristics—tone, pitch, speech rate, intensity, and pauses—annotators capture the emotional context behind spoken interactions.",
      image: "/audioannotation/emotion.png",
      features: [
        "Vocal Tone Analysis",
        "Intensity & Pitch Tracking",
        "Emotional Context Mapping"
      ],
      icon: <Volume2 />
    },
    {
      title: "Acoustic Event Detection",
      description:
        "Acoustic Event Detection (AED) is a specialized audio annotation process that identifies, classifies, and precisely time-stamps distinct sound events within an audio recording. Instead of converting speech into text, AED focuses on recognizing real-world sounds such as sirens, glass breaks, footsteps, engine noise, animal calls, alarms, and industrial activity.",
      image: "/audioannotation/acoustic.png",
      features: [
        "Sound Event Classification",
        "Precise Timestamping",
        "Environmental Noise Tagging"
      ],
      icon: <Activity />
    },
    {
      title: "Language & Accent Classification",
      description:
        "Language & Accent Classification is a critical audio annotation service that involves identifying the spoken language and labeling regional accents or dialect variations within speech recordings. This process enables AI systems to accurately recognize linguistic diversity, pronunciation patterns, and regional speech characteristics for real-world voice applications. Expert annotators analyze phonetic elements such as intonation, stress, rhythm, and pronunciation shifts to help models perform reliably across diverse populations.",
      image: "/audioannotation/language.png",
      features: [
        "Primary Language Mapping",
        "Regional Accent Labeling",
        "Mixed-Language Indicators"
      ],
      icon: <Globe />
    },
    {
      title: "Audio Segmentation",
      description:
        "Audio Segmentation is a critical audio annotation process that divides continuous audio recordings into precise, time-aligned segments based on speech, silence, speaker changes, sound events, or acoustic patterns. This structured approach transforms raw audio into organized data that improves the accuracy and efficiency of AI and machine learning models.",
      image: "/audioannotation/segmentation.png",
      features: [
        "Silence & Noise Profiling",
        "Activity-Based Boundaries",
        "Time-Aligned Data Segments"
      ],
      icon: <Layers />
    }
  ];

  const useCases = [
    { title: "Conversational AI", desc: "Voice assistants and intelligent chat agents training datasets.", icon: <Mic className="text-brand-600" size={24} /> },
    { title: "Call Center Analytics", desc: "Customer experience and agent intelligence via sentiment data.", icon: <Headphones className="text-brand-600" size={24} /> },
    { title: "Emotion-Aware AI", desc: "Analyzing human sentiment and vocal tone for empathetic responses.", icon: <Volume2 className="text-brand-600" size={24} /> },
    { title: "Smart Home & IoT", desc: "Ambient sound and command recognition for connected devices.", icon: <Sparkles className="text-brand-600" size={24} /> },
    { title: "Autonomous Systems", desc: "Edge audio intelligence for safety and navigation cues.", icon: <Activity className="text-brand-600" size={24} /> },
    { title: "Media Monitoring", desc: "Content indexing and transcription for large media archives.", icon: <Layers className="text-brand-600" size={24} /> }
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
            <span className="text-brand-600 font-bold uppercase">Audio Annotation</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-600 text-[13px] font-semibold mb-8 border border-brand-100/50 uppercase tracking-widest">
            <Sparkles size={14} className="animate-pulse" />
            Acoustic Intelligence
          </div>

          <h1 className="text-4xl md:text-7xl font-semibold text-slate-900 leading-[1.05] tracking-tight mb-8">
            Intelligent <span className="text-brand-600 italic">Audio</span> <br className="hidden md:block" />
            Annotation Infrastructure.
          </h1>
          
          <p className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto mb-12">
            Translating sound into logic. We provide high-fidelity acoustic datasets required for machines to hear, understand, and communicate with clarity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <button className="flex items-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-full font-semibold text-base hover:bg-brand-600 transition-all hover:shadow-xl hover:shadow-brand-600/20 active:scale-95">
                <ArrowRight size={18} /> Scale Your Voice AI
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
                      <span className="text-brand-600 text-[11px] font-bold uppercase tracking-[0.3em]">Acoustic Mastery</span>
                   </div>
                   <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight uppercase">
                     Sound <br /> <span className="text-brand-600 font-bold">In-Depth.</span>
                   </h2>
                   <p className="text-slate-700 text-xl font-medium leading-relaxed italic">
                     "Audio data represents the most dynamic form of human expression. We capture everything from spoken intent to ambient acoustic events."
                   </p>
                </div>
                
                <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                   {[
                     { label: "SPEECH", val: "Linguistic Transcription" },
                     { label: "DIARIZATION", val: "Speaker Separation" },
                     { label: "EMOTION", val: "Vocal Tone Recognition" },
                     { label: "EVENTS", val: "Acoustic Tagging" }
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
                
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium opacity-90">
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

      {/* Use Cases - Case Study Style Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-16 text-center">
          <div className="space-y-4">
             <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight uppercase">
               Industry <span className="text-brand-600">Impact.</span>
             </h2>
             <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                Empowering sound-driven innovation across global enterprise and specialized infrastructure.
             </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {useCases.map((item, i) => (
               <div key={i} className="group relative p-12 bg-white border border-slate-100 rounded-3xl hover:border-brand-600 hover:shadow-2xl hover:shadow-brand-600/10 transition-all duration-500 text-left">
                  <div className="absolute top-8 right-10 text-slate-100 font-bold text-6xl group-hover:text-brand-50 transition-colors pointer-events-none">0{i + 1}</div>
                  <div className="relative z-10 space-y-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 shadow-lg shadow-brand-600/5">
                        {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-950 tracking-tight leading-tight uppercase">{item.title}</h3>
                    <p className="text-slate-500 text-base font-medium leading-relaxed group-hover:text-slate-600 transition-colors line-clamp-2 italic opacity-80">{item.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. Workflow Section - Case Study Style (Dark) */}
      <section className="py-24 md:py-32 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1] uppercase">
                   Acoustic <br /><span className="text-brand-400 font-bold italic">Validation</span> <br /> Pipeline.
                </h2>
                <div className="h-2 w-24 bg-brand-500"></div>
                <p className="text-slate-300 text-xl font-medium leading-relaxed max-w-xl italic opacity-80">
                  "Audio integrity relies on multi-layer verification. We deploy specialized linguistic and acoustic audits to ensure every millisecond is accounted for."
                </p>
                
                <div className="grid grid-cols-2 gap-12 pt-8">
                    <div className="space-y-3">
                       <div className="text-5xl font-bold text-brand-400 font-mono tracking-tighter">99%+</div>
                       <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Word Error Rate Cap</div>
                    </div>
                    <div className="space-y-3">
                       <div className="text-5xl font-bold text-brand-400 font-mono tracking-tighter">24h</div>
                       <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Expedited Delivery</div>
                    </div>
                </div>
             </div>
             
             <div className="grid grid-cols-1 gap-4">
                {[
                   { step: "01", title: "Audio Cleaning", label: "Noise Floor Calibration" },
                   { step: "02", title: "Initial Tagging", label: "Speaker & Event Detection" },
                   { step: "03", title: "Linguistic Audit", label: "Verbatim Consistency" },
                   { step: "04", title: "Final Validation", label: "Model-Ready Packaging" }
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
             Ready to Scale <br /> <span className="text-brand-600 italic">Conversational</span> Intelligence.
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

export default AudioAnnotation;

import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, Mic, Headphones, Volume2, Activity, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const AudioAnnotation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const annotationServices = [
    {
      title: "Speech-to-Text Transcription",
      image: "/audioannotation/stt.png",
      description:
        "Speech-to-Text Transcription is the process of converting spoken language from audio recordings into accurate, structured text to train and evaluate speech recognition and language understanding models. For data annotation workflows, transcription goes beyond simple typing—it involves precise listening, speaker differentiation, timestamp alignment, and linguistic normalization to produce machine-ready datasets.",
      features: [
        "Verbatim Transcripts",
        "Timestamp Alignment",
        "Linguistic Normalization"
      ]
    },
    {
      title: "Speaker Diarization for Audio Annotation",
      image: "/audioannotation/diarization.png",
      description:
        "Speaker diarization is the process of segmenting an audio recording and identifying “who spoke when.” In audio annotation workflows, this involves detecting speaker boundaries, grouping speech segments by unique voices, and assigning consistent speaker labels (e.g., Speaker 1, Speaker 2, Agent, Customer). The result is a time-aligned transcript or metadata layer that clearly separates each participant’s speech across the entire recording.",
      features: [
        "Speaker Boundary Detection",
        "Unique Voice Grouping",
        "Agent-Customer Separation"
      ]
    },
    {
      title: "Intent & Entity Tagging for Audio Annotation",
      image: "/audioannotation/intent.png",
      description:
        "Intent & Entity Tagging for audio annotation transforms spoken conversations into structured data by identifying user intent and extracting key information from speech. This process involves transcribing audio, classifying the speaker’s objective—such as requests, complaints, bookings, or inquiries—and labeling important entities like names, dates, locations, product details, account numbers, and transaction information.",
      features: [
        "User Objective Classification",
        "Spoken Entity Extraction",
        "Context-Aware Voice Data"
      ]
    },
    {
      title: "Emotion & Sentiment Annotation for Audio",
      image: "/audioannotation/emotion.png",
      description:
        "Emotion & Sentiment Annotation helps businesses train AI models to recognize human emotions and attitudes from voice data. This specialized audio annotation process involves labeling speech recordings based on emotional states such as happiness, anger, sadness, frustration, excitement, calmness, or neutrality, along with sentiment categories like positive, negative, or neutral. By analyzing vocal characteristics—tone, pitch, speech rate, intensity, and pauses—annotators capture the emotional context behind spoken interactions.",
      features: [
        "Vocal Tone Analysis",
        "Intensity & Pitch Tracking",
        "Emotional Context Mapping"
      ]
    },
    {
      title: "Acoustic Event Detection",
      image: "/audioannotation/acoustic.png",
      description:
        "Acoustic Event Detection (AED) is a specialized audio annotation process that identifies, classifies, and precisely time-stamps distinct sound events within an audio recording. Instead of converting speech into text, AED focuses on recognizing real-world sounds such as sirens, glass breaks, footsteps, engine noise, animal calls, alarms, and industrial activity.",
      features: [
        "Sound Event Classification",
        "Precise Timestamping",
        "Environmental Noise Tagging"
      ]
    },
    {
      title: "Language & Accent Classification",
      image: "/audioannotation/language.png",
      description:
        "Language & Accent Classification is a critical audio annotation service that involves identifying the spoken language and labeling regional accents or dialect variations within speech recordings. This process enables AI systems to accurately recognize linguistic diversity, pronunciation patterns, and regional speech characteristics for real-world voice applications. Expert annotators analyze phonetic elements such as intonation, stress, rhythm, and pronunciation shifts to help models perform reliably across diverse populations.",
      features: [
        "Primary Language Mapping",
        "Regional Accent Labeling",
        "Mixed-Language (Code-Switching) Indicators"
      ]
    },
    {
      title: "Audio Segmentation",
      image: "/audioannotation/segmentation.png",
      description:
        "Audio Segmentation is a critical audio annotation process that divides continuous audio recordings into precise, time-aligned segments based on speech, silence, speaker changes, sound events, or acoustic patterns. This structured approach transforms raw audio into organized data that improves the accuracy and efficiency of AI and machine learning models.",
      features: [
        "Silence & Noise Profiling",
        "Activity-Based Boundaries",
        "Time-Aligned Data Segments"
      ]
    }
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
            <span>Services</span>
            <ChevronRight size={10} strokeWidth={3} />
            <span className="text-brand-600">Audio Annotation</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100/50 text-brand-600 text-[11px] font-semibold uppercase tracking-widest mb-6">
            <Sparkles size={14} />
            Acoustic & Speech Intelligence
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-4xl">
            Audio Annotation Services for AI-Ready Sound Intelligence
          </h1>
          
          <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed mb-10 max-w-3xl">
            Audio Annotation is the process of converting raw audio into structured, labeled data that enables machines to understand speech, sound patterns, and human communication. For startups building voice-enabled products, conversational AI, or sound recognition systems, accurate audio labeling is essential for training reliable and high-performance models.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <button className="flex items-center gap-3 bg-slate-900 text-white px-10 py-3.5 rounded-full font-semibold text-base hover:bg-brand-600 transition-all hover:shadow-xl hover:shadow-brand-600/20 active:scale-95">
                <ArrowRight size={18} /> Start a Project
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Intro Section - Capabilities */}
      <div className="relative z-10 -mt-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-10 bg-brand-600"></div>
                <span className="text-brand-600 text-[11px] font-semibold uppercase tracking-[0.3em]">Capabilities</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-950 tracking-tight mb-8">
                Comprehensive Audio Labeling:
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {[
                  { label: "Speech-to-Text", val: "Verbatim transcripts with precise timestamps" },
                  { label: "Speaker Diarization", val: "Identification & segmentation of speakers" },
                  { label: "Intent & Entity", val: "Labeling commands, keywords, & phrases" },
                  { label: "Emotion & Sentiment", val: "Tone detection (happy, neutral, angry, etc.)" },
                  { label: "Acoustic Detection", val: "Tagging sirens, horns, alarms, & noise" },
                  { label: "Language & Accent", val: "Multilingual & regional speech labeling" },
                  { label: "Audio Segmentation", val: "Labeling speech, silence, overlap, & noise" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 ring-4 ring-brand-50 group-hover:scale-125 transition-transform"></div>
                    <div>
                      <span className="font-semibold text-slate-900 text-base md:text-lg">{item.label}:</span>
                      <span className="text-slate-600 text-base md:text-lg ml-2 font-medium">{item.val}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-20 bg-slate-50/50 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Use Cases for Audio Annotation</h2>
            <p className="text-slate-500 font-medium">Powering speech-driven innovation across various industries.</p>          
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Conversational AI", desc: "Voice assistants and intelligent chat agents training datasets.", icon: <Mic className="text-brand-600" size={24} /> },
              { title: "Call Center Analytics", desc: "Customer experience and agent intelligence via sentiment data.", icon: <Headphones className="text-brand-600" size={24} /> },
              { title: "Emotion-Aware AI", desc: "Analyzing human sentiment and vocal tone for empathetic responses.", icon: <Volume2 className="text-brand-600" size={24} /> },
              { title: "Smart Home & IoT", desc: "Ambient sound and command recognition for connected devices.", icon: <Sparkles className="text-brand-600" size={24} /> },
              { title: "Autonomous Systems", desc: "Edge audio intelligence for safety and navigation cues.", icon: <Activity className="text-brand-600" size={24} /> },
              { title: "Media Monitoring", desc: "Content indexing and transcription for large media archives.", icon: <Layers className="text-brand-600" size={24} /> }
            ].map((item, i) => (
              <div key={i} className="group relative p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:border-brand-100 hover:shadow-2xl hover:shadow-brand-600/5 transition-all duration-500">
                  <div className="absolute top-6 right-8 text-slate-100 font-bold text-5xl group-hover:text-brand-50 transition-colors pointer-events-none">0{i + 1}</div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                        {item.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-950 mb-4 tracking-tight leading-tight">{item.title}</h3>
                    <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed group-hover:text-slate-600 transition-colors">{item.desc}</p>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="mt-16 space-y-0">
        {annotationServices.map((service, index) => (
          <div
            key={index}
            className={`py-12 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50 border-y border-slate-100'}`}
          >
            <div className={`max-w-7xl mx-auto px-3 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}>
              <div className="flex-1 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-brand-200"></span>
                    <span className="text-brand-600 font-bold tracking-[0.2em] text-[10px] uppercase">Service 0{index + 1}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-slate-950 leading-tight tracking-tight">
                    {service.title}
                  </h2>
                </div>
                <p className="text-slate-900 text-sm md:text-base leading-relaxed font-semibold max-w-2xl">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 pt-2">
                  {service.features?.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3 group/feat">
                      <div className="w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 border border-brand-100">
                        <CheckCircle2 size={12} strokeWidth={3} />
                      </div>
                      <span className="text-slate-700 font-semibold text-xs tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full max-w-md">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-500/10 border border-slate-100 group">
                   <img 
                     src={service.image} 
                     alt={service.title} 
                     className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Workflow Section */}
      <div className="py-16 bg-slate-950 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-3 relative z-10 text-center">
          <div className="mb-10">
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-3">Audio Pipeline</h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto">Ensuring absolute clarity and precision in sound data.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Audio Cleaning", desc: "Removing noise and balancing gain." },
              { step: "02", title: "Initial Labelling", desc: "Speaker tagging and segment identification." },
              { step: "03", title: "Secondary Review", desc: "Cross-verification for transcription accuracy." },
              { step: "04", title: "Final Audit", desc: "Formatting for ASR model requirements." }
            ].map((s, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] text-left group hover:bg-white/10 transition-colors">
                <div className="text-brand-400 font-bold mb-8 text-sm tracking-widest">{s.step}</div>
                <h3 className="text-white text-xl font-semibold mb-4 leading-tight">{s.title}</h3>
                <p className="text-slate-200 text-sm leading-relaxed font-medium">{s.desc}</p>
                <div className="mt-4 h-1 w-0 bg-brand-600 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioAnnotation;

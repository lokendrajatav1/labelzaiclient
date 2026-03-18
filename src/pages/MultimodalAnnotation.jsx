import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, Merge, Link2, Share2, Timer, ScanFace, Activity } from 'lucide-react';
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
      features: [
        "Visual Question Answering (VQA)",
        "Image Caption Validation",
        "Document-to-Text Mapping"
      ],
      icon: <ScanFace size={24} />
    },
    {
      title: "Video + Audio Annotation",
      description:
        "Synchronizing action with sound. We handle event detection, action-sound synchronization, and speaker-to-scene alignment, allowing AI models to learn from multi-sensory temporal data.",
      features: [
        "Action-Sound Synchronization",
        "Event Detection",
        "Speaker Aligned Metadata"
      ],
      icon: <Activity size={24} />
    },
    {
      title: "LiDAR + Camera Fusion",
      description:
        "The gold standard for autonomous systems. We provide 3D cuboids, object tracking, and sensor-aligned labeling where LiDAR point clouds are perfectly mapped to 2D camera frames for robust depth verification.",
      features: [
        "Sensor-Aligned Labeling",
        "3D Cuboid Projection",
        "Depth Verification Data"
      ],
      icon: <Merge size={24} />
    },
    {
      title: "Speech + Text Alignment",
      description:
        "Mapping transcripts to spoken words with millisecond precision. We provide intent tagging, emotion labeling, and sentiment categorization across both the acoustic and textual representations of language.",
      features: [
        "Transcription Mapping",
        "Multi-Modal Intent Tagging",
        "Emotion-Text Correlation"
      ],
      icon: <Link2 size={24} />
    },
    {
      title: "Cross-Modal Relationship Tagging",
      description:
        "Linking events, objects, and interactions across multiple data sources. We identify how a sound in an audio track relates to an object in a video frame or a mention in a text document.",
      features: [
        "Inter-Modal Event Linking",
        "Object-to-Sound Mapping",
        "Semantic Interaction Data"
      ],
      icon: <Share2 size={24} />
    },
    {
      title: "Temporal and Spatial Synchronization",
      description:
        "Ensuring frame-level and time-based alignment across all modalities. This foundational service provides the synchronization required for complex real-world scene interpretation by AI models.",
      features: [
        "Frame-Level Alignment",
        "Zero-Lag Time Sync",
        "Spatial Consistency Checks"
      ],
      icon: <Timer size={24} />
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
            <span className="text-brand-600">Multimodal</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100/50 text-brand-600 text-[11px] font-semibold uppercase tracking-widest mb-6">
            <Sparkles size={14} />
            Integrated Intelligence
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-4xl">
            Multimodal Data Annotation Services
          </h1>
          
          <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed mb-10 max-w-3xl">
            Enable AI systems to learn from multiple data types simultaneously by accurately labeling and synchronizing images, video, audio, text, LiDAR, and sensor data. By combining different modalities into a unified training dataset, multimodal annotation helps machine learning models understand context, relationships, and real-world scenarios with greater precision and intelligence.
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

      {/* Intro Section - What is Multi-Modal? */}
      <div className="relative z-10 -mt-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-10 bg-brand-600"></div>
                <span className="text-brand-600 text-[11px] font-semibold uppercase tracking-[0.3em]">Concept</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-950 tracking-tight mb-6">
                What Is Multimodal Data Annotation?
              </h2>
              
              <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed mb-12">
                Multimodal data annotation is the process of tagging, linking, and synchronizing different data types so AI models can interpret relationships between visual, auditory, textual, and spatial signals. This approach goes beyond traditional single-format labeling to support next-generation AI applications such as autonomous driving, conversational AI, healthcare diagnostics, robotics, and generative AI.
              </p>
              
              <div className="h-[1px] w-full bg-slate-100 mb-12"></div>
              
              <h3 className="text-2xl font-semibold text-slate-900 mb-8">Capabilities:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {[
                  { label: "Image + Text", val: "Image caption & VQA understanding" },
                  { label: "Video + Audio", val: "Action-sound synchronization & alignment" },
                  { label: "LiDAR + Camera", val: "3D cuboids & sensor fusion fusion" },
                  { label: "Speech + Text", val: "Transcription mapping & intent labeling" },
                  { label: "Relationship Tagging", val: "Cross-modal interaction linking" },
                  { label: "Synchronization", val: "Temporal and spatial alignment" }
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

      {/* Industry Use Cases - Specialized Grid */}
      <div className="py-24 bg-brand-50/30 mt-16">
        <div className="max-w-7xl mx-auto px-6">
           <div className="max-w-2xl mb-16">
              <h2 className="text-3xl md:text-5xl font-semibold text-slate-950 tracking-tight mb-4">Industry Use Cases</h2>
              <p className="text-slate-500 font-medium text-lg">Powering the next generation of multi-modal AI across sectors.</p>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                  { title: "Autonomous vehicles & ADAS", desc: "LiDAR and camera synchronization for high-accuracy perception." },
                  { title: "Healthcare AI & medical imaging", desc: "Cross-modal training for complex diagnostic models." },
                  { title: "Retail & e-commerce intelligence", desc: "Visual-textual mapping for advanced product search." },
                  { title: "Smart surveillance & security", desc: "Event detection across multiple sensor modalities." },
                  { title: "Robotics & industrial automation", desc: "Spatial-temporal alignment for robotic precision." },
                  { title: "Multimodal LLMs & generative AI", desc: "Foundation models learning from combined data sources." }
              ].map((item, i) => (
                  <div key={i} className="group relative p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:border-brand-100 hover:shadow-2xl hover:shadow-brand-600/5 transition-all duration-500">
                      <div className="absolute top-6 right-8 text-slate-100 font-bold text-5xl group-hover:text-brand-50 transition-colors pointer-events-none">0{i + 1}</div>
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                            <Sparkles size={22} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-950 mb-4 tracking-tight leading-tight">{item.title}</h3>
                        <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed mb-6 group-hover:text-slate-600 transition-colors">{item.desc}</p>
                        <div className="flex items-center gap-2 text-brand-600 font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                            Explore Use Case <ArrowRight size={14} />
                        </div>
                      </div>
                  </div>
              ))}
           </div>
        </div>
      </div>

      {/* Services List - Premium Alternating Layout */}
      <div className="mt-16 space-y-0">
        {annotationServices.map((service, index) => (
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
                  <h2 className="text-2xl md:text-4xl font-semibold text-slate-950 leading-tight tracking-tight">
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
                 <div className="relative group">
                    <div className="aspect-[4/3] bg-slate-100 rounded-[2.5rem] flex items-center justify-center relative overflow-hidden shadow-sm border border-slate-100">
                       <Merge size={64} className="text-slate-300 group-hover:text-brand-200 transition-colors duration-700 group-hover:scale-110 transition-transform" />
                       <div className="absolute inset-x-8 bottom-8 p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          <div className="text-brand-600 font-bold text-[10px] tracking-widest uppercase mb-1">Synchronization_Logic</div>
                          <div className="text-slate-950 font-semibold text-xs">Cross-Modal Context Verification Active</div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultimodalAnnotation;

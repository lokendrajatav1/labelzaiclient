import React, { useEffect } from 'react';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Sparkles, Database, Layers, Target, Box, FileText, ClipboardCheck, BarChart3, ShieldCheck, Zap, Merge, Link2, Video, Mic, Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MultimodalAnnotation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900">
      
      {/* 1. Hero Section */}
      <section className="relative mt-[60px] md:mt-[64px] pt-12 md:pt-20 pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-black">
          <img 
            src="/Service/Multimodal-Annotation.png" 
            alt="Multimodal Annotation Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 text-[12px] font-medium mb-8 tracking-wider">
             Services We Provide — Data Annotation
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.2] tracking-tight mb-6 max-w-4xl">
             Multimodal <br className="hidden md:block" />
             <span className="text-white">Data Annotation Services</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl font-normal leading-relaxed max-w-2xl">
             Enable AI systems to learn from multiple data types simultaneously with synchronized datasets.
          </p>
          <div className="mt-10">
            <Link to="/contact">
                <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold text-base hover:bg-brand-600 hover:text-white transition-all active:scale-95 shadow-xl shadow-black/20">
                    Scale Your Project <ArrowRight size={18} />
                </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Text Block */}
      <section className="pt-16 md:pt-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-6 text-gray-700 text-base md:text-lg font-normal leading-snug">
             <div className="space-y-2 text-left mb-6">
                 <h2 className="text-xl md:text-2xl font-medium text-gray-900">
                    What Is Multimodal Data Annotation?
                 </h2>
                 <div className="h-1 w-12 bg-brand-600"></div>
             </div>
             <p>
                Multimodal Data Annotation enables AI systems to learn from multiple data types simultaneously by accurately labeling and synchronizing images, video, audio, text, LiDAR, and sensor data. By combining different modalities into a unified training dataset, multimodal annotation helps machine learning models understand context, relationships, and real-world scenarios with greater precision and intelligence.
             </p>
             <p>
                Multimodal data annotation is the process of tagging, linking, and synchronizing different data types so AI models can interpret relationships between visual, auditory, textual, and spatial signals. This approach goes beyond traditional single-format labeling to support next-generation AI applications such as autonomous driving, conversational AI, healthcare diagnostics, robotics, and generative AI.
             </p>
        </div>
      </section>

      {/* Capabilities & Use Cases Grid */}
      <section className="py-24 bg-slate-50 border-white">
         <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
               
               {/* Our Multimodal Annotation Capabilities */}
               <div className="space-y-6">
                  <div className="space-y-2 text-left mb-6">
                      <h2 className="text-xl md:text-2xl font-medium text-gray-900">
                         Our Multimodal Annotation Capabilities
                      </h2>
                      <div className="h-1 w-12 bg-brand-600"></div>
                  </div>
                  <div className="space-y-4 pt-2">
                     {[
                       "Image + Text Annotation – Image caption validation, visual question answering (VQA), and document understanding",
                       "Video + Audio Annotation – Event detection, action-sound synchronization, speaker and scene alignment",
                       "LiDAR + Camera Fusion – 3D cuboids, object tracking, and sensor-aligned labeling for autonomous systems",
                       "Speech + Text Alignment – Transcription mapping, intent tagging, emotion and sentiment labeling",
                       "Cross-Modal Relationship Tagging – Linking events, objects, and interactions across multiple data sources",
                       "Temporal and Spatial Synchronization – Frame-level and time-based alignment across modalities"
                     ].map((item, index) => (
                       <div key={index} className="flex items-start gap-4">
                         <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                         <span className="text-gray-700 text-base leading-snug font-normal">{item}</span>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Industry Use Cases */}
               <div className="space-y-6">
                  <div className="space-y-2 text-left mb-6">
                      <h2 className="text-xl md:text-2xl font-medium text-gray-900">
                         Industry Use Cases
                      </h2>
                      <div className="h-1 w-12 bg-brand-600"></div>
                  </div>
                  <div className="space-y-4 pt-2">
                     {[
                       "Autonomous vehicles & ADAS",
                       "Healthcare AI & medical imaging",
                       "Retail & e-commerce intelligence",
                       "Smart surveillance & security",
                       "Robotics & industrial automation",
                       "Multimodal LLMs & generative AI"
                     ].map((item, index) => (
                       <div key={index} className="flex items-start gap-4">
                         <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                         <span className="text-gray-700 text-base leading-snug font-normal">{item}</span>
                       </div>
                     ))}
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* 4. Bottom CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
               Ready to Build Synchronized Systems?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
               Partner with us for high-precision, reliable, and scalable multimodal annotation tailored to your domain.
            </p>
            <div className="pt-6">
                <Link to="/contact">
                   <button className="inline-flex items-center gap-3 bg-brand-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-brand-500 transition-all">
                      Contact Our Team <ArrowRight size={20} />
                   </button>
                </Link>
            </div>
        </div>
      </section>

    </div>
  );
};

export default MultimodalAnnotation;

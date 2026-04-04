import React, { useEffect } from 'react';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Sparkles, Database, Layers, Target, Box, FileText, ClipboardCheck, BarChart3, ShieldCheck, Zap, MessageSquare, Globe, Search, MessageCircle, ShieldAlert, Key, Target as TargetIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

const NaturalLanguageProcessing = () => {
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
            src="/Service/Text-Annotation.png" 
            alt="NLP Annotation Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 text-[12px] font-medium mb-8 tracking-wider">
             Services We Provide — Data Annotation
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.2] tracking-tight mb-6 max-w-4xl">
             Natural Language Processing <br className="hidden md:block" />
             <span className="text-white">(NLP) Annotation Services</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl font-normal leading-relaxed max-w-2xl">
             Power your AI with high-quality NLP annotation designed to transform unstructured text and speech into structured intelligence.
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
                    NLP Data Excellence
                 </h2>
                 <div className="h-1 w-12 bg-brand-600"></div>
             </div>
             <p>
                Power your AI with high-quality NLP annotation services designed to transform unstructured text and speech into structured, training-ready datasets. Our expert-driven workflows help businesses build intelligent systems that understand human language, context, and intent with precision.
             </p>
             <p>
                At the core of modern AI, Natural Language Processing (NLP) enables applications such as chatbots, virtual assistants, search engines, sentiment analysis, document automation, and large language models (LLMs). Our scalable annotation solutions ensure accuracy, consistency, and domain relevance across diverse industries.
             </p>
        </div>
      </section>

      {/* Grid Content Section */}
      <section className="py-24 bg-slate-50 border-white">
         <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
               
               {/* Our NLP Annotation Capabilities */}
               <div className="space-y-6">
                  <div className="space-y-2 text-left mb-6">
                      <h2 className="text-xl md:text-2xl font-medium text-gray-900">
                         Our NLP Annotation Capabilities
                      </h2>
                      <div className="h-1 w-12 bg-brand-600"></div>
                  </div>
                  <div className="space-y-4 pt-2">
                     {[
                       "Text Classification & Categorization – Topic, intent, priority, and domain labeling",
                       "Named Entity Recognition (NER) – Identification of people, locations, organizations, dates, products, medical and financial entities",
                       "Sentiment & Emotion Analysis – Polarity detection and fine-grained emotional tagging",
                       "Intent Detection – Training conversational AI and virtual assistants",
                       "Part-of-Speech (POS) & Syntax Annotation – Linguistic structure for advanced language models",
                       "Entity Relationship Extraction – Semantic connections between entities",
                       "Conversation & Dialogue Annotation – Context tracking, speaker roles, and response evaluation",
                       "Content Moderation & Toxicity Detection – Harmful, offensive, or policy-violating language labeling",
                       "Speech-to-Text Transcription – Timestamped transcription with speaker diarization and multilingual support",
                       "Keyphrase & Summary Tagging – Highlighting critical information for search and knowledge systems"
                     ].map((item, index) => (
                       <div key={index} className="flex items-start gap-4">
                         <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                         <span className="text-gray-700 text-base leading-snug font-normal">{item}</span>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Right Column: Why Choose Us & Use Cases */}
               <div className="space-y-16">
                  {/* Why Choose Our NLP Annotation Services? */}
                  <div className="space-y-6">
                     <div className="space-y-2 text-left mb-6">
                         <h2 className="text-xl md:text-2xl font-medium text-gray-900">
                            Why Choose Our NLP Services?
                         </h2>
                         <div className="h-1 w-12 bg-brand-600"></div>
                     </div>
                     <div className="space-y-4 pt-2">
                        {[
                          "Expert linguists and domain-trained annotators",
                          "Multilingual and industry-specific datasets",
                          "AI-assisted quality control with multi-level validation",
                          "Scalable workflows for large datasets and LLM training",
                          "Secure and confidential data handling"
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                            <span className="text-gray-700 text-base leading-snug font-normal">{item}</span>
                          </div>
                        ))}
                     </div>
                  </div>

                  {/* Use Cases */}
                  <div className="space-y-6">
                     <div className="space-y-2 text-left mb-6">
                         <h2 className="text-xl md:text-2xl font-medium text-gray-900">
                            Use Cases
                         </h2>
                         <div className="h-1 w-12 bg-brand-600"></div>
                     </div>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        {[
                          "Customer support automation",
                          "Conversational AI",
                          "Voice assistants",
                          "Document Intelligence",
                          "Recommendation systems",
                          "Sentiment monitoring",
                          "Compliance screening",
                          "Generative AI Model Training"
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
         </div>
      </section>

      {/* 4. Bottom CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
               Ready to Build Advanced Intelligence?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
               Partner with our linguistic experts for high-precision NLP datasets tailored to your domain.
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

export default NaturalLanguageProcessing;
